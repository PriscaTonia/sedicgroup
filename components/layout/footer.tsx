import { SedicLogo } from "@/components/layout/sedic-logo";
import { contactInfo, siteConfig, socialLinks } from "@/lib/data";

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.845-2.136 3.939v4.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.727-8.835L1.254 2.25H8.08l4.259 5.63 5.905-5.63Zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="sedic-grain relative overflow-hidden bg-gradient-to-b from-navy-800 to-navy-950 text-white">
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr_auto]">
          <div className="space-y-4">
            <SedicLogo inverted />
            <p className="max-w-sm text-sm leading-relaxed text-white/70">
              {siteConfig.tagline}. Bridging African opportunity with global
              capital, technology, knowledge, and infrastructure.
            </p>
          </div>

          <div className="space-y-3 text-sm text-white/80">
            <p className="font-heading text-xs font-semibold tracking-[0.18em] text-white/50 uppercase">
              Contact
            </p>
            <p>{contactInfo.address}</p>
            <p>
              <a
                href={contactInfo.websiteUrl}
                className="transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue-bright"
                target="_blank"
                rel="noopener noreferrer"
              >
                {contactInfo.website}
              </a>
            </p>
            <p>
              <a
                href={`mailto:${contactInfo.email}`}
                className="transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue-bright"
              >
                {contactInfo.email}
              </a>
            </p>
            <p>
              <a
                href={contactInfo.phoneHref}
                className="transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue-bright"
              >
                {contactInfo.phone}
              </a>
            </p>
          </div>

          <div className="space-y-3">
            <p className="font-heading text-xs font-semibold tracking-[0.18em] text-white/50 uppercase">
              Follow
            </p>
            <div className="flex gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="inline-flex size-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/80 transition hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue-bright"
                >
                  {social.icon === "linkedin" ? (
                    <LinkedInIcon className="size-4" />
                  ) : (
                    <XIcon className="size-4" />
                  )}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center text-xs text-white/45 sm:text-left">
          © {year} {siteConfig.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
