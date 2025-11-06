import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    setStatus('Thanks! I will get back to you shortly.');
  };

  return (
    <section id="contact" className="w-full bg-black py-20 text-white">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Let’s build something</h2>
        <p className="mt-2 max-w-xl text-white/60">Tell me a bit about your project, timeline, and goals. I’ll reply within 24–48 hours.</p>

        <form onSubmit={onSubmit} className="mt-8 grid gap-4 md:grid-cols-2">
          <input required name="name" placeholder="Your name" className="rounded-md border border-white/10 bg-white/5 px-4 py-3 outline-none placeholder:text-white/40 focus:border-white/20 md:col-span-1" />
          <input required type="email" name="email" placeholder="Email address" className="rounded-md border border-white/10 bg-white/5 px-4 py-3 outline-none placeholder:text-white/40 focus:border-white/20 md:col-span-1" />
          <input name="company" placeholder="Company (optional)" className="rounded-md border border-white/10 bg-white/5 px-4 py-3 outline-none placeholder:text-white/40 focus:border-white/20 md:col-span-2" />
          <textarea required name="message" placeholder="Tell me about your idea" rows={5} className="rounded-md border border-white/10 bg-white/5 px-4 py-3 outline-none placeholder:text-white/40 focus:border-white/20 md:col-span-2" />
          <div className="md:col-span-2 flex items-center gap-4">
            <button type="submit" className="rounded-md bg-white px-5 py-2.5 text-black hover:bg-white/90">Send message</button>
            {status && <span className="text-sm text-emerald-300">{status}</span>}
          </div>
        </form>
      </div>
    </section>
  );
}
