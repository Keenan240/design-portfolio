"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";
import {
  isPasscodeCorrect,
  writePasscodeUnlock,
} from "@/lib/passcode";

const DIGIT_COUNT = 4;

interface PasscodeGateProps {
  open: boolean;
  projectId: string;
  caseStudyTitle?: string;
  onClose: () => void;
  onSuccess: () => void;
  fullscreen?: boolean;
}

export default function PasscodeGate({
  open,
  projectId,
  caseStudyTitle = "Scotiabank Case Study",
  onClose,
  onSuccess,
  fullscreen = false,
}: PasscodeGateProps) {
  const { isDark } = useTheme();
  const [digits, setDigits] = useState<string[]>(() =>
    Array(DIGIT_COUNT).fill("")
  );
  const [error, setError] = useState(false);
  const [showRequest, setShowRequest] = useState(false);
  const [reqName, setReqName] = useState("");
  const [reqPhone, setReqPhone] = useState("");
  const [reqCompany, setReqCompany] = useState("");
  const [reqStatus, setReqStatus] = useState<
    "idle" | "sending" | "sent" | "error"
  >("idle");
  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    if (!open) return;
    setDigits(Array(DIGIT_COUNT).fill(""));
    setError(false);
    setShowRequest(false);
    setReqName("");
    setReqPhone("");
    setReqCompany("");
    setReqStatus("idle");
    const t = requestAnimationFrame(() => inputsRef.current[0]?.focus());
    return () => cancelAnimationFrame(t);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  function submitCode(nextDigits: string[]) {
    const code = nextDigits.join("");
    if (code.length < DIGIT_COUNT) return;

    if (isPasscodeCorrect(code)) {
      writePasscodeUnlock(projectId);
      setError(false);
      onSuccess();
      return;
    }

    setError(true);
    setDigits(Array(DIGIT_COUNT).fill(""));
    requestAnimationFrame(() => inputsRef.current[0]?.focus());
  }

  function updateDigit(index: number, raw: string) {
    const value = raw.replace(/\D/g, "").slice(-1);
    const next = [...digits];
    next[index] = value;
    setDigits(next);
    setError(false);

    if (value && index < DIGIT_COUNT - 1) {
      inputsRef.current[index + 1]?.focus();
    }

    if (value && next.every((d) => d.length === 1)) {
      submitCode(next);
    }
  }

  function onKeyDown(index: number, e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Backspace" && !digits[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
    if (e.key === "Enter") {
      submitCode(digits);
    }
  }

  function onPaste(e: React.ClipboardEvent) {
    e.preventDefault();
    const pasted = e.clipboardData
      .getData("text")
      .replace(/\D/g, "")
      .slice(0, DIGIT_COUNT);
    if (!pasted) return;
    const next = Array(DIGIT_COUNT)
      .fill("")
      .map((_, i) => pasted[i] ?? "");
    setDigits(next);
    setError(false);
    const focusAt = Math.min(pasted.length, DIGIT_COUNT - 1);
    inputsRef.current[focusAt]?.focus();
    if (pasted.length === DIGIT_COUNT) submitCode(next);
  }

  async function submitRequest(e: React.FormEvent) {
    e.preventDefault();
    if (!reqName.trim() || !reqPhone.trim()) return;
    setReqStatus("sending");
    try {
      const res = await fetch("/api/request-passcode", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: reqName.trim(),
          phone: reqPhone.trim(),
          company: reqCompany.trim() || undefined,
          caseStudyTitle,
        }),
      });
      if (!res.ok) {
        setReqStatus("error");
        return;
      }
      setReqStatus("sent");
    } catch {
      setReqStatus("error");
    }
  }

  const backdropClass = isDark
    ? "bg-black/65 backdrop-blur-sm"
    : "bg-white/75 backdrop-blur-md";

  const panelClass = isDark
    ? "border border-white/10 bg-[#252525] text-white shadow-xl"
    : "border border-[#ededed] bg-white text-[#2A2A2A] shadow-xl";

  const digitClass = isDark
    ? `h-14 w-12 rounded-xl border bg-[#1E1E1E] text-center text-[22px] font-semibold tracking-[-0.07em] text-white outline-none transition-colors md:h-16 md:w-14 md:text-[24px] ${
        error
          ? "border-red-400/80"
          : "border-white/15 focus:border-white/40"
      }`
    : `h-14 w-12 rounded-xl border bg-[#fafafa] text-center text-[22px] font-semibold tracking-[-0.07em] text-[#2A2A2A] outline-none transition-colors md:h-16 md:w-14 md:text-[24px] ${
        error
          ? "border-red-400"
          : "border-[#ededed] focus:border-[#757575] focus:ring-2 focus:ring-black/10"
      }`;

  const fieldClass = isDark
    ? "w-full rounded-xl border border-white/15 bg-[#1E1E1E] px-4 py-3 text-[15px] text-white placeholder:text-[#757575] outline-none focus:border-white/35"
    : "w-full rounded-xl border border-[#ededed] bg-[#fafafa] px-4 py-3 text-[15px] text-[#2A2A2A] placeholder:text-[#acacac] outline-none focus:border-[#757575] focus:ring-2 focus:ring-black/10";

  const muted = isDark ? "text-[#ACACAC]" : "text-[#757575]";

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`fixed inset-0 z-[60] ${backdropClass}`}
            onClick={onClose}
            aria-hidden
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ type: "spring", duration: 0.4 }}
            className="fixed inset-0 z-[70] flex items-center justify-center overflow-y-auto p-4"
            role="dialog"
            aria-modal="true"
            aria-labelledby="passcode-gate-title"
            onClick={(e) => {
              if (e.target === e.currentTarget) onClose();
            }}
          >
            <div
              className={`relative my-auto w-full max-w-[420px] rounded-[25px] p-8 ${panelClass}`}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={onClose}
                className={`absolute right-4 top-4 rounded-lg p-1 transition-colors ${
                  isDark
                    ? "text-[#ACACAC] hover:bg-white/10 hover:text-white"
                    : "text-[#757575] hover:bg-[#f5f5f5] hover:text-black"
                }`}
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>

              <h2
                id="passcode-gate-title"
                className="pr-8 text-center text-[20px] font-semibold tracking-[-0.07em] md:text-[22px]"
              >
                Enter passcode
              </h2>
              <p className={`mt-3 text-center text-[15px] leading-relaxed ${muted}`}>
                This case study is locked. Enter the 4-digit passcode to continue.
              </p>

              <div
                className="mt-8 flex items-center justify-center gap-3"
                onPaste={onPaste}
              >
                {digits.map((digit, index) => (
                  <input
                    key={index}
                    ref={(el) => {
                      inputsRef.current[index] = el;
                    }}
                    type="text"
                    inputMode="numeric"
                    autoComplete="one-time-code"
                    maxLength={1}
                    value={digit}
                    aria-label={`Digit ${index + 1}`}
                    className={digitClass}
                    onChange={(e) => updateDigit(index, e.target.value)}
                    onKeyDown={(e) => onKeyDown(index, e)}
                  />
                ))}
              </div>

              {error && (
                <p className="mt-4 text-center text-[14px] text-red-500">
                  Incorrect passcode. Try again.
                </p>
              )}

              <button
                type="button"
                onClick={() => setShowRequest((v) => !v)}
                className={`mt-6 w-full rounded-full py-3 text-[14px] font-medium transition-colors ${
                  isDark
                    ? "bg-[#1E1E1E] text-[#ACACAC] hover:bg-[#2a2a2a] hover:text-white"
                    : "bg-[#EFEFEF] text-[#757575] hover:bg-[#E6E6E6] hover:text-[#2A2A2A]"
                }`}
                aria-expanded={showRequest}
              >
                {showRequest ? "Hide request form" : "Request passcode"}
              </button>

              <AnimatePresence initial={false}>
                {showRequest && (
                  <motion.div
                    key="request-form"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="pt-5">
                      {reqStatus === "sent" ? (
                        <p className={`text-center text-[15px] ${muted}`}>
                          Request sent. Keenan will follow up with the passcode.
                        </p>
                      ) : (
                        <form onSubmit={submitRequest} className="space-y-3">
                          <div>
                            <label
                              htmlFor="passcode-req-name"
                              className={`mb-1.5 block text-[13px] font-medium ${muted}`}
                            >
                              Name
                            </label>
                            <input
                              id="passcode-req-name"
                              type="text"
                              required
                              value={reqName}
                              onChange={(e) => setReqName(e.target.value)}
                              placeholder="Your name"
                              className={fieldClass}
                              disabled={reqStatus === "sending"}
                            />
                          </div>
                          <div>
                            <label
                              htmlFor="passcode-req-phone"
                              className={`mb-1.5 block text-[13px] font-medium ${muted}`}
                            >
                              Phone number
                            </label>
                            <input
                              id="passcode-req-phone"
                              type="tel"
                              required
                              value={reqPhone}
                              onChange={(e) => setReqPhone(e.target.value)}
                              placeholder="Phone number"
                              className={fieldClass}
                              disabled={reqStatus === "sending"}
                            />
                          </div>
                          <div>
                            <label
                              htmlFor="passcode-req-company"
                              className={`mb-1.5 block text-[13px] font-medium ${muted}`}
                            >
                              Company{" "}
                              <span className="font-normal">(optional)</span>
                            </label>
                            <input
                              id="passcode-req-company"
                              type="text"
                              value={reqCompany}
                              onChange={(e) => setReqCompany(e.target.value)}
                              placeholder="Company"
                              className={fieldClass}
                              disabled={reqStatus === "sending"}
                            />
                          </div>
                          {reqStatus === "error" && (
                            <p className="text-[14px] text-red-500">
                              Something went wrong. Try again.
                            </p>
                          )}
                          <button
                            type="submit"
                            disabled={reqStatus === "sending"}
                            className={`w-full rounded-full py-3.5 text-[15px] font-semibold transition-opacity disabled:cursor-not-allowed disabled:opacity-60 ${
                              isDark
                                ? "bg-white text-[#1E1E1E] hover:bg-[#f0f0f0]"
                                : "bg-black text-white hover:bg-[#1a1a1a]"
                            }`}
                          >
                            {reqStatus === "sending" ? "Sending…" : "Send request"}
                          </button>
                        </form>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
