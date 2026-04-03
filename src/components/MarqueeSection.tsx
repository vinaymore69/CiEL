'use client';
import { motion } from 'framer-motion';

const items = [
  'Pure Vegetarian',
  'Rooftop Dining',
  'Global Flavors',
  'Saffron & Spices',
  'Michelin Inspired',
  'Andheri East',
  'Open Daily',
  'Vegan Options',
  'Fresh Ingredients',
  'Indian & Fusion',
  'Elegant Ambiance',
  'Sky-high Dining',
];

const MarqueeSection = () => {
  const doubled = [...items, ...items];

  return (
    <div className="bg-[#1E3A5F] py-4 sm:py-5 overflow-hidden border-y border-[#C9A571]/30">
      <motion.div
        className="flex gap-12 whitespace-nowrap"
        animate={{ x: ['0%', '-50%'] }}
        transition={{
          duration: 30,
          ease: 'linear',
          repeat: Infinity,
        }}
        style={{ width: 'max-content' }}
      >
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center gap-6 text-sm sm:text-base font-medium tracking-widest uppercase">
            <span className="text-[#C9A571]">{item}</span>
            <span className="text-[#C9A571]/40 text-lg">✦</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default MarqueeSection;
