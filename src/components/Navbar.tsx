import Link from "next/link";
import Image from "next/image";

import LogoFull from "@/assets/SGP-Full-Logo.png";

const navLinks = [
  { href: "/investment-focus", label: "Strategy" },
  { href: "/how-we-help", label: "Value Creation" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/team", label: "Team" },
  { href: "/blog", label: "Insights" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" }
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/40 backdrop-blur relative after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-[linear-gradient(90deg,transparent,rgba(0,255,255,0.35),transparent)]">
      <div className="container flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src={LogoFull}
            alt="Software Growth Partners"
            className="h-9 w-auto object-contain"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-3 py-2 text-sm text-slate-200 transition hover:bg-white/5 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          className="rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:border-accent/60 hover:bg-accent/15 hover:shadow-glow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
        >
          Contact us
        </Link>
      </div>
    </header>
  );
}
