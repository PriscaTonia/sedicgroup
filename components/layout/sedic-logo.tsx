import Image from "next/image";

import { cn } from "@/lib/utils";

type SedicLogoProps = {
  className?: string;
  /** "full" shows SEDIC GROUP wordmark; "mark" uses a compact height */
  variant?: "full" | "mark";
  /** White logo for dark backgrounds; navy logo for light backgrounds */
  inverted?: boolean;
  priority?: boolean;
};

export function SedicLogo({
  className,
  variant = "full",
  inverted = false,
  priority = false,
}: SedicLogoProps) {
  const src = inverted
    ? "/images/sedic-logo.png"
    : "/images/sedic-logo-dark.png";

  const height = variant === "mark" ? 28 : 40;
  const width = Math.round(height * (934 / 435));

  return (
    <Image
      src={src}
      alt="Sedic Group"
      width={width}
      height={height}
      priority={priority}
      className={cn(
        "h-9 w-auto object-contain object-left sm:h-10",
        variant === "mark" && "h-7 sm:h-8",
        className
      )}
    />
  );
}
