import { useEffect, useState } from "react";
import { Menu, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { PROFILE } from "@/data/portfolio";

const NAV = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Certificates", href: "#certificates" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const Header = ({ mode, setMode }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      data-testid="site-header"
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-background/70 border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between gap-3">
        <a
          href="#top"
          data-testid="logo-link"
          className="font-heading font-extrabold text-lg tracking-tight shrink-0"
        >
          alwin<span className="text-brand">.dev</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              data-testid={`nav-${n.label.toLowerCase()}`}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <ThemeSwitcher mode={mode} setMode={setMode} />

          <a href={PROFILE.resumeUrl} target="_blank" rel="noopener noreferrer" className="hidden sm:inline-flex">
            <Button
              data-testid="header-resume-btn"
              className="rounded-full bg-brand text-brand-foreground hover:bg-brand/90 gap-2"
            >
              <Download className="h-4 w-4" /> Resume
            </Button>
          </a>

          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" aria-label="Open menu" data-testid="mobile-menu-btn" className="rounded-full">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72" data-testid="mobile-menu">
              <nav className="mt-10 flex flex-col gap-2">
                {NAV.map((n) => (
                  <SheetClose asChild key={n.href}>
                    <a
                      href={n.href}
                      data-testid={`mobile-nav-${n.label.toLowerCase()}`}
                      className="font-heading text-2xl font-semibold py-2 hover:text-brand transition-colors"
                    >
                      {n.label}
                    </a>
                  </SheetClose>
                ))}
                <SheetClose asChild>
                  <a href={PROFILE.resumeUrl} target="_blank" rel="noopener noreferrer" className="mt-4">
                    <Button className="w-full rounded-full bg-brand text-brand-foreground hover:bg-brand/90 gap-2">
                      <Download className="h-4 w-4" /> Download Resume
                    </Button>
                  </a>
                </SheetClose>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};
