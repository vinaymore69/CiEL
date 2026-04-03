import { motion } from 'framer-motion';
import { Calendar, Clock, Users } from 'lucide-react';

const ReservationSection = () => {
  return (
    <section id="reservation" className="py-16 sm:py-24 bg-[#F5EFE7]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#1E3A5F] mb-4">Reserve Your Table</h2>
          <p className="text-[#6B5E4F] text-base sm:text-lg">
            Secure your spot for an unforgettable culinary journey
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.15, ease: 'easeOut' }}
          className="bg-white shadow-xl p-6 sm:p-8 md:p-12"
        >
          <form className="space-y-5 sm:space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <label className="block text-sm font-medium text-[#1E3A5F] mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-none border border-[#C9A571]/30 focus:border-[#C9A571] focus:outline-none transition-colors text-sm"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#1E3A5F] mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-none border border-[#C9A571]/30 focus:border-[#C9A571] focus:outline-none transition-colors text-sm"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-[#1E3A5F] mb-2">Phone</label>
              <input
                type="tel"
                className="w-full px-4 py-3 rounded-lg border border-[#C9A571]/30 focus:border-[#C9A571] focus:outline-none transition-colors text-sm"
                placeholder="+91 XXXXX XXXXX"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
              <div>
                <label className="block text-sm font-medium text-[#1E3A5F] mb-2">
                  <Calendar className="inline w-4 h-4 mr-1" />
                  Date
                </label>
                <input
                  type="date"
                  className="w-full px-4 py-3 rounded-none border border-[#C9A571]/30 focus:border-[#C9A571] focus:outline-none transition-colors text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#1E3A5F] mb-2">
                  <Clock className="inline w-4 h-4 mr-1" />
                  Time
                </label>
                <select className="w-full px-4 py-3 rounded-none border border-[#C9A571]/30 focus:border-[#C9A571] focus:outline-none transition-colors text-sm">
                  <option>11:00 AM</option>
                  <option>12:00 PM</option>
                  <option>1:00 PM</option>
                  <option>2:00 PM</option>
                  <option>7:00 PM</option>
                  <option>8:00 PM</option>
                  <option>9:00 PM</option>
                  <option>10:00 PM</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-[#1E3A5F] mb-2">
                  <Users className="inline w-4 h-4 mr-1" />
                  Guests
                </label>
                <select className="w-full px-4 py-3 rounded-none border border-[#C9A571]/30 focus:border-[#C9A571] focus:outline-none transition-colors text-sm">
                  <option>1 Guest</option>
                  <option>2 Guests</option>
                  <option>3 Guests</option>
                  <option>4 Guests</option>
                  <option>5+ Guests</option>
                </select>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full bg-[#1E3A5F] text-[#C9A571] py-4 font-medium text-base sm:text-lg hover:bg-[#112544] transition-colors duration-300"
            >
              Reserve Your Table
            </motion.button>

            <p className="text-center text-xs sm:text-sm text-[#6B5E4F]">
              Walk-ins welcome based on availability
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ReservationSection;
