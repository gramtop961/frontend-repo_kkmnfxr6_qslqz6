import { useEffect, useState } from 'react';

const demoProjects = [
  {
    title: 'Interactive 3D Landing',
    desc: 'A marketing site using Spline and motion for a tech startup launch.',
    tags: ['React', 'Spline', 'Tailwind'],
    link: '#',
  },
  {
    title: 'Realtime Dashboard',
    desc: 'Analytics dashboard with live data and custom charts.',
    tags: ['React', 'FastAPI', 'Charts'],
    link: '#',
  },
  {
    title: 'Design System',
    desc: 'Composable UI kit and tokens for consistent product experiences.',
    tags: ['Design', 'Storybook', 'CSS'],
    link: '#',
  },
];

export default function Projects() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section id="projects" className="relative w-full bg-neutral-950 py-20 text-white">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Selected Work</h2>
            <p className="mt-2 text-white/60">A few highlights of things I loved building recently.</p>
          </div>
          <a href="#contact" className="hidden rounded-md border border-white/20 bg-white/5 px-4 py-2 text-sm hover:bg-white/10 md:inline-block">Work with me</a>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {demoProjects.map((p) => (
            <article key={p.title} className="group rounded-xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-white/20 hover:bg-white/[0.06]">
              <div className="mb-4 aspect-video w-full rounded-lg bg-gradient-to-br from-emerald-500/20 to-cyan-500/20" />
              <h3 className="text-lg font-medium">{p.title}</h3>
              <p className="mt-1 text-sm text-white/60">{p.desc}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-xs text-white/70">{t}</span>
                ))}
              </div>
              <a href={p.link} className="mt-4 inline-block text-sm text-emerald-300 hover:text-emerald-200">View case study →</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
