import { PRICES } from '@/lib/site-data';
import { CTASection, ButtonLink } from '@/components/Shared';
import { PageHeader } from '@/pages/About';

export default function Pricing() {
  return (
    <>
      <PageHeader eyebrow="Price List" title="Quality Beauty at Affordable Prices" subtitle="We believe that looking and feeling beautiful should be an enjoyable experience." />

      <section className="px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-3xl">
          <div className="overflow-hidden rounded-3xl border border-border bg-white shadow-sm">
            {PRICES.map((p, i) => (
              <div key={p.name} className={`flex items-center justify-between gap-4 px-7 py-5 ${i !== PRICES.length - 1 ? 'border-b border-border' : ''}`}>
                <span className="font-serif text-lg text-plum">{p.name}</span>
                <span className={`text-right text-sm font-medium ${p.price.startsWith('R') ? 'text-gold text-lg' : 'text-muted-foreground'}`}>{p.price}</span>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-sm leading-relaxed text-muted-foreground">Prices may vary depending on the style, design, length, materials required, or complexity of the service. Please contact us for the most accurate and up-to-date quotation.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <ButtonLink to="/contact" variant="outline">Contact Us</ButtonLink>
            <ButtonLink to="/book" variant="primary">Book an Appointment</ButtonLink>
          </div>
        </div>
      </section>

      <CTASection title="Ready to Book?" subtitle="Contact us today to discuss your preferred service and receive more information." />
    </>
  );
}
