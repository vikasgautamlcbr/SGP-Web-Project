import { CTASection } from "@/components/CTASection";
import { HeroSection } from "@/components/HeroSection";

const trackRecord = [
  { id: "tr-venio", title: "Venio Systems", note: "Platform" },
  { id: "tr-meshiq", title: "MeshIQ", note: "Platform" },
  { id: "tr-clearlyrated", title: "ClearlyRated", note: "Platform" },
  { id: "tr-extol", title: "Extol", note: "Add-on (Cleo — 2016)" },
  { id: "tr-cloudmonix", title: "CloudMonix", note: "Add-on (Netreo — 2020)" },
  { id: "tr-stackify", title: "Stackify", note: "Add-on (Netreo — 2021)" },
  { id: "tr-xpandion", title: "Xpandion", note: "Add-on (Appsian — 2021)" },
  { id: "tr-clientsavvy", title: "ClientSavvy", note: "Add-on (ClearlyRated — 2025)" }
];

export default function AboutPage() {
  return (
    <>
      <HeroSection
        eyebrow="ABOUT"
        title="About SGP"
        subtitle="A software-focused growth equity firm built by operators. We partner with management teams on execution, product strategy, and disciplined add-ons."
        actions={[
          { label: "Team", href: "/team", variant: "primary" },
          { label: "Contact us", href: "/contact", variant: "secondary" }
        ]}
      />

      <section>
        <div className="container py-16">
          <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-white/20 hover:bg-white/[0.05]">
            <h2 className="text-lg font-semibold text-white">
              Our philosophy
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-200">
              Strong software outcomes come from clarity, cadence, and execution. We invest where the operating plan and levers can be underwritten and improved.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-white/20 hover:bg-white/[0.05]">
            <h2 className="text-lg font-semibold text-white">Operating principles</h2>
            <div className="mt-5 grid gap-2">
              {[
                "Clarity over noise.",
                "Cadence beats intensity.",
                "Execution is the strategy.",
                "Add-ons only when they accelerate the plan."
              ].map((item) => (
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

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-white/20 hover:bg-white/[0.05] lg:col-span-2">
            <p className="text-xs font-semibold tracking-[0.25em] text-accent/80">
              TRACK RECORD
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-white md:text-3xl">
              Platforms and tuck-ins
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-200">
              A selection of platforms and tuck-ins from the portfolio.
            </p>
            <div className="mt-6 grid gap-2 sm:grid-cols-2">
              {trackRecord.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-black/25 px-4 py-3"
                >
                  <span className="text-sm font-semibold text-white">
                    {item.title}
                  </span>
                  <span className="text-xs text-slate-300">{item.note}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-white/20 hover:bg-white/[0.05]">
            <p className="text-xs font-semibold tracking-[0.25em] text-accent/80">
              CULTURE
            </p>
            <h2 className="mt-2 text-xl font-semibold text-white">
              How we show up
            </h2>
            <div className="mt-5 grid gap-2">
              {[
                "Direct and collaborative",
                "High standards, low ego",
                "Owner mindset",
                "Outcome-led partnership"
              ].map((value) => (
                <div
                  key={value}
                  className="rounded-2xl border border-white/10 bg-black/25 px-4 py-3 text-sm text-slate-200"
                >
                  {value}
                </div>
              ))}
            </div>
          </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Let’s connect."
        description="If you’re a founder, operator, or management team, submit a pitch."
        primaryAction={{ label: "Contact us", href: "/contact" }}
        secondaryAction={{ label: "Investment Focus", href: "/investment-focus" }}
      />
    </>
  );
}
