import Image from "next/image";

import { subsidiaries } from "@/lib/data";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

export function SubsidiariesSection() {
  return (
    <section
      id="subsidiaries"
      className="scroll-mt-20"
      aria-labelledby="subsidiaries-heading"
    >
      {/* Dark banner intro */}
      <div className="sedic-grain relative overflow-hidden bg-gradient-to-b from-navy-800 to-navy-950 py-16 sm:py-20">
        <div className="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <Reveal>
            <p className="text-xs font-semibold tracking-[0.22em] text-brand-blue-bright uppercase">
              Our Group
            </p>
            <h2
              id="subsidiaries-heading"
              className="mt-3 font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl"
            >
              Subsidiaries Overview
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-white/70">
              Four complementary businesses spanning advisory, trade, logistics,
              and extractives — united under the Sedic Group.
            </p>
          </Reveal>

          {/* At-a-glance grid */}
          <Reveal className="mt-10">
            <ul className="mx-auto grid max-w-3xl gap-4 sm:grid-cols-2">
              {subsidiaries.map((sub) => (
                <li key={sub.id}>
                  <a
                    href={`#subsidiary-${sub.id}`}
                    className={cn(
                      "group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 text-left transition duration-300 hover:-translate-y-0.5 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue-bright",
                      sub.glowClass
                    )}
                  >
                    <span className="flex h-12 w-[4.75rem] shrink-0 items-center justify-center overflow-hidden rounded-xl bg-white px-1.5 shadow-md sm:h-14 sm:w-24">
                      <Image
                        src={sub.logoSrc}
                        alt=""
                        width={120}
                        height={48}
                        className="h-8 w-auto max-w-full object-contain sm:h-9"
                      />
                    </span>
                    <span>
                      <span className="block font-heading text-sm font-semibold text-white">
                        {sub.name}
                      </span>
                      <span className={cn("mt-0.5 block text-xs", sub.accentClass)}>
                        {sub.tagline}
                      </span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>

      {/* Detail blocks — alternate image left/right; image height tracks text */}
      <div className="bg-background py-16 sm:py-24">
        <div className="mx-auto max-w-7xl space-y-20 px-4 sm:px-6 lg:px-8">
          {subsidiaries.map((sub, index) => {
            const imageLeft = index % 2 === 0;
            return (
              <Reveal key={sub.id}>
                <article
                  id={`subsidiary-${sub.id}`}
                  className="scroll-mt-24"
                >
                  <div
                    className={cn(
                      "grid items-center gap-8 lg:grid-cols-2 lg:gap-14",
                      !imageLeft && "lg:[&>*:first-child]:order-2"
                    )}
                  >
                    <div
                      className={cn(
                        "relative h-72 w-full overflow-hidden rounded-2xl shadow-lg sm:h-80 lg:h-[22rem]",
                        sub.glowClass
                      )}
                    >
                      <Image
                        src={sub.imageSrc}
                        alt={sub.imageAlt}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className={cn(
                          "object-cover",
                          sub.id === "haul" && "object-[68%_center]",
                          sub.id === "development" && "object-[center_35%]",
                          sub.id === "extractive" && "object-center"
                        )}
                      />
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-start gap-4">
                        <span className="flex h-14 w-28 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-border bg-white px-2 shadow-sm">
                          <Image
                            src={sub.logoSrc}
                            alt={`${sub.name} logo`}
                            width={140}
                            height={56}
                            className="h-10 w-auto max-w-full object-contain"
                          />
                        </span>
                        <div>
                          <h3 className="font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                            {sub.name}
                          </h3>
                          <p className={cn("text-sm font-semibold", sub.accentClass)}>
                            {sub.tagline}
                          </p>
                        </div>
                      </div>
                      <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
                        {sub.paragraphs.map((p) => (
                          <p key={p.slice(0, 40)}>{p}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
