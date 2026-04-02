import { HeroSection } from "@/components/HeroSection";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BriefcaseBusiness, Building2, ChartNoAxesCombined, Clock, Code2, Sparkles } from "lucide-react";

import { CTASection } from "@/components/CTASection";
import { ValueCreationModules } from "@/components/ValueCreationModules";

import ClearlyRatedLogo from "./portfolio/company logos/Clearly-rated.jpg";
import ClientSavvyLogo from "./portfolio/company logos/Client-Savvy.jpg";
import CloudMonixLogo from "./portfolio/company logos/CloudMonix-Logo.jpg";
import MeshIQLogo from "./portfolio/company logos/meshIQ.jpg";
import StackifyLogo from "./portfolio/company logos/Stackify-Logo-nw.jpg";
import VenioLogo from "./portfolio/company logos/venio.jpg";
import AndrewImg from "./team/member images/Andrew.jpg";
import DevanshImg from "./team/member images/devansh.jpg";
import SreenathImg from "./team/member images/Sreenath.jpg";
import SumitImg from "./team/member images/garg-sumit.jpg";
import TusharImg from "./team/member images/tushar.png";

import BlogImg1 from "@/assets/blogs/insight-1.svg";
import BlogImg2 from "@/assets/blogs/insight-2.svg";
import BlogImg3 from "@/assets/blogs/insight-3.svg";
import BlogImg4 from "@/assets/blogs/insight-4.svg";
import BlogImg5 from "@/assets/blogs/insight-5.svg";

const edge = [
  {
    id: "edge-1",
    icon: Building2,
    title: "Growth equity, built for operators",
    body: "We invest in B2B software and partner closely with management teams to scale go-to-market and build durable platforms."
  },
  {
    id: "edge-2",
    icon: Code2,
    title: "Software-only, thesis-driven",
    body: "Mission-critical workflows, clear customer ROI, and strong product foundations with room to sharpen positioning and execution."
  },
  {
    id: "edge-3",
    icon: BriefcaseBusiness,
    title: "Platform + add-on strategy",
    body: "We build compounding value with disciplined tuck-ins, integration planning, and repeatable value capture."
  }
];

const investmentCriteria = [
  {
    id: "crit-1",
    icon: ChartNoAxesCombined,
    title: "Clear GTM expansion",
    body: "Pricing/packaging, enterprise motion, and a repeatable revenue engine."
  },
  {
    id: "crit-2",
    icon: Code2,
    title: "Product depth",
    body: "A strong core product with roadmap leverage and optional AI-enabled workflows."
  },
  {
    id: "crit-3",
    icon: Building2,
    title: "Enduring customers",
    body: "Retention, mission-critical use cases, and switching costs that compound."
  },
  {
    id: "crit-4",
    icon: BriefcaseBusiness,
    title: "Add-on runway",
    body: "A platform footprint where tuck-ins expand product breadth and distribution."
  }
];

const valueCreationModules = [
  {
    id: "vc-gtm",
    title: "GTM Engine",
    description: "Positioning, pricing, pipeline mechanics, and a cadence the whole company can run on.",
    bullets: ["Positioning and narrative", "Pricing and packaging", "Sales process + forecasting", "Partner and channel strategy"],
    meta: [
      { label: "Outcome", value: "Repeatable growth" },
      { label: "Cadence", value: "Weekly operating rhythm" },
      { label: "Focus", value: "Execution" }
    ]
  },
  {
    id: "vc-product",
    title: "Product Strategy & AI",
    description: "Roadmap focus, platform strategy, and pragmatic AI adoption that drives workflow ROI.",
    bullets: ["Roadmap prioritization", "Platform strategy", "AI-enabled workflows", "Customer value mapping"],
    meta: [
      { label: "Outcome", value: "Higher product value" },
      { label: "Focus", value: "Roadmap + narrative" },
      { label: "Execution", value: "Cross-functional" }
    ]
  },
  {
    id: "vc-talent",
    title: "Talent, Incentives & Org",
    description: "Leadership hiring, incentives, and operating structure built for scale.",
    bullets: ["Leadership hiring", "Org design", "Incentives and alignment", "Hiring plan + scorecards"],
    meta: [
      { label: "Outcome", value: "Stronger leadership" },
      { label: "Focus", value: "Team design" },
      { label: "Execution", value: "Operator-led" }
    ]
  },
  {
    id: "vc-ma",
    title: "Add-ons & Integration",
    description: "Sourcing, diligence, integration planning, and value capture for tuck-ins.",
    bullets: ["Add-on sourcing", "Diligence + integration", "Value capture plan", "Portfolio mapping"],
    meta: [
      { label: "Outcome", value: "Platform expansion" },
      { label: "Focus", value: "Disciplined M&A" },
      { label: "Execution", value: "Integration-ready" }
    ]
  }
];

