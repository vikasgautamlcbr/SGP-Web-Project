import { CTASection } from "@/components/CTASection";
import { HeroSection } from "@/components/HeroSection";
import Image from "next/image";
import { HeroGraphic } from "@/components/HeroGraphic";

import SumitImg from "./member images/garg-sumit.jpg";

export default function TeamPage() {
  return (
    <>
      <HeroSection
        eyebrow="TEAM"
        title="Meet Our Team"
        subtitle="SGP was built on a simple belief: software founders deserve a partner who understands the work, not just the outcome."
        actions={[
          { label: "Talk to Us", href: "/contact", variant: "primary" },
          { label: "See Our Portfolio", href: "/portfolio", variant: "secondary" }
        ]}
        right={<HeroGraphic variant="team" />}
        rightParallax
      />

      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(900px_circle_at_85%_10%,rgba(0,255,255,0.10),transparent_60%),radial-gradient(900px_circle_at_20%_80%,rgba(255,255,255,0.04),transparent_60%)]" />
        <div className="container relative z-10 py-16">
          <div className="space-y-10">
          <div className="space-y-2">
            <p className="text-xs font-semibold tracking-[0.25em] text-accent/80">
              LEADERSHIP
            </p>
            <h2 className="text-2xl font-semibold text-white md:text-3xl">
              Sumit Garg
            </h2>
            <p className="max-w-3xl text-sm leading-relaxed text-slate-200 md:text-base">
              Founder & Managing Partner
            </p>
          </div>

          <div className="grid gap-4 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div className="sgpf-panel sgpf-panel-glow p-8 md:p-10">
              <div className="flex items-start gap-4">
                <div className="h-16 w-16 overflow-hidden rounded-xl border border-white/10 bg-black/30">
                  <Image
                    src={SumitImg}
                    alt="Sumit Garg"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="min-w-0">
                  <p className="text-base font-semibold text-white">
                    Sumit Garg
                  </p>
                  <p className="text-xs text-slate-300">
                    Founder & Managing Partner
                  </p>
                </div>
              </div>
              <p className="mt-5 text-sm leading-relaxed text-slate-200">
                SGP was built on a simple belief: software founders deserve a partner who understands the work, not just the outcome. Before founding SGP, Sumit was an operator and investor and directly involved in scaling companies like Cleo, Appsian, and Netreo. His involvement isn’t delegated. It’s personal.
              </p>
            </div>

            <div className="sgpf-panel sgpf-panel-glow p-8 md:p-10">
              <p className="text-xs font-semibold tracking-[0.25em] text-accent/80">
                HOW WE WORK WITH FOUNDERS
              </p>
              <h3 className="mt-2 text-xl font-semibold text-white">
                How We Work With Founders
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-200">
                Every company is different, so our approach starts with listening, not prescribing. From there, we partner closely:
              </p>
              <div className="mt-6 divide-y divide-white/10 overflow-hidden rounded-[22px] border border-white/10 bg-black/25">
                {[
                  "We show up beyond the boardroom",
                  "We make introductions we stand behind",
                  "We give direct, honest input",
                  "We stay engaged before and after every milestone"
                ].map((step, index) => (
                  <div key={step} className="flex items-start gap-4 px-6 py-5">
                    <span className="sgpf-icon-tile sgpf-icon-tile-xs mt-0.5 text-xs font-semibold">
                      {index + 1}
                    </span>
                    <p className="text-sm leading-relaxed text-slate-200">{step}</p>
                  </div>
                ))}
              </div>
              <p className="mt-5 text-sm leading-relaxed text-slate-200">
                We don’t disappear after the investment. We build alongside you.
              </p>
            </div>
          </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Want to connect?"
        description="Submit a pitch or send a note. We’ll respond quickly if there’s alignment."
        primaryAction={{ label: "Contact us", href: "/contact" }}
        secondaryAction={{ label: "About", href: "/about" }}
      />
    </>
  );
}
