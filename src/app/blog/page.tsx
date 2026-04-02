import Link from "next/link";

import { CTASection } from "@/components/CTASection";
import { HeroSection } from "@/components/HeroSection";

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
      />

      <section>
        <div className="container py-16">
          <div className="flex items-end justify-between gap-6">
            <p className="text-sm text-slate-300">
              Publishing regularly. In the meantime, here are a few representative topics.
            </p>
            <span className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs font-semibold tracking-[0.22em] text-slate-200">
              COMING SOON
            </span>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
          {posts.map((post) => (
            <Link
              key={post.title}
              href={post.href}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 transition will-change-transform hover:-translate-y-0.5 hover:border-accent/40 hover:bg-white/7 hover:shadow-glow"
            >
              <h2 className="text-lg font-semibold text-white">{post.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-200">
                {post.excerpt}
              </p>
            </Link>
          ))}
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
