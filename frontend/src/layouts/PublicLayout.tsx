import { Outlet } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';

/**
 * PublicLayout — wraps all unauthenticated / public-facing pages.
 * Provides consistent Navbar + Footer with page content via <Outlet />.
 *
 * For authenticated pages (student/staff/admin), create separate layouts
 * without the Footer — e.g. AuthLayout, AdminLayout.
 */
export const PublicLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background-default dark:bg-background-dark text-text-primary dark:text-text-inverse transition-colors duration-200">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
