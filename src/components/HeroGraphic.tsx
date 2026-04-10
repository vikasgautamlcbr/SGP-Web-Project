"use client";

import type { ComponentType, ReactNode } from "react";
import {
  ArrowRight,
  BarChart3,
  BriefcaseBusiness,
  FileText,
  Layers3,
  Mail,
  MessagesSquare,
  Sparkles,
  Users
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

type HeroGraphicVariant =
  | "strategy"
  | "help"
  | "portfolio"
  | "team"
  | "about"
  | "contact"
  | "insights";

type HeroGraphicProps = {
  variant: HeroGraphicVariant;
  className?: string;
};

function HeroGraphicShell({
  variant,
  className,
  children
}: {
  variant: HeroGraphicVariant;
  className?: string;
  children: ReactNode;
}) {
  const glow =
    variant === "strategy"
      ? "bg-[radial-gradient(900px_circle_at_30%_10%,rgba(0,255,255,0.12),transparent_55%)]"
      : variant === "help"
        ? "bg-[radial-gradient(900px_circle_at_75%_15%,rgba(0,255,255,0.12),transparent_55%)]"
        : variant === "portfolio"
          ? "bg-[radial-gradient(900px_circle_at_35%_15%,rgba(0,255,255,0.12),transparent_55%)]"
          : variant === "team"
            ? "bg-[radial-gradient(900px_circle_at_70%_20%,rgba(0,255,255,0.12),transparent_55%)]"
            : variant === "about"
              ? "bg-[radial-gradient(900px_circle_at_35%_15%,rgba(0,255,255,0.12),transparent_55%)]"
              : variant === "contact"
                ? "bg-[radial-gradient(900px_circle_at_70%_20%,rgba(0,255,255,0.12),transparent_55%)]"
                : "bg-[radial-gradient(900px_circle_at_30%_10%,rgba(0,255,255,0.12),transparent_55%)]";

  const base = [
    "sgpf-panel sgpf-panel-glow sgpf-panel-grid",
    "relative overflow-hidden",
    "w-[320px] sm:w-[360px] md:w-[420px]",
    "p-0",
    className ?? ""
  ].join(" ");

  return (
    <div className={base} aria-hidden="true">
      <div className={["pointer-events-none absolute inset-0", glow].join(" ")} />
      <div className="pointer-events-none absolute -left-24 -top-20 h-[340px] w-[340px] rounded-full border border-white/10 bg-white/[0.02] blur-[0.3px]" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-[380px] w-[380px] rounded-full border border-white/10 bg-white/[0.02]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02),rgba(255,255,255,0.06))] opacity-30 mix-blend-overlay" />
      {children}
    </div>
  );
}

function Floating({
  className,
  z,
  delay,
  children
}: {
  className: string;
  z: number;
  delay: number;
  children: ReactNode;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      style={{ zIndex: z }}
      initial={
        reduceMotion
          ? { opacity: 1 }
          : { opacity: 0, y: 14, filter: "blur(10px)" }
      }
      animate={
        reduceMotion
          ? { opacity: 1 }
          : {
              opacity: 1,
              y: [0, -8, 0],
              filter: "blur(0px)"
            }
      }
      transition={
        reduceMotion
          ? { duration: 0 }
          : {
              duration: 6.8,
              delay,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut"
            }
      }
    >
      {children}
    </motion.div>
  );
}

