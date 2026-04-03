import { motion } from 'framer-motion';

const ChefSection = () => {
  return (
    <section id="chef" className="py-16 sm:py-24 bg-[#F5EFE7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="relative"
          >
            <div className="relative overflow-hidden">
              <img
                src="https://images.pexels.com/photos/2291351/pexels-photo-2291351.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Chef at work"
                className="w-full h-[380px] sm:h-[500px] lg:h-[600px] object-cover"
              />
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5, ease: 'easeOut' }}
              className="absolute bottom-4 right-4 sm:-bottom-4 sm:-right-4 bg-[#1E3A5F] text-white p-6 sm:p-8 shadow-xl"
            >
              <p className="text-3xl sm:text-4xl font-bold">15+</p>
              <p className="text-xs sm:text-sm">Years of Excellence</p>
            </motion.div>
          </motion.div>

          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="mt-8 sm:mt-0"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="text-5xl sm:text-5xl md:text-5xl font-serif text-[#1E3A5F] mb-5 sm:mb-6"
            >
              Meet the Chef Behind CiEL
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25, duration: 0.6 }}
              className="text-[#6B5E4F] text-base text-justify font-light sm:text-lg leading-relaxed mb-5 sm:mb-6"
            >
              Chef Aarav Mehta brings over 15 years of culinary expertise to CiEL, having trained
              in Michelin-starred kitchens across Europe and India. His philosophy centers on
              celebrating vegetarian cuisine as an art form—where every ingredient tells a story
              of seasonality, sustainability, and soul.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35, duration: 0.6 }}
              className="text-[#6B5E4F] text-base text-justify font-light sm:text-lg leading-relaxed mb-7 sm:mb-8"
            >
              At CiEL, Chef Aarav works closely with local farms to source the freshest produce,
              transforming humble vegetables into elegant masterpieces that challenge perceptions
              and delight the senses. His innovative approach marries traditional Indian techniques
              with contemporary European plating, creating a truly unique dining experience.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.45, duration: 0.6 }}
              className="bg-white p-5 sm:p-6 border-l-4 border-[#C9A571] mb-7 sm:mb-8"
            >
              <p className="text-lg sm:text-xl italic text-[#1E3A5F] font-serif mb-2">
                "Vegetarian cuisine is not limitation. It is imagination."
              </p>
              <p className="text-xs sm:text-sm text-[#6B5E4F]">— Chef Aarav Mehta</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.55, duration: 0.6 }}
              className="font-serif text-2xl sm:text-3xl text-[#C9A571]"
            >
              Chef Aarav Mehta
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ChefSection;
