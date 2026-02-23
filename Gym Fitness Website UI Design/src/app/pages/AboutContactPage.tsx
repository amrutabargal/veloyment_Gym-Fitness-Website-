import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Award, Users, Target, Send, Dumbbell, Activity, Heart, Flame, Sparkles, Coffee } from 'lucide-react';
import { useState } from 'react';

const facilities = [
  {
    title: 'Weight Training Area',
    description: 'State-of-the-art equipment including free weights, machines, and power racks',
    icon: Dumbbell,
  },
  {
    title: 'Cardio Zone',
    description: 'Premium treadmills, ellipticals, rowing machines with personal displays',
    icon: Activity,
  },
  {
    title: 'Yoga Studio',
    description: 'Serene studio space with professional mats and props for all levels',
    icon: Heart,
  },
  {
    title: 'CrossFit Arena',
    description: 'Dedicated space for functional fitness with Olympic platforms',
    icon: Flame,
  },
  {
    title: 'Spa & Recovery',
    description: 'Premium facilities with saunas, steam rooms, and cold plunge pools',
    icon: Sparkles,
  },
  {
    title: 'Nutrition Bar',
    description: 'Artisanal smoothies, premium protein blends, and organic snacks',
    icon: Coffee,
  },
];

const stats = [
  { value: '15K+', label: 'Active Members', icon: Users },
  { value: '50+', label: 'Elite Trainers', icon: Award },
  { value: '10+', label: 'Years Excellence', icon: Target },
  { value: '98%', label: 'Success Rate', icon: Award },
];

