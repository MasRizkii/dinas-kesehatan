import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import LandingPage from './page/LandingPage.jsx';
import Footer from './components/footer/Footer.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LandingPage />
    <Footer />
  </StrictMode>
);
