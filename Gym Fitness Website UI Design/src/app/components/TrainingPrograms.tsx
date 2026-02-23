import { motion } from 'motion/react';
import { Dumbbell, Heart, Activity, Flame, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const programs = [
  {
    title: 'Weight Training',
    description: 'Build strength and sculpt your physique with progressive resistance protocols',
    duration: '6-12 weeks',
    goal: 'Muscle & Strength',
    image: 'https://images.unsplash.com/photo-1608947325421-b13e6956c7b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxneW0lMjBlcXVpcG1lbnQlMjBkdW1iYmVsbHN8ZW58MXx8fHwxNzcxNDg4MzMzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    icon: Dumbbell,
  },
  {
    title: 'Cardio Training',
    description: 'Elevate endurance and optimize fat loss with precision cardio programming',
    duration: '4-8 weeks',
    goal: 'Endurance & Fat Loss',
    image: 'https://images.unsplash.com/photo-1761971974992-6df33df97c3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJkaW8lMjBydW5uaW5nJTIwdHJlYWRtaWxsfGVufDF8fHx8MTc3MTQ1NDA1Nnww&ixlib=rb-4.1.0&q=80&w=1080',
    icon: Activity,
  },
  {
    title: 'Yoga & Flexibility',
    description: 'Harmonize body and mind through ancient practices refined for modern life',
    duration: '8-12 weeks',
    goal: 'Flexibility & Wellness',
    image: 'https://images.unsplash.com/photo-1705360315268-5e1ae3d43f61?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2dhJTIwbWVkaXRhdGlvbiUyMGZpdG5lc3N8ZW58MXx8fHwxNzcxNDE1NDUwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    icon: Heart,
  },
  {
    title: 'CrossFit Training',
    description: 'Push boundaries with high-intensity functional movements for peak performance',
    duration: '6-10 weeks',
    goal: 'Total Fitness',
    image: 'https://images.unsplash.com/photo-1639511205273-7af2f8805d10?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcm9zc2ZpdCUyMGtldHRsZWJlbGwlMjB0cmFpbmluZ3xlbnwxfHx8fDE3NzE0ODgzMzJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    icon: Flame,
  },
];

export function TrainingPrograms() {
  return (
    <section className="py-28 bg-[#0D0D0D] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#C9A96E]/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20 space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2.5 border border-[#C9A96E]/20 rounded-none">
            <span className="text-xs font-['Inter'] font-light tracking-[0.2em] uppercase text-[#C9A96E]">
              Training Programs
            </span>
          </div>
          <h2 className="font-['Playfair_Display'] font-bold text-4xl sm:text-5xl lg:text-6xl text-[#F5F0EB]">
            Curated For <span className="text-[#C9A96E] italic">Excellence</span>
          </h2>
          <p className="text-lg text-[#8A8A8A] font-['Inter'] font-light max-w-2xl mx-auto">
            Meticulously designed programs to guide you toward your highest potential
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {programs.map((program, index) => {
            const Icon = program.icon;
            return (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="relative h-full bg-[#111111] overflow-hidden border border-[#C9A96E]/10 hover:border-[#C9A96E]/30 transition-all duration-700">
                  <div className="relative h-72 overflow-hidden">
                    <motion.img
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                      src={program.image}
                      alt={program.title}
                      className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/40 to-transparent" />

                    <div className="absolute top-6 left-6">
                      <div className="w-12 h-12 bg-[#111111]/80 backdrop-blur-sm border border-[#C9A96E]/30 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-[#C9A96E]" />
                      </div>
                    </div>

                    <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="w-10 h-10 bg-[#C9A96E] flex items-center justify-center">
                        <ArrowUpRight className="w-5 h-5 text-[#0A0A0A]" />
                      </div>
                    </div>
                  </div>

                  <div className="p-8 space-y-4">
                    <h3 className="font-['Poppins'] font-semibold text-2xl text-[#F5F0EB] tracking-wide">
                      {program.title}
                    </h3>
                    <p className="text-[#8A8A8A] font-['Inter'] font-light leading-relaxed">
                      {program.description}
                    </p>
                    <div className="flex gap-4 pt-2">
                      <span className="text-xs font-['Inter'] tracking-wider uppercase text-[#C9A96E] border border-[#C9A96E]/20 px-3 py-1.5">
                        {program.duration}
                      </span>
                      <span className="text-xs font-['Inter'] tracking-wider uppercase text-[#C9A96E] border border-[#C9A96E]/20 px-3 py-1.5">
                        {program.goal}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-16"
        >
          <Link to="/programs">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-10 py-4 bg-transparent text-[#C9A96E] font-['Inter'] font-medium text-sm tracking-wider uppercase border border-[#C9A96E]/40 hover:bg-[#C9A96E] hover:text-[#0A0A0A] transition-all duration-500"
            >
              View All Programs
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
