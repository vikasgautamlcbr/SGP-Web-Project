import { CTASection } from "@/components/CTASection";
import { HeroSection } from "@/components/HeroSection";

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
      />

      <section>
        <div className="container py-16">
          <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-white/20 hover:bg-white/[0.05]">
            <h2 className="text-lg font-semibold text-white">
              What We Believe
            </h2>
            <div className="mt-5 grid gap-2">
              {beliefs.map((item) => (
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
            <h2 className="text-lg font-semibold text-white">What we’ve built so far</h2>
            <div className="mt-5 grid gap-2">
              {builtSoFar.map((item) => (
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
