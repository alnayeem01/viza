"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/** Scrolls to #section after navigating to home from another route (e.g. /privacy → /#services). */
export const HashScroll = () => {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== "/") return;

    const scrollToHash = () => {
      const { hash } = window.location;
      if (!hash) return;
      const id = hash.slice(1);
      const target = document.getElementById(id);
      if (target) {
        const reduceMotion = window.matchMedia(
          "(prefers-reduced-motion: reduce)",
        ).matches;
        target.scrollIntoView({
          behavior: reduceMotion ? "auto" : "smooth",
          block: "start",
        });
      }
    };

    scrollToHash();
    window.addEventListener("hashchange", scrollToHash);
    return () => window.removeEventListener("hashchange", scrollToHash);
  }, [pathname]);

  return null;
};
