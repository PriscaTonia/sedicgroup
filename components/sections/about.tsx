import Image from "next/image";

import { aboutContent, stats } from "@/lib/data";
import { Reveal } from "@/components/ui/reveal";

export function AboutSection() {
  return (
    <section
      id="about"
      className="scroll-mt-20 bg-background py-20 sm:py-28"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="space-y-5">
              <p className="text-xs font-semibold tracking-[0.22em] text-brand-blue uppercase">
                Company Overview
              </p>
              <h2
                id="about-heading"
                className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
              >
                {aboutContent.heading}
              </h2>
              <p className="text-lg font-medium text-brand-blue sm:text-xl">
                {aboutContent.subheading}
              </p>
              <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
                {aboutContent.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 32)}>{paragraph}</p>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:self-center">
            <div className="relative h-64 w-full overflow-hidden rounded-2xl shadow-lg sm:h-72 lg:h-[22rem]">
              <Image
                src="/images/about-skyline.jpg"
                alt="City skyline at golden hour framed by foliage"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-[center_35%]"
              />
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-16">
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <li
                key={stat.label}
                className="rounded-2xl border border-border/80 bg-card p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <p className="font-heading text-3xl font-bold tracking-tight text-navy-900 dark:text-foreground">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
