import { cn } from "@/lib/utils";

type PlaceholderImageProps = {
  label: string;
  alt: string;
  className?: string;
  /** Soft gradient tone for the placeholder surface */
  tone?: string;
  /** Path note for where the real asset should go */
  assetPath?: string;
};

/** Patterned placeholder until real photography is supplied. */
export function PlaceholderImage({
  label,
  alt,
  className,
  tone = "from-navy-800 via-navy-700 to-navy-900",
  assetPath,
}: PlaceholderImageProps) {
  return (
    <div
      role="img"
      aria-label={alt}
      className={cn(
        "relative flex overflow-hidden rounded-2xl bg-gradient-to-br shadow-lg",
        tone,
        className
      )}
    >
      {/* TODO: replace with real photo — drop file at {assetPath ?? "/images/..."} */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, rgba(255,255,255,0.18), transparent 45%), radial-gradient(circle at 80% 70%, rgba(255,255,255,0.1), transparent 40%), repeating-linear-gradient(135deg, transparent, transparent 12px, rgba(255,255,255,0.03) 12px, rgba(255,255,255,0.03) 24px)",
        }}
      />
      <div className="relative z-10 flex h-full w-full flex-col items-center justify-center gap-2 p-6 text-center text-white/80">
        <span className="text-xs font-medium tracking-[0.2em] uppercase opacity-70">
          Photo placeholder
        </span>
        <span className="max-w-[16rem] text-sm font-medium text-white">{label}</span>
        {assetPath ? (
          <span className="mt-1 font-mono text-[10px] text-white/50">{assetPath}</span>
        ) : null}
      </div>
    </div>
  );
}