const partnershipSteps = [
  {
    id: "step-1",
    title: "Align on the thesis",
    body: "We start with the business model, customer outcomes, and the roadmap to durable growth.",
    tags: ["Thesis", "Fit", "Underwrite"]
  },
  {
    id: "step-2",
    title: "Build the operating plan",
    body: "Define the few levers that matter, the scorecard, and the cadence to execute.",
    tags: ["Scorecard", "Cadence", "Owners"]
  },
  {
    id: "step-3",
    title: "Execute with the team",
    body: "Hands-on support across GTM, product, talent, and add-ons—focused on outcomes.",
    tags: ["Execution", "Operating support", "Outcomes"]
  },
  {
    id: "step-4",
    title: "Compound value",
    body: "Scale the platform, add capabilities via tuck-ins, and create long-term enterprise value.",
    tags: ["Platform", "Add-ons", "Compounding"]
  }
];

const leadership = [
  {
    id: "sumit-garg",
    name: "Sumit Garg",
    role: "Founding Partner",
    image: SumitImg,
    bio: "Tech investor/executive with ~20 years in industry. Experience leading software companies with operational, executive, finance and technical background.",
    meta: "MBA (UC Berkeley) • B.Tech CS (IIT-BHU)"
  },
  {
    id: "andrew-sabin",
    name: "Andrew Sabin",
    role: "Vice President",
    image: AndrewImg,
    bio: "Joined SGP in 2024; works on investment analysis, due diligence, and supporting portfolio companies. Previously at Updata Partners, Capstone, BlackRock."
  },
  {
    id: "devansh-goel",
    name: "Devansh Goel",
    role: "Portfolio Operations Associate",
    image: DevanshImg,
    bio: "Supports growth of portfolio companies, bringing prior experience in strategy, fundraising and consulting.",
    meta: "MBA (HKUST)"
  },
  {
    id: "sreenath-s",
    name: "Sreenath S",
    role: "Manager, Business Development",
    image: SreenathImg,
    bio: "Responsible for generating proprietary deal flow, sector research, and executive engagement. Background at Kingfish Group, GLG, Morgan Stanley."
  },
  {
    id: "tushar-shahani",
    name: "Tushar Shahani",
    role: "Business Development Analyst",
    image: TusharImg,
    bio: "Focus on sourcing and evaluating startups, deal flow, and early-stage investments. Founded a live-streaming commerce startup and worked at VC firms."
  }
];

const insightsPreview = [
  {
    id: "ins-1",
    label: "GROWTH",
    title: "How to build a repeatable GTM engine",
    excerpt: "A practical operating cadence for pricing, pipeline, and execution without the noise.",
    href: "/blog#gtm",
    date: "2026",
    readTime: "6 min"
  },
  {
    id: "ins-2",
    label: "PRODUCT",
    title: "Product strategy that scales a platform",
    excerpt: "Focus the roadmap, tighten the narrative, and build leverage across customer segments.",
    href: "/blog#product",
    date: "2026",
    readTime: "5 min"
  },
  {
    id: "ins-3",
    label: "M&A",
    title: "Add-ons: diligence → integration → value capture",
    excerpt: "A simple framework for tuck-ins that expands product breadth and distribution.",
    href: "/blog#add-ons",
    date: "2026",
    readTime: "7 min"
  },
  {
    id: "ins-4",
    label: "AI",
    title: "AI workflows that actually ship",
    excerpt: "A pragmatic approach to applying AI inside product and operations without breaking the roadmap.",
    href: "/blog#ai",
    date: "2026",
    readTime: "4 min"
  },
  {
    id: "ins-5",
    label: "OPERATIONS",
    title: "The scorecard: metrics that drive execution",
    excerpt: "How to pick the few numbers that matter and build a cadence the team can run weekly.",
    href: "/blog#scorecard",
    date: "2026",
    readTime: "5 min"
  }
];

