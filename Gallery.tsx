import { SERVICES } from '@/lib/site-data';
import { CTASection, SectionTitle } from '@/components/Shared';
import { PageHeader } from '@/pages/About';
import hero from '@/assets/generated/hero.png';
import about from '@/assets/generated/about.png';

const CATEGORIES = [
  { title: 'Hair Styling', text: 'Discover beautiful hairstyles created to complement every occasion.', img: SERVICES[0].image },
  { title: 'Tribal Braids', text: 'Explore elegant and detailed tribal braid styles.', img: SERVICES[1].image },
  { title: 'Small Lines', text: 'View our neat and stylish small-line braid designs.', img: SERVICES[2].image },
  { title: 'Nail Designs', text: 'Discover creative and beautiful nail designs.', img: SERVICES[3].image },
  { title: 'Corsets', text: 'Explore fashionable corset styles.', img: SERVICES[4].image },
  { title: 'Fashion Styling', text: 'See how we bring confidence and style together.', img: SERVICES[5].image },
];

const MASONRY = [SERVICES[0].image, SERVICES[3].image, hero, SERVICES[1].image, SERVICES[4].image, SERVICES[2].image, about, SERVICES[5].image];

export default function Gallery() {
  return (
    <>
      <PageHeader eyebrow="Our Gallery" title="Beauty in Every Detail" subtitle="Explore our collection of beauty, hair, nail, fashion, and styling work — each look reflects our passion for creativity, quality, and detail." />

      <section className="px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionTitle center eyebrow="Explore Our Work" title="Categories" />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {CATEGORIES.map((c) => (
              <div key={c.title} className="group relative overflow-hidden rounded-2xl">
                <img src={c.img} alt={c.title} className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-plum-dark/90 via-plum-dark/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 flex flex-col gap-1 p-6">
                  <h3 className="font-serif text-xl text-white">{c.title}</h3>
                  <p className="text-sm text-blush/85">{c.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-blush/40 px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionTitle center eyebrow="Happy Clients" title="Beautiful Looks We've Created" />
          <div className="mt-14 columns-2 gap-4 md:columns-4 [&>div]:mb-4">
            {MASONRY.map((img, i) => (
              <div key={i} className="overflow-hidden rounded-2xl">
                <img src={img} alt="Bongs Beauty Palace work" className="w-full object-cover transition-transform duration-500 hover:scale-105" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection title="Your Look Could Be Next" subtitle="Inspired by our work? Let us create a beautiful look that is uniquely yours." />
    </>
  );
}
