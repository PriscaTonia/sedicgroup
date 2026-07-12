"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

import { SedicLogo } from "@/components/layout/sedic-logo";
import { buttonVariants } from "@/components/ui/button";
import { heroContent } from "@/lib/data";
import { cn } from "@/lib/utils";

export function HeroSection() {
  return (
    <section
      id="top"
      className="sedic-grain relative min-h-svh overflow-hidden bg-gradient-to-br from-navy-800 via-navy-900 to-[#071018]"
      aria-labelledby="hero-heading"
    >
      <motion.div
        className="pointer-events-none absolute -top-24 -left-16 size-72 rounded-full bg-brand-blue/25 blur-3xl"
        animate={{ opacity: [0.35, 0.55, 0.35], scale: [1, 1.08, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute right-10 bottom-10 size-56 rounded-full bg-accent-orange/10 blur-3xl"
        animate={{ opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 mx-auto grid min-h-svh max-w-7xl items-center gap-6 px-4 pt-28 pb-12 sm:gap-8 sm:px-6 sm:pt-32 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-8 lg:px-8 lg:pt-36 lg:pb-16">
        {/* Left — brand / copy */}
        <div className="flex items-center">
          <div className="w-full max-w-xl space-y-8">
            <div id="hero-brand-logo">
              <SedicLogo inverted priority className="h-12 w-auto sm:h-14" />
            </div>

            <div className="space-y-4">
              <p className="text-xs font-semibold tracking-[0.28em] text-brand-blue-bright uppercase">
                {heroContent.eyebrow}
              </p>
              <h1
                id="hero-heading"
                className="font-heading text-4xl leading-[1.1] font-bold tracking-tight text-white sm:text-5xl lg:text-[3.25rem]"
              >
                {heroContent.headline}
              </h1>
              <p className="max-w-md text-base leading-relaxed text-white/75 sm:text-lg">
                {heroContent.supporting}
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href={heroContent.primaryCta.href}
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "h-11 rounded-full bg-brand-blue px-6 text-white hover:bg-brand-blue-bright"
                )}
              >
                {heroContent.primaryCta.label}
                <ArrowRight className="size-4" />
              </a>
              <a
                href={heroContent.secondaryCta.href}
                className={cn(
                  buttonVariants({ size: "lg", variant: "outline" }),
                  "h-11 rounded-full border-white/25 bg-transparent px-6 text-white hover:bg-white/10 hover:text-white"
                )}
              >
                {heroContent.secondaryCta.label}
              </a>
            </div>
          </div>
        </div>

        {/* Right — headquarters building */}
        <div className="flex items-center justify-center lg:justify-end">
          <div className="relative aspect-[4/5] w-full max-w-lg overflow-hidden rounded-2xl shadow-lg sm:max-w-xl lg:max-w-none lg:h-[min(68vh,36rem)] lg:aspect-auto xl:h-[min(72vh,40rem)]">
            <Image
              src="/images/hero-building.jpg"
              alt="Sedic Group headquarters building exterior"
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 40vw"
              className="object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
