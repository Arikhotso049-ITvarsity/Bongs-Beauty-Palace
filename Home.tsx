import { Link } from 'react-router';
import { Star, Sparkles, Heart, Award, Users, Palette, ShieldCheck, ArrowRight } from 'lucide-react';
import { SERVICES, TESTIMONIALS } from '@/lib/site-data';
import { SectionTitle, ButtonLink, CTASection, Eyebrow } from '@/components/Shared';
import heroImg from '@/assets/generated/hero.png';

const WHY = [
  { icon: Award, title: 'Professional Service', text: 'Beauty services delivered with care, precision, and attention to detail.' },
  { icon: Heart, title: 'Personalised Experience', text: 'We take time to understand your needs and reflect your personality and style.' },
  { icon: Users, title: 'Friendly Customer Care', text: 'From the moment you arrive, we make you feel welcomed, comfortable and valued.' },
  { icon: Sparkles, title: 'Quality Products', text: 'Quality products and professional techniques for beautiful results.' },
  { icon: Palette, title: 'Modern Styles', text: 'Inspired by the latest beauty, hair, nail and fashion trends.' },
  { icon: ShieldCheck, title: 'Clean & Comfortable', text: 'A welcoming, clean and relaxing environment for every visit.' },
];

export default function Home() {
  return (
    <>
      <section className="relative min-h-screen overflow-hidden">
        <img src={heroImg} alt="Elegant interior of Bongs Beauty Palace salon" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-plum-dark/85 via-plum-dark/55 to-transparent" />
        <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 pt-24">
          <div className="max-w-2xl flex flex-col gap-6">
            <Eyebrow>Pretoria • Gauteng</Eyebrow>
            <h1 className="font-serif text-4xl leading-[1.1] text-balance text-white sm:text-6xl md:text-7xl">
              Where Beauty Meets <span className="text-gold-light">Confidence</span>
            </h1>
            <p className="max-w-xl text-pretty text-lg leading-relaxed text-blush/90">
              A premium beauty and personal care destination dedicated to helping you look beautiful, feel confident, and express your unique style.
            </p>
            <div className="mt-2 flex flex-wrap gap-4">
              <ButtonLink to="/book" variant="gold">Book an Appointment <ArrowRight className="h-4 w-4" /></ButtonLink>
              <ButtonLink to="/services" variant="light">Explore Our Services</ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 sm:py-28">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2 md:items-center">
          <div className="flex flex-col gap-5">
            <SectionTitle eyebrow="Welcome" title="Your beauty experience matters" subtitle="From elegant hairstyles and beautifully crafted braids to professional nail care, fashionable corsets, and personalised styling, every service is delivered with care, creativity, and attention to detail." />
            <p className="leading-relaxed text-muted-foreground">Step into a welcoming environment where quality, professionalism, and customer satisfaction come together.</p>
            <ButtonLink to="/about" variant="outline" className="mt-2 self-start">More About Us</ButtonLink>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {SERVICES.slice(0, 4).map((s) => (
              <div key={s.slug} className="group overflow-hidden rounded-xl">
                <img src={s.image} alt={s.title} className="h-44 w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:h-52" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-blush/40 px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionTitle center eyebrow="Our Services" title="Discover Our Services" subtitle="Beauty, personal care, fashion and styling services designed to enhance your appearance and boost your confidence." />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.slice(0, 6).map((s) => (
              <Link key={s.slug} to="/services" className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="overflow-hidden">
                  <img src={s.image} alt={s.title} className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="flex flex-1 flex-col gap-3 p-6">
                  <h3 className="font-serif text-xl text-plum">{s.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{s.short}</p>
                  <span className="mt-auto inline-flex items-center gap-1 pt-2 text-sm font-medium text-gold">
                    Learn more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-12 flex justify-center">
            <ButtonLink to="/services" variant="primary">View All Services</ButtonLink>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionTitle center eyebrow="Why Choose Us" title="Your Beauty. Our Passion." subtitle="Choosing the right beauty destination is about the experience, the quality of service, and how you feel when you leave." />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {WHY.map((w) => (
              <div key={w.title} className="flex flex-col gap-3 rounded-2xl border border-border bg-white p-7 transition-shadow hover:shadow-md">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blush">
                  <w.icon className="h-6 w-6 text-plum" />
                </div>
                <h3 className="font-serif text-lg text-plum">{w.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{w.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-plum px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionTitle center light eyebrow="Testimonials" title="What Our Clients Say" subtitle="Our clients are at the heart of everything we do." />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="flex flex-col gap-4 rounded-2xl bg-white/10 p-7 backdrop-blur-sm ring-1 ring-white/15">
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, j) => <Star key={j} className="h-4 w-4 fill-gold text-gold" />)}
                </div>
                <p className="text-pretty leading-relaxed text-blush/90">"{t.quote}"</p>
                <p className="mt-auto text-sm font-medium text-gold-light">— {t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection title="Book Your Beauty Experience Today" subtitle="Whether you are preparing for a special occasion or simply taking time for yourself, we are here to help you look and feel your absolute best." secondaryLabel="Explore Our Services" secondaryTo="/services" />
    </>
  );
}
