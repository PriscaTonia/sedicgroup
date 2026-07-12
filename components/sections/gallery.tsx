import { galleryIntro, galleryItems } from "@/lib/data";
import { GalleryCarousel } from "@/components/sections/gallery-carousel";
import { Reveal } from "@/components/ui/reveal";

export function GallerySection() {
  const trade = galleryItems.filter((item) => item.category === "trade");
  const mining = galleryItems.filter((item) => item.category === "mining");

  return (
    <section
      id="gallery"
      className="scroll-mt-20 bg-muted/40 py-20 sm:py-28"
      aria-labelledby="gallery-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mb-12 text-center">
          <p className="text-xs font-semibold tracking-[0.22em] text-brand-blue uppercase">
            In Action
          </p>
          <h2
            id="gallery-heading"
            className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
          >
            {galleryIntro.heading}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground">
            {galleryIntro.supporting}
          </p>
        </Reveal>

        <div className="space-y-14">
          <Reveal>
            <div>
              <h3 className="font-heading text-xl font-semibold text-foreground sm:text-2xl">
                Trade Operations
              </h3>
              <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
                Warehouse, distribution, and commodity handling across Sedictrade
                networks.
              </p>
              <div className="mt-6">
                <GalleryCarousel items={trade} label="Trade Operations" />
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div>
              <h3 className="font-heading text-xl font-semibold text-foreground sm:text-2xl">
                Mining Operations
              </h3>
              <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
                Extractive sites, minerals, and field operations from
                Transnational Extractive Co.
              </p>
              <div className="mt-6">
                <GalleryCarousel items={mining} label="Mining Operations" />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
