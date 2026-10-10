import Link from "next/link";
import SkillsSlider from "./src/components/SkillsSlider";

const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "91YOURMOBILENUMBER";
const whatsapp = `https://wa.me/${number}?text=${encodeURIComponent("Hi Ayyappa, I saw your portfolio and would like to discuss a project.")}`;

const projects = [
  { name: "StudyTrack", stack: "Next.js · TypeScript · Tailwind CSS", description: "A responsive study-tracking app for organizing topics and monitoring learning progress.", href: "/projects/studytrack", tag: "PERSONAL PROJECT" },
  { name: "Beerboard", stack: "React.js · REST API · IndexedDB", description: "A restaurant digital display for scheduled beer names and prices, with offline menu support.", href: "/projects/beerboard", tag: "CLIENT PROJECT" },
  { name: "Utilstop", stack: "React Native · REST APIs · Axios", description: "A service-booking mobile app with appointments, provider listings, and location-based functionality.", href: "/projects/utilstop", tag: "MOBILE APP" }
];

export default function HomePage() {
  return <main>
    <section className="relative isolate overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_rgba(37,99,235,0.22),_transparent_55%),radial-gradient(ellipse_at_bottom_left,_rgba(8,145,178,0.12),_transparent_50%)]" />
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[1.35fr_0.65fr]">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/[0.07] px-4 py-2 text-xs font-semibold tracking-widest text-cyan-200"><span className="h-2 w-2 rounded-full bg-emerald-400" /> FRONTEND DEVELOPER · 4 YEARS</div>
          <h1 className="mt-7 max-w-3xl text-4xl font-bold leading-[1.12] tracking-tight sm:text-6xl lg:text-7xl">I build <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">React websites</span> and apps that help businesses work smarter.</h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">I&apos;m S.V. Ayyappa Naik, a frontend developer experienced in React.js, React Native, Next.js, JavaScript, and TypeScript.</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href={whatsapp} target="_blank" rel="noreferrer" className="rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-950/50 transition hover:-translate-y-0.5 hover:bg-blue-500">Let&apos;s talk on WhatsApp ↗</a>
            <Link href="/projects" className="rounded-xl border border-white/15 bg-white/[0.03] px-6 py-3.5 text-sm font-bold text-white transition hover:border-cyan-300/50">Explore my work ↓</Link>
          </div>
          <div className="mt-9 flex flex-wrap gap-2">{["React.js","React Native","Next.js","TypeScript","Redux","REST APIs"].map(s=><span key={s} className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-slate-300">{s}</span>)}</div>
        </div>
        <div className="relative mx-auto w-full max-w-sm">
          <div className="absolute -inset-5 rounded-[2rem] bg-gradient-to-br from-blue-500/20 to-cyan-300/10 blur-2xl" />
          <div className="relative rounded-[2rem] border border-white/10 bg-[#101a2b]/90 p-7 shadow-2xl shadow-black/30">
            <div className="flex items-center justify-between"><span className="text-xs font-semibold tracking-widest text-cyan-300">PROFILE SNAPSHOT</span><span className="text-xs text-slate-500">HYD · IN</span></div>
            <div className="mt-7 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-400 text-3xl font-black text-white shadow-lg shadow-blue-950/50">AN</div>
            <h2 className="mt-5 text-2xl font-bold">Ayyappa Naik</h2>
            <p className="mt-2 text-sm text-slate-400">Frontend Developer · Web & Mobile</p>
            <div className="my-6 h-px bg-white/10" />
            <div className="space-y-4 text-sm"><div className="flex justify-between gap-4"><span className="text-slate-400">Experience</span><span className="font-semibold text-white">4 years</span></div><div className="flex justify-between gap-4"><span className="text-slate-400">Core focus</span><span className="font-semibold text-white">React ecosystem</span></div><div className="flex justify-between gap-4"><span className="text-slate-400">Work type</span><span className="font-semibold text-cyan-300">Web + Mobile</span></div></div>
            <Link href="/about" className="mt-7 block rounded-lg border border-white/10 px-4 py-3 text-center text-sm font-semibold text-slate-200 transition hover:border-cyan-300/40 hover:text-cyan-200">More about me ↗</Link>
          </div>
        </div>
      </div>
    </section>

    <section className="border-y border-white/10 bg-white/[0.025]">
      <div className="mx-auto grid max-w-6xl gap-6 px-5 py-8 sm:grid-cols-3 sm:px-8">
        {[["4 years","Frontend development"],["Web + Mobile","React.js & React Native"],["API integration","REST APIs & state management"]].map(([big,small])=><div key={big} className="rounded-xl border border-white/[0.07] bg-[#0c1422] p-5"><p className="text-xl font-bold text-white">{big}</p><p className="mt-1 text-sm text-slate-400">{small}</p></div>)}
      </div>
    </section>

    <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
      <div className="flex flex-wrap items-end justify-between gap-5"><div><p className="text-xs font-bold tracking-[0.22em] text-cyan-300">SELECTED WORK</p><h2 className="mt-3 text-3xl font-bold sm:text-4xl">Projects I&apos;ve worked on.</h2></div><Link href="/projects" className="text-sm font-semibold text-cyan-300 hover:text-cyan-200">All projects ↗</Link></div>
      <div className="mt-10 grid gap-5 md:grid-cols-3">{projects.map((p,i)=><article key={p.name} className="group rounded-2xl border border-white/10 bg-[#101827] p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-400/40"><div className="flex items-center justify-between"><span className="text-xs font-bold tracking-widest text-cyan-300">{p.tag}</span><span className="text-sm text-slate-600">0{i+1}</span></div><h3 className="mt-5 text-2xl font-bold">{p.name}</h3><p className="mt-2 text-xs text-slate-400">{p.stack}</p><p className="mt-5 min-h-20 text-sm leading-6 text-slate-300">{p.description}</p><Link href={p.href} className="mt-5 inline-block text-sm font-semibold text-blue-300 group-hover:text-cyan-200">View project details →</Link></article>)}</div>
    </section>

    <section className="mx-auto max-w-6xl px-5 pb-20 sm:px-8 sm:pb-24"><div className="rounded-3xl border border-blue-300/15 bg-gradient-to-r from-blue-600/15 via-[#101827] to-cyan-400/10 px-7 py-12 sm:px-12 sm:py-14"><p className="text-xs font-bold tracking-[0.22em] text-cyan-300">LET&apos;S CONNECT</p><div className="mt-4 flex flex-col justify-between gap-7 md:flex-row md:items-center"><div><h2 className="text-3xl font-bold sm:text-4xl">Have a project in mind?</h2><p className="mt-3 max-w-xl leading-7 text-slate-300">Let&apos;s discuss your website, web app, or mobile app idea.</p></div><a href={whatsapp} target="_blank" rel="noreferrer" className="shrink-0 rounded-xl bg-cyan-400 px-6 py-3.5 text-sm font-bold text-slate-950 transition hover:bg-cyan-300">Contact on WhatsApp ↗</a></div></div></section>
  </main>;
}
