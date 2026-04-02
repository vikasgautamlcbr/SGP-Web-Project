import { HeroSection } from "@/components/HeroSection";

export default function ContactPage() {
  return (
    <>
      <HeroSection
        eyebrow="CONTACT"
        title="Submit a Pitch"
        subtitle="Share a quick overview. If there’s fit, we’ll respond quickly with clear next steps."
        actions={[
          { label: "View Portfolio", href: "/portfolio", variant: "secondary" },
          { label: "Investment Focus", href: "/investment-focus", variant: "primary" }
        ]}
      />

      <section>
        <div className="container py-16">
          <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <form
              id="submit-pitch"
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-white/20 hover:bg-white/[0.05]"
            >
              <div className="grid gap-4 md:grid-cols-2">
                <label className="space-y-2">
                  <span className="text-sm font-medium text-slate-200">Name</span>
                  <input
                    name="name"
                    className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none transition focus:border-accent/50"
                    placeholder="Your name"
                  />
                </label>

                <label className="space-y-2">
                  <span className="text-sm font-medium text-slate-200">Email</span>
                  <input
                    name="email"
                    type="email"
                    className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none transition focus:border-accent/50"
                    placeholder="you@company.com"
                  />
                </label>
              </div>

              <div className="mt-4 grid gap-4 md:grid-cols-2">
                <label className="space-y-2">
                  <span className="text-sm font-medium text-slate-200">
                    Company
                  </span>
                  <input
                    name="company"
                    className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none transition focus:border-accent/50"
                    placeholder="Company name"
                  />
                </label>

                <label className="space-y-2">
                  <span className="text-sm font-medium text-slate-200">
                    Website
                  </span>
                  <input
                    name="website"
                    className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none transition focus:border-accent/50"
                    placeholder="https://"
                  />
                </label>
              </div>

              <label className="mt-4 block space-y-2">
                <span className="text-sm font-medium text-slate-200">
                  Pitch / Notes
                </span>
                <textarea
                  name="message"
                  className="min-h-[160px] w-full resize-y rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none transition focus:border-accent/50"
                  placeholder="Share your business, traction, and what you're looking for..."
                />
              </label>

              <button
                type="button"
                className="mt-6 rounded-full border border-accent/50 bg-accent/15 px-6 py-3 text-sm font-medium text-white transition hover:border-accent/80 hover:bg-accent/20"
              >
                Contact us
              </button>
            </form>
          </div>

          <div className="space-y-4">
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-white/20 hover:bg-white/[0.05]">
              <p className="text-xs font-semibold tracking-[0.25em] text-accent/80">
                WHAT TO EXPECT
              </p>
              <h2 className="mt-2 text-lg font-semibold text-white">
                Clear process
              </h2>
              <div className="mt-5 grid gap-2">
                {[
                  "Submit a short overview, traction, and what you’re looking for",
                  "We review internally against thesis and fit",
                  "We follow up quickly if there’s alignment",
                  "We set a clear next step (call, diligence, or pass)"
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

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-white/20 hover:bg-white/[0.05]">
              <h2 className="text-lg font-semibold text-white">
                What to include
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-200">
                Business summary, customer outcomes, ARR/retention, and how you’re thinking about growth levers.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-white/20 hover:bg-white/[0.05]">
              <h2 className="text-lg font-semibold text-white">Office Locations</h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-200">
                Remote-first collaboration with portfolio teams.
              </p>
            </div>
          </div>
          </div>
        </div>
      </section>
    </>
  );
}
