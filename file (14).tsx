import { Target, Eye, Award, Heart, Sparkles, Palette, Users } from 'lucide-react';
import { SectionTitle, CTASection, Eyebrow, ButtonLink } from '@/components/Shared';
import aboutImg from '@/assets/generated/about.png';

const VALUES = [
  { icon: Award, title: 'Excellence', text: 'We are committed to delivering quality services and beautiful results.' },
  { icon: Users, title: 'Professionalism', text: 'We treat every client with respect, care, and professionalism.' },
  { icon: Sparkles, title: 'Confidence', text: 'We believe beauty should inspire confidence and self-expression.' },
  { icon: Palette, title: 'Creativity', text: 'We embrace creativity and modern trends to create unique looks.' },
  { icon: Heart, title: 'Customer Care', text: 'We place our clients at the heart of everything we do.' },
];

export default function About() {
  return (
    <>
      <PageHeader eyebrow="About Us" title="Beauty Inspired by Confidence" subtitle="A professional beauty and personal care destination committed to enhancing natural beauty, confidence, and individual style." />

      <section className="px-6 py-20 sm:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:items-center">
          <div className="overflow-hidden rounded-3xl">
            <img src={aboutImg} alt="Welcoming salon interior" className="h-full w-full object-cover" />
          </div>
          <div className="flex flex-col gap-5">
            <Eyebrow>Our Story</Eyebrow>
            <h2 className="font-serif text-3xl text-balance text-plum sm:text-4xl">Every client deserves to feel beautiful and valued</h2>
            <p className="leading-relaxed text-muted-foreground">Our goal is to create an exceptional beauty experience where professional service, quality, creativity, and personal attention come together.</p>
            <p className="leading-relaxed text-muted-foreground">From your first visit to every appointment thereafter, we strive to provide a warm, welcoming, and comfortable environment where you can relax, feel confident, and enjoy the experience.</p>
            <p className="leading-relaxed text-muted-foreground">Our passion for beauty inspires us to continuously improve our skills and stay connected to modern beauty, hair, nail, and fashion trends.</p>
          </div>
        </div>
      </section>

      <section className="bg-blush/40 px-6 py-20 sm:py-24">
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
          <div className="flex flex-col gap-4 rounded-3xl bg-white p-9 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-plum"><Target className="h-6 w-6 text-gold-light" /></div>
            <h3 className="font-serif text-2xl text-plum">Our Mission</h3>
            <p className="leading-relaxed text-muted-foreground">To provide exceptional beauty and personal care services that enhance confidence, celebrate individuality, and help every client look and feel their best.</p>
          </div>
          <div className="flex flex-col gap-4 rounded-3xl bg-white p-9 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-plum"><Eye className="h-6 w-6 text-gold-light" /></div>
            <h3 className="font-serif text-2xl text-plum">Our Vision</h3>
            <p className="leading-relaxed text-muted-foreground">To become one of Pretoria's leading and most trusted beauty destinations, recognised for exceptional quality, professionalism, creativity, and outstanding customer service.</p>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionTitle center eyebrow="Our Values" title="What We Stand For" />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {VALUES.map((v) => (
              <div key={v.title} className="flex flex-col gap-3 rounded-2xl border border-border bg-white p-7">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blush"><v.icon className="h-6 w-6 text-plum" /></div>
                <h3 className="font-serif text-lg text-plum">{v.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{v.text}</p>
              </div>
            ))}
            <div className="flex flex-col justify-center gap-3 rounded-2xl bg-plum p-7 text-white">
              <h3 className="font-serif text-xl">Experience the Difference</h3>
              <p className="text-sm leading-relaxed text-blush/90">Your beauty journey is personal, and we are here to make every visit memorable.</p>
              <ButtonLink to="/book" variant="gold" className="mt-2 self-start">Book Your Appointment</ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <CTASection title="Experience the Bongs Beauty Palace Difference" subtitle="Your beauty journey is personal, and we are here to make every visit memorable." />
    </>
  );
}

export function PageHeader({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle?: string }) {
  return (
    <section className="relative overflow-hidden bg-plum-dark px-6 pb-16 pt-36 text-center sm:pt-40">
      <div className="pointer-events-none absolute -right-10 top-10 h-56 w-56 rounded-full bg-gold/15 blur-3xl" />
      <div className="pointer-events-none absolute -left-10 bottom-0 h-56 w-56 rounded-full bg-rose/15 blur-3xl" />
      <div className="relative mx-auto flex max-w-3xl flex-col items-center gap-5">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="font-serif text-4xl text-balance text-white sm:text-5xl md:text-6xl">{title}</h1>
        {subtitle && <p className="max-w-2xl text-pretty leading-relaxed text-blush/85">{subtitle}</p>}
      </div>
    </section>
  );
}
