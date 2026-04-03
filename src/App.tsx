import { useEffect, useState } from 'react';
import Lenis from 'lenis';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import MenuSection from './components/MenuSection';
import ChefSection from './components/ChefSection';
import DiningSection from './components/DiningSection';
import ReservationSection from './components/ReservationSection';
import LocationSection from './components/LocationSection';
import InstagramSection from './components/InstagramSection';
import TestimonialsSection from './components/TestimonialsSection';
import MarqueeSection from './components/MarqueeSection';
import Footer from './components/Footer';
import MenuPage from './components/Menu';
import { motion } from 'framer-motion';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showFullMenu, setShowFullMenu] = useState(false);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  if (showFullMenu) {
    return <MenuPage onClose={() => setShowFullMenu(false)} />;
  }

  return (
    <div className="min-h-screen bg-[#F5EFE7]">
      <Navigation 
        menuOpen={menuOpen} 
        setMenuOpen={setMenuOpen} 
        onMenuClick={() => {
          setMenuOpen(false);
          setShowFullMenu(true);
        }} 
      />
      
      {/* 
        This motion.div contains all page content and gets blurred/scaled down 
        slightly when the right-side navigation drawer is open to create the 
        "website will become blur in view" premium effect.
      */}
      <motion.div
        animate={{
          filter: menuOpen ? 'blur(8px) brightness(0.6)' : 'blur(0px) brightness(1)',
          scale: menuOpen ? 0.98 : 1,
        }}
        transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
        className="origin-center"
      >
        <HeroSection onMenuClick={() => setShowFullMenu(true)} />
        <MarqueeSection />
        <MenuSection onMenuClick={() => setShowFullMenu(true)} />
        <ChefSection />
        <DiningSection />
        <ReservationSection />
        <TestimonialsSection />
        <LocationSection />
        <InstagramSection />
        <Footer />
      </motion.div>
    </div>
  );
}

export default App;
