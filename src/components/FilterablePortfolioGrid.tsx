"use client";

import { useMemo, useState } from "react";
import Image, { type StaticImageData } from "next/image";

type PortfolioCompany = {
  id: string;
  name: string;
  logo?: StaticImageData;
  group: "Platform" | "Add-on" | "Prior";
  sector: string;
  status: "Active" | "Acquired";
  description?: string;
  outcomes?: string[];
  metrics?: { label: string; value: string }[];
};

type FilterablePortfolioGridProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  companies: PortfolioCompany[];
};

const statuses: Array<PortfolioCompany["status"] | "All"> = [
  "All",
  "Active",
  "Acquired"
];

export function FilterablePortfolioGrid({
  eyebrow = "PORTFOLIO GRID",
  title,
  subtitle,
  companies
}: FilterablePortfolioGridProps) {
  const sectors = useMemo(() => {
    const unique = Array.from(new Set(companies.map((c) => c.sector))).sort();
    return ["All", ...unique] as const;
  }, [companies]);

  const [sector, setSector] = useState<(typeof sectors)[number]>("All");
  const [status, setStatus] = useState<(typeof statuses)[number]>("All");

  const filtered = useMemo(() => {
    return companies.filter((company) => {
      const sectorOk = sector === "All" || company.sector === sector;
      const statusOk = status === "All" || company.status === status;
      return sectorOk && statusOk;
    });
  }, [companies, sector, status]);

  return (
    <section>
      <div className="container py-16">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div className="space-y-2">
          <p className="text-xs font-semibold tracking-[0.25em] text-accent/80">
            {eyebrow}
          </p>
          <h2 className="text-2xl font-semibold text-white md:text-3xl">
            {title}
          </h2>
          {subtitle ? (
            <p className="text-sm leading-relaxed text-slate-200 md:text-base">
              {subtitle}
            </p>
          ) : null}
        </div>

        <div className="flex flex-wrap gap-3">
          <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] p-1">
            {sectors.map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => setSector(s)}
                className={[
                  "rounded-full px-4 py-2 text-xs font-semibold transition",
                  sector === s
                    ? "border border-accent/35 bg-accent/10 text-white"
                    : "border border-transparent text-slate-200 hover:bg-white/[0.04]"
                ].join(" ")}
              >
                {s}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] p-1">
            {statuses.map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => setStatus(s)}
                className={[
                  "rounded-full px-4 py-2 text-xs font-semibold transition",
                  status === s
                    ? "border border-accent/35 bg-accent/10 text-white"
                    : "border border-transparent text-slate-200 hover:bg-white/[0.04]"
                ].join(" ")}
              >
                {s}
              </button>
            ))}
          </div>
        </div>
        </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((company) => (
          <div
            key={company.id}
            className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition will-change-transform hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.05]"
          >
            <div className="flex items-start justify-between gap-6">
              <div>
                {company.logo ? (
                  <div className="mb-4 flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-black/30">
                    <Image
                      src={company.logo}
                      alt={company.name}
                      className="h-full w-full object-contain p-1.5"
                    />
                  </div>
                ) : null}
                <p className="text-base font-semibold text-white">
                  {company.name}
                </p>
                <p className="mt-1 text-xs text-slate-300">
                  {company.sector} • {company.group} • {company.status}
                </p>
              </div>
              <span className="mt-1 h-2.5 w-2.5 rounded-full bg-accent/70 opacity-70" />
            </div>

            {company.description ? (
              <p className="mt-4 text-sm leading-relaxed text-slate-200">
                {company.description}
              </p>
            ) : null}

            {company.metrics?.length ? (
              <div className="mt-5 grid gap-2">
                {company.metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-black/25 px-4 py-3"
                  >
                    <span className="text-xs text-slate-300">{metric.label}</span>
                    <span className="text-sm font-semibold text-white">
                      {metric.value}
                    </span>
                  </div>
                ))}
              </div>
            ) : null}

            {company.outcomes?.length ? (
              <div className="mt-5 flex flex-wrap gap-2">
                {company.outcomes.map((outcome) => (
                  <span
                    key={outcome}
                    className="rounded-full border border-white/10 bg-black/25 px-3 py-1 text-xs text-slate-200"
                  >
                    {outcome}
                  </span>
                ))}
              </div>
            ) : null}
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}
