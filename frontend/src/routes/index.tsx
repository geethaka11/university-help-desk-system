import { createBrowserRouter } from 'react-router-dom';
import { PublicLayout } from '../layouts/PublicLayout';

// Lazy-loaded public pages
import LandingPage from '../pages/public/LandingPage';
import AboutPage from '../pages/public/AboutPage';
import FAQPage from '../pages/public/FAQPage';
import ContactPage from '../pages/public/ContactPage';
import ChatPage from '../pages/public/ChatPage';
import LoginPage from '../pages/public/LoginPage';
import RegisterPage from '../pages/public/RegisterPage';

// Shared pages (dev only)
import ComponentShowcase from '../pages/shared/ComponentShowcase';

/**
 * Application Router
 *
 * Public routes are wrapped in PublicLayout (Navbar + Footer).
 * Auth-protected routes will be added later with AppLayout / AdminLayout.
 */
export const router = createBrowserRouter([
  {
    element: <PublicLayout />,
    children: [
      { index: true, element: <LandingPage /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'faq', element: <FAQPage /> },
      { path: 'contact', element: <ContactPage /> },
      { path: 'chat', element: <ChatPage /> },
      { path: 'login', element: <LoginPage /> },
      { path: 'register', element: <RegisterPage /> },
    ],
  },
  // Dev-only route — no layout wrapper
  { path: '/dev/components', element: <ComponentShowcase /> },
]);
