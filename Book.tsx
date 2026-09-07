import { useState } from 'react';
import { CheckCircle2, Info } from 'lucide-react';
import { SERVICES } from '@/lib/site-data';
import { PageHeader } from '@/pages/About';

export default function Book() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', email: '', service: '', date: '', time: '', message: '' });

  const update = (field: string, value: string) => setForm((f) => ({ ...f, [field]: value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <PageHeader eyebrow="Book Now" title="Your Beauty Journey Starts Here" subtitle="Complete the booking form with your preferred details. Our team will review your request and contact you to confirm your appointment." />

      <section className="px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-2xl">
          {submitted ? (
            <div className="flex flex-col items-center gap-4 rounded-3xl border border-border bg-white p-10 text-center shadow-sm">
              <CheckCircle2 className="h-14 w-14 text-gold" />
              <h2 className="font-serif text-2xl text-plum">Thank You, {form.name || 'Beautiful'}!</h2>
              <p className="leading-relaxed text-muted-foreground">Your booking request has been received. Please note that submitting a booking request does not automatically confirm your appointment — we will contact you shortly to confirm the date and time.</p>
              <p className="italic text-gold">We look forward to welcoming you.</p>
              <button onClick={() => setSubmitted(false)} className="mt-2 rounded-full border border-plum/30 px-6 py-2.5 text-sm font-medium text-plum transition-colors hover:bg-plum hover:text-white">Submit Another Request</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5 rounded-3xl border border-border bg-white p-8 shadow-sm sm:p-10">
              <h2 className="font-serif text-2xl text-plum">Booking Details</h2>
              <Field label="Full Name" required><input type="text" required value={form.name} onChange={(e) => update('name', e.target.value)} placeholder="Please enter your full name" className={inputClass} /></Field>
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Phone Number" required><input type="tel" required value={form.phone} onChange={(e) => update('phone', e.target.value)} placeholder="Your contact number" className={inputClass} /></Field>
                <Field label="Email Address" required><input type="email" required value={form.email} onChange={(e) => update('email', e.target.value)} placeholder="Your email address" className={inputClass} /></Field>
              </div>
              <Field label="Service Required" required>
                <select required value={form.service} onChange={(e) => update('service', e.target.value)} className={inputClass}>
                  <option value="" disabled>Select a beauty service</option>
                  {SERVICES.map((s) => <option key={s.slug} value={s.title}>{s.title}</option>)}
                </select>
              </Field>
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Preferred Date" required><input type="date" required value={form.date} onChange={(e) => update('date', e.target.value)} className={inputClass} /></Field>
                <Field label="Preferred Time" required><input type="time" required value={form.time} onChange={(e) => update('time', e.target.value)} className={inputClass} /></Field>
              </div>
              <Field label="Additional Message"><textarea rows={4} value={form.message} onChange={(e) => update('message', e.target.value)} placeholder="Tell us anything else about your appointment" className={inputClass} /></Field>
              <button type="submit" className="mt-2 rounded-full bg-plum px-7 py-3.5 text-sm font-medium text-white transition-all hover:bg-plum-dark hover:-translate-y-0.5">Submit Booking Request</button>
              <div className="flex items-start gap-3 rounded-2xl bg-blush/60 p-4">
                <Info className="mt-0.5 h-5 w-5 shrink-0 text-plum" />
                <p className="text-xs leading-relaxed text-muted-foreground">Submitting a booking request does not automatically confirm your appointment. Your appointment will be confirmed once Bongs Beauty Palace has contacted you and confirmed the date and time.</p>
              </div>
            </form>
          )}
        </div>
      </section>
    </>
  );
}

const inputClass = 'w-full rounded-xl border border-input bg-cream/50 px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-gold focus:ring-2 focus:ring-gold/20';

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-sm font-medium text-plum">{label}{required && <span className="text-gold"> *</span>}</span>
      {children}
    </label>
  );
}
