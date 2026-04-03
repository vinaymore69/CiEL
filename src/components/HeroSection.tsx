import { motion, useScroll, useTransform } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { useRef } from 'react';
import { Button } from '@/components/ui/button';

const HeroSection = ({ onMenuClick }: { onMenuClick?: () => void }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  // Scroll scrub parallax on image grid
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '18%']);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.06]);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '-8%']);
  const textOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const containerVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
  };

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] } },
  };

  const imageContainerVariants: Variants = {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.9, ease: [0.25, 0.1, 0.25, 1], delay: 0.3 } },
  };

  return (
    <section ref={sectionRef} className="min-h-screen bg-[#F5EFE7] pt-24 sm:pt-28 pb-16 sm:pb-24 px-4 sm:px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          {/* Text content — scrolls up slightly */}
          <motion.div
            style={{ y: textY, opacity: textOpacity }}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={fadeUp} className="inline-block mb-5">
              <span className="bg-white px-4 py-2 text-xs sm:text-sm text-[#1E3A5F] border border-[#C9A571]">
                ✦ 15+ Years of Culinary Excellence
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-[#1E3A5F] mb-5 sm:mb-6 leading-tight"
            >
              Experience Elevated{' '}
              <span className="text-[#1E3A5F] italic font-bold">Vegetarian</span> Dining
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-base sm:text-lg text-[#6B5E4F] text-justify mb-7 sm:mb-8 leading-relaxed max-w-xl"
            >
              Seasonal ingredients, artistic presentation, and soulful flavors crafted into
              unforgettable culinary moments. Located in Andheri East, Mumbai.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-3 sm:gap-4 font-serif">
              {/* <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
                <Button variant="default" size="lg">Reserve a Table</Button>
              </motion.div> */}
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
                <Button variant="outline" size="lg" onClick={onMenuClick}>Explore Menu</Button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Mosaic image grid — parallax scrolls down */}
          <motion.div
            variants={imageContainerVariants}
            initial="hidden"
            animate="visible"
            style={{ y: imageY }}
            className="relative mt-12 lg:mt-0 pb-14"
          >
            <motion.div style={{ scale: imageScale }} className="grid grid-cols-2 gap-3 sm:gap-4">
              {/* Top-left */}
              <motion.div
                whileHover={{ scale: 1.02, zIndex: 10 }}
                transition={{ duration: 0.3 }}
                className="relative overflow-hidden shadow-[4px_4px_0px_rgba(0,0,0,0.18)]"
                style={{ aspectRatio: '4/3' }}
              >
                <img
                  src="https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Fine dining ambience"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Top-right — raised */}
              <motion.div
                whileHover={{ scale: 1.02, zIndex: 10 }}
                transition={{ duration: 0.3 }}
                className="relative overflow-hidden shadow-[4px_4px_0px_rgba(0,0,0,0.18)]"
                style={{ aspectRatio: '4/3', marginTop: '-24px' }}
              >
                <img
                  src="https://images.pexels.com/photos/1854652/pexels-photo-1854652.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Chef plating food"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Bottom-left — pushed down */}
              <motion.div
                whileHover={{ scale: 1.02, zIndex: 10 }}
                transition={{ duration: 0.3 }}
                className="relative overflow-hidden shadow-[4px_4px_0px_rgba(0,0,0,0.18)]"
                style={{ aspectRatio: '4/3', marginTop: '24px' }}
              >
                <img
                  src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Gourmet vegetarian dish"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Bottom-right */}
              <motion.div
                whileHover={{ scale: 1.02, zIndex: 10 }}
                transition={{ duration: 0.3 }}
                className="relative overflow-hidden shadow-[4px_4px_0px_rgba(0,0,0,0.18)]"
                style={{ aspectRatio: '4/3' }}
              >
                <img
                  src="https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Fresh ingredients"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </motion.div>

            {/* 15+ badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              className="absolute bottom-0 left-1/2 -translate-x-1/2 z-20 bg-[#1E3A5F] text-[#C9A571] px-8 py-4 text-center shadow-xl"
              style={{ minWidth: '150px' }}
            >
              <p className="text-3xl sm:text-4xl font-bold leading-none">15+</p>
              <p className="text-xs sm:text-sm tracking-widest uppercase mt-1 opacity-90">Years of Excellence</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
