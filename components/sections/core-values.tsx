import { Lightbulb, Scale, ShieldCheck, Handshake } from "lucide-react";

import { coreValues, philosophy } from "@/lib/data";
import { Reveal } from "@/components/ui/reveal";

const icons = [ShieldCheck, Scale, Lightbulb, Handshake];

export function CoreValuesSection() {
  return (
    <section
      id="values"
      className="sedic-grain relative scroll-mt-20 overflow-hidden bg-gradient-to-b from-navy-800 to-navy-950 py-20 sm:py-28"
      aria-labelledby="values-heading"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mb-12 text-center">
          <p className="text-xs font-semibold tracking-[0.22em] text-brand-blue-bright uppercase">
            What Guides Us
          </p>
          <h2
            id="values-heading"
            className="mt-3 font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl"
          >
            Core Values & Philosophy
          </h2>
        </Reveal>

        <Reveal>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {coreValues.map((value, index) => {
              const Icon = icons[index] ?? ShieldCheck;
              return (
                <li
                  key={value.title}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-brand-blue/40 hover:bg-white/10"
                >
                  <span className="mx-auto mb-4 flex size-12 items-center justify-center rounded-full bg-brand-blue/20 text-brand-blue-bright">
                    <Icon className="size-5" aria-hidden />
                  </span>
                  <h3 className="font-heading text-base font-semibold text-white">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/65">
                    {value.description}
                  </p>
                </li>
              );
            })}
          </ul>
        </Reveal>

        <Reveal delay={0.1} className="mt-12">
          <blockquote className="mx-auto max-w-3xl rounded-2xl border border-white/10 bg-card/95 p-8 shadow-xl sm:p-10 dark:bg-card">
            <p className="font-heading text-xs font-semibold tracking-[0.2em] text-brand-blue uppercase">
              {philosophy.heading}
            </p>
            <p className="mt-4 text-lg leading-relaxed text-foreground sm:text-xl">
              “{philosophy.quote}”
            </p>
          </blockquote>
        </Reveal>
      </div>
    </section>
  );
}
