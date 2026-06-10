"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

export function BackToHome() {
  const router = useRouter();

  const handleClick = () => {
    if (
      typeof window !== "undefined" &&
      document.referrer.startsWith(window.location.origin)
    ) {
      router.back();
    } else {
      router.push("/");
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="inline-flex items-center gap-1.5 text-sm text-zinc-600 hover:text-zinc-900 dark:text-neutral-400 dark:hover:text-neutral-50"
    >
      <ArrowLeft className="h-4 w-4" />
      Home
    </button>
  );
}
