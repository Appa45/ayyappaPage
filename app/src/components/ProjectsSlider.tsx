"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

type Project = {
  name: string;
  stack: string;
  description: string;
  href: string;
  tag: string;
};

export default function ProjectsSlider({
  projects,
}: {
  projects: Project[];
}) {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  const moveSlider = (direction: "prev" | "next") => {
    const container = sliderRef.current;
    if (!container) return;

    const card = container.querySelector<HTMLElement>(
      "[data-project-card]"
    );

    const distance =
      (card?.offsetWidth ?? container.clientWidth) + 20;

    const atEnd =
      container.scrollLeft + container.clientWidth >=
      container.scrollWidth - 8;

    if (direction === "next" && atEnd) {
      container.scrollTo({
        left: 0,
        behavior: "smooth",
      });
      return;
    }

    if (direction === "prev" && container.scrollLeft <= 8) {
      container.scrollTo({
        left: container.scrollWidth,
        behavior: "smooth",
      });
      return;
    }

    container.scrollBy({
      left: direction === "next" ? distance : -distance,
      behavior: "smooth",
    });
  };

  // Automatically slide every 3.5 seconds
  useEffect(() => {
    if (isPaused || projects.length <= 1) return;

    const interval = window.setInterval(() => {
      const container = sliderRef.current;
      if (!container) return;

      const atEnd =
        container.scrollLeft + container.clientWidth >=
        container.scrollWidth - 8;

      if (atEnd) {
        container.scrollTo({
          left: 0,
          behavior: "smooth",
        });
      } else {
        const card = container.querySelector<HTMLElement>(
          "[data-project-card]"
        );

        const distance =
          (card?.offsetWidth ?? container.clientWidth) + 20;

        container.scrollBy({
          left: distance,
          behavior: "smooth",
        });
      }
    }, 3500);

    return () => window.clearInterval(interval);
  }, [isPaused, projects.length]);

  return (
    <div
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
    >
      {/* Slider controls */}
      <div className="mb-5 flex items-center justify-between">
        <p className="text-sm text-slate-400">
          Featured projects
        </p>

        <div className="flex gap-3">
          <button
            type="button"
            onClick={() => moveSlider("prev")}
            aria-label="Previous projects"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-xl text-white transition hover:border-cyan-300/50 hover:bg-cyan-300/10"
          >
            ←
          </button>

          <button
            type="button"
            onClick={() => moveSlider("next")}
            aria-label="Next projects"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-xl text-white transition hover:border-cyan-300/50 hover:bg-cyan-300/10"
          >
            →
          </button>
        </div>
      </div>

      {/* Project carousel */}
      <div
        ref={sliderRef}
        className="flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {projects.map((project, index) => (
          <article
            key={project.name}
            data-project-card
            className="group w-[88%] shrink-0 snap-start rounded-2xl border border-white/10 bg-[#101827] p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-400/40 sm:w-[calc(50%-0.625rem)]"
          >
            <div className="flex items-center justify-between gap-3">
              <span className="text-xs font-bold tracking-widest text-cyan-300">
                {project.tag}
              </span>

              <span className="text-sm text-slate-600">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>

            <h3 className="mt-5 text-2xl font-bold text-white">
              {project.name}
            </h3>

            <p className="mt-2 text-xs leading-5 text-slate-400">
              {project.stack}
            </p>

            <p className="mt-5 min-h-20 text-sm leading-6 text-slate-300">
              {project.description}
            </p>

            <Link
              href={project.href}
              className="mt-5 inline-block text-sm font-semibold text-blue-300 transition group-hover:text-cyan-200"
            >
              View project details →
            </Link>
          </article>
        ))}
      </div>

      <p className="text-center text-xs text-slate-500 sm:hidden">
        Swipe to explore more projects →
      </p>
    </div>
  );
}