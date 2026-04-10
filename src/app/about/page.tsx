import { CTASection } from "@/components/CTASection";
import { HeroSection } from "@/components/HeroSection";
import { HeroGraphic } from "@/components/HeroGraphic";

const beliefs = [
  "Growth rate is overrated. Retention isn’t. The best companies compound through strong retention, not just aggressive top-line growth.",
  "“Hands-on” only matters if it’s measurable. We judge involvement by what gets done: hires made, deals executed, problems solved.",
  "Speed signals conviction. A 48-hour decision isn’t a shortcut—it’s what comes from deep pattern recognition.",
  "Where you start isn’t where you end. Companies like Cleo, Appsian, and Netreo started small, and scaled into meaningful platforms."
];

const builtSoFar = [
  "6 platform investments (3 current, 3 prior)",
  "5 bolt-on acquisitions executed and integrated",
  "3 successful exits",
  "Silicon Valley-based, investing nationally",
  "Focused exclusively on B2B software"
];

export default function AboutPage() {
  return (
    <>
      <HeroSection
        eyebrow="ABOUT"
        title="Why We Exist"
        subtitle="There are hundreds of private equity firms. Very few were built by someone who actually ran a software company first. Software Growth Partners was built on a simple belief: founders of profitable, growing B2B software companies deserve a partner who understands their business from the inside, not just the model. Sumit Garg built SGP after seeing the gap firsthand."
        actions={[
          { label: "Meet the Team", href: "/team", variant: "primary" },
          { label: "See Our Portfolio", href: "/portfolio", variant: "secondary" }
        ]}
        right={<HeroGraphic variant="about" />}
        rightParallax
      />

      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(900px_circle_at_85%_10%,rgba(0,255,255,0.10),transparent_60%),radial-gradient(900px_circle_at_20%_80%,rgba(255,255,255,0.04),transparent_60%)]" />
        <div className="container relative z-10 py-16">
          <div className="grid gap-4 md:grid-cols-2">
          <div className="sgpf-panel sgpf-panel-glow p-8 md:p-10">
            <h2 className="text-lg font-semibold text-white">
              What We Believe
            </h2>
            <div className="mt-6 divide-y divide-white/10 overflow-hidden rounded-[22px] border border-white/10 bg-black/25">
              {beliefs.map((item) => (
                <div key={item} className="sgpf-bullet px-6 py-5">
                  <span className="sgpf-bullet-dot" />
                  <p className="text-sm leading-relaxed text-slate-200">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="sgpf-panel sgpf-panel-glow p-8 md:p-10">
            <h2 className="text-lg font-semibold text-white">What we’ve built so far</h2>
            <div className="mt-6 divide-y divide-white/10 overflow-hidden rounded-[22px] border border-white/10 bg-black/25">
              {builtSoFar.map((item) => (
                <div key={item} className="sgpf-bullet px-6 py-5">
                  <span className="sgpf-bullet-dot" />
                  <p className="text-sm leading-relaxed text-slate-200">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        </div>

      </section>

      <CTASection
        title="Want to understand how we work in practice?"
        description="Meet the team or explore the portfolio."
        primaryAction={{ label: "Meet the Team", href: "/team" }}
        secondaryAction={{ label: "See Our Portfolio", href: "/portfolio" }}
      />
    </>
  );
}
