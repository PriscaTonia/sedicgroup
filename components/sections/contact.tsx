"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2, Mail, MapPin, Phone, Globe } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Reveal } from "@/components/ui/reveal";
import { contactInfo } from "@/lib/data";

const contactSchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Please enter a valid email"),
  message: z.string().min(10, "Message should be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export function ContactSection() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  async function onSubmit(values: ContactFormValues) {
    setStatus("idle");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section
      id="contact"
      className="sedic-grain relative scroll-mt-20 overflow-hidden bg-gradient-to-b from-navy-800 via-navy-900 to-navy-950 py-20 sm:py-28"
      aria-labelledby="contact-heading"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="space-y-8 text-white">
              <div>
                <p className="text-xs font-semibold tracking-[0.22em] text-brand-blue-bright uppercase">
                  Get in Touch
                </p>
                <h2
                  id="contact-heading"
                  className="mt-3 font-heading text-3xl font-bold tracking-tight sm:text-4xl"
                >
                  Let&apos;s build Africa&apos;s next chapter together
                </h2>
                <p className="mt-4 max-w-md text-base text-white/70">
                  Reach out for partnerships, project inquiries, or general
                  business conversations with the Sedic Group team.
                </p>
              </div>

              <ul className="space-y-4 text-sm text-white/80">
                <li className="flex gap-3">
                  <MapPin className="mt-0.5 size-4 shrink-0 text-brand-blue-bright" aria-hidden />
                  <span>{contactInfo.address}</span>
                </li>
                <li className="flex gap-3">
                  <Globe className="mt-0.5 size-4 shrink-0 text-brand-blue-bright" aria-hidden />
                  <a
                    href={contactInfo.websiteUrl}
                    className="hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue-bright"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {contactInfo.website}
                  </a>
                </li>
                <li className="flex gap-3">
                  <Mail className="mt-0.5 size-4 shrink-0 text-brand-blue-bright" aria-hidden />
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue-bright"
                  >
                    {contactInfo.email}
                  </a>
                </li>
                <li className="flex gap-3">
                  <Phone className="mt-0.5 size-4 shrink-0 text-brand-blue-bright" aria-hidden />
                  <a
                    href={contactInfo.phoneHref}
                    className="hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue-bright"
                  >
                    {contactInfo.phone}
                  </a>
                </li>
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-5 rounded-2xl border border-white/10 bg-card p-6 shadow-xl sm:p-8"
              noValidate
            >
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  autoComplete="name"
                  placeholder="Your full name"
                  aria-invalid={!!errors.name}
                  className="h-11"
                  {...register("name")}
                />
                {errors.name ? (
                  <p className="text-sm text-destructive" role="alert">
                    {errors.name.message}
                  </p>
                ) : null}
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@company.com"
                  aria-invalid={!!errors.email}
                  className="h-11"
                  {...register("email")}
                />
                {errors.email ? (
                  <p className="text-sm text-destructive" role="alert">
                    {errors.email.message}
                  </p>
                ) : null}
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  rows={5}
                  placeholder="How can we help?"
                  aria-invalid={!!errors.message}
                  className="min-h-28 resize-y"
                  {...register("message")}
                />
                {errors.message ? (
                  <p className="text-sm text-destructive" role="alert">
                    {errors.message.message}
                  </p>
                ) : null}
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="h-11 w-full rounded-full bg-brand-blue text-white hover:bg-brand-blue-bright"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="size-4 animate-spin" />
                    Sending…
                  </>
                ) : (
                  "Send Message"
                )}
              </Button>

              {status === "success" ? (
                <p className="text-sm text-accent-green" role="status">
                  Thank you — your message has been received.
                </p>
              ) : null}
              {status === "error" ? (
                <p className="text-sm text-destructive" role="alert">
                  Something went wrong. Please try again or email us directly.
                </p>
              ) : null}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
