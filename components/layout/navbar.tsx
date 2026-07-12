"use client";

import { Menu } from "lucide-react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import { SedicLogo } from "@/components/layout/sedic-logo";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navLinks } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Navbar() {
  const { resolvedTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [showNavLogo, setShowNavLogo] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const heroLogo = document.getElementById("hero-brand-logo");
    if (!heroLogo) {
      setShowNavLogo(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowNavLogo(!entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0,
        rootMargin: "-72px 0px 0px 0px",
      }
    );

    observer.observe(heroLogo);
    return () => observer.disconnect();
  }, []);

  const onDarkHero = !scrolled;
  const useLightLogo = onDarkHero || resolvedTheme === "dark";

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border/60 bg-background/85 shadow-sm backdrop-blur-md"
          : "bg-transparent"
      )}
    >
      {/* Mobile — logo left, toggles grouped right */}
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:hidden">
        <Link
          href="#top"
          aria-hidden={!showNavLogo}
          tabIndex={showNavLogo ? undefined : -1}
          className={cn(
            "inline-flex rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
            "transition-[opacity,transform] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
            showNavLogo
              ? "translate-x-0 opacity-100"
              : "pointer-events-none -translate-x-3 opacity-0"
          )}
        >
          <SedicLogo inverted={useLightLogo} priority />
        </Link>

        <div
          className={cn(
            "flex items-center gap-1",
            onDarkHero && "[&_button]:text-white [&_button:hover]:bg-white/10"
          )}
        >
          <ThemeToggle />
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              className={cn(
                buttonVariants({ variant: "ghost", size: "icon" }),
                onDarkHero && "text-white hover:bg-white/10 hover:text-white"
              )}
              aria-label="Open menu"
            >
              <Menu className="size-5" />
            </SheetTrigger>
            <SheetContent side="right" className="w-[min(100%,20rem)] p-0">
              <SheetHeader className="border-b border-border px-4 py-4">
                <SheetTitle className="sr-only">Navigation</SheetTitle>
                <SedicLogo />
              </SheetHeader>
              <nav className="flex flex-col gap-1 p-4" aria-label="Mobile">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="rounded-lg px-3 py-3 text-base font-medium text-foreground hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className={cn(
                    buttonVariants({ size: "lg" }),
                    "mt-4 rounded-full bg-brand-blue text-white hover:bg-brand-blue-bright"
                  )}
                >
                  Contact Us
                </a>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* Desktop */}
      <div className="mx-auto hidden h-16 max-w-7xl grid-cols-[1fr_auto_1fr] items-center gap-4 px-4 sm:px-6 lg:grid lg:px-8">
        <div className="flex min-w-0 items-center justify-start">
          <Link
            href="#top"
            aria-hidden={!showNavLogo}
            tabIndex={showNavLogo ? undefined : -1}
            className={cn(
              "rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
              "transition-[opacity,transform] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
              showNavLogo
                ? "translate-x-0 opacity-100"
                : "pointer-events-none -translate-x-3 opacity-0"
            )}
          >
            <SedicLogo inverted={useLightLogo} priority />
          </Link>
        </div>

        <nav
          className="flex items-center justify-center gap-x-1 xl:gap-x-2"
          aria-label="Primary"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-md px-2.5 py-2 text-[0.8125rem] font-medium whitespace-nowrap transition-colors xl:px-3 xl:text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                onDarkHero
                  ? "text-white/75 hover:text-white"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center justify-end gap-1 sm:gap-2">
          <div
            className={cn(
              onDarkHero && "[&_button]:text-white [&_button:hover]:bg-white/10"
            )}
          >
            <ThemeToggle />
          </div>
          <a
            href="#contact"
            className={cn(
              buttonVariants({ size: "lg" }),
              "rounded-full bg-brand-blue px-5 text-white hover:bg-brand-blue-bright"
            )}
          >
            Contact Us
          </a>
        </div>
      </div>
    </header>
  );
}
