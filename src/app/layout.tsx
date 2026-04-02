import type { Metadata } from "next";

import "./globals.css";

import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { CursorFX } from "@/components/CursorFX";

export const metadata: Metadata = {
  title: {
    default: "SGP",
    template: "%s | SGP"
  },
  description: "A dark theme Next.js 14 site with a cyan accent."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-[#05070b] text-slate-100 antialiased">
        <div className="min-h-screen">
          <CursorFX />
          <Navbar />
          <main className="animate-[sgpf-enter_700ms_ease-out]">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
