import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "S.V. Ayyappa Naik | Frontend Developer",
  description: "Frontend developer with 4 years of experience in React.js, React Native, Next.js, and TypeScript."
};

const nav = [
  { href: "/", label: "Home" }, { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" }, { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" }
];

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>
    <header className="sticky top-0 z-20 border-b border-white/10 bg-[#080d18]/90 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-5 py-5 sm:px-8">
        <Link href="/" className="text-lg font-bold tracking-tight">ayyappa<span className="text-cyan-400">.dev</span></Link>
        <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-300">
          {nav.map((item) => <Link key={item.href} href={item.href} className="transition hover:text-cyan-300">{item.label}</Link>)}
        </div>
      </nav>
    </header>
    {children}
    <footer className="border-t border-white/10 px-5 py-7 text-center text-sm text-slate-500">
      © {new Date().getFullYear()} S.V. Ayyappa Naik <span className="mx-2 text-cyan-400">•</span> Built with Next.js
    </footer>
  </body></html>;
}
