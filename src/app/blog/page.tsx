import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { CTASection } from "@/components/CTASection";
import { HeroSection } from "@/components/HeroSection";
import { HeroGraphic } from "@/components/HeroGraphic";

const posts = [
  {
    title: "How to build a repeatable GTM engine",
    excerpt: "A practical cadence for pricing, pipeline, and execution without the noise.",
    href: "/blog#gtm"
  },
  {
    title: "Product strategy that scales a platform",
    excerpt: "Focus the roadmap, tighten the narrative, and build leverage across segments.",
    href: "/blog#product"
  },
  {
    title: "Add-ons: diligence → integration → value capture",
    excerpt: "A simple framework for tuck-ins that expands product breadth and distribution.",
    href: "/blog#add-ons"
  }
];

export default function BlogPage() {
  return (
    <>
      <HeroSection
        eyebrow="INSIGHTS"
        title="Insights"
        subtitle="Operator-grade frameworks on software growth: GTM, product strategy, AI workflows, and add-ons."
        actions={[
          { label: "About", href: "/about", variant: "primary" },
          { label: "Contact us", href: "/contact", variant: "secondary" }
        ]}
        right={<HeroGraphic variant="insights" />}
        rightParallax
      />

      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(900px_circle_at_85%_10%,rgba(0,255,255,0.10),transparent_60%),radial-gradient(900px_circle_at_20%_80%,rgba(255,255,255,0.04),transparent_60%)]" />
        <div className="container relative z-10 py-16">
          <div className="flex items-end justify-between gap-6">
            <p className="text-sm text-slate-300">
              Publishing regularly. In the meantime, here are a few representative topics.
            </p>
            <span className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs font-semibold tracking-[0.22em] text-slate-200">
              COMING SOON
            </span>
          </div>

          <div className="sgpf-panel sgpf-panel-glow mt-10 p-8 md:p-10">
            <div className="divide-y divide-white/10 overflow-hidden rounded-[22px] border border-white/10 bg-black/25">
              {posts.map((post) => (
                <Link
                  key={post.title}
                  href={post.href}
                  className="group flex items-start justify-between gap-6 px-6 py-6 transition hover:bg-white/[0.03]"
                >
                  <div className="min-w-0">
                    <h2 className="text-base font-semibold text-white md:text-lg">
                      {post.title}
                    </h2>
                    <p className="mt-2 text-sm leading-relaxed text-slate-200">
                      {post.excerpt}
                    </p>
                  </div>
                  <span className="sgpf-icon-tile sgpf-icon-tile-xs mt-1 transition group-hover:translate-x-0.5">
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Want to share a company or connect?"
        description="Submit a pitch and our team will review your company and reach out if there is a potential fit."
        primaryAction={{ label: "Contact us", href: "/contact" }}
        secondaryAction={{ label: "Portfolio", href: "/portfolio" }}
      />
    </>
  );
}
