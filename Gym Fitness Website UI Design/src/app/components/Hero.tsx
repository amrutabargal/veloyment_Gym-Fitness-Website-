import { motion } from 'motion/react';
import { ArrowRight, Play } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0A0A0A]">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1666979290238-2d862b573345?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxneW0lMjBmaXRuZXNzJTIwd29ya291dCUyMGludGVuc2V8ZW58MXx8fHwxNzcxNDMwNDYwfDA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Gym workout"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/80 to-[#0A0A0A]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-[#0A0A0A]/60" />
      </div>

      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#C9A96E]/5 rounded-full blur-[200px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#C9A96E]/3 rounded-full blur-[150px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-10"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="inline-flex items-center gap-3 px-5 py-2.5 border border-[#C9A96E]/30 rounded-none"
            >
              <div className="w-1.5 h-1.5 bg-[#C9A96E] rounded-full animate-pulse" />
              <span className="text-xs font-['Inter'] font-light tracking-[0.2em] uppercase text-[#C9A96E]">
                Premium Fitness Experience
              </span>
            </motion.div>

            <div className="space-y-6">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="font-['Playfair_Display'] font-bold text-5xl sm:text-6xl lg:text-[5.5rem] leading-[0.95] tracking-tight"
              >
                <span className="text-[#F5F0EB]">Elevate Your</span>
                <br />
                <span className="text-[#C9A96E] italic">Body & Mind</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="text-lg text-[#8A8A8A] font-['Inter'] font-light max-w-lg leading-relaxed"
              >
                Experience world-class training with elite coaches, premium equipment,
                and a community dedicated to excellence. Your transformation starts here.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group px-8 py-4 bg-[#C9A96E] text-[#0A0A0A] font-['Inter'] font-semibold text-sm tracking-wider uppercase hover:bg-[#D4B896] transition-all duration-500 flex items-center justify-center gap-3"
              >
                Book Free Trial
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group px-8 py-4 bg-transparent text-[#F5F0EB] font-['Inter'] font-medium text-sm tracking-wider uppercase border border-[#F5F0EB]/20 hover:border-[#C9A96E]/50 transition-all duration-500 flex items-center justify-center gap-3"
              >
                <div className="w-10 h-10 border border-[#C9A96E]/50 rounded-full flex items-center justify-center group-hover:bg-[#C9A96E]/10 transition-colors duration-300">
                  <Play className="w-4 h-4 text-[#C9A96E] fill-[#C9A96E] ml-0.5" />
                </div>
                Watch Film
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="grid grid-cols-3 gap-8 pt-8 border-t border-[#C9A96E]/10"
            >
              {[
                { value: '15K+', label: 'Active Members' },
                { value: '50+', label: 'Elite Trainers' },
                { value: '4.9', label: 'Star Rating' },
              ].map((stat, index) => (
                <div key={index} className="space-y-1">
                  <div className="font-['Playfair_Display'] font-bold text-3xl text-[#C9A96E]">
                    {stat.value}
                  </div>
                  <div className="text-xs text-[#8A8A8A] font-['Inter'] font-light tracking-wider uppercase">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              <div className="absolute -inset-4 border border-[#C9A96E]/20 rounded-2xl" />
              <div className="absolute -inset-8 border border-[#C9A96E]/10 rounded-3xl" />
              <div className="relative rounded-xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1759300642026-3f8ded9a9196?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNjdWxhciUyMGF0aGxldGUlMjB0cmFpbmluZ3xlbnwxfHx8fDE3NzE0NjI5OTl8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Elite athlete training"
                  className="w-full h-[650px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/60 via-transparent to-transparent" />
              </div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                className="absolute bottom-6 left-6 right-6 bg-[#111111]/90 backdrop-blur-xl border border-[#C9A96E]/20 rounded-xl p-5"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#C9A96E]/10 border border-[#C9A96E]/30 rounded-lg flex items-center justify-center">
                      <span className="text-[#C9A96E] text-xl">🔥</span>
                    </div>
                    <div>
                      <div className="font-['Playfair_Display'] font-bold text-2xl text-[#F5F0EB]">500+</div>
                      <div className="text-xs text-[#8A8A8A] font-['Inter'] tracking-wider uppercase">Calories Burned</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-['Playfair_Display'] font-bold text-2xl text-[#C9A96E]">98%</div>
                    <div className="text-xs text-[#8A8A8A] font-['Inter'] tracking-wider uppercase">Success Rate</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] font-['Inter'] tracking-[0.3em] uppercase text-[#8A8A8A]">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1px] h-8 bg-gradient-to-b from-[#C9A96E] to-transparent"
        />
      </motion.div>
    </section>
  );
}
