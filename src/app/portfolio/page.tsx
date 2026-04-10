import { CTASection } from "@/components/CTASection";
import { HeroSection } from "@/components/HeroSection";
import { HeroGraphic } from "@/components/HeroGraphic";
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
    description: "AI-powered eDiscovery built for modern legal teams.",
    metrics: [
      { label: "Current Platform", value: "eDiscovery Software" },
      { label: "Focus", value: "Enterprise GTM · Talent · Product acceleration" }
    ]
  },
  {
    id: "feat-meshiq",
    name: "MeshIQ",
    logo: MeshIQLogo,
    sector: "Integration",
    group: "Platform" as const,
    status: "Active" as const,
    description: "Bringing visibility to enterprise messaging infrastructure.",
    metrics: [
      { label: "Current Platform", value: "Integration & Middleware Intelligence" },
      { label: "Focus", value: "Market expansion · Product depth · Channel strategy" }
    ]
  },
  {
    id: "feat-clearlyrated",
    name: "ClearlyRated",
    logo: ClearlyRatedLogo,
    sector: "Reputation",
    group: "Platform" as const,
    status: "Active" as const,
    description: "Building the standard for service quality in professional services.",
    metrics: [
      { label: "Current Platform", value: "B2B Ratings & Reviews" },
      { label: "Add-on", value: "ClientSavvy to deepen client intelligence" }
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
        title="Built Alongside Founders. Not Just Funded."
        subtitle="From first capital to scaled platforms, these are the companies we’ve helped build, expand, and evolve."
        actions={[
          { label: "Talk to Us", href: "/contact", variant: "primary" },
          { label: "Investment Focus", href: "/investment-focus", variant: "secondary" }
        ]}
        right={<HeroGraphic variant="portfolio" />}
        rightParallax
      />

      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(900px_circle_at_85%_10%,rgba(0,255,255,0.10),transparent_60%),radial-gradient(900px_circle_at_20%_80%,rgba(255,255,255,0.04),transparent_60%)]" />
        <div className="container relative z-10 py-16">
          <div className="space-y-2">
            <p className="text-xs font-semibold tracking-[0.25em] text-accent/80">
              CURRENT INVESTMENTS
            </p>
            <h2 className="text-2xl font-semibold text-white md:text-3xl">
              Current platforms
            </h2>
            <p className="max-w-3xl text-sm leading-relaxed text-slate-200 md:text-base">
              Built alongside founders, supported through product, go-to-market, talent, and M&A.
            </p>
          </div>

          <div className="sgpf-panel sgpf-panel-glow mt-10 p-8 md:p-10">
            <div className="divide-y divide-white/10 overflow-hidden rounded-[22px] border border-white/10 bg-black/25">
              {featuredCompanies.map((company) => (
                <div key={company.id} className="px-6 py-6">
                  <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-black/30">
                        <Image
                          src={company.logo}
                          alt={company.name}
                          className="h-full w-full object-contain p-1.5"
                        />
                      </div>
                      <div className="min-w-0">
                        <p className="text-base font-semibold text-white">
                          {company.name}
                        </p>
                        <p className="mt-1 text-xs text-slate-300">
                          {company.sector} • {company.group} • {company.status}
                        </p>
                        <p className="mt-3 text-sm leading-relaxed text-slate-200">
                          {company.description}
                        </p>
                      </div>
                    </div>

                    <div className="grid gap-2 sm:grid-cols-2 lg:w-[420px] lg:shrink-0">
                      {company.metrics.map((metric) => (
                        <div
                          key={metric.label}
                          className="rounded-xl border border-white/10 bg-black/25 px-4 py-3"
                        >
                          <p className="text-[11px] font-semibold tracking-[0.22em] text-slate-400">
                            {metric.label}
                          </p>
                          <p className="mt-2 text-sm font-semibold text-white">
                            {metric.value}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FilterablePortfolioGrid
        eyebrow="PORTFOLIO GRID"
        title="Explore the portfolio"
        subtitle="Filter by sector and status. Designed for scanning platforms, tuck-ins, and outcomes."
        companies={companies}
      />

      <section className="relative overflow-hidden border-y border-white/10 bg-black/30">
        <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(900px_circle_at_10%_10%,rgba(0,255,255,0.10),transparent_55%),radial-gradient(900px_circle_at_85%_80%,rgba(255,255,255,0.04),transparent_60%)]" />
        <div className="container relative z-10 py-16">
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
            <div className="sgpf-panel sgpf-panel-glow p-8 md:p-10 lg:col-span-2">
              <p className="text-sm font-semibold text-white">Platforms</p>
              <div className="mt-6 divide-y divide-white/10 overflow-hidden rounded-[22px] border border-white/10 bg-black/25">
                {[
                  { name: "Venio Systems", logo: VenioLogo },
                  { name: "MeshIQ", logo: MeshIQLogo },
                  { name: "ClearlyRated", logo: ClearlyRatedLogo }
                ].map((item) => (
                  <div
                    key={item.name}
                    className="flex items-center gap-4 px-6 py-4"
                  >
                    <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-black/30">
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

            <div className="sgpf-panel sgpf-panel-glow p-8 md:p-10 lg:col-span-2">
              <p className="text-sm font-semibold text-white">Add-ons + outcomes</p>
              <div className="mt-6 divide-y divide-white/10 overflow-hidden rounded-[22px] border border-white/10 bg-black/25">
                {[
                  { left: "Cleo", leftLogo: CleoLogo, right: "Extol", rightLogo: ExtolLogo, year: "2016" },
                  { left: "Netreo", leftLogo: NetreoLogo, right: "CloudMonix", rightLogo: CloudMonixLogo, year: "2020" },
                  { left: "Netreo", leftLogo: NetreoLogo, right: "Stackify", rightLogo: StackifyLogo, year: "2021" },
                  { left: "Appsian", leftLogo: AppsianLogo, right: "Xpandion", rightLogo: XpandionLogo, year: "2021" },
                  { left: "ClearlyRated", leftLogo: ClearlyRatedLogo, right: "ClientSavvy", rightLogo: ClientSavvyLogo, year: "2025" }
                ].map((row) => (
                  <div
                    key={`${row.left}-${row.right}-${row.year}`}
                    className="flex flex-wrap items-center justify-between gap-3 px-6 py-4"
                  >
                    <div className="flex items-center gap-2">
                      <div className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-black/30">
                        <Image src={row.leftLogo} alt={row.left} className="h-full w-full object-contain p-1" />
                      </div>
                      <span className="text-sm font-semibold text-white">{row.left}</span>
                    </div>

                    <span className="text-xs font-semibold tracking-[0.22em] text-accent/80">
                      → {row.year}
                    </span>

                    <div className="flex items-center gap-2">
                      <div className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-black/30">
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

          <div className="sgpf-panel sgpf-panel-glow mt-10 p-8 md:p-10">
            <div className="divide-y divide-white/10 overflow-hidden rounded-[22px] border border-white/10 bg-black/25">
              {valueCreationHighlights.map((item) => (
                <div key={item.id} className="px-6 py-6">
                  <p className="text-base font-semibold text-white">{item.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-200">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready for what comes next?"
        description="A focused conversation with a quick decision, and no wasted time."
        primaryAction={{ label: "Get in Touch", href: "/contact" }}
      />
    </>
  );
}
