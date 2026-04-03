import { motion } from 'framer-motion';
import { Instagram } from 'lucide-react';

const InstagramSection = () => {
  const instagramImages = [
    'https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/1438672/pexels-photo-1438672.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/1633525/pexels-photo-1633525.jpeg?auto=compress&cs=tinysrgb&w=600',
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#F5EFE7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-3">
            <Instagram className="w-6 h-6 sm:w-8 sm:h-8 text-[#1E3A5F]" />
            <h2 className="text-3xl sm:text-4xl font-serif text-[#1E3A5F]">Follow Our Journey</h2>
          </div>
          <p className="text-[#6B5E4F] text-base sm:text-lg">@ciel_mumbai</p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {instagramImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.82 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.06, ease: 'easeOut' }}
              className="relative aspect-square overflow-hidden rounded-none group cursor-pointer"
            >
              <motion.img
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.35 }}
                src={image}
                alt={`Instagram post ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-[#1E3A5F]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Instagram className="w-7 h-7 sm:w-8 sm:h-8 text-[#C9A571]" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstagramSection;
