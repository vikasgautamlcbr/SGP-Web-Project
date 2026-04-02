import Link from "next/link";
import Image from "next/image";

import LogoFull from "@/assets/SGP-Full-Logo.png";

const footerLinks = [
  { href: "/investment-focus", label: "Strategy" },
  { href: "/how-we-help", label: "Value Creation" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/team", label: "Team" },
  { href: "/blog", label: "Insights" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" }
];

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-black/40">
      <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(900px_circle_at_20%_0%,rgba(0,255,255,0.10),transparent_55%),radial-gradient(700px_circle_at_90%_60%,rgba(255,255,255,0.04),transparent_60%)]" />
      <div className="container relative z-10 grid gap-10 py-12 md:grid-cols-2">
        <div className="space-y-4">
          <Link href="/" className="inline-flex items-center gap-3">
            <Image
              src={LogoFull}
              alt="SGP"
              className="h-9 w-auto object-contain"
            />
          </Link>
          <p className="max-w-sm text-sm text-slate-300">
            Operator-led investing in growth-stage software companies.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 text-sm md:justify-self-end">
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-3 py-2 text-slate-300 transition hover:bg-white/5 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container relative z-10 flex flex-col gap-3 py-6 text-xs text-slate-400 md:flex-row md:items-center md:justify-between">
          <span>© {new Date().getFullYear()} SGP. All rights reserved.</span>
          <span className="text-slate-500">Accent: #00FFFF</span>
        </div>
      </div>
    </footer>
  );
}
