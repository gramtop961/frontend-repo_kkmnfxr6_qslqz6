import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-start gap-6 px-4 pb-24 pt-40">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 backdrop-blur">
          <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
          Available for freelance projects
        </span>
        <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">
          Building modern, playful, interactive products
        </h1>
        <p className="max-w-xl text-white/70">
          I’m a developer and designer crafting immersive web experiences with 3D, motion, and delightful details.
        </p>
        <div className="flex flex-wrap gap-3">
          <a href="#projects" className="rounded-md bg-white px-4 py-2 text-black hover:bg-white/90">View Projects</a>
          <a href="#contact" className="rounded-md border border-white/20 bg-white/5 px-4 py-2 hover:bg-white/10">Contact Me</a>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black" />
    </section>
  );
}
