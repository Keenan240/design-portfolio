"use client";

import React, {
  useLayoutEffect,
  useRef,
  useCallback,
  type ReactNode,
} from "react";
import Lenis from "@studio-freight/lenis";

export interface ScrollStackItemProps {
  children: ReactNode;
  itemClassName?: string;
  /** Explicit stack order (0 = first card when scrolling, e.g. Syllabus Scanner). Ensures correct order. */
  stackIndex?: number;
}

export const ScrollStackItem = ({
  children,
  itemClassName = "",
  stackIndex,
}: ScrollStackItemProps) => (
  <div
    className={`scroll-stack-card relative w-full my-8 box-border origin-top will-change-transform ${itemClassName}`.trim()}
    style={{
      backfaceVisibility: "hidden",
      transformStyle: "preserve-3d",
    }}
    data-stack-index={stackIndex}
  >
    {children}
  </div>
);

interface ScrollStackProps {
  children: ReactNode;
  className?: string;
  itemDistance?: number;
  itemScale?: number;
  itemStackDistance?: number;
  stackPosition?: number | string;
  scaleEndPosition?: number | string;
  baseScale?: number;
  scaleDuration?: number;
  rotationAmount?: number;
  blurAmount?: number;
  useWindowScroll?: boolean;
  onStackComplete?: () => void;
}

interface TransformState {
  translateY: number;
  scale: number;
  rotation: number;
  blur: number;
}

