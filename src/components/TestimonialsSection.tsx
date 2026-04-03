import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    name: 'Amandeep Singh Mehandru',
    text: 'One cannot beat the quality of food and the affordable prices for this place.',
    rating: 5,
  },
  {
    name: 'Hema Parihar',
    text: 'I loved their crispy platter, flavorful curries, and decadent desserts.',
    rating: 5,
  },
  {
    name: 'Manish Agarwal',
    text: 'Ciel Bistro offers a cozy and elegant ambiance with excellent service.',
    rating: 5,
  },
];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.13, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

const TestimonialsSection = () => {
  return (
    <section className="py-16 sm:py-24 bg-[#F5EFE7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#1E3A5F] mb-4">
            What Our Guests Say
          </h2>
          <p className="text-[#6B5E4F] text-base sm:text-lg max-w-2xl mx-auto">
            Real experiences from our valued guests
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.name}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="bg-white p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow duration-300 border border-[#C9A571]/20 relative"
            >
              {/* Quote icon */}
              <Quote className="w-8 h-8 text-[#C9A571]/40 mb-4" />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#C9A571] text-[#C9A571]" />
                ))}
              </div>

              {/* Review text */}
              <p className="text-[#6B5E4F] text-sm sm:text-base leading-relaxed mb-6 italic">
                "{review.text}"
              </p>

              {/* Divider */}
              <div className="w-8 h-px bg-[#C9A571] mb-4" />

              {/* Reviewer */}
              <p className="font-medium text-[#1E3A5F] text-sm sm:text-base">{review.name}</p>
              <p className="text-xs text-[#6B5E4F] mt-0.5">Verified Guest</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
