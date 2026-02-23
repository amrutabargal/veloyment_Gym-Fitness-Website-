import { motion } from 'motion/react';
import { Dumbbell, Heart, Activity, Flame, Clock, Target, Users, TrendingUp, ArrowUpRight } from 'lucide-react';

const programsData = [
  {
    title: 'Weight Training',
    description: 'Build extraordinary strength and sculpt your physique with progressive resistance training. Designed for those who pursue physical excellence.',
    duration: '6-12 weeks',
    goal: 'Muscle Gain & Strength',
    intensity: 'High',
    groupSize: '8-12 people',
    image: 'https://images.unsplash.com/photo-1608947325421-b13e6956c7b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxneW0lMjBlcXVpcG1lbnQlMjBkdW1iYmVsbHN8ZW58MXx8fHwxNzcxNDg4MzMzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    icon: Dumbbell,
    features: [
      'Progressive overload training',
      'Compound movement focus',
      'Hypertrophy protocols',
      'Strength testing & tracking',
      'Personalized workout plans',
      'Nutrition guidance included',
    ],
  },
  {
    title: 'Cardio Training',
    description: 'Elevate endurance and optimize calorie burn with precision cardio programming designed to maximize fat loss and cardiovascular health.',
    duration: '4-8 weeks',
    goal: 'Weight Loss & Endurance',
    intensity: 'Very High',
    groupSize: '10-15 people',
    image: 'https://images.unsplash.com/photo-1761971974992-6df33df97c3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJkaW8lMjBydW5uaW5nJTIwdHJlYWRtaWxsfGVufDF8fHx8MTc3MTQ1NDA1Nnww&ixlib=rb-4.1.0&q=80&w=1080',
    icon: Activity,
    features: [
      'HIIT training sessions',
      'Endurance building',
      'Calorie tracking',
      'Heart rate zone training',
      'Running technique coaching',
      'Recovery protocols',
    ],
  },
  {
    title: 'Yoga & Flexibility',
    description: 'Harmonize body and mind through ancient practices refined for modern life. From beginner to advanced, find your inner balance.',
    duration: '8-12 weeks',
    goal: 'Flexibility & Wellness',
    intensity: 'Low to Medium',
    groupSize: '12-20 people',
    image: 'https://images.unsplash.com/photo-1705360315268-5e1ae3d43f61?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2dhJTIwbWVkaXRhdGlvbiUyMGZpdG5lc3N8ZW58MXx8fHwxNzcxNDE1NDUwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    icon: Heart,
    features: [
      'Hatha & Vinyasa yoga',
      'Meditation practices',
      'Breathwork techniques',
      'Mobility training',
      'Stress reduction',
      'Mind-body connection',
    ],
  },
  {
    title: 'CrossFit Training',
    description: 'Push beyond boundaries with high-intensity functional movements. Build strength, endurance, and agility for peak performance.',
    duration: '6-10 weeks',
    goal: 'Overall Fitness',
    intensity: 'Very High',
    groupSize: '8-12 people',
    image: 'https://images.unsplash.com/photo-1639511205273-7af2f8805d10?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcm9zc2ZpdCUyMGtldHRsZWJlbGwlMjB0cmFpbmluZ3xlbnwxfHx8fDE3NzE0ODgzMzJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    icon: Flame,
    features: [
      'Functional movements',
      'Olympic lifting',
      'Metabolic conditioning',
      'Gymnastics skills',
      'Competition preparation',
      'Community support',
    ],
  },
  {
    title: 'HIIT Bootcamp',
    description: 'Intense bootcamp-style training combining cardio and strength for maximum results. For those who thrive under pressure.',
    duration: '4-6 weeks',
    goal: 'Fat Loss & Conditioning',
    intensity: 'Very High',
    groupSize: '15-20 people',
    image: 'https://images.unsplash.com/photo-1666979290238-2d862b573345?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxneW0lMjBmaXRuZXNzJTIwd29ya291dCUyMGludGVuc2V8ZW58MXx8fHwxNzcxNDMwNDYwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    icon: Flame,
    features: [
      'Circuit training',
      'Bodyweight exercises',
      'Partner workouts',
      'Tabata intervals',
      'Core strengthening',
      'Agility drills',
    ],
  },
  {
    title: 'Personal Training',
    description: 'Bespoke one-on-one sessions tailored exclusively to your aspirations, fitness level, and schedule. The ultimate private experience.',
    duration: 'Ongoing',
    goal: 'Custom Goals',
    intensity: 'Variable',
    groupSize: '1-on-1',
    image: 'https://images.unsplash.com/photo-1540205453279-389ebbc43b5b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb25hbCUyMHRyYWluZXIlMjBjb2FjaGluZ3xlbnwxfHx8fDE3NzEzOTIxNzZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    icon: Target,
    features: [
      'Customized programming',
      'Flexible scheduling',
      'Progress tracking',
      'Form correction',
      'Accountability coaching',
      'Nutrition planning',
    ],
  },
];

function getIntensityStyle(intensity: string) {
  switch (intensity) {
    case 'Very High':
      return 'border-red-400/40 text-red-400';
    case 'High':
      return 'border-orange-400/40 text-orange-400';
    case 'Low to Medium':
      return 'border-emerald-400/40 text-emerald-400';
    default:
      return 'border-[#C9A96E]/40 text-[#C9A96E]';
  }
}

