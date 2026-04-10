import { CTASection } from "@/components/CTASection";
import { HeroSection } from "@/components/HeroSection";
import { ArrowRight, BriefcaseBusiness, ChartNoAxesCombined, Code2, Users } from "lucide-react";
import { HeroGraphic } from "@/components/HeroGraphic";

const functionalAreas = [
  {
    id: "area-gtm",
    title: "Go-to-Market",
    icon: ChartNoAxesCombined,
    challenge:
      "You built the business on founder relationships and referrals. Now you need a repeatable revenue engine that doesn’t depend on you being in every deal.",
    bullets: [
      "Define ICP and segment the market",
      "Build repeatable pipeline and outbound motion",
      "Hire and support CRO / sales leadership",
      "Improve pricing, packaging, and expansion",
      "Turn CS into a growth function"
    ]
  },
  {
    id: "area-product",
    title: "Product & AI",
    icon: Code2,
    challenge:
      "Your product works but the roadmap is reactive, engineering is stretched, and AI is everywhere without clear direction.",
    bullets: [
      "Prioritize roadmap with structured audits",
      "Bring in experienced product operators",
      "Focus AI where it actually matters",
      "Support engineering leadership and structure",
      "Guide build vs. buy vs. partner decisions"
    ]
  },
  {
    id: "area-talent",
    title: "Talent & Org Design",
    icon: Users,
    challenge:
      "The team that got you here won’t necessarily get you to the next stage. Knowing what to change and when is one of the hardest parts of scaling.",
    bullets: [
      "Assess leadership, honestly",
      "Hire key roles: CRO, CFO, CTO, VP Product",
      "Evolve org structure as you scale",
      "Benchmark compensation",
      "Build performance without losing culture"
    ]
  },
  {
    id: "area-ma",
    title: "M&A & Acquisitions",
    icon: BriefcaseBusiness,
    challenge:
      "You see opportunities for acquisition, but lack the infrastructure to source, execute, and integrate deals effectively.",
    bullets: [
      "Identify high-fit acquisition targets",
      "Structure and finance deals",
      "Lead integration—operational + cultural",
      "Build platform + add-on strategy early"
    ],
    trackRecord: [
      "Extol → Cleo",
      "CloudMonix & Stackify → Netreo",
      "Xpandion → Appsian",
      "ClientSavvy → ClearlyRated"
    ]
  }
];

export default function HowWeHelpPage() {
  return (
    <>
      <HeroSection
        eyebrow="VALUE CREATION"
        title="More Than Capital - What That Actually Means"
        subtitle="Every PE firm says they're hands-on. Here's what that looks like in practice, from day one through exit."
        actions={[
          { label: "View Portfolio", href: "/portfolio", variant: "primary" },
          { label: "Talk to Us", href: "/contact", variant: "secondary" }
        ]}
        right={<HeroGraphic variant="help" />}
        rightParallax
      />

      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(900px_circle_at_85%_10%,rgba(0,255,255,0.10),transparent_60%),radial-gradient(900px_circle_at_20%_80%,rgba(255,255,255,0.04),transparent_60%)]" />
        <div className="container relative z-10 py-16">
          <div className="space-y-3">
            <p className="text-xs font-semibold tracking-[0.25em] text-accent/80">
              OVERVIEW
            </p>
            <h2 className="text-2xl font-semibold text-white md:text-3xl">
              More than capital
            </h2>
            <p className="max-w-3xl text-sm leading-relaxed text-slate-200 md:text-base">
              We don’t show up once a quarter. We work alongside you across growth, product, talent, and M&A. Not as consultants but as operators who’ve done it before.
            </p>
          </div>

          <div className="sgpf-panel sgpf-panel-glow mt-10 p-8 md:p-10">
            <div className="divide-y divide-white/10 overflow-hidden rounded-[22px] border border-white/10 bg-black/25">
              {functionalAreas.map((area) => (
                <details
                  key={area.id}
                  className="group px-6 py-6"
                  open={area.id === "area-gtm"}
                >
                  <summary className="flex items-start gap-4">
                    <span className="sgpf-icon-tile mt-0.5">
                      <area.icon className="h-5 w-5" />
                    </span>
                    <div className="min-w-0">
                      <p className="text-lg font-semibold text-white">{area.title}</p>
                      <p className="mt-1 text-sm text-slate-300">
                        The challenge + what we do
                      </p>
                    </div>
                    <ArrowRight className="ml-auto mt-2 h-4 w-4 shrink-0 text-accent transition group-open:rotate-90" />
                  </summary>

                  <div className="mt-5 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
                    <div>
                      <p className="text-xs font-semibold tracking-[0.22em] text-accent/80">
                        THE CHALLENGE
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-slate-200">
                        {area.challenge}
                      </p>
                    </div>

                    <div>
                      <p className="text-xs font-semibold tracking-[0.22em] text-accent/80">
                        WHAT WE DO
                      </p>
                      <ul className="sgpf-bullet-list mt-3">
                        {area.bullets.map((bullet) => (
                          <li key={`${area.id}-${bullet}`} className="sgpf-bullet">
                            <span className="sgpf-bullet-dot" />
                            <p className="text-sm leading-relaxed text-slate-200">
                              {bullet}
                            </p>
                          </li>
                        ))}
                      </ul>

                      {area.trackRecord?.length ? (
                        <div className="mt-6">
                          <p className="text-xs font-semibold tracking-[0.22em] text-accent/80">
                            OUR TRACK RECORD
                          </p>
                          <div className="mt-3 flex flex-wrap gap-2">
                            {area.trackRecord.map((item) => (
                              <span
                                key={`${area.id}-${item}`}
                                className="rounded-full border border-white/10 bg-black/25 px-4 py-2 text-xs font-semibold text-slate-200"
                              >
                                {item}
                              </span>
                            ))}
                          </div>
                        </div>
                      ) : null}
                    </div>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Let’s talk about what this looks like for your business"
        description="A practical conversation about where you are and what it takes to scale from here."
        primaryAction={{ label: "Talk to Us About Your Business", href: "/contact" }}
        secondaryAction={{ label: "Investment Focus", href: "/investment-focus" }}
      />
    </>
  );
}
