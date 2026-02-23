import { motion } from 'motion/react';
import { Award, Star } from 'lucide-react';

const trainers = [
  {
    name: 'Sarah Johnson',
    role: 'Strength & Conditioning',
    image: 'https://images.unsplash.com/photo-1580058572462-98e2c0e0e2f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdGhsZXRpYyUyMHdvbWFuJTIwd29ya291dHxlbnwxfHx8fDE3NzE0ODgzMzR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    experience: '8 Years',
    specialty: 'Powerlifting',
    rating: '4.9',
    clients: '500+',
  },
  {
    name: 'Mike Chen',
    role: 'CrossFit Coach',
    image: 'https://images.unsplash.com/photo-1540205453279-389ebbc43b5b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb25hbCUyMHRyYWluZXIlMjBjb2FjaGluZ3xlbnwxfHx8fDE3NzEzOTIxNzZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    experience: '10 Years',
    specialty: 'HIIT Training',
    rating: '5.0',
    clients: '800+',
  },
  {
    name: 'Emma Williams',
    role: 'Yoga Instructor',
    image: 'https://images.unsplash.com/photo-1626807020058-30eb4ef93c84?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwdHJhbnNmb3JtYXRpb24lMjBzdHJvbmd8ZW58MXx8fHwxNzcxNDg4MzMzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    experience: '6 Years',
    specialty: 'Mindfulness',
    rating: '4.8',
    clients: '350+',
  },
];

export function TrainerProfiles() {
  return (
    <section className="py-28 bg-[#0A0A0A] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#C9A96E]/20 to-transparent" />
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-[#C9A96E]/3 rounded-full blur-[250px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20 space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2.5 border border-[#C9A96E]/20 rounded-none">
            <span className="text-xs font-['Inter'] font-light tracking-[0.2em] uppercase text-[#C9A96E]">
              Expert Trainers
            </span>
          </div>
          <h2 className="font-['Playfair_Display'] font-bold text-4xl sm:text-5xl lg:text-6xl text-[#F5F0EB]">
            Your <span className="text-[#C9A96E] italic">Elite</span> Team
          </h2>
          <p className="text-lg text-[#8A8A8A] font-['Inter'] font-light max-w-2xl mx-auto">
            World-class professionals dedicated to unlocking your full potential
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {trainers.map((trainer, index) => (
            <motion.div
              key={trainer.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="group relative"
            >
              <div className="relative bg-[#111111] overflow-hidden border border-[#C9A96E]/10 hover:border-[#C9A96E]/30 transition-all duration-700">
                <div className="relative h-96 overflow-hidden">
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    src={trainer.image}
                    alt={trainer.name}
                    className="w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-opacity duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/30 to-transparent" />

                  <div className="absolute top-5 right-5">
                    <div className="bg-[#111111]/80 backdrop-blur-sm border border-[#C9A96E]/20 px-3 py-1.5 flex items-center gap-1.5">
                      <Star className="w-3.5 h-3.5 text-[#C9A96E] fill-[#C9A96E]" />
                      <span className="font-['Inter'] font-medium text-sm text-[#F5F0EB]">
                        {trainer.rating}
                      </span>
                    </div>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="font-['Playfair_Display'] font-bold text-2xl text-[#F5F0EB] mb-1">
                      {trainer.name}
                    </h3>
                    <p className="font-['Inter'] font-light text-sm text-[#C9A96E] tracking-wider uppercase">
                      {trainer.role}
                    </p>
                  </div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.4 }}
                    className="absolute inset-0 bg-[#0A0A0A]/85 backdrop-blur-sm flex items-center justify-center p-8"
                  >
                    <div className="text-center space-y-6 w-full">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="border border-[#C9A96E]/20 p-4">
                          <Award className="w-5 h-5 text-[#C9A96E] mx-auto mb-2" />
                          <div className="font-['Playfair_Display'] font-bold text-lg text-[#F5F0EB]">{trainer.experience}</div>
                          <div className="text-[10px] text-[#8A8A8A] font-['Inter'] tracking-wider uppercase">Experience</div>
                        </div>
                        <div className="border border-[#C9A96E]/20 p-4">
                          <Star className="w-5 h-5 text-[#C9A96E] mx-auto mb-2" />
                          <div className="font-['Playfair_Display'] font-bold text-lg text-[#F5F0EB]">{trainer.clients}</div>
                          <div className="text-[10px] text-[#8A8A8A] font-['Inter'] tracking-wider uppercase">Clients</div>
                        </div>
                      </div>
                      <div>
                        <div className="text-xs text-[#8A8A8A] font-['Inter'] tracking-wider uppercase mb-1">Specialty</div>
                        <div className="text-[#C9A96E] font-['Inter'] font-medium">{trainer.specialty}</div>
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full py-3 bg-[#C9A96E] text-[#0A0A0A] font-['Inter'] font-semibold text-sm tracking-wider uppercase hover:bg-[#D4B896] transition-colors duration-300"
                      >
                        Book Session
                      </motion.button>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-10 py-4 bg-transparent text-[#C9A96E] font-['Inter'] font-medium text-sm tracking-wider uppercase border border-[#C9A96E]/40 hover:bg-[#C9A96E] hover:text-[#0A0A0A] transition-all duration-500"
          >
            View All Trainers
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
