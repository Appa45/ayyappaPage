"use client";

import { useEffect, useRef, useState } from "react";

const skills = [
  {
    title: "4+ Years",
    description: "Frontend Development Experience",
    category: "EXPERIENCE",
  },
  {
    title: "Web + Mobile",
    description: "React.js and React Native",
    category: "DEVELOPMENT",
  },
  {
    title: "React.js",
    description: "Reusable Components and Interactive UI",
    category: "FRONTEND",
  },
  {
    title: "Next.js",
    description: "App Router and Modern Web Applications",
    category: "FRAMEWORK",
  },
  {
    title: "JavaScript",
    description: "ES6+, Asynchronous Programming and Logic",
    category: "LANGUAGE",
  },
  {
    title: "TypeScript",
    description: "Type Safety and Maintainable Code",
    category: "LANGUAGE",
  },
  {
    title: "Responsive UI",
    description: "Mobile-First Design Across Screen Sizes",
    category: "UI / UX",
  },
  {
    title: "Tailwind CSS",
    description: "Responsive Layouts and Modern Styling",
    category: "STYLING",
  },
  {
    title: "REST APIs",
    description: "API Integration and Error Handling",
    category: "INTEGRATION",
  },
  {
    title: "State Management",
    description: "React State, Context API and Redux",
    category: "FRONTEND",
  },
  {
    title: "Node.js + Express",
    description: "Backend APIs and Middleware",
    category: "BACKEND",
  },
  {
    title: "MongoDB",
    description: "Database Operations with Mongoose",
    category: "DATABASE",
  },
  {
    title: "Git & GitHub",
    description: "Version Control and Collaboration",
    category: "TOOLS",
  },
  {
    title: "AI Integration",
    description: "Integrating AI APIs into Applications",
    category: "INTEGRATION",
  },
  {
    title: "Authentication",
    description: "JWT, HTTP-Only Cookies and Google OAuth",
    category: "SECURITY",
  },
  {
    title: "Vercel",
    description: "Frontend Deployment and Environment Setup",
    category: "DEPLOYMENT",
  },
];

export default function SkillsSlider() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  const moveSlider = (direction: "next" | "prev") => {
    const slider = sliderRef.current;

    if (!slider) return;

    const card = slider.querySelector<HTMLElement>(
      "[data-skill-card]"
    );

    const gap = 20;
    const distance = (card?.offsetWidth ?? slider.clientWidth) + gap;

    const maxScroll = slider.scrollWidth - slider.clientWidth;
    const atEnd = slider.scrollLeft >= maxScroll - 8;
    const atStart = slider.scrollLeft <= 8;

    if (direction === "next" && atEnd) {
      slider.scrollTo({
        left: 0,
        behavior: "smooth",
      });
      return;
    }

    if (direction === "prev" && atStart) {
      slider.scrollTo({
        left: maxScroll,
        behavior: "smooth",
      });
      return;
    }

    slider.scrollBy({
      left: direction === "next" ? distance : -distance,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    if (isPaused || skills.length <= 1) return;

    const interval = window.setInterval(() => {
      const slider = sliderRef.current;

      if (!slider) return;

      const maxScroll = slider.scrollWidth - slider.clientWidth;

      if (maxScroll <= 0) return;

      const atEnd = slider.scrollLeft >= maxScroll - 8;

      if (atEnd) {
        slider.scrollTo({
          left: 0,
          behavior: "smooth",
        });
        return;
      }

      const card = slider.querySelector<HTMLElement>(
        "[data-skill-card]"
      );

      const distance = (card?.offsetWidth ?? slider.clientWidth) + 20;

      slider.scrollBy({
        left: distance,
        behavior: "smooth",
      });
    }, 3000);

    return () => window.clearInterval(interval);
  }, [isPaused]);

  return (
    <section className="w-full border-y border-white/10 bg-white/[0.025]">
      <div
        className="mx-auto w-full max-w-7xl px-5 py-10 sm:px-8 sm:py-12 lg:px-10"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onFocusCapture={() => setIsPaused(true)}
        onBlurCapture={(event) => {
          if (
            !event.currentTarget.contains(
              event.relatedTarget as Node | null
            )
          ) {
            setIsPaused(false);
          }
        }}
      >
        {/* Header */}
        <div className="mb-7 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-bold tracking-[0.22em] text-cyan-300">
              EXPERIENCE & SKILLS
            </p>

            <h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
              What I work with
            </h2>

            <p className="mt-2 text-sm text-slate-400">
              Technologies I use to build web and mobile applications.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex shrink-0 gap-2">
            <button
              type="button"
              aria-label="Previous skills"
              onClick={() => moveSlider("prev")}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-xl text-white transition hover:border-cyan-300/50 hover:bg-cyan-300/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
            >
              ←
            </button>

            <button
              type="button"
              aria-label="Next skills"
              onClick={() => moveSlider("next")}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-xl text-white transition hover:border-cyan-300/50 hover:bg-cyan-300/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
            >
              →
            </button>
          </div>
        </div>

        {/* Full-width horizontal slider */}
        <div
          ref={sliderRef}
          aria-label="Experience and technical skills"
          className="flex w-full gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {skills.map((skill, index) => (
            <article
              key={skill.title}
              data-skill-card
              className="group w-[85%] min-w-0 shrink-0 snap-start rounded-2xl border border-white/[0.08] bg-[#0c1422] p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-[#101c2e] sm:w-[calc(50%-0.625rem)] lg:w-[calc(33.333333%-0.834rem)] xl:w-[calc(25%-0.9375rem)]"
            >
              <div className="flex items-center justify-between gap-2">
                <span className="truncate text-[10px] font-bold tracking-[0.16em] text-cyan-300 sm:text-xs">
                  {skill.category}
                </span>

                <span className="text-xs text-slate-600">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <h3 className="mt-5 break-words text-xl font-bold text-white transition group-hover:text-cyan-200">
                {skill.title}
              </h3>

              <p className="mt-3 min-h-[72px] text-sm leading-6 text-slate-400">
                {skill.description}
              </p>

              <div className="mt-5 h-1 overflow-hidden rounded-full bg-white/10">
                <div className="h-full w-1/3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-300 transition-all duration-500 group-hover:w-full" />
              </div>
            </article>
          ))}
        </div>

        <p className="mt-2 text-center text-xs text-slate-500 sm:hidden">
          Swipe to explore more skills →
        </p>
      </div>
    </section>
  );
}