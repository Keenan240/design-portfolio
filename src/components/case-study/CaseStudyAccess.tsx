"use client";

import { useEffect, useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import type { Project } from "@/data/projects";
import CaseStudyPageView from "@/components/case-study/CaseStudyPageView";
import CaseStudySkeleton from "@/components/case-study/CaseStudySkeleton";
import PasscodeGate from "@/components/case-study/PasscodeGate";
import { isPasscodeGated } from "@/lib/case-study";
import { readPasscodeUnlock } from "@/lib/passcode";

interface CaseStudyAccessProps {
  project: Project;
}

export default function CaseStudyAccess({ project }: CaseStudyAccessProps) {
  const router = useRouter();
  const gated = isPasscodeGated(project);
  const [ready, setReady] = useState(false);
  const [unlocked, setUnlocked] = useState(!gated);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    if (!gated) {
      setUnlocked(true);
      setReady(true);
      return;
    }
    setUnlocked(readPasscodeUnlock(project.id));
    setReady(true);
  }, [gated, project.id]);

  if (!ready || isPending) {
    return <CaseStudySkeleton />;
  }

  if (gated && !unlocked) {
    return (
      <PasscodeGate
        open
        fullscreen
        projectId={project.id}
        caseStudyTitle={project.title}
        onClose={() => router.push("/")}
        onSuccess={() => {
          startTransition(() => {
            setUnlocked(true);
          });
        }}
      />
    );
  }

  return <CaseStudyPageView project={project} />;
}
