import { HeroSection } from "@/components/HeroSection";
import { HeroGraphic } from "@/components/HeroGraphic";

export default function ContactPage() {
  return (
    <>
      <HeroSection
        eyebrow="CONTACT"
        title="Let’s Talk About What’s Next."
        subtitle="Let’s have a clear and direct conversation about your business and what comes next."
        actions={[
          { label: "See Our Portfolio", href: "/portfolio", variant: "secondary" },
          { label: "Investment Focus", href: "/investment-focus", variant: "primary" }
        ]}
        right={<HeroGraphic variant="contact" />}
        rightParallax
      />

      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(900px_circle_at_85%_10%,rgba(0,255,255,0.10),transparent_60%),radial-gradient(900px_circle_at_20%_80%,rgba(255,255,255,0.04),transparent_60%)]" />
        <div className="container relative z-10 py-16">
          <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <form
              id="submit-pitch"
              className="sgpf-panel sgpf-panel-glow p-8 md:p-10"
            >
              <div className="grid gap-4 md:grid-cols-2">
                <label className="space-y-2">
                  <span className="text-sm font-medium text-slate-200">
                    Company Name
                  </span>
                  <input
                    name="companyName"
                    className="w-full rounded-lg border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none transition focus:border-accent/50"
                    placeholder="Company Name"
                  />
                </label>

                <label className="space-y-2">
                  <span className="text-sm font-medium text-slate-200">
                    Your Name & Title
                  </span>
                  <input
                    name="nameTitle"
                    className="w-full rounded-lg border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none transition focus:border-accent/50"
                    placeholder="Your Name & Title"
                  />
                </label>

                <label className="space-y-2">
                  <span className="text-sm font-medium text-slate-200">
                    Email
                  </span>
                  <input
                    name="email"
                    type="email"
                    className="w-full rounded-lg border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none transition focus:border-accent/50"
                    placeholder="you@company.com"
                  />
                </label>
              </div>

              <label className="mt-4 block space-y-2">
                <span className="text-sm font-medium text-slate-200">
                  What you’re looking for
                </span>
                <select
                  name="interest"
                  className="w-full rounded-lg border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none transition focus:border-accent/50"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select one
                  </option>
                  <option value="buyout">Buyout</option>
                  <option value="recap">Recap</option>
                  <option value="minority-growth-investment">Minority Growth Investment</option>
                  <option value="still-figuring-it-out">Still Figuring It Out</option>
                </select>
              </label>

              <label className="mt-4 block space-y-2">
                <span className="text-sm font-medium text-slate-200">
                  Additional Information (if any)
                </span>
                <textarea
                  name="additionalInfo"
                  className="min-h-[160px] w-full resize-y rounded-lg border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none transition focus:border-accent/50"
                  placeholder="Additional Information (if any)"
                />
              </label>

              <button
                type="button"
                className="mt-6 rounded-full border border-accent/50 bg-accent/15 px-6 py-3 text-sm font-medium text-white transition hover:border-accent/80 hover:bg-accent/20"
              >
                Submit
              </button>
            </form>
          </div>

          <div className="space-y-4">
            <div className="sgpf-panel sgpf-panel-glow p-8 md:p-10">
              <p className="text-xs font-semibold tracking-[0.25em] text-accent/80">
                PREFER TO REACH OUT DIRECTLY?
              </p>
              <h2 className="mt-2 text-lg font-semibold text-white">
                Software Growth Partners
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-200">
                530 Lytton Ave, 2nd Floor
                <br />
                Palo Alto, CA 94301
              </p>
              <a
                href="mailto:info@softwaregrowthpartners.com"
                className="mt-4 inline-flex text-sm font-semibold text-slate-200 transition hover:text-white"
              >
                info@softwaregrowthpartners.com
              </a>
            </div>
          </div>
          </div>
        </div>
      </section>
    </>
  );
}