export function AboutContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#C9A96E]/5 via-transparent to-transparent" />
        <div className="absolute top-0 left-1/3 w-[600px] h-[600px] bg-[#C9A96E]/3 rounded-full blur-[300px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-5 py-2.5 border border-[#C9A96E]/20">
              <span className="text-xs font-['Inter'] font-light tracking-[0.2em] uppercase text-[#C9A96E]">
                About Us
              </span>
            </div>
            <h1 className="font-['Playfair_Display'] font-bold text-5xl sm:text-6xl lg:text-7xl text-[#F5F0EB]">
              Welcome to <span className="text-[#C9A96E] italic">Élite</span>
            </h1>
            <p className="text-lg text-[#8A8A8A] font-['Inter'] font-light max-w-3xl mx-auto leading-relaxed">
              Your premier fitness sanctuary where transformation meets luxury.
              We are devoted to helping you achieve extraordinary results in an environment
              that inspires excellence.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="bg-[#111111] border border-[#C9A96E]/10 hover:border-[#C9A96E]/25 transition-all duration-500 p-8 text-center">
                    <div className="w-14 h-14 border border-[#C9A96E]/30 flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-6 h-6 text-[#C9A96E]" />
                    </div>
                    <div className="font-['Playfair_Display'] font-bold text-3xl sm:text-4xl text-[#C9A96E] mb-2">
                      {stat.value}
                    </div>
                    <div className="text-xs text-[#8A8A8A] font-['Inter'] font-light tracking-wider uppercase">{stat.label}</div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-28 bg-[#0D0D0D] relative">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#C9A96E]/20 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-5 py-2.5 border border-[#C9A96E]/20">
              <span className="text-xs font-['Inter'] font-light tracking-[0.2em] uppercase text-[#C9A96E]">
                Our Facilities
              </span>
            </div>
            <h2 className="font-['Playfair_Display'] font-bold text-4xl sm:text-5xl text-[#F5F0EB]">
              World-Class <span className="text-[#C9A96E] italic">Facilities</span>
            </h2>
            <p className="text-lg text-[#8A8A8A] font-['Inter'] font-light max-w-2xl mx-auto">
              Everything you need to achieve your fitness aspirations under one roof
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {facilities.map((facility, index) => {
              const Icon = facility.icon;
              return (
                <motion.div
                  key={facility.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="bg-[#111111] border border-[#C9A96E]/10 hover:border-[#C9A96E]/25 transition-all duration-500 p-8 h-full">
                    <div className="w-12 h-12 border border-[#C9A96E]/30 flex items-center justify-center mb-5">
                      <Icon className="w-5 h-5 text-[#C9A96E]" />
                    </div>
                    <h3 className="font-['Poppins'] font-semibold text-lg text-[#F5F0EB] mb-3 tracking-wide">
                      {facility.title}
                    </h3>
                    <p className="text-[#8A8A8A] font-['Inter'] font-light leading-relaxed text-sm">
                      {facility.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative overflow-hidden border border-[#C9A96E]/10"
          >
            <img
              src="https://images.unsplash.com/photo-1761971975769-97e598bf526b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBneW0lMjBpbnRlcmlvcnxlbnwxfHx8fDE3NzEzNzUzNDh8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Modern gym interior"
              className="w-full h-[500px] object-cover opacity-70"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-[#0A0A0A]/40" />
          </motion.div>
        </div>
      </section>

      <section className="py-28 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-[#111111] border border-[#C9A96E]/10 p-8 lg:p-10 h-full">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 border border-[#C9A96E]/30 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-[#C9A96E]" />
                  </div>
                  <h3 className="font-['Playfair_Display'] font-bold text-2xl text-[#F5F0EB]">
                    Opening Hours
                  </h3>
                </div>
                <div className="space-y-4">
                  {[
                    { day: 'Monday — Friday', time: '5:00 AM — 11:00 PM' },
                    { day: 'Saturday', time: '6:00 AM — 10:00 PM' },
                    { day: 'Sunday', time: '7:00 AM — 9:00 PM' },
                    { day: 'Holidays', time: '8:00 AM — 6:00 PM' },
                  ].map((schedule) => (
                    <div key={schedule.day} className="flex justify-between items-center py-3 border-b border-[#C9A96E]/10 last:border-0">
                      <span className="font-['Inter'] font-light text-[#B0B0B0] text-sm">{schedule.day}</span>
                      <span className="font-['Inter'] font-medium text-[#C9A96E] text-sm">{schedule.time}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8 p-4 border border-[#C9A96E]/20 bg-[#C9A96E]/5">
                  <p className="text-sm font-['Inter'] font-light text-[#B0B0B0]">
                    <span className="text-[#C9A96E] font-medium">24/7 Access</span> available for Élite members
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-[#111111] border border-[#C9A96E]/10 p-8 lg:p-10 h-full">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 border border-[#C9A96E]/30 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-[#C9A96E]" />
                  </div>
                  <h3 className="font-['Playfair_Display'] font-bold text-2xl text-[#F5F0EB]">
                    Location & Contact
                  </h3>
                </div>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-5 h-5 text-[#C9A96E]/60 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-['Inter'] font-medium text-[#F5F0EB] text-sm mb-1">Address</div>
                      <div className="font-['Inter'] font-light text-[#8A8A8A] text-sm leading-relaxed">
                        123 Fitness Street<br />
                        New York, NY 10001<br />
                        United States
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone className="w-5 h-5 text-[#C9A96E]/60 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-['Inter'] font-medium text-[#F5F0EB] text-sm mb-1">Phone</div>
                      <a href="tel:5551234567" className="font-['Inter'] font-light text-[#8A8A8A] text-sm hover:text-[#C9A96E] transition-colors duration-300">
                        (555) 123-4567
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail className="w-5 h-5 text-[#C9A96E]/60 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-['Inter'] font-medium text-[#F5F0EB] text-sm mb-1">Email</div>
                      <a href="mailto:hello@elitefitness.com" className="font-['Inter'] font-light text-[#8A8A8A] text-sm hover:text-[#C9A96E] transition-colors duration-300">
                        hello@elitefitness.com
                      </a>
                    </div>
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  className="w-full mt-8 py-4 bg-[#C9A96E] text-[#0A0A0A] font-['Inter'] font-semibold text-sm tracking-wider uppercase hover:bg-[#D4B896] transition-all duration-500"
                >
                  Get Directions
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-28 bg-[#0D0D0D] relative">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#C9A96E]/20 to-transparent" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-5 py-2.5 border border-[#C9A96E]/20">
              <span className="text-xs font-['Inter'] font-light tracking-[0.2em] uppercase text-[#C9A96E]">
                Get In Touch
              </span>
            </div>
            <h2 className="font-['Playfair_Display'] font-bold text-4xl sm:text-5xl text-[#F5F0EB]">
              Send Us a <span className="text-[#C9A96E] italic">Message</span>
            </h2>
            <p className="text-lg text-[#8A8A8A] font-['Inter'] font-light">
              Have questions? We'd love to hear from you.
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            onSubmit={handleSubmit}
            className="bg-[#111111] border border-[#C9A96E]/10 p-8 lg:p-10"
          >
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-[#F5F0EB] font-['Inter'] font-light text-sm mb-2 tracking-wider uppercase">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3.5 bg-[#0A0A0A] border border-[#C9A96E]/15 text-[#F5F0EB] focus:outline-none focus:border-[#C9A96E]/50 transition-all duration-300 font-['Inter'] font-light text-sm placeholder:text-[#5A5A5A]"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-[#F5F0EB] font-['Inter'] font-light text-sm mb-2 tracking-wider uppercase">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3.5 bg-[#0A0A0A] border border-[#C9A96E]/15 text-[#F5F0EB] focus:outline-none focus:border-[#C9A96E]/50 transition-all duration-300 font-['Inter'] font-light text-sm placeholder:text-[#5A5A5A]"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            <div className="mb-6">
              <label htmlFor="phone" className="block text-[#F5F0EB] font-['Inter'] font-light text-sm mb-2 tracking-wider uppercase">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3.5 bg-[#0A0A0A] border border-[#C9A96E]/15 text-[#F5F0EB] focus:outline-none focus:border-[#C9A96E]/50 transition-all duration-300 font-['Inter'] font-light text-sm placeholder:text-[#5A5A5A]"
                placeholder="(555) 123-4567"
              />
            </div>
            <div className="mb-8">
              <label htmlFor="message" className="block text-[#F5F0EB] font-['Inter'] font-light text-sm mb-2 tracking-wider uppercase">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3.5 bg-[#0A0A0A] border border-[#C9A96E]/15 text-[#F5F0EB] focus:outline-none focus:border-[#C9A96E]/50 transition-all duration-300 font-['Inter'] font-light text-sm resize-none placeholder:text-[#5A5A5A]"
                placeholder="Tell us how we can assist you..."
              />
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              className="w-full py-4 bg-[#C9A96E] text-[#0A0A0A] font-['Inter'] font-semibold text-sm tracking-wider uppercase hover:bg-[#D4B896] transition-all duration-500 flex items-center justify-center gap-3"
            >
              Send Message
              <Send className="w-4 h-4" />
            </motion.button>
          </motion.form>
        </div>
      </section>
    </div>
  );
}