const featuredPortfolio = [
  {
    id: "feat-venio",
    name: "Venio Systems",
    logo: VenioLogo,
    type: "Platform",
    note: "eDiscovery software platform.",
    outcome: "Platform"
  },
  {
    id: "feat-meshiq",
    name: "MeshIQ",
    logo: MeshIQLogo,
    type: "Platform",
    note: "Intelligence from integration.",
    outcome: "Platform"
  },
  {
    id: "feat-clearlyrated",
    name: "ClearlyRated",
    logo: ClearlyRatedLogo,
    type: "Platform",
    note: "Experience & reputation platform.",
    outcome: "Platform"
  },
  {
    id: "feat-clientsavvy",
    name: "ClientSavvy",
    logo: ClientSavvyLogo,
    type: "Add-on",
    note: "Acquired by ClearlyRated — 2025.",
    outcome: "Acquired"
  },
  {
    id: "feat-stackify",
    name: "Stackify",
    logo: StackifyLogo,
    type: "Add-on",
    note: "Acquired by Netreo — 2021.",
    outcome: "Acquired"
  },
  {
    id: "feat-cloudmonix",
    name: "CloudMonix",
    logo: CloudMonixLogo,
    type: "Add-on",
    note: "Acquired by Netreo — 2020.",
    outcome: "Acquired"
  }
];

