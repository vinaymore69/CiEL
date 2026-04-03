import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Utensils } from 'lucide-react';

const LocationSection = () => {
  const infoItems = [
    {
      icon: <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-[#1E3A5F]" />,
      title: 'Location',
      content: (
        <>
          Hotel Imperial Palace, CiEL Pure Veg
          <br />
          45, Teli Gali, Andheri East
          <br />
          Mumbai, Maharashtra 400069
        </>
      ),
    },
    {
      icon: <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-[#1E3A5F]" />,
      title: 'Opening Hours',
      content: (
        <>
          Open Daily <span className="text-[#1E3A5F] font-medium">· Closes 11:30 PM</span>
        </>
      ),
    },
    {
      icon: <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-[#1E3A5F]" />,
      title: 'Contact',
      content: (
        <>
          +91 98194 33999
          <br />
          reservations@ciel.restaurant
        </>
      ),
    },
    {
      icon: <Utensils className="w-5 h-5 sm:w-6 sm:h-6 text-[#1E3A5F]" />,
      title: 'Service Options',
      content: (
        <>
          Rooftop Seating &nbsp;·&nbsp; Vegan Options
          <br />
          Pure Vegetarian
        </>
      ),
    },
  ];

  return (
    <section id="contact" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#1E3A5F] mb-7 sm:mb-8">Visit Us</h2>

            <div className="space-y-5 sm:space-y-6">
              {infoItems.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i + 0.2, duration: 0.5 }}
                  className="flex items-start gap-4"
                >
                  <div className="bg-[#F5EFE7] p-3 rounded-none flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-medium text-[#1E3A5F] mb-1 text-sm sm:text-base">{item.title}</h3>
                    <p className="text-[#6B5E4F] text-sm sm:text-base leading-relaxed">{item.content}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.65, duration: 0.5 }}
              className="mt-7 font-serif sm:mt-8 border-2 border-[#1E3A5F] text-[#1E3A5F] px-7 sm:px-8 py-3.5 sm:py-4 font-medium hover:bg-[#1E3A5F] hover:text-white transition-all duration-300 text-sm sm:text-base"
            >
              Get Directions
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative h-72 sm:h-96 lg:h-[500px] overflow-hidden"
          >
            <iframe
              src="https://www.google.com/maps?q=Ciel+Pure+Veg,+45+Teli+Gali,+Andheri+East,+Mumbai+400069&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
