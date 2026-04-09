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
import AppsianLogo from "./portfolio/company logos/Appsian.jpg";
import XpandionLogo from "./portfolio/company logos/Xpandion-Logo.jpg";
import CleoLogo from "./portfolio/company logos/cleo.jpg";
import NetreoLogo from "./portfolio/company logos/natreo.jpg";
import ExtolLogo from "./portfolio/company logos/Extol-Logo.jpg";
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
    title: "You’re the focus, not one of many",
    body: "We invest in a small number of companies and go deep. You get attention, context, and real partnership—not portfolio management."
  },
  {
    id: "edge-2",
    icon: Code2,
    title: "Operators, not observers",
    body: "We’ve built and scaled software companies ourselves. So when we engage, it’s execution—not theory."
  },
  {
    id: "edge-3",
    icon: Clock,
    title: "Fast decisions. No wasted cycles.",
    body: "A clear yes or no in 48 hours. We don’t drag out processes that take you away from running your business."
  },
  {
    id: "edge-4",
    icon: BriefcaseBusiness,
    title: "Built to scale, not to flip",
    body: "No forced timelines. No pressure to exit early. We stay aligned until the outcome is right for the company."
  }
];

const investmentCriteria = [
  {
    id: "crit-1",
    icon: Code2,
    title: "Built by operators, not just investors",
    body: "We’ve been in your seat—actually. From product to sales to scaling teams, we bring real experience, not secondhand advice."
  },
  {
    id: "crit-2",
    icon: ChartNoAxesCombined,
    title: "The right partner for your stage",
    body: "You’ve built something real—profitable, growing, and proven. We focus on software companies in the $2M–$30M range, where the next stage matters most."
  },
  {
    id: "crit-3",
    icon: Building2,
    title: "A process built around your time",
    body: "A clear yes or no in 48 hours. A focused path to close, without months of distraction."
  },
  {
    id: "crit-4",
    icon: BriefcaseBusiness,
    title: "Aligned for long-term outcomes",
    body: "We don’t invest to exit—we invest to build. No artificial timelines. No pressure to sell early."
  },
  {
    id: "crit-5",
    icon: Sparkles,
    title: "Growth beyond organic expansion",
    body: "We help companies scale through strategic acquisitions. From sourcing to integration, we execute M&A that drives real growth."
  },
  {
    id: "crit-6",
    icon: Code2,
    title: "Focused only on software businesses",
    body: "No generalist playbooks. No cross-industry guesswork. Every insight comes from working inside software companies."
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

export default function HomePage() {
  const blogImages = [BlogImg1, BlogImg2, BlogImg3, BlogImg4, BlogImg5];
  const logoTicker = [
    { img: VenioLogo, name: "Venio Systems" },
    { img: MeshIQLogo, name: "MeshIQ" },
    { img: ClearlyRatedLogo, name: "ClearlyRated" },
    { img: ClientSavvyLogo, name: "ClientSavvy" },
    { img: CloudMonixLogo, name: "CloudMonix" },
    { img: StackifyLogo, name: "Stackify" },
    { img: AppsianLogo, name: "Appsian" },
    { img: XpandionLogo, name: "Xpandion" },
    { img: CleoLogo, name: "Cleo" },
    { img: NetreoLogo, name: "Netreo" }
  ];
  const portfolioGroups = [
    {
      key: "current",
      title: "Current Platforms",
      tag: "Current",
      items: [
        {
          name: "Venio Systems",
          logo: VenioLogo,
          meta: ["eDiscovery Software", "Enterprise GTM · Talent · Product acceleration"]
        },
        {
          name: "MeshIQ",
          logo: MeshIQLogo,
          meta: ["Integration & Middleware Intelligence", "Market expansion · Product depth · Channel strategy"]
        },
        {
          name: "ClearlyRated",
          logo: ClearlyRatedLogo,
          meta: ["B2B Ratings & Reviews", "Platform consolidation · Enterprise growth · Brand authority"]
        }
      ]
    },
    {
      key: "addons",
      title: "Add-ons",
      tag: "Add-on",
      items: [
        { name: "ClientSavvy", logo: ClientSavvyLogo, meta: ["Acquired by ClearlyRated — 2025"] },
        { name: "CloudMonix", logo: CloudMonixLogo, meta: ["Acquired by Netreo — 2020"] },
        { name: "Stackify", logo: StackifyLogo, meta: ["Acquired by Netreo — 2021"] },
        { name: "Xpandion", logo: XpandionLogo, meta: ["Acquired by Appsian — 2021"] },
        { name: "Extol", logo: ExtolLogo, meta: ["Acquired by Cleo — 2016"] }
      ]
    },
    {
      key: "prior",
      title: "Prior Investments",
      tag: "Prior",
      items: [
        { name: "Cleo", logo: CleoLogo, meta: ["B2B Integration Platform"] },
        { name: "Appsian", logo: AppsianLogo, meta: ["ERP Security & UX (now Pathlock)"] },
        { name: "Netreo", logo: NetreoLogo, meta: ["IT Monitoring & Observability", "Acquired by BMC Software"] }
      ]
    }
  ] as const;
  return (
    <>
      <HeroSection
        size="xl"
        rightParallax
        title="The Right Partner for What Comes After Product-Market Fit"
        subtitle={
          <>
            <p className="text-pretty text-lg font-semibold tracking-tight text-white/90 md:text-xl">
              Scale What’s Already Working with the Right Operators
            </p>
            <p className="text-pretty text-base leading-relaxed text-slate-200 md:text-lg">
              Led by software operators who’ve built and scaled companies before, so every conversation starts with context and not just theory.
            </p>
          </>
        }
        actions={[
          { label: "Talk to Us", href: "/contact", variant: "primary" },
          { label: "See Our Portfolio", href: "/portfolio", variant: "secondary" }
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

      <section className="relative border-y border-white/10 bg-white">
        <div className="container py-4">
          <p className="text-center text-[11px] font-semibold tracking-[0.30em] text-slate-700">
            PLATFORMS • ADD-ONS • PRIOR INVESTMENTS
          </p>
        </div>
        <div className="sgpf-ticker pb-6">
          <div className="sgpf-ticker-track">
            {[...logoTicker, ...logoTicker].map((l, idx) => (
              <div key={`${l.name}-${idx}`} className="flex items-center justify-center px-3">
                <div className="h-14 md:h-16 w-auto">
                  <Image src={l.img} alt={l.name} width={220} height={64} className="h-14 md:h-16 w-auto object-contain" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-b border-white/10 py-16">
        <div className="pointer-events-none absolute inset-0 z-0 bg-aurora-edge" />
        <div className="container relative z-10">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="space-y-4 text-center lg:self-center lg:text-left">
              <p className="text-xs font-semibold tracking-[0.25em] text-accent/80">
                WHY SGP
              </p>
              <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">
                Why Founders Choose SGP
              </h2>
              <p className="mx-auto max-w-xl text-sm leading-relaxed text-slate-200 md:text-lg lg:mx-0">
                The partner you choose at this stage doesn’t just influence growth—it defines it.
              </p>
            </div>

            <div className="lg:self-center lg:my-auto">
              <div className="rounded-[44px] bg-black/10 p-2">
                <div className="divide-y divide-white/10 overflow-hidden rounded-[40px] border border-white/10 bg-black/25">
                  {edge.map((item) => (
                    <div
                      key={item.id}
                      className="group flex items-start gap-4 px-6 py-6 transition hover:bg-white/[0.03]"
                    >
                      <div className="sgpf-icon-tile sgpf-icon-tile-lg">
                        <item.icon className="h-5 w-5 text-accent" />
                      </div>
                      <div className="min-w-0 pt-0.5 text-left">
                        <p className="text-base font-semibold tracking-tight text-white">
                          {item.title}
                        </p>
                        <p className="mt-2 text-sm leading-relaxed text-slate-200">
                          {item.body}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative">
        <div className="pointer-events-none absolute -right-40 top-10 z-0 h-[520px] w-[520px] rounded-full bg-accent/10 blur-3xl opacity-50 [animation:sgpf-drift_26s_ease-in-out_infinite]" />
        <div className="container relative z-10 py-20 md:py-24">
          <div className="grid gap-10 lg:grid-cols-3 lg:items-start">
            <div className="order-2 space-y-5 lg:order-1 lg:pt-16">
              {investmentCriteria.slice(0, 3).map((item) => (
                <div key={item.id} className="flex items-start gap-4">
                  <div className="sgpf-icon-tile mt-0.5">
                    <item.icon className="h-5 w-5 text-accent/80" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-white md:text-base">
                      {item.title}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-slate-200">
                      {item.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="order-1 space-y-6 text-center lg:order-2 lg:pt-8">
              <p className="text-xs font-semibold tracking-[0.25em] text-accent/80">
                VALUE PROPOSITIONS
              </p>
              <h2 className="text-3xl font-semibold tracking-tight text-white md:text-6xl">
                What You Get With SGP
              </h2>
              <p className="mx-auto max-w-xl text-sm leading-relaxed text-slate-200 md:text-lg">
                What sets us apart shows up in how we work with you, not around you.
              </p>

              <div className="flex flex-wrap justify-center gap-2">
                {[
                  { label: "Decision", value: "48 hours" },
                  { label: "Stage", value: "$2M–$30M" },
                  { label: "Focus", value: "B2B software" }
                ].map((stat) => (
                  <span
                    key={stat.label}
                    className="rounded-full border border-white/10 bg-black/25 px-4 py-2 text-xs font-semibold text-slate-200"
                  >
                    <span className="text-slate-400">{stat.label}:</span> {stat.value}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap justify-center gap-3 pt-2">
                <Link
                  href="/contact"
                  className="rounded-full border border-accent/40 bg-accent/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-accent/70 hover:bg-accent/20 hover:shadow-glow"
                >
                  Talk to Us
                </Link>
                <Link
                  href="/portfolio"
                  className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-white/25 hover:bg-white/10"
                >
                  See Our Portfolio
                </Link>
              </div>
            </div>

            <div className="order-3 space-y-5 lg:pt-16">
              {investmentCriteria.slice(3).map((item) => (
                <div key={item.id} className="flex items-start gap-4">
                  <div className="sgpf-icon-tile mt-0.5">
                    <item.icon className="h-5 w-5 text-accent/80" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-white md:text-base">
                      {item.title}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-slate-200">
                      {item.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ValueCreationModules
        eyebrow="VALUE CREATION"
        title="A repeatable playbook for software growth"
        subtitle="We partner with management teams to build the operating system: GTM engine, product strategy, talent, and add-ons."
        items={valueCreationModules}
        align="center"
        variant="panel"
      />

      <section className="relative overflow-hidden border-y border-white/10 bg-black/30">
        <div className="pointer-events-none absolute inset-0 z-0 bg-aurora-portfolio" />
        <div className="pointer-events-none absolute -left-48 top-14 z-0 h-[520px] w-[520px] rounded-full bg-accent/10 blur-3xl opacity-60 [animation:sgpf-drift_28s_ease-in-out_infinite]" />
        <div className="container relative z-10 py-20 md:py-24">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="relative overflow-hidden rounded-[56px] border border-white/10 bg-white/[0.02]">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_circle_at_22%_20%,rgba(0,255,255,0.18),transparent_58%),radial-gradient(900px_circle_at_80%_40%,rgba(255,255,255,0.06),transparent_60%),radial-gradient(rgba(255,255,255,0.10)_1px,transparent_1px)] [background-size:auto,auto,18px_18px] opacity-[0.10]" />
              <div className="relative min-h-[520px] p-10 md:min-h-[560px]">
                <div className="pointer-events-none absolute -left-48 top-10 h-[520px] w-[520px] rounded-full bg-accent/10 blur-3xl opacity-70" />
                <div className="pointer-events-none absolute -right-48 bottom-10 h-[520px] w-[520px] rounded-full bg-white/5 blur-3xl opacity-60" />

                <div className="relative mt-2 lg:hidden">
                  <div className="grid gap-4">
                    {portfolioGroups.map((group) => (
                      <div key={group.key} className="rounded-[44px] border border-white/10 bg-black/50 p-8 backdrop-blur">
                        <div className="flex items-baseline justify-between gap-6">
                          <p className="text-xs font-semibold tracking-[0.25em] text-slate-300">
                            {group.title.toUpperCase()}
                          </p>
                          <span className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-[11px] font-semibold text-white">
                            {group.tag}
                          </span>
                        </div>
                        <div className="mt-5 overflow-hidden rounded-3xl border border-white/10 bg-black/25">
                          <div className="max-h-[320px] divide-y divide-white/10 overflow-y-auto sgpf-no-scrollbar">
                            {group.items.map((item) => (
                              <div key={`${group.key}-${item.name}`} className="flex items-start gap-4 px-5 py-4">
                                <div className="mt-0.5 flex h-11 w-11 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-black/30">
                                  <Image src={item.logo} alt={item.name} className="h-full w-full object-contain p-1" />
                                </div>
                                <div className="min-w-0">
                                  <p className="truncate text-sm font-semibold text-white">{item.name}</p>
                                  {item.meta.map((line) => (
                                    <p key={`${item.name}-${line}`} className="truncate text-[11px] leading-relaxed text-slate-300">
                                      {line}
                                    </p>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="relative hidden lg:block">
                  <div className="pointer-events-none absolute inset-6 rounded-[52px] border border-white/10 bg-black/15" />

                  <div className="absolute left-10 top-10 w-[520px] rotate-[-2deg]">
                    <div className="rounded-[44px] border border-white/10 bg-black/55 p-8 backdrop-blur">
                      <div className="flex items-baseline justify-between gap-6">
                        <p className="text-xs font-semibold tracking-[0.25em] text-slate-300">
                          {portfolioGroups[0].title.toUpperCase()}
                        </p>
                        <span className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-[11px] font-semibold text-white">
                          {portfolioGroups[0].tag}
                        </span>
                      </div>
                      <div className="mt-5 overflow-hidden rounded-3xl border border-white/10 bg-black/25">
                        <div className="divide-y divide-white/10">
                          {portfolioGroups[0].items.map((item) => (
                            <div key={`current-${item.name}`} className="flex items-start gap-4 px-5 py-4">
                              <div className="mt-0.5 flex h-11 w-11 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-black/30">
                                <Image src={item.logo} alt={item.name} className="h-full w-full object-contain p-1" />
                              </div>
                              <div className="min-w-0">
                                <p className="truncate text-sm font-semibold text-white">{item.name}</p>
                                {item.meta.map((line) => (
                                  <p key={`${item.name}-${line}`} className="truncate text-[11px] leading-relaxed text-slate-300">
                                    {line}
                                  </p>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="absolute left-[420px] top-[95px] w-[260px] rotate-[2deg]">
                    <div className="rounded-[44px] border border-white/10 bg-black/55 p-8 backdrop-blur">
                      <div className="flex items-baseline justify-between gap-6">
                        <p className="text-xs font-semibold tracking-[0.25em] text-slate-300">
                          ADD-ONS
                        </p>
                        <span className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-[11px] font-semibold text-white">
                          {portfolioGroups[1].tag}
                        </span>
                      </div>
                      <div className="mt-5 overflow-hidden rounded-3xl border border-white/10 bg-black/25">
                        <div className="max-h-[290px] divide-y divide-white/10 overflow-y-auto sgpf-no-scrollbar">
                          {portfolioGroups[1].items.map((item) => (
                            <div key={`addons-${item.name}`} className="flex items-start gap-4 px-5 py-4">
                              <div className="mt-0.5 flex h-11 w-11 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-black/30">
                                <Image src={item.logo} alt={item.name} className="h-full w-full object-contain p-1" />
                              </div>
                              <div className="min-w-0">
                                <p className="truncate text-sm font-semibold text-white">{item.name}</p>
                                {item.meta.map((line) => (
                                  <p key={`${item.name}-${line}`} className="truncate text-[11px] leading-relaxed text-slate-300">
                                    {line}
                                  </p>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="absolute left-[240px] top-[260px] w-[520px] rotate-[-1deg] opacity-85">
                    <div className="rounded-[44px] border border-white/10 bg-black/45 p-8 backdrop-blur">
                      <div className="flex items-baseline justify-between gap-6">
                        <p className="text-xs font-semibold tracking-[0.25em] text-slate-300">
                          {portfolioGroups[2].title.toUpperCase()}
                        </p>
                        <span className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-[11px] font-semibold text-white">
                          {portfolioGroups[2].tag}
                        </span>
                      </div>
                      <div className="mt-5 overflow-hidden rounded-3xl border border-white/10 bg-black/25">
                        <div className="max-h-[240px] divide-y divide-white/10 overflow-y-auto sgpf-no-scrollbar">
                          {portfolioGroups[2].items.map((item) => (
                            <div key={`prior-${item.name}`} className="flex items-start gap-4 px-5 py-4">
                              <div className="mt-0.5 flex h-11 w-11 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-black/30">
                                <Image src={item.logo} alt={item.name} className="h-full w-full object-contain p-1" />
                              </div>
                              <div className="min-w-0">
                                <p className="truncate text-sm font-semibold text-white">{item.name}</p>
                                {item.meta.map((line) => (
                                  <p key={`${item.name}-${line}`} className="truncate text-[11px] leading-relaxed text-slate-300">
                                    {line}
                                  </p>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-[linear-gradient(to_top,rgba(5,7,11,0.95),rgba(5,7,11,0))]" />
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start justify-between gap-8">
                <div className="space-y-2">
                  <p className="text-xs font-semibold tracking-[0.25em] text-accent/80">
                    PORTFOLIO
                  </p>
                  <h3 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
                    The companies we back don’t just grow. They compound.
                  </h3>
                </div>
                <span className="text-sm text-slate-400">2025</span>
              </div>

              <div className="grid gap-2">
                {portfolioGroups.map((g) => (
                  <div key={`meta-${g.key}`} className="flex items-start justify-between gap-4">
                    <span className="text-sm font-semibold text-white">{g.title}</span>
                    <span className="text-sm text-slate-300">{g.items.length} companies</span>
                  </div>
                ))}
              </div>

              <p className="text-sm leading-relaxed text-slate-200 md:text-base">
                Built alongside founders. We help teams scale go-to-market, deepen product strategy, and accelerate growth through disciplined add-ons.
              </p>

              <div className="flex flex-wrap gap-2">
                {["Current", "Prior", "Add-ons"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-black/25 px-4 py-2 text-xs font-semibold text-slate-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <Link
                  href="/portfolio"
                  className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-accent/70 hover:bg-accent/20 hover:shadow-glow"
                >
                  View portfolio <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-white/25 hover:bg-white/10"
                >
                  Talk to us <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
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
                A Team That Knows What It Takes
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
          <div className="flex flex-col items-center gap-8 text-center md:flex-row md:items-end md:justify-between md:text-left">
            <div className="space-y-3">
              <p className="text-xs font-semibold tracking-[0.25em] text-accent/80">
                INSIGHTS
              </p>
              <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">
                Insights (blog)
              </h2>
              <p className="mx-auto max-w-2xl text-sm leading-relaxed text-slate-200 md:text-base md:mx-0">
                Operator-grade frameworks on go-to-market, product strategy, AI workflows, and add-ons.
              </p>
            </div>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 self-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-white/25 hover:bg-white/10 md:self-auto"
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
        title="Ready for what comes next?"
        description="A focused conversation with a quick decision, and no wasted time."
        primaryAction={{ label: "Get in Touch", href: "/contact" }}
      />
    </>
  );
}