export default function HomePage() {
  const blogImages = [BlogImg1, BlogImg2, BlogImg3, BlogImg4, BlogImg5];
  return (
    <>
      <HeroSection
        size="xl"
        rightParallax
        title={"Investing in Teams\nBuilding the Future of Software"}
        subtitle="We partner with growth-stage software companies to scale go-to-market, strengthen product strategy, execute add-on acquisitions, and build long-term enterprise value."
        actions={[
          { label: "View Portfolio", href: "/portfolio", variant: "primary" },
          { label: "Contact us", href: "/contact", variant: "secondary" }
        ]}
        right={
          <div className="relative h-[320px] w-[320px] md:h-[420px] md:w-[420px]">
            <div className="pointer-events-none absolute -inset-20 rounded-full bg-accent/15 blur-3xl opacity-60 [animation:sgpf-drift_18s_ease-in-out_infinite]" />
            <div className="pointer-events-none absolute -inset-10 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(0,255,255,0.22),transparent_60%)] blur-2xl opacity-70" />

            <div className="absolute inset-0 rounded-full border border-white/10 bg-black/20" />
            <div className="absolute inset-0 rounded-full bg-[conic-gradient(from_140deg,rgba(0,255,255,0.0),rgba(0,255,255,0.55),rgba(255,255,255,0.08),rgba(0,255,255,0.0))] [animation:sgpf-spin_28s_linear_infinite]" />
            <div className="absolute inset-10 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.14),rgba(0,0,0,0.0)_55%),radial-gradient(circle_at_70%_70%,rgba(0,255,255,0.26),rgba(0,0,0,0.0)_55%)] shadow-glow" />
            <div className="absolute inset-0 rounded-full border border-white/10" />

            <div className="absolute -right-4 top-10 w-[210px] rounded-3xl border border-white/10 bg-black/40 p-4 backdrop-blur [animation:sgpf-float_9s_ease-in-out_infinite] md:-right-8 md:top-14 md:w-[240px]">
              <p className="text-xs font-semibold tracking-[0.25em] text-accent/80">
                VALUE
              </p>
              <p className="mt-2 text-sm font-semibold text-white">
                Execution-led growth
              </p>
              <p className="mt-1 text-xs leading-relaxed text-slate-300">
                Go-to-market, product strategy, talent, and add-ons.
              </p>
            </div>

            <div className="absolute bottom-8 left-6 w-[220px] rounded-3xl border border-white/10 bg-black/40 px-4 py-4 backdrop-blur md:bottom-10 md:left-8">
              <div className="flex items-center gap-3">
                <span className="h-2.5 w-2.5 rounded-full bg-accent shadow-glow" />
                <p className="text-sm font-semibold text-white">Operator-led</p>
              </div>
              <p className="mt-2 text-xs leading-relaxed text-slate-300">
                Hands-on partnership with management teams.
              </p>
            </div>
          </div>
        }
      />

      <section className="relative overflow-hidden border-b border-white/10 py-16">
        <div className="pointer-events-none absolute inset-0 z-0 bg-aurora-edge" />
        <div className="container relative z-10">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="space-y-4 lg:self-center">
              <p className="text-xs font-semibold tracking-[0.25em] text-accent/80">
                THE EDGE
              </p>
              <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">
                A modern growth equity approach
              </h2>
              <p className="max-w-xl text-sm leading-relaxed text-slate-200 md:text-lg">
                Thesis-led investing, operator-grade execution, and disciplined add-ons—built to compound value over time.
              </p>
              <div className="flex flex-wrap gap-2 pt-1">
                {["Thesis-led", "Cadence-driven", "Outcome-first"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-black/25 px-4 py-2 text-xs font-semibold text-slate-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid gap-4 lg:self-center lg:my-auto">
              {edge.map((item, index) => (
                <div
                  key={item.id}
                  className={[
                    "rounded-[34px] border border-white/10 bg-white/[0.03] p-7 transition will-change-transform hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.05]",
                    index === 1 ? "lg:translate-x-6" : "",
                    index === 2 ? "lg:translate-x-12" : ""
                  ].join(" ")}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-accent/30 bg-accent/10">
                      <item.icon className="h-5 w-5 text-accent" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-base font-semibold tracking-tight text-white">
                        {item.title}
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-slate-200">
                        {item.body}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative">
        <div className="pointer-events-none absolute -right-40 top-10 z-0 h-[520px] w-[520px] rounded-full bg-accent/10 blur-3xl opacity-50 [animation:sgpf-drift_26s_ease-in-out_infinite]" />
        <div className="container relative z-10 py-20 md:py-24">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-start">
            <div className="space-y-6">
              <p className="text-xs font-semibold tracking-[0.25em] text-accent/80">
                STRATEGY
              </p>
              <h2 className="text-3xl font-semibold tracking-tight text-white md:text-6xl">
                Underwrite the plan.
                <span className="text-accent/90"> Build the cadence.</span>
              </h2>
              <p className="max-w-xl text-sm leading-relaxed text-slate-200 md:text-lg">
                We focus on software platforms where a clear operating plan and disciplined execution can compound enterprise value.
              </p>

              <div className="grid gap-3 sm:grid-cols-3">
                {[
                  { label: "Focus", value: "B2B software" },
                  { label: "Model", value: "Growth equity" },
                  { label: "Playbook", value: "Execution-led" }
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-[24px] border border-white/10 bg-white/[0.03] px-4 py-4 transition hover:border-white/20 hover:bg-white/[0.05]"
                  >
                    <p className="text-[11px] font-semibold tracking-[0.22em] text-slate-400">
                      {stat.label}
                    </p>
                    <p className="mt-2 text-sm font-semibold text-white">{stat.value}</p>
                    <div className="mt-3 h-1 w-10 rounded-full bg-accent/50" />
                  </div>
                ))}
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[44px] border border-white/10 bg-white/[0.03] p-8 transition hover:border-white/20 hover:bg-white/[0.05] md:p-10">
              <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(600px_circle_at_50%_0,rgba(0,255,255,0.12),transparent_60%)]" />
              <div className="relative z-10">
                <p className="text-xs font-semibold tracking-[0.25em] text-slate-400">
                  IDEAL PARTNER PROFILE
                </p>
              </div>
              <div className="relative z-10 mt-6 grid gap-4">
                {investmentCriteria.map((item) => (
                  <div key={item.id} className="flex items-start gap-4">
                    <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-black/25">
                      <item.icon className="h-5 w-5 text-accent/80" />
                    </div>
                    <div className="w-full">
                      <p className="text-base font-semibold text-white">{item.title}</p>
                      <p className="mt-1 text-sm leading-relaxed text-slate-200">
                        {item.body}
                      </p>
                      <div className="mt-4 h-px w-full bg-white/10" />
                    </div>
                  </div>
                ))}
              </div>
              <div className="relative z-10 mt-6 flex flex-wrap gap-3">
                <Link
                  href="/investment-focus"
                  className="rounded-full border border-accent/40 bg-accent/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-accent/70 hover:bg-accent/20 hover:shadow-glow"
                >
                  View Strategy
                </Link>
                <Link
                  href="/contact"
                  className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-white/25 hover:bg-white/10"
                >
                  Contact us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ValueCreationModules
        eyebrow="VALUE CREATION"
        title="A repeatable playbook for software growth"
        subtitle="We partner with management teams to build the operating system: GTM engine, product strategy, talent, and add-ons."
        items={valueCreationModules}
      />

      <section className="relative overflow-hidden border-y border-white/10 bg-black/30">
        <div className="pointer-events-none absolute inset-0 z-0 bg-aurora-portfolio" />
        <div className="pointer-events-none absolute -left-48 top-14 z-0 h-[520px] w-[520px] rounded-full bg-accent/10 blur-3xl opacity-60 [animation:sgpf-drift_28s_ease-in-out_infinite]" />
        <div className="container relative z-10 py-20 md:py-24">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div className="space-y-3">
              <p className="text-xs font-semibold tracking-[0.25em] text-accent/80">
                PORTFOLIO
              </p>
              <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">
                A portfolio built to compound
              </h2>
              <p className="max-w-2xl text-sm leading-relaxed text-slate-200 md:text-base">
                Platforms, add-ons, and outcomes across the software lifecycle.
              </p>
            </div>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 self-start rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-white/25 hover:bg-white/10 md:self-auto"
            >
              Explore Portfolio <span className="text-accent">→</span>
            </Link>
          </div>

          <div className="mt-10 flex snap-x snap-mandatory gap-3 overflow-x-auto pb-2 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
            {featuredPortfolio.map((company) => (
              <Link
                key={`${company.id}-logo`}
                href="/portfolio"
                className="flex shrink-0 snap-start items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 transition hover:border-white/20 hover:bg-white/[0.05]"
              >
                <div className="flex h-7 w-7 items-center justify-center overflow-hidden rounded-full border border-white/10 bg-black/25">
                  <Image src={company.logo} alt={company.name} className="h-full w-full object-contain p-0.5" />
                </div>
                <span className="text-xs font-semibold text-slate-200">{company.name}</span>
              </Link>
            ))}
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {featuredPortfolio.slice(0, 3).map((company, index) => (
              <div
                key={company.id}
                className={[
                  "group relative overflow-hidden border border-white/10 bg-white/[0.03] transition will-change-transform hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.05]",
                  index === 0 ? "rounded-[44px] p-10 md:col-span-2" : "rounded-[32px] p-8"
                ].join(" ")}
              >
                <div className="pointer-events-none absolute -right-24 -top-24 h-[320px] w-[320px] rounded-full bg-accent/10 blur-3xl opacity-40 transition group-hover:opacity-65" />
                <div className="relative flex items-start justify-between gap-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-black/30">
                      <Image
                        src={company.logo}
                        alt={company.name}
                        className="h-full w-full object-contain p-1.5"
                      />
                    </div>
                    <div className="min-w-0">
                      <p className={index === 0 ? "truncate text-2xl font-semibold tracking-tight text-white" : "truncate text-lg font-semibold tracking-tight text-white"}>
                        {company.name}
                      </p>
                      <p className="mt-1 text-xs font-semibold tracking-[0.22em] text-slate-400">
                        {company.type}
                      </p>
                    </div>
                  </div>
                  <span className="shrink-0 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-semibold text-white">
                    {company.outcome}
                  </span>
                </div>
                <p className={index === 0 ? "relative mt-6 max-w-2xl text-sm leading-relaxed text-slate-200 md:text-base" : "relative mt-5 text-sm leading-relaxed text-slate-200"}>
                  {company.note}
                </p>
                {index === 0 ? (
                  <div className="relative mt-8 grid gap-3 sm:grid-cols-3">
                    {[
                      { label: "Playbook", value: "Execution-led" },
                      { label: "Focus", value: "Platform building" },
                      { label: "Add-ons", value: "Disciplined" }
                    ].map((kpi) => (
                      <div key={kpi.label} className="rounded-2xl border border-white/10 bg-black/25 px-4 py-3">
                        <p className="text-xs text-slate-300">{kpi.label}</p>
                        <p className="mt-1 text-sm font-semibold text-white">{kpi.value}</p>
                      </div>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(900px_circle_at_85%_20%,rgba(0,255,255,0.10),transparent_60%),radial-gradient(800px_circle_at_80%_90%,rgba(255,255,255,0.05),transparent_62%)]" />
        <div className="pointer-events-none absolute -right-48 top-10 z-0 h-[520px] w-[520px] rounded-full bg-accent/10 blur-3xl opacity-60 [animation:sgpf-drift_30s_ease-in-out_infinite]" />
        <div className="container relative z-10 py-20 md:py-24">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="space-y-4">
              <p className="text-xs font-semibold tracking-[0.25em] text-accent/80">
                HOW WE PARTNER
              </p>
              <h2 className="text-3xl font-semibold tracking-tight text-white md:text-6xl">
                Clear plan. Tight cadence. Real execution.
              </h2>
              <p className="max-w-xl text-sm leading-relaxed text-slate-200 md:text-lg">
                Modern growth equity is operational. We work alongside teams to build the systems that compound.
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {[
                  { label: "Cadence", value: "Weekly" },
                  { label: "Focus", value: "Execution" },
                  { label: "Support", value: "Hands-on" }
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3"
                  >
                    <p className="text-[11px] font-semibold tracking-[0.22em] text-slate-400">
                      {item.label}
                    </p>
                    <p className="mt-1 text-sm font-semibold text-white">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="pointer-events-none absolute left-5 top-8 bottom-8 z-0 w-px bg-white/10" />
              <div className="grid gap-4">
                {partnershipSteps.map((step, index) => (
                  <div key={step.id} className="relative pl-12">
                    <div className="pointer-events-none absolute left-5 top-10 z-10 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border border-white/15 bg-black/60 text-xs font-semibold text-white">
                      {index + 1}
                    </div>
                    <div className="group relative overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.03] p-7 transition will-change-transform hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.05]">
                      <div className="pointer-events-none absolute -right-24 -top-24 h-[280px] w-[280px] rounded-full bg-accent/10 blur-3xl opacity-30 transition group-hover:opacity-55" />
                      <Sparkles className="absolute right-5 top-5 h-5 w-5 text-accent/80 opacity-70 transition group-hover:opacity-100" />
                      <p className="text-[11px] font-semibold tracking-[0.22em] text-slate-400">
                        {step.tags[0]?.toUpperCase()}
                      </p>
                      <p className={index === 0 ? "mt-2 text-2xl font-semibold text-white" : "mt-2 text-xl font-semibold text-white"}>
                        {step.title}
                      </p>
                      <p className={index === 0 ? "mt-3 max-w-2xl text-sm leading-relaxed text-slate-200 md:text-base" : "mt-3 text-sm leading-relaxed text-slate-200"}>
                        {step.body}
                      </p>
                      <div className="mt-6 flex flex-wrap gap-2">
                        {step.tags.map((tag) => (
                          <span
                            key={`${step.id}-${tag}`}
                            className="rounded-full border border-white/10 bg-black/25 px-3 py-1 text-xs font-semibold text-slate-200 transition group-hover:border-white/15"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-white/10 bg-black/30">
        <div className="pointer-events-none absolute inset-0 z-0 bg-aurora-team" />
        <div className="pointer-events-none absolute -left-48 top-10 z-0 h-[520px] w-[520px] rounded-full bg-accent/10 blur-3xl opacity-60 [animation:sgpf-drift_26s_ease-in-out_infinite]" />
        <div className="container relative z-10 py-20 md:py-24 lg:py-28">
          <div className="space-y-10">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div className="space-y-6">
              <p className="text-xs font-semibold tracking-[0.25em] text-accent/80">
                TEAM
              </p>
              <h2 className="text-3xl font-semibold tracking-tight text-white md:text-6xl">
                Meet our leadership team
              </h2>
              <p className="max-w-2xl text-sm leading-relaxed text-slate-200 md:text-base">
                A hands-on team built around repeatable software value creation: go-to-market execution, product strategy, and disciplined add-ons.
              </p>
              </div>

              <Link
                href="/team"
                className="inline-flex items-center gap-2 self-start rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-white/25 hover:bg-white/10 lg:self-auto"
              >
                View Team <span className="text-accent">→</span>
              </Link>
            </div>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:mt-12 lg:grid-cols-5 lg:gap-3">
            {leadership.map((person) => (
              <div key={person.id} className="group">
                <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] transition will-change-transform hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.05]">
                  <div className="pointer-events-none absolute -right-24 -top-24 h-[260px] w-[260px] rounded-full bg-accent/10 blur-3xl opacity-35 transition group-hover:opacity-55" />
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <Image
                      src={person.image}
                      alt={person.name}
                      fill
                      sizes="(min-width: 1024px) 20vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover object-top grayscale transition duration-500 group-hover:grayscale-0"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.78),rgba(0,0,0,0.14)_50%,rgba(0,0,0,0.0))]" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-base font-semibold tracking-tight text-white">
                        {person.name}
                      </p>
                      <p className="mt-1 text-xs font-semibold text-slate-300">
                        {person.role}
                      </p>
                      <div className="mt-2 overflow-hidden transition-all duration-300 max-h-0 opacity-0 group-hover:max-h-40 group-hover:opacity-100">
                        <p className="text-xs leading-relaxed text-slate-200">
                          {person.bio}
                        </p>
                        {person.meta ? (
                          <p className="mt-2 text-[11px] font-semibold tracking-[0.14em] text-slate-300">
                            {person.meta}
                          </p>
                        ) : null}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative">
        <div className="pointer-events-none absolute -right-40 top-16 z-0 h-[520px] w-[520px] rounded-full bg-accent/10 blur-3xl opacity-45 [animation:sgpf-drift_28s_ease-in-out_infinite]" />
        <div className="container relative z-10 py-20 md:py-24">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div className="space-y-3">
              <p className="text-xs font-semibold tracking-[0.25em] text-accent/80">
                INSIGHTS
              </p>
              <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">
                Insights (blog)
              </h2>
              <p className="max-w-2xl text-sm leading-relaxed text-slate-200 md:text-base">
                Operator-grade frameworks on go-to-market, product strategy, AI workflows, and add-ons.
              </p>
            </div>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 self-start rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-white/25 hover:bg-white/10 md:self-auto"
            >
              View Insights <span className="text-accent">→</span>
            </Link>
          </div>

          <div className="mt-10 grid gap-4 lg:grid-cols-12 lg:items-stretch">
            <Link
              href={insightsPreview[0].href}
              className="group relative flex h-full flex-col overflow-hidden rounded-[44px] border border-white/10 bg-white/[0.03] transition will-change-transform hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.05] lg:col-span-6"
            >
              <div className="relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(900px_circle_at_20%_0%,rgba(0,255,255,0.18),transparent_55%),radial-gradient(700px_circle_at_80%_70%,rgba(255,255,255,0.06),transparent_60%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.10)_1px,transparent_1px)] [background-size:18px_18px] opacity-[0.08]" />
                <div className="aspect-[16/9] w-full overflow-hidden">
                  <Image
                    src={blogImages[0]}
                    alt={insightsPreview[0].title}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.15),rgba(0,0,0,0.60)_70%,rgba(0,0,0,0.80))]" />
              </div>

              <div className="relative flex flex-1 flex-col p-10">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-accent/25 bg-accent/10 px-3 py-1 text-xs font-semibold text-white">
                    Featured
                  </span>
                  <span className="rounded-full border border-white/10 bg-black/25 px-3 py-1 text-xs font-semibold tracking-[0.22em] text-slate-200">
                    {insightsPreview[0].label}
                  </span>
                  <span className="text-xs text-slate-400">{insightsPreview[0].date}</span>
                  <span className="flex items-center gap-1 text-xs text-slate-400">
                    <Clock className="h-3.5 w-3.5" />
                    {insightsPreview[0].readTime}
                  </span>
                </div>

                <p className="mt-5 text-2xl font-semibold tracking-tight text-white md:text-3xl">
                  {insightsPreview[0].title}
                </p>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-200 md:text-base">
                  {insightsPreview[0].excerpt}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {insightsPreview.slice(1, 5).map((post) => (
                    <span
                      key={post.id}
                      className="rounded-full border border-white/10 bg-black/25 px-3 py-1 text-[11px] font-semibold tracking-[0.22em] text-slate-200"
                    >
                      {post.label}
                    </span>
                  ))}
                </div>

                <div className="mt-auto pt-8">
                  <div className="inline-flex items-center gap-2 text-sm font-semibold leading-none text-white">
                    <span>Read more</span>
                    <ArrowRight className="relative -top-px h-4 w-4 text-accent transition group-hover:translate-x-0.5" />
                  </div>
                </div>
              </div>
            </Link>

            <div className="grid gap-4 sm:grid-cols-2 lg:col-span-6 lg:h-full lg:grid-cols-2 lg:grid-rows-2">
              {insightsPreview.slice(1).map((post) => (
                <Link
                  key={post.id}
                  href={post.href}
                  className="group relative h-full overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] transition will-change-transform hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.05]"
                >
                  <div className="relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(800px_circle_at_15%_0%,rgba(0,255,255,0.14),transparent_60%),radial-gradient(700px_circle_at_85%_70%,rgba(255,255,255,0.06),transparent_65%)]" />
                    <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.10)_1px,transparent_1px)] [background-size:18px_18px] opacity-[0.06]" />
                    <div className="aspect-[16/9] w-full overflow-hidden">
                      <Image
                        src={blogImages[(insightsPreview.findIndex(i => i.id === post.id) || 1) % blogImages.length]}
                        alt={post.title}
                        fill
                        sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                        className="object-cover"
                      />
                    </div>
                    <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.08),rgba(0,0,0,0.55)_75%,rgba(0,0,0,0.75))]" />
                  </div>

                  <div className="relative p-7">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="rounded-full border border-white/10 bg-black/25 px-3 py-1 text-xs font-semibold tracking-[0.22em] text-slate-200">
                        {post.label}
                      </span>
                      <span className="text-xs text-slate-400">{post.date}</span>
                      <span className="flex items-center gap-1 text-xs text-slate-400">
                        <Clock className="h-3.5 w-3.5" />
                        {post.readTime}
                      </span>
                    </div>

                    <p className="mt-4 text-lg font-semibold text-white">{post.title}</p>
                    <p
                      className="mt-2 text-sm leading-relaxed text-slate-200"
                      style={{
                        display: "-webkit-box",
                        WebkitBoxOrient: "vertical",
                        WebkitLineClamp: 2,
                        overflow: "hidden"
                      }}
                    >
                      {post.excerpt}
                    </p>
                    <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold leading-none text-white">
                      <span>Read more</span>
                      <ArrowRight className="relative -top-px h-4 w-4 text-accent transition group-hover:translate-x-0.5" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection
        variant="hero"
        title={"A partner for\nsoftware value creation"}
        description="If you’re scaling go-to-market, sharpening product strategy, or exploring add-ons, submit a pitch and we’ll respond quickly."
        primaryAction={{ label: "Contact us", href: "/contact" }}
      />
    </>
  );
}
