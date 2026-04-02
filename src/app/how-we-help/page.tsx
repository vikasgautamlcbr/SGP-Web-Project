import { CTASection } from "@/components/CTASection";
import { HeroSection } from "@/components/HeroSection";
import { ValueCreationModules } from "@/components/ValueCreationModules";

const valueCreationModules = [
  {
    id: "vc-gtm",
    title: "GTM Engine",
    description:
      "Positioning, pricing, pipeline mechanics, and a cadence the whole company can run on.",
    bullets: [
      "Positioning and narrative",
      "Pricing and packaging",
      "Sales process + forecasting",
      "Partner and channel strategy"
    ],
    meta: [
      { label: "Outcome", value: "Repeatable growth" },
      { label: "Cadence", value: "Weekly rhythm" },
      { label: "Focus", value: "Execution" }
    ]
  },
  {
    id: "vc-product",
    title: "Product Strategy & AI",
    description:
      "Roadmap focus, platform strategy, and pragmatic AI adoption tied to workflow ROI.",
    bullets: [
      "Roadmap prioritization",
      "Platform strategy",
      "AI-enabled workflows",
      "Customer value mapping"
    ],
    meta: [
      { label: "Outcome", value: "Higher product value" },
      { label: "Focus", value: "Roadmap + narrative" },
      { label: "Execution", value: "Cross-functional" }
    ]
  },
  {
    id: "vc-talent",
    title: "Talent, Incentives & Org",
    description:
      "Leadership hiring, incentives, and operating structure built for scale.",
    bullets: [
      "Leadership hiring",
      "Org design",
      "Incentives and alignment",
      "Hiring plan + scorecards"
    ],
    meta: [
      { label: "Outcome", value: "Stronger leadership" },
      { label: "Focus", value: "Team design" },
      { label: "Execution", value: "Operator-led" }
    ]
  },
  {
    id: "vc-ma",
    title: "Add-ons & Integration",
    description:
      "Sourcing, diligence, integration planning, and value capture for tuck-ins.",
    bullets: [
      "Add-on sourcing",
      "Diligence + integration",
      "Value capture plan",
      "Portfolio mapping"
    ],
    meta: [
      { label: "Outcome", value: "Platform expansion" },
      { label: "Focus", value: "Disciplined M&A" },
      { label: "Execution", value: "Integration-ready" }
    ]
  }
];

const engagementCadence = [
  {
    id: "cadence-1",
    title: "Week 1–2: alignment",
    body: "Agree on the operating plan, the scorecard, and the few levers that matter."
  },
  {
    id: "cadence-2",
    title: "30 days: build the system",
    body: "Install the cadence: pricing decisions, pipeline reviews, roadmap focus, and owners."
  },
  {
    id: "cadence-3",
    title: "90 days: execute & measure",
    body: "Run the system, tighten the narrative, and drive measurable outcomes."
  },
  {
    id: "cadence-4",
    title: "Ongoing: compounding",
    body: "Scale what works, pursue tuck-ins when they accelerate the plan, and compound value."
  }
];

export default function HowWeHelpPage() {
  return (
    <>
      <HeroSection
        eyebrow="VALUE CREATION"
        title="How We Create Value"
        subtitle="Modern growth equity is operational. We partner with management teams to build systems and cadence that compound."
        actions={[
          { label: "View Portfolio", href: "/portfolio", variant: "primary" },
          { label: "Contact us", href: "/contact", variant: "secondary" }
        ]}
      />

      <ValueCreationModules
        eyebrow="PLAYBOOK"
        title="A repeatable operating playbook"
        subtitle="We focus on the levers that matter: GTM, product strategy, talent, and add-ons."
        items={valueCreationModules}
      />

      <section>
        <div className="container py-16">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div className="space-y-3">
              <p className="text-xs font-semibold tracking-[0.25em] text-accent/80">
                CADENCE
              </p>
              <h2 className="text-2xl font-semibold text-white md:text-3xl">
                What partnering feels like
              </h2>
              <p className="max-w-2xl text-sm leading-relaxed text-slate-200 md:text-base">
                Clear plan, owners, and a weekly rhythm that drives outcomes without noise.
              </p>
            </div>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {engagementCadence.map((step) => (
              <div
                key={step.id}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition will-change-transform hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.05]"
              >
                <p className="text-xs font-semibold tracking-[0.25em] text-accent/80">
                  {step.title}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-slate-200">
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Let’s build the plan."
        description="If you’re raising, scaling go-to-market, or exploring add-ons, submit a pitch and we’ll follow up quickly."
        primaryAction={{ label: "Contact us", href: "/contact" }}
        secondaryAction={{ label: "Investment Focus", href: "/investment-focus" }}
      />
    </>
  );
}
