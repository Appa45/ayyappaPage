const duties = [
"Developed and maintained responsive web applications using React.js, JavaScript, HTML5, CSS3, Bootstrap, and EJS.",
"Built reusable React.js and React Native components to improve consistency and maintainability.",
"Integrated REST APIs using Axios, including data retrieval, submission, validation, loading states, and error handling.",
"Managed shared application state with Redux and Context API.",
"Developed application-health monitoring dashboards and alert/notification workflows.",
"Built scheduling and booking workflows for web and mobile applications.",
"Developed React Native screens for Android and iOS, including navigation, onboarding, splash screens, WebView, payment-related functionality, and API integration.",
"Worked on restaurant digital displays, transforming API data for reusable components and supporting offline data with IndexedDB synchronization.",
"Resolved frontend bugs, UI issues, API integration problems, and cross-browser compatibility issues.",
"Participated in code reviews, sprint planning, Agile/Scrum ceremonies, testing, debugging, and deployment activities."
];
export default function ExperiencePage(){return <main className="min-h-screen bg-[radial-gradient(ellipse_at_top,_rgba(37,99,235,0.13),_transparent_50%)]"><div className="mx-auto max-w-4xl px-5 py-16 sm:px-8 sm:py-20"><p className="text-xs font-bold tracking-[0.22em] text-cyan-300">CAREER</p><h1 className="mt-3 text-4xl font-bold sm:text-5xl">Professional experience</h1><section className="mt-9 rounded-2xl border border-white/10 bg-[#101827] p-6 sm:p-9"><p className="text-sm font-semibold text-cyan-300">JUNE 2022 – MAY 2026</p><h2 className="mt-2 text-2xl font-bold">Frontend Developer</h2><p className="mt-1 text-slate-400">StrideFuture Technologies</p><div className="my-7 h-px bg-white/10"/><h3 className="font-semibold">Key responsibilities</h3><ul className="mt-4 list-disc space-y-3 pl-5 leading-7 text-slate-300">{duties.map(item=><li key={item}>{item}</li>)}</ul></section></div></main>}
