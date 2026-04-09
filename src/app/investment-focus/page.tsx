import { CTASection } from "@/components/CTASection";
import { HeroSection } from "@/components/HeroSection";

const investmentThemes = [
  {
    id: "theme-1",
    title: "Focused segment",
    body: "We don’t invest across industries or stages. We focus on a specific segment of software companies."
  },
  {
    id: "theme-2",
    title: "Pattern recognition",
    body: "We invest where our experience and operating playbook can make the biggest difference."
  },
  {
    id: "theme-3",
    title: "Network advantage",
    body: "Operators, talent, and relationships built from working inside software companies."
  }
];

const companyTypes = [
  {
    title: "Markets with room to grow",
    body: "Not niche ceilings but markets with real, expanding demand."
  },
  {
    title: "Defensibility that compounds",
    body: "Advantages that deepen as the business scales, not disappear."
  },
  {
    title: "Diversified customer base",
    body: "No single point of dependency—just consistent, distributed revenue."
  },
  {
    title: "Products customers don’t replace",
    body: "Deeply embedded, high-value software that’s hard to switch away from."
  }
];

const stageCriteria = [
  "Revenue: $2M–$30M, with more than half recurring",
  "Growth: 10%+ annually (healthy, sustainable, not hockey-stick dependent)",
  "EBITDA: $500K+ (we back profitable businesses, not burning platforms)",
  "Churn: Under 10% (because sticky customers are the only ones that matter)",
  "Market: Large, growing, fragmented, with room to win"
];

const valueAreas = [
  "The inflection point ($5M–$20M ARR): You’ve outgrown founder-led sales, but haven’t yet built the systems to scale.",
  "The “what’s next” moment: The business is profitable and working but the path forward requires capital and clarity, without unnecessary dilution.",
  "The M&A acceleration phase: Growth by acquisition starts to make more sense than organic alone, but you don’t yet have the infrastructure to source, execute, and integrate deals.",
  "The talent ceiling: The next stage requires senior leadership: CRO, Head of Product, FP&A—and getting those hires right changes everything."
];

const exampleCompanies = [
  { id: "ex-venio", name: "Venio Systems", note: "Platform example" },
  { id: "ex-meshiq", name: "MeshIQ", note: "Platform example" },
  { id: "ex-clearlyrated", name: "ClearlyRated", note: "Platform example" },
  { id: "ex-clientsavvy", name: "ClientSavvy", note: "Add-on example" },
  { id: "ex-stackify", name: "Stackify", note: "Add-on example" }
];

export default function InvestmentFocusPage() {
  return (
    <>
      <HeroSection
        eyebrow="STRATEGY"
        title="We invest where we know we can add real value."
        subtitle="Focused on founder-led software companies at a stage where the next decisions matter most."
        actions={[
          { label: "Talk to Us", href: "/contact", variant: "primary" },
          { label: "See Our Portfolio", href: "/portfolio", variant: "secondary" }
        ]}
      />

      <section>
        <div className="container py-16">
          <div className="space-y-10">
            <div className="space-y-3">
              <p className="text-xs font-semibold tracking-[0.25em] text-accent/80">
                INVESTMENT THEMES
              </p>
              <h2 className="text-2xl font-semibold text-white md:text-3xl">
                We follow the software, not the sector map.
              </h2>
              <p className="max-w-3xl text-sm leading-relaxed text-slate-200 md:text-base">
                We don’t invest across industries or stages. We focus on a specific segment of software companies because that’s where our experience, pattern recognition, and network make the biggest difference.
              </p>
            </div>

          <div className="grid gap-4 lg:grid-cols-3">
            {investmentThemes.map((theme) => (
              <div
                key={theme.id}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition will-change-transform hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.05]"
              >
                <p className="text-base font-semibold text-white">{theme.title}</p>
                <p className="mt-3 text-sm leading-relaxed text-slate-200">
                  {theme.body}
                </p>
              </div>
            ))}
          </div>

          <div className="grid gap-4 lg:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-white/20 hover:bg-white/[0.05] lg:col-span-2">
              <h3 className="text-lg font-semibold text-white">
                The Kind of Businesses We Back
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-200">
                We look for software companies with strong fundamentals, durable advantages, and clear room to grow.
              </p>
              <div className="mt-6 grid gap-3 md:grid-cols-2">
                {companyTypes.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-white/10 bg-black/25 px-4 py-4"
                  >
                    <p className="text-sm font-semibold text-white">{item.title}</p>
                    <p className="mt-2 text-xs leading-relaxed text-slate-200">
                      {item.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-white/20 hover:bg-white/[0.05]">
              <h3 className="text-lg font-semibold text-white">
                No hard filters. Just honest criteria.
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-200">
                We typically invest in companies that look something like this:
              </p>
              <div className="mt-5 grid gap-2">
                {stageCriteria.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-black/25 px-4 py-3 text-sm text-slate-200"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-4 lg:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-white/20 hover:bg-white/[0.05]">
              <h3 className="text-lg font-semibold text-white">
                Where We’re Most Useful
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-200">
                We partner at the moments where growth becomes less obvious and more important to get right.
              </p>
              <div className="mt-5 grid gap-2 sm:grid-cols-2">
                {valueAreas.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-black/25 px-4 py-3 text-sm text-slate-200"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-white/20 hover:bg-white/[0.05]">
              <h3 className="text-lg font-semibold text-white">
                Representative examples
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-200">
                Illustrative examples for quick scanning.
              </p>
              <div className="mt-5 grid gap-2">
                {exampleCompanies.map((company) => (
                  <div
                    key={company.id}
                    className="flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-black/25 px-4 py-3"
                  >
                    <span className="text-sm font-semibold text-white">
                      {company.name}
                    </span>
                    <span className="text-xs text-slate-300">{company.note}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Let’s talk."
        description="A clear conversation about where you are and what it takes to scale from here."
        primaryAction={{ label: "Talk to Us", href: "/contact" }}
        secondaryAction={{ label: "How We Help", href: "/how-we-help" }}
      />
    </>
  );
}
