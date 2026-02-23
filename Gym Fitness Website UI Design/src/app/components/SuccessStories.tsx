import { motion } from 'motion/react';
import { Quote, ArrowRight } from 'lucide-react';
import * as Progress from '@radix-ui/react-progress';
import { useEffect, useState } from 'react';

const stories = [
  {
    name: 'Jessica Martinez',
    image: 'https://images.unsplash.com/photo-1626807020058-30eb4ef93c84?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwdHJhbnNmb3JtYXRpb24lMjBzdHJvbmd8ZW58MXx8fHwxNzcxNDg4MzMzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    achievement: 'Lost 30 lbs in 4 months',
    program: 'Weight Loss Program',
    testimonial: "Élite Fitness transformed my life. The trainers are extraordinary and the community is unmatched. I never imagined I could achieve these results.",
    stats: [
      { label: 'Weight Lost', value: 30, unit: 'lbs', progress: 100 },
      { label: 'Body Fat', value: 12, unit: '%', progress: 85 },
      { label: 'Strength Gain', value: 45, unit: '%', progress: 90 },
    ],
  },
  {
    name: 'David Thompson',
    image: 'https://images.unsplash.com/photo-1759300642026-3f8ded9a9196?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNjdWxhciUyMGF0aGxldGUlMjB0cmFpbmluZ3xlbnwxfHx8fDE3NzE0NjI5OTl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    achievement: 'Gained 20 lbs of muscle',
    program: 'Muscle Building Program',
    testimonial: "The personalized approach and premium nutrition guidance helped me build the physique I always envisioned. The results speak for themselves.",
    stats: [
      { label: 'Muscle Gain', value: 20, unit: 'lbs', progress: 95 },
      { label: 'Strength Gain', value: 60, unit: '%', progress: 100 },
      { label: 'Endurance', value: 40, unit: '%', progress: 80 },
    ],
  },
];

function ProgressBar({ value }: { value: number }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(value), 500);
    return () => clearTimeout(timer);
  }, [value]);

  return (
    <Progress.Root
      className="relative overflow-hidden bg-[#1A1A1A] w-full h-1"
      value={progress}
    >
      <Progress.Indicator
        className="bg-gradient-to-r from-[#C9A96E] to-[#D4B896] h-full transition-transform duration-1000 ease-out"
        style={{ transform: `translateX(-${100 - progress}%)` }}
      />
    </Progress.Root>
  );
}

export function SuccessStories() {
  return (
    <section className="py-28 bg-[#0D0D0D] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#C9A96E]/20 to-transparent" />
      <div className="absolute bottom-1/3 left-0 w-[500px] h-[500px] bg-[#C9A96E]/3 rounded-full blur-[250px]" />

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
              Success Stories
            </span>
          </div>
          <h2 className="font-['Playfair_Display'] font-bold text-4xl sm:text-5xl lg:text-6xl text-[#F5F0EB]">
            Real People, <span className="text-[#C9A96E] italic">Real Results</span>
          </h2>
          <p className="text-lg text-[#8A8A8A] font-['Inter'] font-light max-w-2xl mx-auto">
            Hear from members who have transformed their lives at Élite Fitness
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {stories.map((story, index) => (
            <motion.div
              key={story.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group"
            >
              <div className="relative bg-[#111111] border border-[#C9A96E]/10 hover:border-[#C9A96E]/20 transition-all duration-700 p-8 lg:p-10">
                <div className="absolute top-8 right-8 opacity-5">
                  <Quote className="w-20 h-20 text-[#C9A96E]" />
                </div>

                <div className="flex items-start gap-5 mb-8 relative z-10">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="w-16 h-16 overflow-hidden border border-[#C9A96E]/30 flex-shrink-0"
                  >
                    <img
                      src={story.image}
                      alt={story.name}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="font-['Playfair_Display'] font-bold text-xl text-[#F5F0EB] mb-1">
                      {story.name}
                    </h3>
                    <p className="text-xs text-[#8A8A8A] font-['Inter'] tracking-wider uppercase mb-3">
                      {story.program}
                    </p>
                    <span className="text-xs font-['Inter'] font-medium text-[#C9A96E] border border-[#C9A96E]/20 px-3 py-1">
                      {story.achievement}
                    </span>
                  </div>
                </div>

                <p className="text-[#B0B0B0] font-['Inter'] font-light leading-relaxed mb-10 relative z-10 italic">
                  "{story.testimonial}"
                </p>

                <div className="space-y-5 relative z-10">
                  {story.stats.map((stat, i) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + i * 0.1 }}
                      className="space-y-2"
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-xs font-['Inter'] font-light tracking-wider uppercase text-[#8A8A8A]">
                          {stat.label}
                        </span>
                        <span className="font-['Playfair_Display'] font-bold text-lg text-[#C9A96E]">
                          {stat.value}{stat.unit}
                        </span>
                      </div>
                      <ProgressBar value={stat.progress} />
                    </motion.div>
                  ))}
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
            className="group inline-flex items-center gap-3 px-10 py-4 bg-[#C9A96E] text-[#0A0A0A] font-['Inter'] font-semibold text-sm tracking-wider uppercase hover:bg-[#D4B896] transition-all duration-500"
          >
            View More Stories
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
