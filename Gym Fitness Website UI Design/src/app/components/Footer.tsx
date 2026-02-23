import { motion } from 'motion/react';
import { MapPin, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  const footerLinks = {
    company: [
      { label: 'About Us', to: '/about' },
      { label: 'Our Team', to: '/about' },
      { label: 'Careers', to: '#' },
      { label: 'Contact', to: '/about' },
    ],
    programs: [
      { label: 'Weight Training', to: '/programs' },
      { label: 'Cardio Training', to: '/programs' },
      { label: 'Yoga Classes', to: '/programs' },
      { label: 'CrossFit', to: '/programs' },
    ],
    support: [
      { label: 'Help Center', to: '#' },
      { label: 'FAQs', to: '#' },
      { label: 'Privacy Policy', to: '#' },
      { label: 'Terms of Service', to: '#' },
    ],
  };

  const socialLinks = [
    { label: 'FB', href: '#' },
    { label: 'IG', href: '#' },
    { label: 'TW', href: '#' },
    { label: 'YT', href: '#' },
  ];

  return (
    <footer className="bg-[#080808] text-[#F5F0EB] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#C9A96E]/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          <div className="lg:col-span-2 space-y-8">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 border-2 border-[#C9A96E] flex items-center justify-center">
                <span className="font-['Playfair_Display'] font-bold text-[#C9A96E] text-lg">É</span>
              </div>
              <div className="flex flex-col">
                <span className="font-['Playfair_Display'] font-bold text-xl text-[#F5F0EB] tracking-wide">
                  ÉLITE
                </span>
                <span className="font-['Inter'] text-[10px] tracking-[0.3em] uppercase text-[#C9A96E]">
                  Fitness Club
                </span>
              </div>
            </Link>

            <p className="text-[#8A8A8A] font-['Inter'] font-light leading-relaxed max-w-sm">
              Where excellence meets transformation. Experience world-class fitness
              in an environment designed for those who demand the extraordinary.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-[#8A8A8A] hover:text-[#C9A96E] transition-colors duration-300">
                <MapPin className="w-4 h-4 text-[#C9A96E]/60" />
                <span className="font-['Inter'] text-sm font-light">123 Fitness Street, New York, NY 10001</span>
              </div>
              <div className="flex items-center gap-3 text-[#8A8A8A] hover:text-[#C9A96E] transition-colors duration-300">
                <Phone className="w-4 h-4 text-[#C9A96E]/60" />
                <span className="font-['Inter'] text-sm font-light">(555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-[#8A8A8A] hover:text-[#C9A96E] transition-colors duration-300">
                <Mail className="w-4 h-4 text-[#C9A96E]/60" />
                <span className="font-['Inter'] text-sm font-light">hello@elitefitness.com</span>
              </div>
            </div>

            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ y: -2 }}
                  className="w-10 h-10 border border-[#C9A96E]/20 flex items-center justify-center text-[#8A8A8A] hover:text-[#C9A96E] hover:border-[#C9A96E]/40 transition-all duration-300"
                >
                  <span className="font-['Inter'] text-xs font-medium tracking-wider">{social.label}</span>
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-['Poppins'] font-semibold text-sm tracking-wider uppercase text-[#F5F0EB] mb-6">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-[#8A8A8A] hover:text-[#C9A96E] font-['Inter'] font-light text-sm transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-['Poppins'] font-semibold text-sm tracking-wider uppercase text-[#F5F0EB] mb-6">Programs</h4>
            <ul className="space-y-3">
              {footerLinks.programs.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-[#8A8A8A] hover:text-[#C9A96E] font-['Inter'] font-light text-sm transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-['Poppins'] font-semibold text-sm tracking-wider uppercase text-[#F5F0EB] mb-6">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-[#8A8A8A] hover:text-[#C9A96E] font-['Inter'] font-light text-sm transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-[#C9A96E]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#5A5A5A] font-['Inter'] text-xs font-light tracking-wider">
              © 2026 Élite Fitness Club. All rights reserved.
            </p>
            <div className="flex gap-8 text-[#5A5A5A] font-['Inter'] text-xs font-light">
              <Link to="#" className="hover:text-[#C9A96E] transition-colors duration-300">Privacy</Link>
              <Link to="#" className="hover:text-[#C9A96E] transition-colors duration-300">Terms</Link>
              <Link to="#" className="hover:text-[#C9A96E] transition-colors duration-300">Cookies</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
