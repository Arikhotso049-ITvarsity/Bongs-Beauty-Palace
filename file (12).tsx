import { Link } from 'react-router';
import { type ReactNode } from 'react';

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.25em] text-gold">
      <span className="h-px w-6 bg-gold" />
      {children}
    </span>
  );
}

export function SectionTitle({ eyebrow, title, subtitle, center = false, light = false }: { eyebrow?: string; title: string; subtitle?: string; center?: boolean; light?: boolean }) {
  return (
    <div className={`flex flex-col gap-4 ${center ? 'items-center text-center' : 'items-start'}`}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className={`font-serif text-3xl leading-tight text-balance sm:text-4xl md:text-5xl ${light ? 'text-white' : 'text-plum'}`}>{title}</h2>
      {subtitle && <p className={`max-w-2xl text-pretty leading-relaxed ${light ? 'text-blush/90' : 'text-muted-foreground'}`}>{subtitle}</p>}
    </div>
  );
}

type BtnProps = { to: string; children: ReactNode; variant?: 'primary' | 'outline' | 'gold' | 'light'; className?: string };

export function ButtonLink({ to, children, variant = 'primary', className = '' }: BtnProps) {
  const base = 'inline-flex items-center justify-center gap-2 rounded-full px-7 py-3 text-sm font-medium tracking-wide transition-all duration-300 hover:-translate-y-0.5';
  const variants: Record<string, string> = {
    primary: 'bg-plum text-white hover:bg-plum-dark shadow-lg shadow-plum/20',
    gold: 'bg-gold text-white hover:bg-gold-light hover:text-ink shadow-lg shadow-gold/25',
    outline: 'border border-plum/30 text-plum hover:border-plum hover:bg-plum hover:text-white',
    light: 'border border-white/40 text-white hover:bg-white hover:text-plum',
  };
  return <Link to={to} className={`${base} ${variants[variant]} ${className}`}>{children}</Link>;
}

export function CTASection({ title, subtitle, primaryLabel = 'Book an Appointment', primaryTo = '/book', secondaryLabel, secondaryTo }: { title: string; subtitle: string; primaryLabel?: string; primaryTo?: string; secondaryLabel?: string; secondaryTo?: string }) {
  return (
    <section className="relative overflow-hidden bg-plum px-6 py-20 sm:py-24">
      <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-gold/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -left-10 h-64 w-64 rounded-full bg-rose/20 blur-3xl" />
      <div className="relative mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
        <h2 className="font-serif text-3xl text-balance text-white sm:text-4xl md:text-5xl">{title}</h2>
        <p className="max-w-xl text-pretty leading-relaxed text-blush/90">{subtitle}</p>
        <div className="mt-2 flex flex-wrap items-center justify-center gap-4">
          <ButtonLink to={primaryTo} variant="gold">{primaryLabel}</ButtonLink>
          {secondaryLabel && secondaryTo && <ButtonLink to={secondaryTo} variant="light">{secondaryLabel}</ButtonLink>}
        </div>
      </div>
    </section>
  );
}
