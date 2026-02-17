import { Link } from 'react-router-dom';
import { MessageSquare, Mail, Phone, MapPin } from 'lucide-react';

const quickLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/faq', label: 'FAQ' },
  { to: '/chat', label: 'Chat with AI' },
  { to: '/contact', label: 'Contact' },
];

const resourceLinks = [
  { to: '/login', label: 'Student Login' },
  { to: '/register', label: 'Register' },
  { href: 'https://www.uwu.ac.lk', label: 'University Website' },
];

const CURRENT_YEAR = new Date().getFullYear();

/**
 * Footer — site-wide footer with university info, quick links, and contact.
 */
export const Footer = () => {

  return (
    <footer className="bg-primary-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* ── Brand Column ── */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center">
                <MessageSquare size={20} className="text-secondary-light" />
              </div>
              <span className="text-lg font-bold font-display">UWU Help Desk</span>
            </div>
            <p className="text-sm text-white/70 leading-relaxed">
              AI-Powered University Help Desk System for Uva Wellassa University.
              Get instant, accurate answers to your academic and administrative queries 24/7.
            </p>
          </div>

          {/* ── Quick Links ── */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4 text-white/50">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-sm text-white/70 hover:text-white transition-colors duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Resources ── */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4 text-white/50">
              Resources
            </h3>
            <ul className="space-y-2.5">
              {resourceLinks.map((link) => (
                <li key={link.label}>
                  {'to' in link && link.to ? (
                    <Link
                      to={link.to}
                      className="text-sm text-white/70 hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-white/70 hover:text-white transition-colors duration-200"
                    >
                      {link.label} ↗
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* ── Contact ── */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4 text-white/50">
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5 text-sm text-white/70">
                <MapPin size={16} className="mt-0.5 shrink-0 text-secondary-light" />
                <span>Uva Wellassa University, Passara Road, Badulla, Sri Lanka</span>
              </li>
              <li className="flex items-center gap-2.5 text-sm text-white/70">
                <Phone size={16} className="shrink-0 text-secondary-light" />
                <span>+94 55 222 6100</span>
              </li>
              <li className="flex items-center gap-2.5 text-sm text-white/70">
                <Mail size={16} className="shrink-0 text-secondary-light" />
                <span>info@uwu.ac.lk</span>
              </li>
            </ul>
          </div>
        </div>

        {/* ── Bottom Bar ── */}
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/40">
            © {CURRENT_YEAR} Uva Wellassa University. All rights reserved.
          </p>
          <p className="text-xs text-white/40">
            Built with React, Tailwind CSS & RAG AI
          </p>
        </div>
      </div>
    </footer>
  );
};
