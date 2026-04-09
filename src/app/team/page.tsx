import { CTASection } from "@/components/CTASection";
import { HeroSection } from "@/components/HeroSection";
import Image from "next/image";

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
      />

      <section>
        <div className="container py-16">
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
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-white/20 hover:bg-white/[0.05]">
              <div className="flex items-start gap-4">
                <div className="h-16 w-16 overflow-hidden rounded-2xl border border-white/10 bg-black/30">
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

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-white/20 hover:bg-white/[0.05]">
              <p className="text-xs font-semibold tracking-[0.25em] text-accent/80">
                HOW WE WORK WITH FOUNDERS
              </p>
              <h3 className="mt-2 text-xl font-semibold text-white">
                How We Work With Founders
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-200">
                Every company is different, so our approach starts with listening, not prescribing. From there, we partner closely:
              </p>
              <div className="mt-5 grid gap-2">
                {[
                  "We show up beyond the boardroom",
                  "We make introductions we stand behind",
                  "We give direct, honest input",
                  "We stay engaged before and after every milestone"
                ].map((step, index) => (
                  <div
                    key={step}
                    className="flex items-start gap-3 rounded-2xl border border-white/10 bg-black/25 px-4 py-3"
                  >
                    <span className="mt-1 text-xs font-semibold tracking-[0.22em] text-accent/80">
                      {index + 1}
                    </span>
                    <p className="text-sm text-slate-200">{step}</p>
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
