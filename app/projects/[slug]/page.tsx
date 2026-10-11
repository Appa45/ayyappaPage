import Link from "next/link";
import { notFound } from "next/navigation";

type ProjectFeature = {
  title: string;
  description: string;
  emoji: string;
};

type Project = {
  name: string;
  category: string;
  stack: string;
  summary: string;
  work: string[];
  features?: ProjectFeature[];
  live?: string;
  github?: string;
};

const data: Record<string, Project> = {
  studytrack: {
    name: "StudyTrack",
    category: "Personal Project · EdTech",
    stack: "Next.js · TypeScript · Tailwind CSS · REST APIs · AI Tutor",
    summary:
      "StudyTrack is a learning and study progress tracking application designed to help learners organize topics, monitor their progress, and get assistance with difficult concepts through an AI Tutor.",

    features: [
      {
        emoji: "📚",
        title: "Study Topic Management",
        description:
          "Organize learning topics and keep study materials structured in one place.",
      },
      {
        emoji: "📊",
        title: "Learning Progress Tracking",
        description:
          "Track completed, in-progress, and not-started topics to understand learning progress.",
      },
      {
        emoji: "🤖",
        title: "AI Tutor",
        description:
          "Ask questions about difficult concepts and get AI-powered assistance to help clear doubts.",
      },
      {
        emoji: "🎯",
        title: "Learning Dashboard",
        description:
          "View learning progress and completion statistics through a centralized dashboard.",
      },
      {
        emoji: "📈",
        title: "Progress Overview",
        description:
          "Review progress indicators and topic status summaries to identify what needs attention.",
      },
      {
        emoji: "📱",
        title: "Responsive Interface",
        description:
          "Use the application across desktop, tablet, and mobile screen sizes.",
      },
      {
        emoji: "🔌",
        title: "API Integration",
        description:
          "Connect frontend screens to backend endpoints to retrieve and update learning data.",
      },
      {
        emoji: "🛡️",
        title: "Authentication Workflows",
        description:
          "Support account-related workflows such as login and password recovery where configured.",
      },
    ],

    work: [
      "Built a responsive interface using Next.js, TypeScript, and Tailwind CSS.",
      "Developed reusable UI components for topics, dashboard summaries, and progress indicators.",
      "Integrated backend APIs for topic data and learning progress.",
      "Worked on progress calculations and topic status presentation.",
      "Implemented AI Tutor functionality to help learners clear doubts.",
    ],

    live: "https://studytrack-frontend-phi.vercel.app/",
    github: "https://github.com/Appa45/StudyTrackerFE",
  },

  beerboard: {
    name: "Beerboard",
    category: "Client Project · Restaurant Digital Display",
    stack: "React.js · REST API · IndexedDB · Offline Support",
    summary:
      "A restaurant display showing beer names and prices according to configured schedules.",
    work: [
      "Integrated menu data from an API and transformed it for reusable React components.",
      "Stored menu data in IndexedDB for offline use.",
      "Synchronized local menu data when updated API data became available.",
    ],
  },

  utilstop: {
    name: "Utilstop App",
    category: "Client Project · Mobile App",
    stack: "React Native · REST APIs · Axios · Location Functionality",
    summary: "A service-booking app for indoor and outdoor services.",
    work: [
      "Worked on appointment scheduling and booking management.",
      "Developed provider listings and customer-management modules.",
      "Integrated REST APIs, Axios, and location-based functionality.",
    ],
  },

  "app-health-monitor": {
    name: "App Health Monitor",
    category: "Internal Company Application",
    stack: "React.js · Redux · Context API · Axios · REST APIs",
    summary:
      "An internal dashboard for monitoring application health and service availability.",
    work: [
      "Built reusable dashboard components.",
      "Integrated REST APIs using Axios.",
      "Implemented alert and notification workflows and contributed to debugging and performance improvements.",
    ],
  },

  "10mins-guru-website": {
    name: "10Mins Guru Website",
    category: "Client Web Project",
    stack: "JavaScript · jQuery · HTML5 · CSS3 · Bootstrap",
    summary:
      "A web platform for learners booking one-on-one sessions with experts.",
    work: [
      "Developed responsive scheduling workflows.",
      "Worked on cross-browser-compatible interfaces.",
      "Improved usability across desktop and mobile devices.",
    ],
  },

  "10mins-guru-mobile": {
    name: "10Mins Guru Mobile App",
    category: "Client Mobile Project",
    stack:
      "React Native · JavaScript · Stack Navigator · WebView · REST APIs",
    summary:
      "Cross-platform Android and iOS screens for a one-on-one expert session platform.",
    work: [
      "Implemented navigation, onboarding, and splash screens.",
      "Integrated WebView, payment gateway functionality, and REST APIs.",
      "Generated Android and iOS builds using Android Studio and Xcode.",
    ],
  },

  "osan-grows": {
    name: "OSAN Grows App",
    category: "Client Web Project",
    stack: "JavaScript · HTML5 · CSS3 · Bootstrap · EJS",
    summary:
      "Responsive user-facing web interfaces for desktop and mobile.",
    work: [
      "Developed reusable UI components.",
      "Implemented inquiry forms.",
      "Maintained consistent cross-browser experiences.",
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(data).map((slug) => ({ slug }));
}

export default async function ProjectDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = data[slug];

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[radial-gradient(ellipse_at_top_left,_rgba(37,99,235,0.15),_transparent_50%)]">
      <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-20">
        <Link
          href="/projects"
          className="text-sm font-semibold text-cyan-300 hover:text-cyan-200"
        >
          ← All projects
        </Link>

        {/* Project introduction */}
        <section className="mt-8 rounded-3xl border border-white/10 bg-[#101827] p-7 shadow-2xl shadow-black/10 sm:p-10">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">
            {project.category}
          </p>

          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            {project.name}
          </h1>

          <p className="mt-4 text-sm leading-7 text-slate-400">
            {project.stack}
          </p>

          <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300">
            {project.summary}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-blue-500"
              >
                Visit Live Project ↗
              </a>
            )}

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-white/15 px-5 py-3 text-sm font-bold text-white transition hover:border-cyan-300/50"
              >
                View Source Code ↗
              </a>
            )}
          </div>
        </section>

        {/* StudyTrack feature cards */}
        {project.features && (
          <section className="mt-14">
            <div>
              <p className="text-xs font-bold tracking-[0.2em] text-cyan-300">
                WHAT YOU CAN DO
              </p>

              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                Features &amp; Capabilities
              </h2>

              <p className="mt-4 max-w-2xl leading-7 text-slate-400">
                Explore the key learning and productivity capabilities of{" "}
                {project.name}.
              </p>
            </div>

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {project.features.map((feature) => (
                <article
                  key={feature.title}
                  className="group rounded-2xl border border-white/10 bg-[#101827]/90 p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-[#142238]"
                >
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-300/15 bg-cyan-300/[0.07] text-2xl transition group-hover:scale-110"
                    aria-hidden="true"
                  >
                    {feature.emoji}
                  </div>

                  <h3 className="mt-5 text-lg font-bold text-white">
                    {feature.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    {feature.description}
                  </p>
                </article>
              ))}
            </div>
          </section>
        )}

        {/* Work and highlights */}
        <section className="mt-14 rounded-3xl border border-white/10 bg-[#101827] p-7 sm:p-10">
          <p className="text-xs font-bold tracking-[0.2em] text-cyan-300">
            DEVELOPMENT
          </p>

          <h2 className="mt-3 text-2xl font-bold sm:text-3xl">
            Work &amp; Highlights
          </h2>

          <ul className="mt-6 space-y-4">
            {project.work.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-sm leading-7 text-slate-300"
              >
                <span
                  className="mt-2 h-2 w-2 shrink-0 rounded-full bg-cyan-300"
                  aria-hidden="true"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Project navigation */}
        <div className="mt-10 flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/projects"
            className="text-sm font-semibold text-cyan-300 hover:text-cyan-200"
          >
            ← Explore other projects
          </Link>

          <Link
            href="/contact"
            className="rounded-xl border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:border-cyan-300/50"
          >
            Discuss a project ↗
          </Link>
        </div>
      </div>
    </main>
  );
}
