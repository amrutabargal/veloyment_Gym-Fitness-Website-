import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export function CTASection() {
  return (
    <section className="py-32 relative overflow-hidden bg-[#0A0A0A]">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#C9A96E]/8 via-transparent to-[#C9A96E]/5" />
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #C9A96E 0.5px, transparent 0)',
          backgroundSize: '80px 80px',
        }} />
      </div>

      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#C9A96E]/20 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#C9A96E]/20 to-transparent" />

      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#C9A96E]/5 rounded-full blur-[250px]" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#C9A96E]/3 rounded-full blur-[200px]" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-5 py-2.5 border border-[#C9A96E]/20">
              <div className="w-1.5 h-1.5 bg-[#C9A96E] rounded-full animate-pulse" />
              <span className="text-xs font-['Inter'] font-light tracking-[0.2em] uppercase text-[#C9A96E]">
                Limited Spots Available
              </span>
            </div>
            <h2 className="font-['Playfair_Display'] font-bold text-4xl sm:text-5xl lg:text-7xl text-[#F5F0EB] leading-[1.05]">
              Ready to Begin Your
              <br />
              <span className="text-[#C9A96E] italic">Transformation?</span>
            </h2>
            <p className="text-lg text-[#8A8A8A] font-['Inter'] font-light max-w-2xl mx-auto leading-relaxed">
              Join Élite Fitness today and experience your first week complimentary.
              No commitment required. Your journey to excellence starts now.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group px-10 py-5 bg-[#C9A96E] text-[#0A0A0A] font-['Inter'] font-semibold text-sm tracking-wider uppercase hover:bg-[#D4B896] transition-all duration-500 flex items-center gap-3"
            >
              Book Your Free Trial
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-10 py-5 bg-transparent text-[#C9A96E] font-['Inter'] font-medium text-sm tracking-wider uppercase border border-[#C9A96E]/40 hover:bg-[#C9A96E]/10 transition-all duration-500"
            >
              View Membership Plans
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap justify-center gap-8 pt-8 border-t border-[#C9A96E]/10"
          >
            {['No Credit Card Required', 'Cancel Anytime', '30-Day Money Back'].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <div className="w-4 h-4 border border-[#C9A96E]/40 flex items-center justify-center">
                  <span className="text-[#C9A96E] text-[8px]">✓</span>
                </div>
                <span className="text-sm text-[#8A8A8A] font-['Inter'] font-light">{item}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
