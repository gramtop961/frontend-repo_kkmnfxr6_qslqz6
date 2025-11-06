import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { href: '#home', label: 'Home' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all ${scrolled ? 'backdrop-blur bg-black/50 border-b border-white/10' : 'bg-transparent'}`}>
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <a href="#home" className="font-semibold tracking-tight text-white">My Portfolio</a>

        <div className="hidden gap-8 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-white/80 hover:text-white transition-colors">
              {l.label}
            </a>
          ))}
        </div>

        <button aria-label="Toggle menu" onClick={() => setOpen((v) => !v)} className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-white/80 hover:text-white">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-black/70 backdrop-blur">
          <div className="mx-auto max-w-6xl px-4 py-3 space-y-2">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block rounded-md px-3 py-2 text-white/90 hover:bg-white/5">
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
