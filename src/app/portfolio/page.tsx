import { CTASection } from "@/components/CTASection";
import { HeroSection } from "@/components/HeroSection";
import { FilterablePortfolioGrid } from "@/components/FilterablePortfolioGrid";
import Image from "next/image";

import AppsianLogo from "./company logos/Appsian.jpg";
import ClearlyRatedLogo from "./company logos/Clearly-rated.jpg";
import ClientSavvyLogo from "./company logos/Client-Savvy.jpg";
import CloudMonixLogo from "./company logos/CloudMonix-Logo.jpg";
import ExtolLogo from "./company logos/Extol-Logo.jpg";
import StackifyLogo from "./company logos/Stackify-Logo-nw.jpg";
import XpandionLogo from "./company logos/Xpandion-Logo.jpg";
import CleoLogo from "./company logos/cleo.jpg";
import MeshIQLogo from "./company logos/meshIQ.jpg";
import NetreoLogo from "./company logos/natreo.jpg";
import VenioLogo from "./company logos/venio.jpg";

const featuredCompanies = [
  {
    id: "feat-venio",
    name: "Venio Systems",
    logo: VenioLogo,
    sector: "eDiscovery",
    group: "Platform" as const,
    status: "Active" as const,
    description: "eDiscovery Software Platform",
    metrics: [
      { label: "Focus", value: "GTM + product" },
      { label: "Add-ons", value: "Potential" }
    ]
  },
  {
    id: "feat-meshiq",
    name: "MeshIQ",
    logo: MeshIQLogo,
    sector: "Integration",
    group: "Platform" as const,
    status: "Active" as const,
    description: "Intelligence From Integration",
    metrics: [
      { label: "Focus", value: "Positioning" },
      { label: "Expansion", value: "Enterprise" }
    ]
  },
  {
    id: "feat-clearlyrated",
    name: "ClearlyRated",
    logo: ClearlyRatedLogo,
    sector: "Reputation",
    group: "Platform" as const,
    status: "Active" as const,
    description: "Experience & Reputation Platform",
    metrics: [
      { label: "Focus", value: "Growth execution" },
      { label: "Add-ons", value: "Active" }
    ]
  }
];

const companies = [
  {
    id: "venio",
    name: "Venio Systems",
    logo: VenioLogo,
    sector: "eDiscovery",
    group: "Platform" as const,
    status: "Active" as const,
    outcomes: ["Platform"]
  },
  {
    id: "meshiq",
    name: "MeshIQ",
    logo: MeshIQLogo,
    sector: "Integration",
    group: "Platform" as const,
    status: "Active" as const,
    outcomes: ["Platform"]
  },
  {
    id: "clearlyrated",
    name: "ClearlyRated",
    logo: ClearlyRatedLogo,
    sector: "Reputation",
    group: "Platform" as const,
    status: "Active" as const,
    outcomes: ["Platform"]
  },
  {
    id: "clientsavvy",
    name: "ClientSavvy",
    logo: ClientSavvyLogo,
    sector: "Experience",
    group: "Add-on" as const,
    status: "Acquired" as const,
    outcomes: ["Acquired by ClearlyRated — 2025"]
  },
  {
    id: "extol",
    name: "Extol",
    logo: ExtolLogo,
    sector: "Integration",
    group: "Add-on" as const,
    status: "Acquired" as const,
    outcomes: ["Acquired by Cleo — 2016"]
  },
  {
    id: "cloudmonix",
    name: "CloudMonix",
    logo: CloudMonixLogo,
    sector: "Monitoring",
    group: "Add-on" as const,
    status: "Acquired" as const,
    outcomes: ["Acquired by Netreo — 2020"]
  },
  {
    id: "stackify",
    name: "Stackify",
    logo: StackifyLogo,
    sector: "Monitoring",
    group: "Add-on" as const,
    status: "Acquired" as const,
    outcomes: ["Acquired by Netreo — 2021"]
  },
  {
    id: "xpandion",
    name: "Xpandion",
    logo: XpandionLogo,
    sector: "Security",
    group: "Add-on" as const,
    status: "Acquired" as const,
    outcomes: ["Acquired by Appsian — 2021"]
  },
  {
    id: "cleo",
    name: "Cleo",
    logo: CleoLogo,
    sector: "Integration",
    group: "Prior" as const,
    status: "Active" as const,
    outcomes: ["Prior investment"]
  },
  {
    id: "appsian",
    name: "Appsian",
    logo: AppsianLogo,
    sector: "Security",
    group: "Prior" as const,
    status: "Active" as const,
    outcomes: ["Prior investment"]
  },
  {
    id: "netreo",
    name: "Netreo",
    logo: NetreoLogo,
    sector: "Monitoring",
    group: "Prior" as const,
    status: "Active" as const,
    outcomes: ["Prior investment"]
  }
];

const valueCreationHighlights = [
  {
    id: "h-gtm",
    title: "Go-to-market",
    body: "Positioning, pricing, sales strategy, marketing, and partnerships."
  },
  {
    id: "h-product",
    title: "Product & AI",
    body: "Roadmap focus, platform strategy, and AI-enabled opportunities."
  },
  {
    id: "h-talent",
    title: "Talent",
    body: "Leadership hiring, team structure, incentives, and execution cadence."
  },
  {
    id: "h-ma",
    title: "M&A",
    body: "Add-on sourcing, diligence, integration planning, and value capture."
  }
];

