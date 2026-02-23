import { motion } from 'motion/react';
import { Check, Crown, Zap, Diamond } from 'lucide-react';
import { useState } from 'react';

const plans = [
  {
    name: 'Essential',
    price: '$29',
    period: '/month',
    description: 'Begin your transformation',
    icon: Zap,
    features: [
      'Access to gym equipment',
      'Locker room & showers',
      'Free fitness assessment',
      '2 group classes per week',
    ],
    popular: false,
  },
  {
    name: 'Prestige',
    price: '$59',
    period: '/month',
    description: 'Our most sought-after plan',
    icon: Crown,
    features: [
      'All Essential features',
      'Unlimited group classes',
      '2 personal training sessions',
      'Nutrition guidance',
      'Mobile app access',
      'Guest passes (2/month)',
    ],
    popular: true,
  },
  {
    name: 'Élite',
    price: '$99',
    period: '/month',
    description: 'The ultimate experience',
    icon: Diamond,
    features: [
      'All Prestige features',
      'Unlimited personal training',
      'Custom meal planning',
      'Recovery & spa access',
      'Priority booking',
      '24/7 private access',
      'Supplement program',
    ],
    popular: false,
  },
];

export function MembershipPlans() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-28 bg-[#0A0A0A] relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #C9A96E 0.5px, transparent 0)',
          backgroundSize: '60px 60px',
        }} />
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#C9A96E]/3 rounded-full blur-[300px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20 space-y-6"
        >
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-5 py-2.5 border border-[#C9A96E]/20 rounded-none"
          >
            <span className="text-xs font-['Inter'] font-light tracking-[0.2em] uppercase text-[#C9A96E]">
              Membership Plans
            </span>
          </motion.div>
          <h2 className="font-['Playfair_Display'] font-bold text-4xl sm:text-5xl lg:text-6xl text-[#F5F0EB]">
            Choose Your <span className="text-[#C9A96E] italic">Path</span>
          </h2>
          <p className="text-lg text-[#8A8A8A] font-['Inter'] font-light max-w-2xl mx-auto">
            Flexible membership options crafted to match your ambitions and lifestyle
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            const isHovered = hoveredIndex === index;
            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                className="relative"
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                    <div className="px-5 py-1.5 bg-[#C9A96E] text-[#0A0A0A] text-xs font-['Inter'] font-semibold tracking-wider uppercase">
                      Most Popular
                    </div>
                  </div>
                )}

                <motion.div
                  animate={{
                    y: isHovered ? -8 : 0,
                  }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className={`relative h-full bg-[#111111] p-8 lg:p-10 transition-all duration-500 border ${
                    plan.popular
                      ? 'border-[#C9A96E]/40'
                      : 'border-[#C9A96E]/10 hover:border-[#C9A96E]/30'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute inset-0 bg-gradient-to-b from-[#C9A96E]/5 to-transparent pointer-events-none" />
                  )}

                  <div className="relative z-10">
                    <div className="w-14 h-14 border border-[#C9A96E]/30 flex items-center justify-center mb-8">
                      <Icon className="w-6 h-6 text-[#C9A96E]" />
                    </div>

                    <div className="mb-8">
                      <h3 className="font-['Poppins'] font-semibold text-xl text-[#F5F0EB] mb-2 tracking-wide">
                        {plan.name}
                      </h3>
                      <p className="text-[#8A8A8A] font-['Inter'] text-sm font-light mb-6">
                        {plan.description}
                      </p>
                      <div className="flex items-baseline gap-1">
                        <span className="font-['Playfair_Display'] font-bold text-5xl text-[#C9A96E]">
                          {plan.price}
                        </span>
                        <span className="text-[#8A8A8A] font-['Inter'] text-sm">{plan.period}</span>
                      </div>
                    </div>

                    <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#C9A96E]/20 to-transparent mb-8" />

                    <div className="space-y-4 mb-10">
                      {plan.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <div className="w-5 h-5 border border-[#C9A96E]/40 flex items-center justify-center flex-shrink-0">
                            <Check className="w-3 h-3 text-[#C9A96E]" />
                          </div>
                          <span className="text-[#B0B0B0] font-['Inter'] text-sm font-light">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                      className={`w-full py-4 font-['Inter'] font-medium text-sm tracking-wider uppercase transition-all duration-500 ${
                        plan.popular
                          ? 'bg-[#C9A96E] text-[#0A0A0A] hover:bg-[#D4B896]'
                          : 'bg-transparent text-[#C9A96E] border border-[#C9A96E]/40 hover:bg-[#C9A96E] hover:text-[#0A0A0A]'
                      }`}
                    >
                      Get Started
                    </motion.button>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16"
        >
          <p className="text-[#8A8A8A] font-['Inter'] font-light text-sm">
            All plans include a <span className="text-[#C9A96E]">30-day money-back guarantee</span> · No setup fees · Cancel anytime
          </p>
        </motion.div>
      </div>
    </section>
  );
}
