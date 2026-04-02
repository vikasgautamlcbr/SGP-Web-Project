import { CTASection } from "@/components/CTASection";
import { HeroSection } from "@/components/HeroSection";

const investmentThemes = [
  {
    id: "theme-1",
    title: "Durable customer outcomes",
    body: "Mission-critical workflows with clear ROI, retention, and growing customer reliance."
  },
  {
    id: "theme-2",
    title: "A path to a repeatable GTM engine",
    body: "Pricing and packaging, pipeline mechanics, and an enterprise motion that can scale."
  },
  {
    id: "theme-3",
    title: "Platform leverage + add-on runway",
    body: "A footprint where tuck-ins expand capability, distribution, and long-term value."
  }
];

const companyTypes = [
  "B2B Software",
  "Vertical SaaS",
  "Infrastructure / Developer Tools",
  "Data / Integration / Automation",
  "AI-enabled Software",
  "Workflow / Productivity Software"
];

const stageCriteria = [
  "Growth stage B2B software",
  "Strong product foundation with roadmap leverage",
  "Clear operating levers to improve GTM performance",
  "Profitable or a credible path to profitability",
  "Optionality for tuck-ins (add-ons) and integration readiness"
];

const valueAreas = [
  "Positioning, pricing, packaging",
  "Sales process + forecasting cadence",
  "Product strategy and platform focus",
  "Leadership hiring + incentives",
  "Add-ons: diligence → integration → value capture"
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
        title="Investment Strategy"
        subtitle="Growth equity for B2B software platforms. Thesis-led underwriting, operator-grade execution, and disciplined add-ons to compound enterprise value."
        actions={[
          { label: "View Portfolio", href: "/portfolio", variant: "primary" },
          { label: "Contact us", href: "/contact", variant: "secondary" }
        ]}
      />

      <section>
        <div className="container py-16">
          <div className="space-y-10">
            <div className="space-y-3">
              <p className="text-xs font-semibold tracking-[0.25em] text-accent/80">
                THESIS
              </p>
              <h2 className="text-2xl font-semibold text-white md:text-3xl">
                Themes over trends
              </h2>
              <p className="max-w-3xl text-sm leading-relaxed text-slate-200 md:text-base">
                We don’t chase hype cycles. We look for repeatable patterns where execution and platform-building create durable outcomes.
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
                Types of companies we partner with
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-200">
                B2B software platforms with durable customers and a clear path to improve GTM, sharpen product strategy, and pursue disciplined add-ons.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {companyTypes.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-black/25 px-4 py-2 text-xs font-semibold text-slate-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-white/20 hover:bg-white/[0.05]">
              <h3 className="text-lg font-semibold text-white">
                Stage + context
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-200">
                We underwrite the operating plan and the levers to execute—not a rigid checklist.
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
                Where we add value
              </h3>
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
        title="Think there’s a fit?"
        description="Submit a pitch. We’ll review quickly and respond if there’s alignment."
        primaryAction={{ label: "Contact us", href: "/contact" }}
        secondaryAction={{ label: "How We Help", href: "/how-we-help" }}
      />
    </>
  );
}
