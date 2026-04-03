import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { Button } from '@/components/ui/button';

const MenuSection = ({ onMenuClick }: { onMenuClick?: () => void }) => {
  const dishes = [
    {
      name: 'Truffle Mushroom Risotto',
      description: 'Creamy arborio rice with wild mushrooms and white truffle oil',
      price: '₹1,250',
      tag: 'Chef\'s Pick',
      image: 'https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      name: 'Smoked Paneer Medallions',
      description: 'House-made paneer with saffron glaze and seasonal vegetables',
      price: '₹1,100',
      tag: 'Signature',
      image: 'https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      name: 'Saffron Almond Kofta',
      description: 'Delicate almond and cashew koftas in aromatic saffron curry',
      price: '₹1,350',
      tag: 'Popular',
      image: 'https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      name: 'Herb Infused Ravioli',
      description: 'Hand-crafted ravioli with ricotta and fresh garden herbs',
      price: '₹1,200',
      tag: 'New',
      image: 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ];

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, delay: i * 0.12, ease: [0.25, 0.1, 0.25, 1] },
    }),
  };

  return (
    <section id="menu" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#1E3A5F] mb-4">
            Our Signature Creations
          </h2>
          <p className="text-[#1E3A5F] text-base sm:text-lg max-w-2xl mx-auto">
            Each dish is a masterpiece, thoughtfully crafted with the finest ingredients
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border border-[#C9A571]/20 mb-10 sm:mb-12">
          {dishes.map((dish, index) => (
            <motion.div
              key={dish.name}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className={`relative overflow-hidden group cursor-pointer bg-[#1E3A5F] ${
                index < dishes.length - 1 ? 'border-r border-[#C9A571]/20' : ''
              }`}
            >
              {/* Image */}
              <div className="relative overflow-hidden h-72 sm:h-80">
                <motion.img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:scale-110"
                />
                {/* Dark overlay on hover */}
                <div className="absolute inset-0 bg-[#1E3A5F]/0 group-hover:bg-[#1E3A5F]/60 transition-all duration-500" />

                {/* Tag badge */}
                <span className="absolute top-3 left-3 bg-[#1E3A5F] text-white text-[10px] tracking-widest uppercase px-3 py-1 font-medium">
                  {dish.tag}
                </span>

                {/* Slide-up reveal panel on hover — unique effect */}
                <div className="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] bg-[#1E3A5F] p-5">
                  <p className="text-[#C9A571] font-serif text-lg font-semibold mb-1">{dish.name}</p>
                  <p className="text-[#F5EFE7]/80 text-xs leading-relaxed mb-3">{dish.description}</p>
                  <div className="flex items-center justify-between">
                    {/* <span className="text-[#C9A571] font-bold text-base">{dish.price}</span> */}
                    {/* <span className="text-[#F5EFE7]/60 text-xs tracking-wider uppercase">Add to order →</span> */}
                  </div>
                </div>
              </div>

              {/* Default info below image (hidden on hover via opacity) */}
              {/* <div className="p-5 transition-opacity duration-300 group-hover:opacity-0">
                <h3 className="text-lg font-serif text-[#1E3A5F] mb-1 truncate">{dish.name}</h3>
                <p className="text-xs text-[#6B5E4F] mb-2 line-clamp-2">{dish.description}</p>
                <p className="text-base font-medium text-[#C9A571]">{dish.price}</p>
              </div> */}
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <motion.div
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block font-serif"
          >
            <Button variant="outline" size="lg" onClick={onMenuClick}>View Full Menu</Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
