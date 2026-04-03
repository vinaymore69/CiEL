import { motion } from 'framer-motion';

const DiningSection = () => {
  const images = [
    'https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/3201921/pexels-photo-3201921.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/1633525/pexels-photo-1633525.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&cs=tinysrgb&w=800',
  ];

  return (
    <section id="gallery" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#1E3A5F] mb-4">
            The CiEL Experience
          </h2>
          <p className="text-[#6B5E4F] text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
            At CiEL, every plate tells a story of craftsmanship, seasonality, and mindful
            indulgence. Immerse yourself in an ambience where culinary art meets refined elegance.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.93 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              className={`relative overflow-hidden group ${index === 0 ? 'sm:row-span-2' : ''}`}
            >
              <motion.div
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.5 }}
                className="relative h-full"
              >
                <img
                  src={image}
                  alt={`Dining experience ${index + 1}`}
                  className={`w-full object-cover ${index === 0 ? 'h-64 sm:h-full' : 'h-56 sm:h-72'}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E3A5F]/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DiningSection;
