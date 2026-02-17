/**
 * Root Application Component - UWU Help Desk System
 *
 * Main entry point for the React application.
 * Integrates routing with React Router.
 */

import { RouterProvider } from 'react-router-dom';
import { router } from './routes';

function App() {
  return <RouterProvider router={router} />;
}

export default App;