function GlassCard({
  eyebrow,
  title,
  tag,
  icon: Icon,
  rows,
  metrics
}: {
  eyebrow: string;
  title: string;
  tag?: string;
  icon: ComponentType<{ className?: string }>;
  rows: { label: string; sub?: string }[];
  metrics?: { label: string; value: string }[];
}) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-950/35 shadow-[0_32px_90px_-55px_rgba(0,255,255,0.55)] backdrop-blur">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(800px_circle_at_10%_0%,rgba(255,255,255,0.10),transparent_55%)]" />
      <div className="relative flex items-start justify-between gap-4 px-6 py-5">
        <div className="min-w-0">
          <p className="text-[11px] font-semibold tracking-[0.26em] text-slate-400">
            {eyebrow}
          </p>
          <p className="mt-2 text-base font-semibold tracking-tight text-white">
            {title}
          </p>
          {metrics?.length ? (
            <div className="mt-3 flex flex-wrap gap-2">
              {metrics.map((m) => (
                <span
                  key={m.label}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[11px] font-semibold text-slate-200"
                >
                  <span className="text-slate-400">{m.label}</span>
                  <span className="text-white">{m.value}</span>
                </span>
              ))}
            </div>
          ) : null}
        </div>
        <div className="flex items-center gap-2">
          {tag ? (
            <span className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-[11px] font-semibold text-slate-200">
              {tag}
            </span>
          ) : null}
          <span className="sgpf-icon-tile sgpf-icon-tile-sm shadow-[0_14px_35px_-22px_rgba(0,255,255,0.8)]">
            <Icon className="h-4 w-4" />
          </span>
        </div>
      </div>
      <div className="relative divide-y divide-white/10 bg-white/[0.02]">
        {rows.map((r) => (
          <div key={r.label} className="flex items-start gap-4 px-6 py-4">
            <span className="mt-2 h-2 w-2 rounded-full bg-gradient-to-br from-accent/80 via-cyan-200/40 to-white/30" />
            <div className="min-w-0">
              <p className="text-sm font-semibold text-white">{r.label}</p>
              {r.sub ? (
                <p className="mt-1 text-xs leading-relaxed text-slate-300">
                  {r.sub}
                </p>
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function HeroGraphic({ variant, className }: HeroGraphicProps) {
  const stage = "relative h-[350px] p-8 sm:h-[390px] md:h-[430px] md:p-10";

  switch (variant) {
    case "strategy":
      return (
        <HeroGraphicShell variant={variant} className={className}>
          <div className={stage}>
            <Floating
              className="absolute left-7 top-8 w-[290px] rotate-[-2deg] md:w-[360px]"
              z={30}
              delay={0}
            >
              <GlassCard
                eyebrow="INVESTMENT FOCUS"
                title="Where we add real value"
                tag="$2M–$30M"
                icon={BarChart3}
                metrics={[
                  { label: "Decision", value: "48 hrs" },
                  { label: "Fit", value: "Software" }
                ]}
                rows={[
                  { label: "Fast decision", sub: "Clear yes/no with conviction." },
                  { label: "Software only", sub: "Depth over breadth." },
                  { label: "Operator context", sub: "Execution, not theory." }
                ]}
              />
            </Floating>
            <Floating
              className="absolute right-7 top-[175px] w-[240px] rotate-[2deg] md:top-[205px] md:w-[280px]"
              z={20}
              delay={0.35}
            >
              <GlassCard
                eyebrow="SIGNALS"
                title="What we look for"
                tag="B2B"
                icon={Sparkles}
                metrics={[
                  { label: "Model", value: "Recurring" },
                  { label: "Moat", value: "Retention" }
                ]}
                rows={[
                  { label: "Recurring revenue" },
                  { label: "Retention-driven growth" },
                  { label: "Room to compound" }
                ]}
              />
            </Floating>
          </div>
        </HeroGraphicShell>
      );

    case "help":
      return (
        <HeroGraphicShell variant={variant} className={className}>
          <div className={stage}>
            <Floating
              className="absolute left-7 top-8 w-[290px] rotate-[-2deg] md:w-[360px]"
              z={30}
              delay={0}
            >
              <GlassCard
                eyebrow="GO-TO-MARKET"
                title="Repeatable revenue engine"
                tag="GTM"
                icon={BarChart3}
                metrics={[
                  { label: "Motion", value: "Outbound" },
                  { label: "Expansion", value: "Yes" }
                ]}
                rows={[
                  { label: "ICP + segmentation" },
                  { label: "Outbound motion" },
                  { label: "Pricing + expansion" }
                ]}
              />
            </Floating>
            <Floating
              className="absolute right-7 top-[155px] w-[255px] rotate-[2deg] md:top-[185px] md:w-[300px]"
              z={20}
              delay={0.35}
            >
              <GlassCard
                eyebrow="PRODUCT & AI"
                title="Roadmap with leverage"
                tag="Product"
                icon={Sparkles}
                metrics={[
                  { label: "Audit", value: "Structured" },
                  { label: "AI", value: "Focused" }
                ]}
                rows={[
                  { label: "Structured audits" },
                  { label: "AI where it matters" },
                  { label: "Build vs buy decisions" }
                ]}
              />
            </Floating>
            <Floating
              className="absolute left-[105px] top-[250px] w-[290px] rotate-[-1deg] opacity-95 md:left-[145px] md:top-[285px] md:w-[360px]"
              z={10}
              delay={0.65}
            >
              <GlassCard
                eyebrow="TALENT + M&A"
                title="Scale the org and outcomes"
                tag="Execution"
                icon={Users}
                metrics={[
                  { label: "Hiring", value: "Key roles" },
                  { label: "Add-ons", value: "Integrate" }
                ]}
                rows={[
                  { label: "Hire key roles" },
                  { label: "Org design" },
                  { label: "Add-ons + integration" }
                ]}
              />
            </Floating>
          </div>
        </HeroGraphicShell>
      );

    case "portfolio":
      return (
        <HeroGraphicShell variant={variant} className={className}>
          <div className={stage}>
            <Floating
              className="absolute left-7 top-8 w-[290px] rotate-[-2deg] md:w-[360px]"
              z={30}
              delay={0}
            >
              <GlassCard
                eyebrow="CURRENT PLATFORMS"
                title="Active platforms"
                tag="Current"
                icon={BriefcaseBusiness}
                metrics={[
                  { label: "Platforms", value: "3" },
                  { label: "Stage", value: "Active" }
                ]}
                rows={[
                  { label: "Venio Systems" },
                  { label: "MeshIQ" },
                  { label: "ClearlyRated" }
                ]}
              />
            </Floating>
            <Floating
              className="absolute right-7 top-[160px] w-[255px] rotate-[2deg] md:top-[195px] md:w-[300px]"
              z={20}
              delay={0.35}
            >
              <GlassCard
                eyebrow="ADD-ONS"
                title="Bolt-ons executed"
                tag="Add-ons"
                icon={Layers3}
                metrics={[
                  { label: "Executed", value: "5" },
                  { label: "Playbook", value: "Proven" }
                ]}
                rows={[
                  { label: "ClientSavvy → ClearlyRated" },
                  { label: "CloudMonix → Netreo" },
                  { label: "Stackify → Netreo" }
                ]}
              />
            </Floating>
            <Floating
              className="absolute left-[115px] top-[255px] w-[290px] rotate-[-1deg] opacity-95 md:left-[155px] md:top-[295px] md:w-[360px]"
              z={10}
              delay={0.65}
            >
              <GlassCard
                eyebrow="PRIOR INVESTMENTS"
                title="Prior platforms"
                tag="Prior"
                icon={FileText}
                metrics={[
                  { label: "Platforms", value: "3" },
                  { label: "Outcome", value: "Exit-ready" }
                ]}
                rows={[
                  { label: "Cleo" },
                  { label: "Appsian" },
                  { label: "Netreo" }
                ]}
              />
            </Floating>
          </div>
        </HeroGraphicShell>
      );

    case "team":
      return (
        <HeroGraphicShell variant={variant} className={className}>
          <div className={stage}>
            <Floating
              className="absolute left-7 top-8 w-[290px] rotate-[-2deg] md:w-[360px]"
              z={30}
              delay={0}
            >
              <GlassCard
                eyebrow="LEADERSHIP"
                title="Operator-led involvement"
                tag="Team"
                icon={Users}
                metrics={[
                  { label: "Mode", value: "Hands-on" },
                  { label: "Cadence", value: "Weekly" }
                ]}
                rows={[
                  { label: "Show up beyond the boardroom" },
                  { label: "Direct, honest input" },
                  { label: "Stay engaged through milestones" }
                ]}
              />
            </Floating>
            <Floating
              className="absolute right-7 top-[180px] w-[240px] rotate-[2deg] md:top-[215px] md:w-[280px]"
              z={20}
              delay={0.35}
            >
              <GlassCard
                eyebrow="NETWORK"
                title="High-signal operators"
                tag="Support"
                icon={Layers3}
                metrics={[
                  { label: "Bench", value: "Deep" },
                  { label: "Match", value: "Curated" }
                ]}
                rows={[
                  { label: "Introductions we stand behind" },
                  { label: "Functional specialists" },
                  { label: "Execution support" }
                ]}
              />
            </Floating>
          </div>
        </HeroGraphicShell>
      );

    case "about":
      return (
        <HeroGraphicShell variant={variant} className={className}>
          <div className={stage}>
            <Floating
              className="absolute left-7 top-8 w-[290px] rotate-[-2deg] md:w-[360px]"
              z={30}
              delay={0}
            >
              <GlassCard
                eyebrow="WHY WE EXIST"
                title="Capital with context"
                tag="About"
                icon={FileText}
                metrics={[
                  { label: "Approach", value: "Operator" },
                  { label: "Speed", value: "Decisive" }
                ]}
                rows={[
                  { label: "Retention compounds" },
                  { label: "Measurable involvement" },
                  { label: "Speed signals conviction" }
                ]}
              />
            </Floating>
            <Floating
              className="absolute right-7 top-[200px] w-[240px] rotate-[2deg] md:top-[235px] md:w-[280px]"
              z={20}
              delay={0.35}
            >
              <GlassCard
                eyebrow="BUILT SO FAR"
                title="Platforms + add-ons"
                tag="Track"
                icon={Sparkles}
                metrics={[
                  { label: "Platforms", value: "6" },
                  { label: "Add-ons", value: "5" }
                ]}
                rows={[
                  { label: "Platform investments" },
                  { label: "Bolt-on acquisitions" },
                  { label: "Successful exits" }
                ]}
              />
            </Floating>
          </div>
        </HeroGraphicShell>
      );

    case "contact":
      return (
        <HeroGraphicShell variant={variant} className={className}>
          <div className={stage}>
            <Floating
              className="absolute left-7 top-8 w-[290px] rotate-[-2deg] md:w-[360px]"
              z={30}
              delay={0}
            >
              <GlassCard
                eyebrow="GET IN TOUCH"
                title="Quick intro + next step"
                tag="Contact"
                icon={Mail}
                metrics={[
                  { label: "Response", value: "Fast" },
                  { label: "Next", value: "Call" }
                ]}
                rows={[
                  { label: "Company + role" },
                  { label: "What you’re looking for" },
                  { label: "Additional context" }
                ]}
              />
            </Floating>
            <Floating
              className="absolute right-7 top-[210px] w-[240px] rotate-[2deg] md:top-[245px] md:w-[280px]"
              z={20}
              delay={0.35}
            >
              <GlassCard
                eyebrow="REACH US"
                title="Prefer direct email"
                tag="Info"
                icon={MessagesSquare}
                metrics={[
                  { label: "City", value: "Palo Alto" },
                  { label: "Address", value: "Lytton" }
                ]}
                rows={[
                  { label: "info@softwaregrowthpartners.com" },
                  { label: "Palo Alto, CA" },
                  { label: "530 Lytton Ave" }
                ]}
              />
            </Floating>
          </div>
        </HeroGraphicShell>
      );

    case "insights":
      return (
        <HeroGraphicShell variant={variant} className={className}>
          <div className={stage}>
            <Floating
              className="absolute left-7 top-8 w-[290px] rotate-[-2deg] md:w-[360px]"
              z={30}
              delay={0}
            >
              <GlassCard
                eyebrow="INSIGHTS"
                title="Operator-grade frameworks"
                tag="Blog"
                icon={FileText}
                metrics={[
                  { label: "Cadence", value: "Monthly" },
                  { label: "Signal", value: "High" }
                ]}
                rows={[
                  { label: "GTM cadence" },
                  { label: "Product & AI" },
                  { label: "Talent + org design" }
                ]}
              />
            </Floating>
            <Floating
              className="absolute right-7 top-[210px] w-[240px] rotate-[2deg] md:top-[245px] md:w-[280px]"
              z={20}
              delay={0.35}
            >
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-950/35 shadow-[0_32px_90px_-55px_rgba(0,255,255,0.55)] backdrop-blur">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(800px_circle_at_10%_0%,rgba(255,255,255,0.10),transparent_55%)]" />
                <div className="relative flex items-center justify-between gap-4 px-6 py-5">
                  <p className="text-[11px] font-semibold tracking-[0.26em] text-slate-400">
                    TOPICS
                  </p>
                  <span className="sgpf-icon-tile sgpf-icon-tile-sm shadow-[0_14px_35px_-22px_rgba(0,255,255,0.8)]">
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
                <div className="relative flex flex-wrap gap-2 px-6 pb-6">
                  {["Add-ons", "Pricing", "Scorecards", "Retention"].map((x) => (
                    <span
                      key={x}
                      className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[11px] font-semibold text-slate-200"
                    >
                      {x}
                    </span>
                  ))}
                </div>
              </div>
            </Floating>
          </div>
        </HeroGraphicShell>
      );

    default: {
      const _exhaustive: never = variant;
      return _exhaustive;
    }
  }
}
