import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { type FormEvent, useState } from 'react';

const contactInfo = [
  {
    icon: MapPin,
    label: 'Address',
    value: 'Uva Wellassa University, Passara Road, Badulla 90000, Sri Lanka',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+94 55 222 6100',
    href: 'tel:+94552226100',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'info@uwu.ac.lk',
    href: 'mailto:info@uwu.ac.lk',
  },
  {
    icon: Clock,
    label: 'Office Hours',
    value: 'Mon – Fri, 8:30 AM – 4:15 PM',
  },
];

const offices = [
  { name: 'General Administration', email: 'admin@uwu.ac.lk', ext: '100' },
  { name: 'Student Affairs', email: 'studentaffairs@uwu.ac.lk', ext: '105' },
  { name: 'Examinations', email: 'exams@uwu.ac.lk', ext: '110' },
  { name: 'IT Support', email: 'itsupport@uwu.ac.lk', ext: '120' },
  { name: 'Library', email: 'library@uwu.ac.lk', ext: '130' },
];

/**
 * ContactPage — university contact details, office directory, and a message form.
 */
const ContactPage = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Mock submit — backend integration later
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormState({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div>
      {/* ── Header ── */}
      <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-4xl font-bold font-display mb-3">Contact Us</h1>
          <p className="text-white/80 max-w-lg mx-auto">
            Have a question that the AI chatbot can't answer? Get in touch with
            the relevant university office.
          </p>
        </div>
      </section>

      {/* ── Main Content ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid lg:grid-cols-5 gap-10">
          {/* ── Left Column: Info ── */}
          <div className="lg:col-span-2 space-y-8">
            {/* Contact Cards */}
            <div>
              <h2 className="text-xl font-bold font-display mb-4">
                Get in Touch
              </h2>
              <div className="space-y-4">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 dark:bg-primary-light/10 flex items-center justify-center shrink-0">
                      <item.icon size={18} className="text-primary dark:text-primary-light" />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-text-secondary dark:text-gray-400 uppercase tracking-wide">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-sm text-primary dark:text-primary-light hover:underline"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-sm">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Office Directory */}
            <div>
              <h2 className="text-xl font-bold font-display mb-4">
                Office Directory
              </h2>
              <div className="rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-gray-50 dark:bg-surface-dark text-text-secondary dark:text-gray-400 text-xs uppercase tracking-wide">
                      <th className="text-left px-4 py-2.5 font-medium">Office</th>
                      <th className="text-left px-4 py-2.5 font-medium">Ext</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                    {offices.map((office) => (
                      <tr
                        key={office.name}
                        className="bg-background-paper dark:bg-background-dark"
                      >
                        <td className="px-4 py-3">
                          <p className="font-medium text-sm">{office.name}</p>
                          <a
                            href={`mailto:${office.email}`}
                            className="text-xs text-primary dark:text-primary-light hover:underline break-all"
                          >
                            {office.email}
                          </a>
                        </td>
                        <td className="px-4 py-3 text-text-secondary dark:text-gray-400">
                          {office.ext}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* ── Right Column: Form + Map ── */}
          <div className="lg:col-span-3 space-y-8">
            {/* Contact Form */}
            <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-background-paper dark:bg-surface-dark p-6 sm:p-8">
              <h2 className="text-xl font-bold font-display mb-1">
                Send a Message
              </h2>
              <p className="text-sm text-text-secondary dark:text-gray-400 mb-6">
                Fill in the form below and we'll get back to you as soon as
                possible.
              </p>

              {submitted && (
                <div className="mb-6 px-4 py-3 rounded-lg bg-success/10 text-success text-sm font-medium">
                  Message sent successfully! We'll get back to you soon.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-gray-200 dark:border-gray-700 bg-transparent text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 dark:focus:ring-primary-light/50 transition-all duration-200"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-gray-200 dark:border-gray-700 bg-transparent text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 dark:focus:ring-primary-light/50 transition-all duration-200"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5">
                    Subject
                  </label>
                  <input
                    type="text"
                    required
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-gray-200 dark:border-gray-700 bg-transparent text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 dark:focus:ring-primary-light/50 transition-all duration-200"
                    placeholder="e.g. Admission query"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5">
                    Message
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-gray-200 dark:border-gray-700 bg-transparent text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 dark:focus:ring-primary-light/50 transition-all duration-200 resize-none"
                    placeholder="Tell us how we can help..."
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-xl font-medium text-sm hover:bg-primary-dark transition-colors duration-200"
                >
                  <Send size={16} />
                  Send Message
                </button>
              </form>
            </div>

            {/* Map Placeholder */}
            <div className="rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
              <div className="bg-gray-100 dark:bg-surface-dark flex items-center justify-center h-64">
                <div className="text-center">
                  <MapPin size={32} className="mx-auto mb-2 text-text-disabled" />
                  <p className="text-sm text-text-secondary dark:text-gray-400">
                    Interactive map will be embedded here
                  </p>
                  <p className="text-xs text-text-disabled mt-1">
                    Passara Road, Badulla, Sri Lanka
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
