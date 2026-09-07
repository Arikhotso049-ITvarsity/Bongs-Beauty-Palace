import { Check } from 'lucide-react';
import { SERVICES } from '@/lib/site-data';
import { CTASection } from '@/components/Shared';
import { PageHeader } from '@/pages/About';

export default function Services() {
  return (
    <>
      <PageHeader eyebrow="Our Services" title="Beauty Designed Around You" subtitle="A selection of beauty, personal care, fashion, and styling services — every one delivered with care, creativity, and attention to detail." />

      <section className="px-6 py-20 sm:py-24">
        <div className="mx-auto flex max-w-6xl flex-col gap-16">
          {SERVICES.map((s, i) => (
            <div key={s.slug} className={`grid gap-8 md:grid-cols-2 md:items-center ${i % 2 === 1 ? 'md:[&>div:first-child]:order-2' : ''}`}>
              <div className="overflow-hidden rounded-3xl shadow-sm">
                <img src={s.image} alt={s.title} className="h-72 w-full object-cover sm:h-96" />
              </div>
              <div className="flex flex-col gap-4">
                <span className="text-xs font-medium uppercase tracking-[0.25em] text-gold">0{i + 1}</span>
                <h2 className="font-serif text-3xl text-plum sm:text-4xl">{s.title}</h2>
                <p className="leading-relaxed text-muted-foreground">{s.description}</p>
                <ul className="mt-2 grid grid-cols-2 gap-2">
                  {s.details.map((d) => (
                    <li key={d} className="flex items-center gap-2 text-sm text-ink"><Check className="h-4 w-4 shrink-0 text-gold" />{d}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTASection title="Ready for Your Transformation?" subtitle="Let Bongs Beauty Palace help you create a look that makes you feel confident and beautiful." secondaryLabel="View Price List" secondaryTo="/pricing" />
    </>
  );
}
