import hairStyling from '@/assets/generated/hair-styling.png';
import tribalBraids from '@/assets/generated/tribal-braids.png';
import smallLines from '@/assets/generated/small-lines.png';
import nailCare from '@/assets/generated/nail-care.png';
import corsets from '@/assets/generated/corsets.png';
import fashionStyling from '@/assets/generated/fashion-styling.png';

export interface Service {
  slug: string;
  title: string;
  short: string;
  description: string;
  details: string[];
  image: string;
}

export const SERVICES: Service[] = [
  {
    slug: 'hair-styling',
    title: 'Hair Styling',
    short: 'Beautiful, professional hairstyles created to complement your personality and enhance your natural beauty.',
    description: 'Transform your look with professional hairstyles designed to complement your personality, lifestyle, and special occasion.',
    details: ['Everyday beauty', 'Weddings', 'Parties', 'Graduations', 'Celebrations', 'Special occasions'],
    image: hairStyling,
  },
  {
    slug: 'tribal-braids',
    title: 'Tribal Braids',
    short: 'Elegant and stylish tribal braids, carefully crafted to give you a beautiful and confident look.',
    description: 'Experience beautiful, stylish, and long-lasting tribal braids created with precision and care to give you a polished, confident look that reflects your unique style.',
    details: ['Precision braiding', 'Long-lasting styles', 'Polished finish', 'Reflects your style'],
    image: tribalBraids,
  },
  {
    slug: 'small-lines',
    title: 'Small Lines',
    short: 'Neat, detailed, and fashionable small-line braids designed to suit your individual style.',
    description: 'Achieve a timeless and elegant look with neat and detailed small-line braids, carefully styled to suit your individual personality.',
    details: ['Neat detailing', 'Timeless & elegant', 'Individually styled'],
    image: smallLines,
  },
  {
    slug: 'nail-care',
    title: 'Nail Care',
    short: 'Treat yourself to beautifully finished nails with manicures, pedicures, nail art, acrylics, and gel nails.',
    description: 'Complete your look with beautifully styled and professionally finished nails.',
    details: ['Acrylic Nails', 'Gel Nails', 'Manicures', 'Pedicures', 'Nail Art'],
    image: nailCare,
  },
  {
    slug: 'corsets',
    title: 'Corsets',
    short: 'Discover stylish corsets designed to enhance your outfit and celebrate your confidence.',
    description: 'Elevate your wardrobe with fashionable corsets designed to enhance your style, confidence, and overall appearance.',
    details: ['Fashionable designs', 'Confidence-enhancing', 'Style-elevating'],
    image: corsets,
  },
  {
    slug: 'fashion-styling',
    title: 'Fashion Styling',
    short: 'Personalised fashion guidance to help you create a stylish, elegant, and confident appearance.',
    description: 'Discover your personal style with personalised fashion guidance and clothing advice designed to help you create a confident and elegant look.',
    details: ['Personalised guidance', 'Clothing advice', 'Elegant looks'],
    image: fashionStyling,
  },
  {
    slug: 'installation-services',
    title: 'Installation Services',
    short: 'Professional installation services completed with precision, care, and attention to detail.',
    description: 'Enjoy professional installation services completed with precision, care, and attention to detail.',
    details: ['Precision work', 'Careful handling', 'Attention to detail'],
    image: hairStyling,
  },
];

export const PRICES = [
  { name: 'Installation', price: 'R200' },
  { name: 'Tribal Braids', price: 'R300' },
  { name: 'Hair Styling', price: 'Contact for a Quote' },
  { name: 'Small Lines', price: 'Contact for a Quote' },
  { name: 'Nail Care', price: 'Contact for a Quote' },
  { name: 'Corsets', price: 'Contact for a Quote' },
  { name: 'Fashion Styling', price: 'Contact for a Quote' },
];

export const TESTIMONIALS = [
  { quote: 'The service was amazing. I absolutely love my hairstyle. The attention to detail was excellent, and I will definitely be coming back!', name: 'Happy Client' },
  { quote: 'My nails were done perfectly, and I loved the final result. The service was professional and friendly.', name: 'Happy Client' },
  { quote: 'Professional service, friendly staff, and a relaxing atmosphere. I had a wonderful experience at Bongs Beauty Palace.', name: 'Happy Client' },
];

export const FAQS = [
  { q: 'Do I need an appointment?', a: 'Appointments are recommended to ensure that we can provide you with the best possible service. Walk-in clients are welcome depending on availability.' },
  { q: 'Where are you located?', a: 'You can find us at 210 N. Mokhehle Street, Pretoria, Gauteng, 0122, South Africa.' },
  { q: 'What are your business hours?', a: 'Monday: Closed. Tuesday – Saturday: 09:00 – 18:00. Sunday: Closed.' },
  { q: 'How can I book an appointment?', a: 'You can request an appointment through our online booking form or contact us directly.' },
  { q: 'Can I change my appointment?', a: 'Yes. Please contact us as soon as possible if you need to change your appointment, and we will assist you where possible.' },
  { q: 'Do you accept walk-in clients?', a: 'Walk-in clients are welcome depending on availability. We recommend booking in advance to secure your preferred date and time.' },
  { q: 'How can I contact Bongs Beauty Palace?', a: 'You can contact us by email or through our social media and WhatsApp Business channels.' },
  { q: 'Is my appointment confirmed immediately after submitting the booking form?', a: 'Submitting the booking form sends us your request. Your appointment is confirmed once we have contacted you and confirmed your booking details.' },
];

export const CONTACT = {
  address: ['210 N. Mokhehle Street', 'Pretoria', 'Gauteng', '0122', 'South Africa'],
  email: 'bonganimoment35@gmail.com',
  phone: '+27 79 265 7758',
  whatsapp: 'https://wa.me/27792657758',
  hours: [
    { day: 'Monday', time: 'Closed' },
    { day: 'Tuesday – Saturday', time: '09:00 – 18:00' },
    { day: 'Sunday', time: 'Closed' },
  ],
};

export const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Price List', to: '/pricing' },
  { label: 'Contact', to: '/contact' },
];
