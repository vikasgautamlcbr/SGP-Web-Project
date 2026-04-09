"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

type HeroAction = {
  label: string;
  href: string;
  variant?: "primary" | "secondary";
};

type HeroSectionProps = {
  eyebrow?: string;
  title: string;
  subtitle?: React.ReactNode;
  actions?: HeroAction[];
  right?: React.ReactNode;
  size?: "default" | "xl";
  rightParallax?: boolean;
};

export function HeroSection({
  eyebrow,
  title,
  subtitle,
  actions,
  right,
  size = "default",
  rightParallax = false
}: HeroSectionProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, -80]);

  return (
    <section ref={sectionRef} className="relative overflow-hidden border-b border-white/10">
      <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(900px_circle_at_18%_18%,rgba(0,255,255,0.18),transparent_55%),radial-gradient(900px_circle_at_82%_30%,rgba(0,255,255,0.10),transparent_55%),linear-gradient(to_bottom,rgba(255,255,255,0.05),transparent_30%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 z-0 h-px bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.35),transparent)] [animation:sgpf-drift_14s_ease-in-out_infinite]" />
      <div className="container relative z-10 py-24 md:py-28">
        <div className={right ? "grid gap-10 md:grid-cols-[1.2fr_0.8fr] md:items-center xl:grid-cols-[1.3fr_0.7fr]" : ""}>
          <div className="max-w-[68ch] space-y-6 md:max-w-[72ch]">
            {eyebrow ? (
              <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold tracking-[0.22em] text-white">
                <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-glow" />
                <span className="text-slate-200">{eyebrow}</span>
              </div>
            ) : null}

            <h1
              className={[
                "whitespace-pre-line text-balance font-semibold leading-[1.05] tracking-tight text-white",
                size === "xl"
                  ? "text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
                  : "text-4xl md:text-6xl"
              ].join(" ")}
            >
              {title}
            </h1>

            {subtitle ? (
              typeof subtitle === "string" ? (
                <p className="text-pretty text-base leading-relaxed text-slate-200 md:text-lg">
                  {subtitle}
                </p>
              ) : (
                <div className="space-y-3">{subtitle}</div>
              )
            ) : null}

            {actions?.length ? (
              <div className="flex flex-wrap items-center gap-3 pt-2">
                {actions.map((action) => {
                  const isPrimary = action.variant !== "secondary";
                  return (
                    <Link
                      key={action.href}
                      href={action.href}
                      className={[
                        "group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition",
                        isPrimary
                          ? "border border-accent/40 bg-accent/15 text-white shadow-glow hover:border-accent/70 hover:bg-accent/20"
                          : "border border-white/15 bg-white/5 text-slate-200 hover:border-white/25 hover:bg-white/10"
                      ].join(" ")}
                    >
                      {action.label}
                      <span className="sgpf-icon-tile sgpf-icon-tile-xs">
                        <ArrowRight className="h-4 w-4" />
                      </span>
                    </Link>
                  );
                })}
              </div>
            ) : null}
          </div>

          {right ? (
            rightParallax ? (
              <motion.div style={{ y }} className="justify-self-center md:justify-self-end">
                {right}
              </motion.div>
            ) : (
              <div className="justify-self-center md:justify-self-end">{right}</div>
            )
          ) : null}
        </div>
      </div>
    </section>
  );
}