export function ProgramsPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#C9A96E]/5 via-transparent to-transparent" />
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#C9A96E]/3 rounded-full blur-[300px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-5 py-2.5 border border-[#C9A96E]/20">
              <span className="text-xs font-['Inter'] font-light tracking-[0.2em] uppercase text-[#C9A96E]">
                All Programs
              </span>
            </div>
            <h1 className="font-['Playfair_Display'] font-bold text-5xl sm:text-6xl lg:text-7xl text-[#F5F0EB]">
              Find Your <span className="text-[#C9A96E] italic">Perfect</span> Program
            </h1>
            <p className="text-lg text-[#8A8A8A] font-['Inter'] font-light max-w-3xl mx-auto">
              Whether you're beginning your journey or pushing elite boundaries, our expertly crafted programs will guide you to extraordinary results
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {programsData.map((program, index) => {
              const Icon = program.icon;
              return (
                <motion.div
                  key={program.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="relative h-full bg-[#111111] overflow-hidden border border-[#C9A96E]/10 hover:border-[#C9A96E]/25 transition-all duration-700">
                    <div className="relative h-64 overflow-hidden">
                      <motion.img
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        src={program.image}
                        alt={program.title}
                        className="w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-opacity duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/40 to-transparent" />

                      <div className="absolute top-6 left-6">
                        <div className="w-12 h-12 bg-[#111111]/80 backdrop-blur-sm border border-[#C9A96E]/30 flex items-center justify-center">
                          <Icon className="w-5 h-5 text-[#C9A96E]" />
                        </div>
                      </div>

                      <div className="absolute top-6 right-6">
                        <div className={`px-3 py-1 border ${getIntensityStyle(program.intensity)} text-xs font-['Inter'] tracking-wider uppercase bg-[#111111]/60 backdrop-blur-sm`}>
                          {program.intensity}
                        </div>
                      </div>
                    </div>

                    <div className="p-8 space-y-6">
                      <div className="space-y-3">
                        <h3 className="font-['Playfair_Display'] font-bold text-2xl text-[#F5F0EB]">
                          {program.title}
                        </h3>
                        <p className="text-[#8A8A8A] font-['Inter'] font-light leading-relaxed text-sm">
                          {program.description}
                        </p>
                      </div>

                      <div className="grid grid-cols-3 gap-3">
                        <div className="text-center p-3 border border-[#C9A96E]/10">
                          <Clock className="w-4 h-4 text-[#C9A96E] mx-auto mb-1.5" />
                          <div className="text-[10px] text-[#8A8A8A] font-['Inter'] tracking-wider uppercase mb-0.5">Duration</div>
                          <div className="font-['Inter'] font-medium text-xs text-[#F5F0EB]">{program.duration}</div>
                        </div>
                        <div className="text-center p-3 border border-[#C9A96E]/10">
                          <Target className="w-4 h-4 text-[#C9A96E] mx-auto mb-1.5" />
                          <div className="text-[10px] text-[#8A8A8A] font-['Inter'] tracking-wider uppercase mb-0.5">Goal</div>
                          <div className="font-['Inter'] font-medium text-xs text-[#F5F0EB]">{program.goal}</div>
                        </div>
                        <div className="text-center p-3 border border-[#C9A96E]/10">
                          <Users className="w-4 h-4 text-[#C9A96E] mx-auto mb-1.5" />
                          <div className="text-[10px] text-[#8A8A8A] font-['Inter'] tracking-wider uppercase mb-0.5">Group</div>
                          <div className="font-['Inter'] font-medium text-xs text-[#F5F0EB]">{program.groupSize}</div>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <div className="flex items-center gap-2">
                          <TrendingUp className="w-4 h-4 text-[#C9A96E]" />
                          <span className="font-['Poppins'] font-semibold text-sm text-[#F5F0EB] tracking-wide">What's Included</span>
                        </div>
                        <ul className="grid grid-cols-2 gap-2">
                          {program.features.map((feature, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <div className="w-4 h-4 border border-[#C9A96E]/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                                <span className="text-[#C9A96E] text-[8px]">✓</span>
                              </div>
                              <span className="text-xs text-[#8A8A8A] font-['Inter'] font-light">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <motion.button
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.99 }}
                        className="w-full py-4 bg-[#C9A96E] text-[#0A0A0A] font-['Inter'] font-semibold text-sm tracking-wider uppercase hover:bg-[#D4B896] transition-all duration-500 flex items-center justify-center gap-2"
                      >
                        Join This Program
                        <ArrowUpRight className="w-4 h-4" />
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#C9A96E]/8 via-transparent to-[#C9A96E]/5" />
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#C9A96E]/20 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#C9A96E]/20 to-transparent" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="font-['Playfair_Display'] font-bold text-4xl sm:text-5xl text-[#F5F0EB]">
              Not Sure Which Program <span className="text-[#C9A96E] italic">Suits You?</span>
            </h2>
            <p className="text-lg text-[#8A8A8A] font-['Inter'] font-light max-w-2xl mx-auto">
              Schedule a complimentary consultation with one of our expert trainers and discover the perfect program for your goals
            </p>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-10 py-5 bg-[#C9A96E] text-[#0A0A0A] font-['Inter'] font-semibold text-sm tracking-wider uppercase hover:bg-[#D4B896] transition-all duration-500"
            >
              Book Free Consultation
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