const ScrollStack = ({
  children,
  className = "",
  itemDistance = 100,
  itemScale = 0.03,
  itemStackDistance = 30,
  stackPosition = "20%",
  scaleEndPosition = "10%",
  baseScale = 0.85,
  scaleDuration = 0.5,
  rotationAmount = 0,
  blurAmount = 0,
  useWindowScroll = true,
  onStackComplete,
}: ScrollStackProps) => {
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const stackCompletedRef = useRef(false);
  const animationFrameRef = useRef<number | null>(null);
  const lenisRef = useRef<Lenis | null>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const cardTopsRef = useRef<number[]>([]);
  const endElementTopRef = useRef<number>(0);
  const lastTransformsRef = useRef<Map<number, TransformState>>(new Map());
  const isUpdatingRef = useRef(false);
  const rafScheduledRef = useRef(false);

  const calculateProgress = useCallback((scrollTop: number, start: number, end: number) => {
    if (scrollTop < start) return 0;
    if (scrollTop > end) return 1;
    return (scrollTop - start) / (end - start);
  }, []);

  const parsePercentage = useCallback(
    (value: number | string, containerHeight: number) => {
      if (typeof value === "string" && value.includes("%")) {
        return (parseFloat(value) / 100) * containerHeight;
      }
      return typeof value === "string" ? parseFloat(value) : value;
    },
    []
  );

  const getScrollData = useCallback(() => {
    if (useWindowScroll) {
      return {
        scrollTop: window.scrollY,
        containerHeight: window.innerHeight,
        scrollContainer: document.documentElement,
      };
    } else {
      const scroller = scrollerRef.current!;
      return {
        scrollTop: scroller.scrollTop,
        containerHeight: scroller.clientHeight,
        scrollContainer: scroller,
      };
    }
  }, [useWindowScroll]);

  const getElementOffset = useCallback(
    (element: HTMLElement) => {
      if (useWindowScroll) {
        const rect = element.getBoundingClientRect();
        return rect.top + window.scrollY;
      }
      return element.offsetTop;
    },
    [useWindowScroll]
  );

  const updateCardTransforms = useCallback(() => {
    if (!cardsRef.current.length || isUpdatingRef.current) return;

    isUpdatingRef.current = true;

    const { scrollTop, containerHeight } = getScrollData();
    const stackPositionPx = parsePercentage(stackPosition, containerHeight);
    const scaleEndPositionPx = parsePercentage(scaleEndPosition, containerHeight);

    const cachedEndTop = endElementTopRef.current;
    const pinEnd = cachedEndTop;

    cardsRef.current.forEach((card, i) => {
      if (!card) return;

      const cardTop =
        i < cardTopsRef.current.length
          ? cardTopsRef.current[i]
          : getElementOffset(card);
      const triggerStart = cardTop - stackPositionPx - itemStackDistance * i;
      const triggerEnd = cardTop - scaleEndPositionPx;
      const pinStart = cardTop - stackPositionPx - itemStackDistance * i;

      const scaleProgress = calculateProgress(scrollTop, triggerStart, triggerEnd);
      const targetScale = baseScale + i * itemScale;
      const scale = 1 - scaleProgress * (1 - targetScale);
      const rotation = rotationAmount ? i * rotationAmount * scaleProgress : 0;

      let blur = 0;
      if (blurAmount) {
        let topCardIndex = 0;
        for (let j = 0; j < cardsRef.current.length; j += 1) {
          const jCardTop =
            j < cardTopsRef.current.length
              ? cardTopsRef.current[j]
              : getElementOffset(cardsRef.current[j]);
          const jTriggerStart = jCardTop - stackPositionPx - itemStackDistance * j;
          if (scrollTop >= jTriggerStart) {
            topCardIndex = j;
          }
        }

        if (i < topCardIndex) {
          const depthInStack = topCardIndex - i;
          blur = Math.max(0, depthInStack * blurAmount);
        }
      }

      let translateY = 0;
      const isPinned = scrollTop >= pinStart && scrollTop <= pinEnd;

      if (isPinned) {
        translateY = scrollTop - cardTop + stackPositionPx + itemStackDistance * i;
      } else if (scrollTop > pinEnd) {
        translateY = pinEnd - cardTop + stackPositionPx + itemStackDistance * i;
      }

      const newTransform: TransformState = {
        translateY: Math.round(translateY),
        scale: Math.round(scale * 1000) / 1000,
        rotation: Math.round(rotation * 100) / 100,
        blur: Math.round(blur * 100) / 100,
      };

      const lastTransform = lastTransformsRef.current.get(i);
      const hasChanged =
        !lastTransform ||
        Math.abs(lastTransform.translateY - newTransform.translateY) > 0.5 ||
        Math.abs(lastTransform.scale - newTransform.scale) > 0.001 ||
        Math.abs(lastTransform.rotation - newTransform.rotation) > 0.1 ||
        Math.abs(lastTransform.blur - newTransform.blur) > 0.1;

      if (hasChanged) {
        const transform = `translate3d(0, ${newTransform.translateY}px, 0) scale(${newTransform.scale}) rotate(${newTransform.rotation}deg)`;
        const filter = newTransform.blur > 0 ? `blur(${newTransform.blur}px)` : "";

        card.style.transform = transform;
        card.style.filter = filter;

        lastTransformsRef.current.set(i, newTransform);
      }

      if (i === cardsRef.current.length - 1) {
        const isInView = scrollTop >= pinStart && scrollTop <= pinEnd;
        if (isInView && !stackCompletedRef.current) {
          stackCompletedRef.current = true;
          onStackComplete?.();
        } else if (!isInView && stackCompletedRef.current) {
          stackCompletedRef.current = false;
        }
      }
    });

    isUpdatingRef.current = false;
  }, [
    baseScale,
    blurAmount,
    calculateProgress,
    getElementOffset,
    getScrollData,
    itemScale,
    itemStackDistance,
    onStackComplete,
    parsePercentage,
    rotationAmount,
    scaleEndPosition,
    stackPosition,
    useWindowScroll,
  ]);

  const handleScroll = useCallback(() => {
    if (rafScheduledRef.current) return;
    rafScheduledRef.current = true;
    requestAnimationFrame(() => {
      rafScheduledRef.current = false;
      updateCardTransforms();
    });
  }, [updateCardTransforms]);

  const setupLenis = useCallback(() => {
    if (useWindowScroll) {
      const lenis = new Lenis({
        duration: scaleDuration,
        easing: (t: number) => Math.min(1, 1.001 - 2 ** (-10 * t)),
        smoothWheel: true,
        touchMultiplier: 2,
        infinite: false,
        wheelMultiplier: 1,
        lerp: 0.18,
        syncTouch: true,
        syncTouchLerp: 0.12,
      });

      lenis.on("scroll", handleScroll);

      const raf = (time: number) => {
        lenis.raf(time);
        animationFrameRef.current = requestAnimationFrame(raf);
      };
      animationFrameRef.current = requestAnimationFrame(raf);

      lenisRef.current = lenis;
      return lenis;
    }

    const scroller = scrollerRef.current;
    if (!scroller) return null;

    const lenis = new Lenis({
      wrapper: scroller,
      content: scroller.querySelector(".scroll-stack-inner") as HTMLElement,
      duration: scaleDuration,
      easing: (t: number) => Math.min(1, 1.001 - 2 ** (-10 * t)),
      smoothWheel: true,
      touchMultiplier: 2,
      infinite: false,
      wheelMultiplier: 1,
      lerp: 0.18,
      syncTouch: true,
      syncTouchLerp: 0.12,
    });

    lenis.on("scroll", handleScroll);

    const raf = (time: number) => {
      lenis.raf(time);
      animationFrameRef.current = requestAnimationFrame(raf);
    };
    animationFrameRef.current = requestAnimationFrame(raf);

    lenisRef.current = lenis;
    return lenis;
  }, [handleScroll, scaleDuration, useWindowScroll]);

  useLayoutEffect(() => {
    const container = scrollerRef.current;
    if (!container) return;

    const endEl = container.querySelector<HTMLElement>(".scroll-stack-end");
    const allCards = Array.from(
      container.querySelectorAll<HTMLDivElement>(".scroll-stack-card") ?? []
    );
    const beforeEnd = endEl
      ? allCards.filter(
          (el) =>
            (el.compareDocumentPosition(endEl) & Node.DOCUMENT_POSITION_FOLLOWING) !== 0
        )
      : allCards;

    let cards: HTMLDivElement[];
    const byIndex = [0, 1, 2, 3]
      .map((idx) =>
        container.querySelector<HTMLDivElement>(`[data-stack-index="${idx}"]`)
      )
      .filter(
        (el): el is HTMLDivElement =>
          el !== null && (!endEl || beforeEnd.includes(el))
      );
    if (byIndex.length === 4) {
      cards = byIndex;
    } else {
      cards = [...beforeEnd].sort((a, b) => {
        const i = parseInt(a.getAttribute("data-stack-index") ?? "", 10);
        const j = parseInt(b.getAttribute("data-stack-index") ?? "", 10);
        if (!Number.isNaN(i) && !Number.isNaN(j)) return i - j;
        const topA = useWindowScroll
          ? a.getBoundingClientRect().top + window.scrollY
          : a.offsetTop;
        const topB = useWindowScroll
          ? b.getBoundingClientRect().top + window.scrollY
          : b.offsetTop;
        return topA - topB;
      });
    }
    cardsRef.current = cards.slice(0, 4);
    const transformsCache = lastTransformsRef.current;

    const updatePositionCache = () => {
      const currentCards = cardsRef.current;
      const cardTops: number[] = [];
      for (let i = 0; i < currentCards.length; i += 1) {
        const card = currentCards[i];
        if (useWindowScroll) {
          const rect = card.getBoundingClientRect();
          cardTops.push(rect.top + window.scrollY);
        } else {
          cardTops.push(card.offsetTop);
        }
      }
      cardTopsRef.current = cardTops;
      const endEl = container.querySelector<HTMLElement>(".scroll-stack-end");
      if (endEl) {
        endElementTopRef.current = useWindowScroll
          ? endEl.getBoundingClientRect().top + window.scrollY
          : endEl.offsetTop;
      } else {
        endElementTopRef.current = 0;
      }
    };

    updatePositionCache();

    cardsRef.current.forEach((card, i) => {
      if (i < cardsRef.current.length - 1) {
        card.style.marginBottom = `${itemDistance}px`;
      }
      card.style.willChange = "transform, filter";
      card.style.transformOrigin = "top center";
      card.style.backfaceVisibility = "hidden";
      card.style.transform = "translateZ(0)";
      (card.style as any).webkitTransform = "translateZ(0)";
      (card.style as any).perspective = "1000px";
      (card.style as any).webkitPerspective = "1000px";
    });

    if (useWindowScroll) {
      const handleScrollNative = () => updateCardTransforms();
      const onResizeNative = () => {
        updatePositionCache();
        updateCardTransforms();
      };
      window.addEventListener("scroll", handleScrollNative, { passive: true });
      window.addEventListener("resize", onResizeNative);
      window.addEventListener("orientationchange", onResizeNative);
      updateCardTransforms();
      return () => {
        window.removeEventListener("scroll", handleScrollNative);
        window.removeEventListener("resize", onResizeNative);
        window.removeEventListener("orientationchange", onResizeNative);
        stackCompletedRef.current = false;
        cardsRef.current = [];
        cardTopsRef.current = [];
        endElementTopRef.current = 0;
        transformsCache.clear();
        isUpdatingRef.current = false;
      };
    }

    const onResize = () => {
      updatePositionCache();
      updateCardTransforms();
    };
    window.addEventListener("resize", onResize);
    window.addEventListener("orientationchange", onResize);

    setupLenis();
    updateCardTransforms();

    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("orientationchange", onResize);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (lenisRef.current) {
        lenisRef.current.destroy();
      }
      stackCompletedRef.current = false;
      cardsRef.current = [];
      cardTopsRef.current = [];
      endElementTopRef.current = 0;
      transformsCache.clear();
      isUpdatingRef.current = false;
    };
  }, [
    baseScale,
    blurAmount,
    itemDistance,
    itemScale,
    itemStackDistance,
    onStackComplete,
    rotationAmount,
    scaleDuration,
    scaleEndPosition,
    setupLenis,
    stackPosition,
    updateCardTransforms,
    useWindowScroll,
  ]);

  const containerStyles = useWindowScroll
    ? {
        overscrollBehavior: "contain" as const,
        WebkitOverflowScrolling: "touch",
        WebkitTransform: "translateZ(0)",
        transform: "translateZ(0)",
      }
    : {
        overscrollBehavior: "contain" as const,
        WebkitOverflowScrolling: "touch",
        scrollBehavior: "smooth" as const,
        WebkitTransform: "translateZ(0)",
        transform: "translateZ(0)",
        willChange: "scroll-position" as const,
      };

  const containerClassName = useWindowScroll
    ? `relative w-full ${className}`.trim()
    : `relative w-full h-full overflow-y-auto overflow-x-visible ${className}`.trim();

  return (
    <div className={containerClassName} ref={scrollerRef} style={containerStyles}>
      <div className="scroll-stack-inner pt-8 px-4 md:px-0 min-h-screen w-full">
        {children}
        <div className="scroll-stack-end w-full h-px" />
        {/* Spacer so content below (logo, Magic Bento) doesn't scroll up with the stack; clear separation */}
        <div className="w-full min-h-[24rem]" aria-hidden />
      </div>
    </div>
  );
};

export default ScrollStack;

