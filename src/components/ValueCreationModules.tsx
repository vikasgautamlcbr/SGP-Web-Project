"use client";

import { useMemo, useState, type ReactNode } from "react";

type ModuleItem = {
  id: string;
  title: string;
  description: string;
  bullets?: string[];
  meta?: { label: string; value: string }[];
};

type ValueCreationModulesProps = {
  mark?: ReactNode;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  items: ModuleItem[];
  align?: "left" | "center";
  variant?: "default" | "panel";
};

export function ValueCreationModules({
  mark,
  eyebrow = "VALUE CREATION",
  title,
  subtitle,
  items,
  align = "left",
  variant = "default"
}: ValueCreationModulesProps) {
  const initialId = useMemo(() => items[0]?.id ?? "default", [items]);
  const [activeId, setActiveId] = useState(initialId);

  const active = useMemo(
    () => items.find((item) => item.id === activeId) ?? items[0],
    [activeId, items]
  );

  const metaRows = useMemo(
    () =>
      active?.meta?.length
        ? active.meta
        : [
            { label: "Cadence", value: "Hands-on" },
            { label: "Support", value: "Operator-led" },
            { label: "Add-ons", value: "Strategic" }
          ],
    [active]
  );

  return (
    <section className="relative overflow-hidden border-y border-white/10 bg-black/30">
      <div className="pointer-events-none absolute -left-40 top-10 z-0 h-[520px] w-[520px] rounded-full bg-accent/10 blur-3xl opacity-60 [animation:sgpf-drift_24s_ease-in-out_infinite]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 z-0 h-[520px] w-[520px] rounded-full bg-white/10 blur-3xl opacity-20" />
      <div className="container relative z-10 py-20 md:py-24">
        <div className={align === "center" ? "space-y-3 text-center" : "space-y-3"}>
          <div className={align === "center" ? "flex items-center justify-center gap-3" : "flex items-center gap-3"}>
            {mark ? <div className="shrink-0">{mark}</div> : null}
            <p className="text-xs font-semibold tracking-[0.25em] text-accent/80">
              {eyebrow}
            </p>
          </div>
          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">
            {title}
          </h2>
          {subtitle ? (
            <p className={align === "center" ? "mx-auto max-w-3xl text-sm leading-relaxed text-slate-200 md:text-lg" : "max-w-3xl text-sm leading-relaxed text-slate-200 md:text-lg"}>
              {subtitle}
            </p>
          ) : null}
        </div>

        {variant === "panel" ? (
          <div className="relative mt-10">
            <div
              className={[
                "flex snap-x snap-mandatory gap-2 overflow-x-auto pb-2 sgpf-no-scrollbar",
                align === "center" ? "justify-center" : ""
              ].join(" ")}
            >
              {items.map((item) => {
                const isActive = item.id === activeId;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setActiveId(item.id)}
                    className={[
                      "snap-center shrink-0 rounded-full border px-5 py-2 text-sm font-semibold transition",
                      isActive
                        ? "border-accent/50 bg-accent/15 text-white shadow-glow"
                        : "border-white/10 bg-black/25 text-slate-200 hover:border-white/20 hover:bg-white/[0.04]"
                    ].join(" ")}
                  >
                    {item.title}
                  </button>
                );
              })}
            </div>

            <div className="sgpf-panel sgpf-panel-glow mt-8 p-10 md:p-12">
              <div className="relative grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
                <div className={align === "center" ? "space-y-5 text-center lg:text-left" : "space-y-5"}>
                  <p className="text-xs font-semibold tracking-[0.25em] text-accent/80">
                    SERVICE
                  </p>
                  <h3 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
                    {active?.title}
                  </h3>
                  <p className={align === "center" ? "mx-auto max-w-2xl text-sm leading-relaxed text-slate-200 md:text-base lg:mx-0" : "max-w-2xl text-sm leading-relaxed text-slate-200 md:text-base"}>
                    {active?.description}
                  </p>

                  {active?.bullets?.length ? (
                    <ul className={align === "center" ? "mx-auto max-w-2xl space-y-3 text-left lg:mx-0" : "max-w-2xl space-y-3"}>
                      {active.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-3">
                          <span className="mt-2 h-2 w-2 rounded-full bg-accent/70" />
                          <p className="text-sm leading-relaxed text-slate-200">{bullet}</p>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>

                <div className="rounded-[44px] border border-white/10 bg-black/30 p-8">
                  <p className="text-xs font-semibold tracking-[0.25em] text-accent/80">
                    OUTCOMES
                  </p>
                  <p className="mt-4 text-lg font-semibold text-white">
                    Focused, repeatable execution
                  </p>
                  <div className="mt-6 grid gap-2">
                    {metaRows.map((row) => (
                      <div
                        key={row.label}
                        className="flex items-center justify-between gap-6 rounded-2xl border border-white/10 bg-black/25 px-4 py-3"
                      >
                        <span className="text-sm text-slate-200">{row.label}</span>
                        <span className="text-sm font-semibold text-white">{row.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="relative mt-10 grid gap-10 lg:grid-cols-[320px_1fr] lg:items-start">
          <div className="space-y-3">
            <p className="text-xs font-semibold tracking-[0.25em] text-slate-400">
              MODULES
            </p>
            <div className="grid gap-1">
              {items.map((item) => {
                const isActive = item.id === activeId;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setActiveId(item.id)}
                    className={[
                      "flex w-full items-center justify-between gap-4 rounded-2xl px-4 py-3 text-left text-base font-semibold transition",
                      isActive
                        ? "bg-white/[0.04] text-white"
                        : "bg-transparent text-slate-200 hover:bg-white/[0.03]"
                    ].join(" ")}
                  >
                    <span>{item.title}</span>
                    <span
                      className={[
                        "h-2 w-2 rounded-full",
                        isActive ? "bg-accent shadow-glow" : "bg-white/10"
                      ].join(" ")}
                    />
                  </button>
                );
              })}
            </div>
          </div>

          <div className="grid gap-4 lg:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition will-change-transform hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.05]">
              <div className="space-y-3">
                <p className="text-xs font-semibold tracking-[0.25em] text-accent/80">
                  SERVICE
                </p>
                <h3 className="text-2xl font-semibold text-white md:text-3xl">
                  {active?.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-200 md:text-base">
                  {active?.description}
                </p>
              </div>

              {active?.bullets?.length ? (
                <div className="mt-6 grid gap-2">
                  {active.bullets.map((bullet) => (
                    <div
                      key={bullet}
                      className="flex items-start gap-3 rounded-2xl border border-white/10 bg-black/25 px-4 py-3"
                    >
                      <span className="mt-1.5 h-2 w-2 rounded-full bg-accent/70" />
                      <p className="text-sm text-slate-200">{bullet}</p>
                    </div>
                  ))}
                </div>
              ) : null}
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition will-change-transform hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.05]">
              <div className="space-y-3">
                <p className="text-xs font-semibold tracking-[0.25em] text-accent/80">
                  OUTCOMES
                </p>
                <h3 className="text-2xl font-semibold text-white md:text-3xl">
                  Focused, repeatable execution
                </h3>
                <p className="text-sm leading-relaxed text-slate-200 md:text-base">
                  Built to support growth-stage teams through the levers that matter.
                </p>
              </div>

              <div className="mt-6 grid gap-2">
                {metaRows.map((row) => (
                  <div
                    key={row.label}
                    className="flex items-start gap-3 rounded-2xl border border-white/10 bg-black/25 px-4 py-3"
                  >
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-accent/70" />
                    <div className="flex w-full items-center justify-between gap-6">
                      <span className="text-sm text-slate-200">{row.label}</span>
                      <span className="text-sm font-semibold text-white">
                        {row.value}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        )}
      </div>
    </section>
  );
}
