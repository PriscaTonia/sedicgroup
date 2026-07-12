"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import type { GalleryItem } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type GalleryCarouselProps = {
  items: GalleryItem[];
  label: string;
};

export function GalleryCarousel({ items, label }: GalleryCarouselProps) {
  const scrollerRef = useRef<HTMLUListElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  function updateScrollState() {
    const el = scrollerRef.current;
    if (!el) return;
    const maxScroll = el.scrollWidth - el.clientWidth;
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(el.scrollLeft < maxScroll - 4);
  }

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    updateScrollState();
    el.addEventListener("scroll", updateScrollState, { passive: true });
    const observer = new ResizeObserver(updateScrollState);
    observer.observe(el);

    return () => {
      el.removeEventListener("scroll", updateScrollState);
      observer.disconnect();
    };
  }, [items]);

  function scrollByDirection(direction: "left" | "right") {
    const el = scrollerRef.current;
    if (!el) return;
    const amount = Math.max(el.clientWidth * 0.75, 280);
    el.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  }

  return (
    <div className="relative">
      <div className="mb-4 flex items-center justify-end gap-2">
        <Button
          type="button"
          variant="outline"
          size="icon"
          aria-label={`Scroll ${label} gallery left`}
          disabled={!canScrollLeft}
          onClick={() => scrollByDirection("left")}
          className="rounded-full border-border bg-background shadow-sm"
        >
          <ChevronLeft />
        </Button>
        <Button
          type="button"
          variant="outline"
          size="icon"
          aria-label={`Scroll ${label} gallery right`}
          disabled={!canScrollRight}
          onClick={() => scrollByDirection("right")}
          className="rounded-full border-border bg-background shadow-sm"
        >
          <ChevronRight />
        </Button>
      </div>

      <ul
        ref={scrollerRef}
        tabIndex={0}
        aria-label={`${label} photo gallery`}
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-2 [-ms-overflow-style:none] [scrollbar-width:none] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue/40 [&::-webkit-scrollbar]:hidden"
      >
        {items.map((item) => (
          <li
            key={item.id}
            className="w-[min(85vw,22rem)] shrink-0 snap-start sm:w-80 lg:w-[22rem]"
          >
            <figure className="group overflow-hidden rounded-2xl shadow-md">
              <div className="relative aspect-[4/3] overflow-hidden">
                {item.imageSrc ? (
                  <Image
                    src={item.imageSrc}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 640px) 85vw, 352px"
                    className="object-cover transition duration-500 group-hover:scale-[1.03]"
                  />
                ) : (
                  <div
                    role="img"
                    aria-label={item.alt}
                    className={cn(
                      "absolute inset-0 bg-gradient-to-br",
                      item.placeholderTone
                    )}
                  />
                )}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-black/35 to-transparent p-4 pt-12">
                  <figcaption className="text-sm font-medium text-white">
                    {item.title}
                  </figcaption>
                </div>
              </div>
            </figure>
          </li>
        ))}
      </ul>
    </div>
  );
}
