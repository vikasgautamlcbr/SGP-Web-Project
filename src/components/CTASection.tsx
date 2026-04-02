import Link from "next/link";
import type { ReactNode } from "react";

type CTASectionProps = {
  mark?: ReactNode;
  title: string;
  description: string;
  primaryAction: { label: string; href: string };
  secondaryAction?: { label: string; href: string };
  variant?: "default" | "hero";
};

export function CTASection({
  mark,
  title,
  description,
  primaryAction,
  secondaryAction,
  variant = "default"
}: CTASectionProps) {
  const isHero = variant === "hero";

  return (
    <section
      className={[
        "relative overflow-hidden border-y border-white/10",
        isHero ? "bg-black/40" : "bg-black/30"
      ].join(" ")}
    >
      {isHero ? (
        <>
          <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(1100px_circle_at_50%_20%,rgba(0,255,255,0.18),transparent_55%),radial-gradient(900px_circle_at_20%_80%,rgba(0,255,255,0.10),transparent_55%),radial-gradient(900px_circle_at_80%_90%,rgba(255,255,255,0.05),transparent_60%)]" />
          <div className="pointer-events-none absolute -inset-40 z-0 rounded-full bg-accent/10 blur-3xl opacity-60 [animation:sgpf-drift_26s_ease-in-out_infinite]" />
        </>
      ) : null}

      <div className={isHero ? "container relative z-10 py-24 md:py-28" : "container relative z-10 py-16"}>
        <div
          className={[
            "flex flex-col gap-8",
            isHero ? "items-center text-center" : "md:flex-row md:items-center md:justify-between"
          ].join(" ")}
        >
          <div className={isHero ? "max-w-3xl space-y-3" : "max-w-2xl space-y-3"}>
            {mark ? (
              <div className={isHero ? "flex justify-center" : ""}>{mark}</div>
            ) : null}
            <h2
              className={[
                "font-semibold text-white",
                isHero
                  ? "whitespace-pre-line text-5xl leading-[1.02] tracking-tight md:text-7xl"
                  : "text-2xl md:text-3xl"
              ].join(" ")}
            >
              {title}
            </h2>
            <p
              className={[
                "leading-relaxed text-slate-200",
                isHero ? "text-base md:text-lg" : "text-sm md:text-base"
              ].join(" ")}
            >
              {description}
            </p>
          </div>

          <div className={isHero ? "flex flex-wrap items-center justify-center gap-3" : "flex flex-wrap items-center gap-3"}>
            <Link
              href={primaryAction.href}
              className="rounded-full border border-accent/50 bg-accent/15 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-accent/80 hover:bg-accent/20 hover:shadow-glow"
            >
              {primaryAction.label}
            </Link>
            {secondaryAction ? (
              <Link
                href={secondaryAction.href}
                className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-white/25 hover:bg-white/10"
              >
                {secondaryAction.label}
              </Link>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
