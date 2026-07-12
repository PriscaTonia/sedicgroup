import Image from "next/image";

import { missionVision } from "@/lib/data";
import { Reveal } from "@/components/ui/reveal";

const cards = [
  {
    ...missionVision.mission,
    src: "/images/mission-skyline.png",
    width: 784,
    height: 524,
  },
  {
    ...missionVision.vision,
    src: "/images/vision-africa-night.png",
    width: 774,
    height: 522,
  },
] as const;

export function MissionVisionSection() {
  return (
    <section
      id="mission"
      className="sedic-grain relative scroll-mt-20 overflow-hidden bg-gradient-to-b from-navy-800 to-navy-950 py-20 sm:py-28"
      aria-labelledby="mission-heading"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mb-12 text-center">
          <p className="text-xs font-semibold tracking-[0.22em] text-brand-blue-bright uppercase">
            Purpose
          </p>
          <h2
            id="mission-heading"
            className="mt-3 font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl"
          >
            Mission & Vision
          </h2>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2">
          {cards.map((card, index) => (
            <Reveal key={card.title} delay={index * 0.08}>
              <article className="flex h-full flex-col overflow-hidden rounded-2xl bg-card shadow-xl transition duration-300 hover:-translate-y-1 hover:shadow-2xl">
                <div className="relative w-full overflow-hidden bg-navy-900">
                  <Image
                    src={card.src}
                    alt={card.imageAlt}
                    width={card.width}
                    height={card.height}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="h-auto w-full object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-3 p-6 sm:p-8">
                  <h3 className="font-heading text-xl font-semibold text-foreground">
                    {card.title}
                  </h3>
                  <p className="text-base leading-relaxed text-muted-foreground">
                    {card.statement}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
