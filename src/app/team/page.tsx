import { CTASection } from "@/components/CTASection";
import { HeroSection } from "@/components/HeroSection";
import Image from "next/image";

import AndrewImg from "./member images/Andrew.jpg";
import DevanshImg from "./member images/devansh.jpg";
import SreenathImg from "./member images/Sreenath.jpg";
import SumitImg from "./member images/garg-sumit.jpg";
import TusharImg from "./member images/tushar.png";

const partners = [
  {
    id: "andrew",
    name: "Andrew",
    role: "Partner",
    image: AndrewImg,
    proof: ["Operator-led", "GTM execution", "Add-ons + integration"]
  },
  {
    id: "sreenath",
    name: "Sreenath",
    role: "Partner",
    image: SreenathImg,
    proof: ["Software-only focus", "Operating cadence", "Value creation"]
  },
  {
    id: "devansh",
    name: "Devansh",
    role: "Partner",
    image: DevanshImg,
    proof: ["Product strategy", "AI workflows", "Platform thinking"]
  },
  {
    id: "sumit-garg",
    name: "Sumit Garg",
    role: "Operating Partner",
    image: SumitImg,
    proof: ["Enterprise software", "Scale planning", "Execution support"]
  },
  {
    id: "tushar",
    name: "Tushar",
    role: "Operating Partner",
    image: TusharImg,
    proof: ["Operations", "Metrics + cadence", "Execution support"]
  }
];

export default function TeamPage() {
  return (
    <>
      <HeroSection
        eyebrow="TEAM"
        title="Operators partnering with operators"
        subtitle="Hands-on investors and operators focused on execution: GTM, product strategy, talent, and disciplined add-ons."
        actions={[
          { label: "How We Help", href: "/how-we-help", variant: "primary" },
          { label: "Contact us", href: "/contact", variant: "secondary" }
        ]}
      />

      <section>
        <div className="container py-16">
          <div className="space-y-10">
          <div className="space-y-2">
            <p className="text-xs font-semibold tracking-[0.25em] text-accent/80">
              PARTNERS
            </p>
            <h2 className="text-2xl font-semibold text-white md:text-3xl">
              Partner team
            </h2>
            <p className="max-w-3xl text-sm leading-relaxed text-slate-200 md:text-base">
              A team built around repeatable software value creation: GTM execution, product strategy, talent, and add-ons.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {partners.map((member) => (
              <div
                key={member.id}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition will-change-transform hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.05]"
              >
                <div className="flex items-start gap-4">
                  <div className="h-14 w-14 overflow-hidden rounded-2xl border border-white/10 bg-black/30">
                    <Image
                      src={member.image}
                      alt={member.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="min-w-0">
                    <p className="truncate text-base font-semibold text-white">
                      {member.name}
                    </p>
                    <p className="text-xs text-slate-300">{member.role}</p>
                  </div>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {member.proof.map((item) => (
                    <span
                      key={`${member.id}-${item}`}
                      className="rounded-full border border-white/10 bg-black/25 px-3 py-1 text-xs text-slate-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="grid gap-4 lg:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-white/20 hover:bg-white/[0.05]">
              <p className="text-xs font-semibold tracking-[0.25em] text-accent/80">
                OPERATING TEAM
              </p>
              <h3 className="mt-2 text-xl font-semibold text-white">
                Operating support
              </h3>
              <div className="mt-5 grid gap-2 sm:grid-cols-2">
                {[
                  { title: "GTM Engine", body: "Pricing, packaging, pipeline mechanics, forecasting cadence." },
                  { title: "Product Strategy", body: "Roadmap focus, platform narrative, customer value mapping." },
                  { title: "Talent", body: "Leadership hiring, incentives, org design, operating structure." },
                  { title: "Add-ons", body: "Sourcing, diligence, integration planning, value capture." }
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-white/10 bg-black/25 p-4"
                  >
                    <p className="text-sm font-semibold text-white">{item.title}</p>
                    <p className="mt-2 text-xs leading-relaxed text-slate-300">
                      {item.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-white/20 hover:bg-white/[0.05]">
              <p className="text-xs font-semibold tracking-[0.25em] text-accent/80">
                HOW WE WORK WITH FOUNDERS
              </p>
              <h3 className="mt-2 text-xl font-semibold text-white">
                Clear, collaborative, outcome-led
              </h3>
              <div className="mt-5 grid gap-2">
                {[
                  "Align on the thesis and the few levers that matter",
                  "Build the scorecard and operating cadence",
                  "Execute GTM + product priorities with owners",
                  "Pursue add-ons when they accelerate the plan",
                  "Compound value over time"
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
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-white/20 hover:bg-white/[0.05]">
            <p className="text-xs font-semibold tracking-[0.25em] text-accent/80">
              ADVISORS
            </p>
            <h3 className="mt-2 text-xl font-semibold text-white">
              High-signal network
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-200">
              Specialists engaged selectively based on the plan and the work to get done.
            </p>
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
