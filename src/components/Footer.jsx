export default function Footer() {
  return (
    <footer className="w-full bg-black py-10 text-white/60">
      <div className="mx-auto max-w-6xl px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm">© {new Date().getFullYear()} Your Name. All rights reserved.</p>
        <div className="flex items-center gap-4 text-sm">
          <a href="mailto:hello@example.com" className="hover:text-white">Email</a>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-white">GitHub</a>
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="hover:text-white">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
