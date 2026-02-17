/**
 * Application Entry Point - UWU Help Desk System
 * 
 * Initializes React application with Zustand stores.
 * Production-ready setup with strict mode and type safety.
 */

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