export default function PortfolioPage() {
  return (
    <>
      <HeroSection
        eyebrow="PORTFOLIO"
        title="Platforms, add-ons, and outcomes"
        subtitle="A software portfolio built to compound value through GTM execution, product strategy, and disciplined tuck-ins."
        actions={[
          { label: "Investment Focus", href: "/investment-focus", variant: "primary" },
          { label: "Contact us", href: "/contact", variant: "secondary" }
        ]}
      />

      <section>
        <div className="container py-16">
          <div className="space-y-2">
            <p className="text-xs font-semibold tracking-[0.25em] text-accent/80">
              SELECT PLATFORMS
            </p>
            <h2 className="text-2xl font-semibold text-white md:text-3xl">
              Platforms with execution-led growth
            </h2>
            <p className="max-w-3xl text-sm leading-relaxed text-slate-200 md:text-base">
              A few representative platforms. The work is always the same: align on the plan, build the cadence, and execute.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {featuredCompanies.map((company) => (
              <div
                key={company.id}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition will-change-transform hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.05]"
              >
                <div className="flex items-start justify-between gap-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-black/30">
                      <Image
                        src={company.logo}
                        alt={company.name}
                        className="h-full w-full object-contain p-1.5"
                      />
                    </div>
                    <div>
                      <p className="text-base font-semibold text-white">{company.name}</p>
                      <p className="mt-1 text-xs text-slate-300">
                        {company.sector} • {company.group}
                      </p>
                    </div>
                  </div>
                  <span className="mt-2 h-2.5 w-2.5 rounded-full bg-accent/70 opacity-70" />
                </div>
                <p className="mt-1 text-xs text-slate-300">
                  {company.status}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-slate-200">
                  {company.description}
                </p>
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
              </div>
            ))}
          </div>
        </div>
      </section>

      <FilterablePortfolioGrid
        eyebrow="PORTFOLIO GRID"
        title="Explore the portfolio"
        subtitle="Filter by sector and status. Designed for scanning platforms, tuck-ins, and outcomes."
        companies={companies}
      />

      <section className="border-y border-white/10 bg-black/30">
        <div className="container py-16">
          <div className="space-y-2">
            <p className="text-xs font-semibold tracking-[0.25em] text-accent/80">
              PLATFORM MAP
            </p>
            <h2 className="text-2xl font-semibold text-white md:text-3xl">
              Platforms + tuck-ins
            </h2>
            <p className="max-w-3xl text-sm leading-relaxed text-slate-200 md:text-base">
              A simplified view of how platform businesses can compound through disciplined add-ons.
            </p>
          </div>

          <div className="mt-10 grid gap-4 lg:grid-cols-4">
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 lg:col-span-2">
              <p className="text-sm font-semibold text-white">Platforms</p>
              <div className="mt-5 grid gap-2 sm:grid-cols-2">
                {[
                  { name: "Venio Systems", logo: VenioLogo },
                  { name: "MeshIQ", logo: MeshIQLogo },
                  { name: "ClearlyRated", logo: ClearlyRatedLogo }
                ].map((item) => (
                  <div
                    key={item.name}
                    className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/25 px-4 py-3"
                  >
                    <div className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-black/30">
                      <Image
                        src={item.logo}
                        alt={item.name}
                        className="h-full w-full object-contain p-1"
                      />
                    </div>
                    <span className="text-sm font-semibold text-white">
                      {item.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 lg:col-span-2">
              <p className="text-sm font-semibold text-white">Add-ons + outcomes</p>
              <div className="mt-5 grid gap-2">
                {[
                  { left: "Cleo", leftLogo: CleoLogo, right: "Extol", rightLogo: ExtolLogo, year: "2016" },
                  { left: "Netreo", leftLogo: NetreoLogo, right: "CloudMonix", rightLogo: CloudMonixLogo, year: "2020" },
                  { left: "Netreo", leftLogo: NetreoLogo, right: "Stackify", rightLogo: StackifyLogo, year: "2021" },
                  { left: "Appsian", leftLogo: AppsianLogo, right: "Xpandion", rightLogo: XpandionLogo, year: "2021" },
                  { left: "ClearlyRated", leftLogo: ClearlyRatedLogo, right: "ClientSavvy", rightLogo: ClientSavvyLogo, year: "2025" }
                ].map((row) => (
                  <div
                    key={`${row.left}-${row.right}-${row.year}`}
                    className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-white/10 bg-black/25 px-4 py-3"
                  >
                    <div className="flex items-center gap-2">
                      <div className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-black/30">
                        <Image src={row.leftLogo} alt={row.left} className="h-full w-full object-contain p-1" />
                      </div>
                      <span className="text-sm font-semibold text-white">{row.left}</span>
                    </div>

                    <span className="text-xs font-semibold tracking-[0.22em] text-accent/80">
                      → {row.year}
                    </span>

                    <div className="flex items-center gap-2">
                      <div className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-black/30">
                        <Image src={row.rightLogo} alt={row.right} className="h-full w-full object-contain p-1" />
                      </div>
                      <span className="text-sm font-semibold text-white">{row.right}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container py-16">
          <div className="space-y-2">
            <p className="text-xs font-semibold tracking-[0.25em] text-accent/80">
              VALUE CREATION
            </p>
            <h2 className="text-2xl font-semibold text-white md:text-3xl">
              Playbook themes
            </h2>
            <p className="max-w-3xl text-sm leading-relaxed text-slate-200 md:text-base">
              Repeatable levers we apply across portfolio companies.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {valueCreationHighlights.map((item) => (
              <div
                key={item.id}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition will-change-transform hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.05]"
              >
                <p className="text-base font-semibold text-white">{item.title}</p>
                <p className="mt-3 text-sm leading-relaxed text-slate-200">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Want to talk through a plan?"
        description="Submit a pitch. If there’s fit, we’ll follow up quickly with clear next steps."
        primaryAction={{ label: "Contact us", href: "/contact" }}
        secondaryAction={{ label: "View Insights", href: "/blog" }}
      />
    </>
  );
}
