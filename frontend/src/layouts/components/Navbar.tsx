import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, MessageSquare, MessageCircle } from 'lucide-react';
import { ThemeToggle } from '../../components/common';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/faq', label: 'FAQ' },
  { to: '/contact', label: 'Contact' },
];

/**
 * Navbar — sticky top navigation with glass effect.
 * Responsive: collapses to hamburger on mobile.
 */
export const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { pathname } = useLocation();

  const isActive = (path: string) =>
    path === '/' ? pathname === '/' : pathname.startsWith(path);

  return (
    <header className="sticky top-0 z-50">
      <nav className="bg-white/90 dark:bg-background-dark/90 backdrop-blur-lg border-b border-gray-200/80 dark:border-gray-800 shadow-sm transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* ── Brand ── */}
            <Link to="/" className="flex items-center gap-2.5 shrink-0 group">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow">
                <MessageSquare size={18} className="text-white" />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-[15px] font-bold font-display text-text-primary dark:text-text-inverse tracking-tight">
                  UWU Help Desk
                </span>
                <span className="text-[10px] text-text-disabled dark:text-gray-500 font-medium">
                  Uva Wellassa University
                </span>
              </div>
            </Link>

            {/* ── Desktop Nav Links ── */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  className={`
                    px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200
                    ${isActive(to)
                      ? 'bg-primary/10 text-primary dark:bg-primary-light/10 dark:text-primary-light'
                      : 'text-text-secondary hover:text-text-primary hover:bg-gray-100 dark:text-gray-400 dark:hover:text-text-inverse dark:hover:bg-white/5'
                    }
                  `}
                >
                  {label}
                </Link>
              ))}
            </div>

            {/* ── Desktop Right Actions ── */}
            <div className="hidden md:flex items-center gap-2">
              <Link
                to="/chat"
                className={`
                  inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200
                  ${isActive('/chat')
                    ? 'bg-secondary/10 text-secondary-dark dark:bg-secondary/15 dark:text-secondary-light'
                    : 'text-secondary-dark hover:bg-secondary/10 dark:text-secondary-light dark:hover:bg-secondary/10'
                  }
                `}
              >
                <MessageCircle size={16} />
                AI Chat
              </Link>
              <ThemeToggle size="sm" />
              <Link
                to="/login"
                className="px-4 py-2 text-sm font-medium text-text-secondary dark:text-gray-400 hover:text-text-primary dark:hover:text-text-inverse hover:bg-gray-100 dark:hover:bg-white/5 rounded-lg transition-all duration-200"
              >
                Log in
              </Link>
              <Link
                to="/register"
                className="px-4 py-2 text-sm font-medium text-white bg-primary hover:bg-primary-dark rounded-lg shadow-sm hover:shadow transition-all duration-200"
              >
                Register
              </Link>
            </div>

            {/* ── Mobile Controls ── */}
            <div className="flex md:hidden items-center gap-2">
              <ThemeToggle size="sm" />
              <button
                type="button"
                aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={mobileOpen}
                onClick={() => setMobileOpen(!mobileOpen)}
                className="p-2 rounded-lg text-text-secondary dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
              >
                {mobileOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>

        {/* ── Mobile Dropdown ── */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            mobileOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-background-dark px-4 py-3 space-y-1">
            {navLinks.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                onClick={() => setMobileOpen(false)}
                className={`
                  block px-4 py-2.5 rounded-lg text-sm font-medium transition-colors duration-200
                  ${isActive(to)
                    ? 'bg-primary/10 text-primary dark:bg-primary-light/10 dark:text-primary-light'
                    : 'text-text-secondary hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-white/5'
                  }
                `}
              >
                {label}
              </Link>
            ))}
            <Link
              to="/chat"
              onClick={() => setMobileOpen(false)}
              className={`
                flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors duration-200
                ${isActive('/chat')
                  ? 'bg-secondary/10 text-secondary-dark dark:bg-secondary/15 dark:text-secondary-light'
                  : 'text-secondary-dark dark:text-secondary-light hover:bg-secondary/10'
                }
              `}
            >
              <MessageCircle size={16} />
              AI Chat
            </Link>
            <hr className="my-2 border-gray-200 dark:border-gray-700" />
            <Link
              to="/login"
              onClick={() => setMobileOpen(false)}
              className="block px-4 py-2.5 rounded-lg text-sm font-medium text-text-secondary dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/5 transition-colors"
            >
              Log in
            </Link>
            <Link
              to="/register"
              onClick={() => setMobileOpen(false)}
              className="block px-4 py-2.5 rounded-lg text-sm font-medium text-center text-white bg-primary hover:bg-primary-dark transition-colors"
            >
              Register
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};
