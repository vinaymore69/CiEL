import { useState, useEffect } from 'react';
import type { Variants } from 'framer-motion';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Navigation({ 
  menuOpen, 
  setMenuOpen,
  onMenuClick
}: { 
  menuOpen: boolean, 
  setMenuOpen: (val: boolean) => void,
  onMenuClick?: () => void
}) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['Menu', 'Our Story', 'Chef', 'Gallery', 'Reservation', 'Contact'];

  const drawerVariants: Variants = {
    hidden: { x: '100%' },
    visible: {
      x: 0,
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1], staggerChildren: 0.1, delayChildren: 0.2 },
    },
    exit: { x: '100%', transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } },
  };

  const linkVariants: Variants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-[#F5EFE7] shadow-md' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-5 flex items-center justify-between">
          <div className="flex items-center">
            <img src="/image.png" alt="CiEL" className="h-10 sm:h-12 w-auto" />
          </div>

          <div className="flex items-center gap-3">
            {/* <Button variant="default" size="sm" className="hidden md:inline-flex rounded-none" style={{ borderRadius: 0 }}>
              Book a Table
            </Button> */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              className="text-[#1E3A5F] p-2 flex items-center gap-2"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <span className="hidden sm:inline font-medium uppercase tracking-widest text-sm">Menu</span>
              <Menu className="w-7 h-7 sm:w-8 sm:h-8" />
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Right Side Drawer Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            variants={drawerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed top-0 right-0 h-full w-full sm:w-[450px] shadow-2xl bg-white z-[60] flex flex-col"
          >
            {/* Close Header */}
            <div className="flex items-center justify-between p-6 sm:px-10 sm:py-8 border-b border-[#C9A571]/20">
              <span className="font-serif text-[#1E3A5F] text-xl">CiEL</span>
              <motion.button
                whileHover={{ rotate: 90 }}
                transition={{ duration: 0.3 }}
                onClick={() => setMenuOpen(false)}
                className="p-2 text-[#1E3A5F] hover:text-[#C9A571] transition-colors"
                aria-label="Close menu"
              >
                <X className="w-8 h-8" />
              </motion.button>
            </div>

            {/* Menu Links */}
            <div className="flex-1 flex flex-col justify-center px-8 sm:px-16 gap-6 sm:gap-8 overflow-y-auto">
              {navLinks.map((link) => (
                <motion.a
                  key={link}
                  variants={linkVariants}
                  href={link === 'Menu' ? '#' : `#${link.toLowerCase().replace(' ', '-')}`}
                  onClick={(e) => {
                    if (link === 'Menu' && onMenuClick) {
                      e.preventDefault();
                      onMenuClick();
                    } else {
                      setMenuOpen(false);
                    }
                  }}
                  className="font-serif text-4xl sm:text-5xl text-[#1E3A5F] hover:text-[#C9A571] transition-colors relative group w-fit"
                >
                  <span className="relative z-10">{link}</span>
                  {/* Premium Hover effect line */}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#C9A571] transition-all duration-500 ease-out group-hover:w-full"></span>
                </motion.a>
              ))}
            </div>

            {/* Footer area inside drawer */}
            <motion.div 
              variants={linkVariants}
              className="p-8 sm:p-10 bg-[#1E3A5F] text-[#F5EFE7]"
            >
              <h4 className="text-[#C9A571] font-medium tracking-widest text-xs uppercase mb-3">Reservations</h4>
              <p className="text-sm opacity-80 mb-1">+91 98194 33999</p>
              <p className="text-sm opacity-80">reservations@ciel.restaurant</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
