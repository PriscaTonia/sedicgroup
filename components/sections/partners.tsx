import Image from "next/image";

import { partners, partnersIntro } from "@/lib/data";
import { Reveal } from "@/components/ui/reveal";

export function PartnersSection() {
  return (
    <section
      id="partners"
      className="scroll-mt-20 bg-background py-20 sm:py-28"
      aria-labelledby="partners-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mb-12 text-center">
          <p className="text-xs font-semibold tracking-[0.22em] text-brand-blue uppercase">
            Trusted By
          </p>
          <h2
            id="partners-heading"
            className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
          >
            {partnersIntro.heading}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground">
            {partnersIntro.supporting}
          </p>
        </Reveal>

        <Reveal>
          <ul className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {partners.map((partner) => (
              <li key={partner.name}>
                <div
                  title={partner.name}
                  className="group flex h-24 items-center justify-center rounded-2xl border border-border/80 bg-white px-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md sm:h-28 sm:px-5"
                >
                  <Image
                    src={partner.logoSrc}
                    alt={`${partner.name} logo`}
                    width={180}
                    height={72}
                    className="max-h-12 w-auto max-w-full object-contain opacity-90 transition duration-300 group-hover:opacity-100 sm:max-h-14"
                  />
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
