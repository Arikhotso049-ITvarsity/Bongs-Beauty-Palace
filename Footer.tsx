import { Link } from 'react-router';
import { Sparkles, Mail, MapPin, Clock, Instagram, Facebook, MessageCircle } from 'lucide-react';
import { NAV_LINKS, CONTACT } from '@/lib/site-data';

export default function Footer() {
  return (
    <footer className="bg-plum-dark text-blush/80">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col gap-4">
          <Link to="/" className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-gold" />
            <span className="font-serif text-lg text-white">Bongs Beauty Palace</span>
          </Link>
          <p className="text-sm uppercase tracking-[0.2em] text-gold">Beauty • Cosmetic • Personal Care</p>
          <p className="text-sm italic text-blush/70">Where Beauty Meets Confidence.</p>
          <div className="mt-2 flex gap-3">
            <SocialIcon label="WhatsApp Business" href={CONTACT.whatsapp}><MessageCircle className="h-4 w-4" /></SocialIcon>
            <SocialIcon label="Facebook" href="#"><Facebook className="h-4 w-4" /></SocialIcon>
            <SocialIcon label="Instagram" href="#"><Instagram className="h-4 w-4" /></SocialIcon>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="font-serif text-lg text-white">Quick Links</h3>
          {[...NAV_LINKS, { label: 'Book Appointment', to: '/book' }].map((l) => (
            <Link key={l.to} to={l.to} className="text-sm transition-colors hover:text-gold">{l.label}</Link>
          ))}
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="font-serif text-lg text-white">Get in Touch</h3>
          <p className="flex items-start gap-2 text-sm">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
            <span>{CONTACT.address[0]}<br />{CONTACT.address.slice(1).join(', ')}</span>
          </p>
          <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-2 text-sm hover:text-gold">
            <Mail className="h-4 w-4 text-gold" />{CONTACT.email}
          </a>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="font-serif text-lg text-white">Business Hours</h3>
          {CONTACT.hours.map((h) => (
            <p key={h.day} className="flex items-center gap-2 text-sm">
              <Clock className="h-4 w-4 shrink-0 text-gold" />
              <span>{h.day}: {h.time}</span>
            </p>
          ))}
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-6 text-center text-xs text-blush/60 sm:flex-row sm:text-left">
          <p className="italic text-gold">Your Beauty. Your Confidence. Your Style.</p>
          <p>&copy; 2026 Bongs Beauty Palace. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ children, label, href }: { children: React.ReactNode; label: string; href: string }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-blush/80 transition-all hover:border-gold hover:bg-gold hover:text-white">
      {children}
    </a>
  );
}
