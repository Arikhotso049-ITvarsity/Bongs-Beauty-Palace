import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router';
import { Menu, X, Sparkles } from 'lucide-react';
import { NAV_LINKS } from '@/lib/site-data';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-cream/95 shadow-sm backdrop-blur-md' : 'bg-transparent'}`}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-gold" />
          <span className="font-serif text-lg leading-none text-plum">
            Bongs <span className="text-gold">Beauty Palace</span>
          </span>
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => {
            const active = location.pathname === link.to;
            return (
              <Link key={link.to} to={link.to} className={`text-sm font-medium transition-colors hover:text-gold ${active ? 'text-gold' : 'text-plum'}`}>
                {link.label}
              </Link>
            );
          })}
          <Link to="/book" className="rounded-full bg-plum px-6 py-2.5 text-sm font-medium text-white transition-all hover:bg-plum-dark hover:-translate-y-0.5">
            Book Appointment
          </Link>
        </div>

        <button onClick={() => setOpen((v) => !v)} className="text-plum lg:hidden" aria-label="Toggle menu">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-border bg-cream lg:hidden">
          <div className="flex flex-col gap-1 px-6 py-4">
            {NAV_LINKS.map((link) => (
              <Link key={link.to} to={link.to} className="rounded-lg px-3 py-2.5 text-sm font-medium text-plum hover:bg-blush">
                {link.label}
              </Link>
            ))}
            <Link to="/book" className="mt-2 rounded-full bg-plum px-6 py-2.5 text-center text-sm font-medium text-white">
              Book Appointment
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
