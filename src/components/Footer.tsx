import { motion } from 'framer-motion';
import { Instagram, Facebook, Mail } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: <Instagram className="w-5 h-5" />, href: 'https://instagram.com/ciel_mumbai' },
    { icon: <Facebook className="w-5 h-5" />, href: '#' },
    { icon: <Mail className="w-5 h-5" />, href: '#' },
  ];

  return (
    <footer className="bg-[#1E3A5F] text-[#F5EFE7] py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 md:gap-12 mb-10 sm:mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <img src="/image.png" alt="CiEL" className="h-10 sm:h-12 mb-4 brightness-0 invert" />
            <p className="text-xs sm:text-sm text-[#C9A571] leading-relaxed">
              Ciel Pure Veg — a modern vegetarian dining destination bringing together global flavors and timeless classics in a refreshing, elevated way.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="font-medium text-white mb-4 text-sm sm:text-base">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {['Menu', 'Our Story', 'Chef', 'Gallery', 'Reservation'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(' ', '-')}`}
                    className="hover:text-[#C9A571] transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Opening Hours */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="font-medium text-white mb-4 text-sm sm:text-base">Opening Hours</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-[#C9A571]">Open Daily</li>
              <li>Closes 11:30 PM</li>
              <li className="mt-4 text-[#C9A571]">Reservations</li>
              <li>+91 98194 33999</li>
              <li className="mt-2 text-[#6B9E7F] text-xs">Rooftop Seating · Vegan Options</li>
            </ul>
          </motion.div>

          {/* Connect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="font-medium text-white mb-4 text-sm sm:text-base">Connect With Us</h3>
            <div className="flex gap-3 sm:gap-4 mb-4">
              {socialLinks.map(({ icon, href }, i) => (
                <motion.a
                  key={i}
                  whileHover={{ scale: 1.15, backgroundColor: '#1E3A5F' }}
                  href={href}
                  className="bg-[#F5EFE7]/10 p-2.5 sm:p-3 rounded-none transition-colors"
                >
                  {icon}
                </motion.a>
              ))}
            </div>
            <p className="text-xs sm:text-sm text-[#C9A571]">@ciel_mumbai</p>
            <p className="text-xs text-[#F5EFE7]/50 mt-2 leading-relaxed">
              Hotel Imperial Palace,<br />45 Teli Gali, Andheri East,<br />Mumbai 400069
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-[#F5EFE7]/10 pt-6 sm:pt-8 text-center text-xs sm:text-sm text-[#C9A571]"
        >
          <p>&copy; 2024 CiEL Pure Veg. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
