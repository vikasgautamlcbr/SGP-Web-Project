import { CTASection } from "@/components/CTASection";
import { HeroSection } from "@/components/HeroSection";

const functionalAreas = [
  {
    id: "area-gtm",
    title: "Go-to-Market",
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
      />

      <section>
        <div className="container py-16">
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

          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            {functionalAreas.map((area) => (
              <div
                key={area.id}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition will-change-transform hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.05]"
              >
                <p className="text-lg font-semibold text-white">{area.title}</p>

                <p className="mt-4 text-xs font-semibold tracking-[0.22em] text-accent/80">
                  THE CHALLENGE
                </p>
                <p className="mt-2 text-sm leading-relaxed text-slate-200">
                  {area.challenge}
                </p>

                <p className="mt-5 text-xs font-semibold tracking-[0.22em] text-accent/80">
                  WHAT WE DO
                </p>
                <ul className="mt-3 space-y-2">
                  {area.bullets.map((bullet) => (
                    <li
                      key={`${area.id}-${bullet}`}
                      className="rounded-2xl border border-white/10 bg-black/25 px-4 py-3 text-sm text-slate-200"
                    >
                      {bullet}
                    </li>
                  ))}
                </ul>

                {area.trackRecord?.length ? (
                  <>
                    <p className="mt-6 text-xs font-semibold tracking-[0.22em] text-accent/80">
                      OUR TRACK RECORD
                    </p>
                    <div className="mt-3 grid gap-2 sm:grid-cols-2">
                      {area.trackRecord.map((item) => (
                        <div
                          key={`${area.id}-${item}`}
                          className="rounded-2xl border border-white/10 bg-black/25 px-4 py-3 text-sm text-slate-200"
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </>
                ) : null}
              </div>
            ))}
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
