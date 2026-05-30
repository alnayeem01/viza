import { BackToTop } from "@/components/ui/BackToTop";
import { SiteHeader } from "@/components/sections/SiteHeader";
import { SiteFooter } from "@/components/sections/SiteFooter";

type LegalPageShellProps = {
  children: React.ReactNode;
};

/** Shared chrome for legal pages (header + footer). */
export const LegalPageShell = ({ children }: LegalPageShellProps) => {
  return (
    <>
      <SiteHeader />
      <main id="main" className="flex-1 bg-background">
        {children}
      </main>
      <SiteFooter />
      <BackToTop />
    </>
  );
};
