"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navLinks } from "@/data/site";

const navLinkClass = (active: boolean) =>
  `rounded-md px-1 py-0.5 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${
    active ? "text-primary" : "text-text-secondary hover:text-primary"
  }`;

export const DesktopNav = () => {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    if (pathname !== "/") {
      setActiveSection(null);
      return;
    }

    const elements = navLinks
      .map((link) => document.getElementById(link.sectionId))
      .filter((element): element is HTMLElement => element !== null);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target.id) {
          setActiveSection(visible[0].target.id);
        }
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.1, 0.25] },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [pathname]);

  return (
    <ul className="hidden items-center gap-8 md:flex">
      {navLinks.map((link) => (
        <li key={link.href}>
          <Link
            href={link.href}
            className={navLinkClass(
              pathname === "/" && activeSection === link.sectionId,
            )}
            aria-current={
              pathname === "/" && activeSection === link.sectionId
                ? "true"
                : undefined
            }
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};
