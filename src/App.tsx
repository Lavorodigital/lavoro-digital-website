import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navigation } from './components/Navigation';
import { HomePage } from './components/pages/HomePage';
import { ServicesPage } from './components/pages/ServicesPage';
import { PricingPage } from './components/pages/PricingPage';
import { PortfolioPage } from './components/pages/PortfolioPage';
import { AboutPage } from './components/pages/AboutPage';
import { ContactPage } from './components/pages/ContactPage';
import { Toaster } from 'sonner';

export default function App() {
  const [currentPage, setCurrentPage] = React.useState('home');

  const renderPage = () => {
    const pageProps = { onPageChange: setCurrentPage };
    
    switch (currentPage) {
      case 'services':
        return <ServicesPage {...pageProps} />;
      case 'pricing':
        return <PricingPage {...pageProps} />;
      case 'portfolio':
        return <PortfolioPage {...pageProps} />;
      case 'about':
        return <AboutPage {...pageProps} />;
      case 'contact':
        return <ContactPage {...pageProps} />;
      default:
        return <HomePage {...pageProps} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage={currentPage} onPageChange={setCurrentPage} />
      
      <AnimatePresence mode="wait">
        <motion.main
          key={currentPage}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="w-full"
        >
          {renderPage()}
        </motion.main>
      </AnimatePresence>

      <Toaster position="top-right" />
    </div>
  );
}