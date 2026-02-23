import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';

export function Navigation() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/programs', label: 'Programs' },
    { to: '/about', label: 'About & Contact' },
  ];

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-500 ${
      scrolled
        ? 'bg-[#0A0A0A]/95 backdrop-blur-xl border-b border-[#C9A96E]/10 shadow-lg shadow-black/20'
        : 'bg-transparent border-b border-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center gap-3 group">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="relative"
            >
              <div className="w-10 h-10 border-2 border-[#C9A96E] rounded-lg flex items-center justify-center group-hover:bg-[#C9A96E]/10 transition-colors duration-300">
                <span className="font-['Playfair_Display'] font-bold text-[#C9A96E] text-lg">É</span>
              </div>
            </motion.div>
            <div className="flex flex-col">
              <span className="font-['Playfair_Display'] font-bold text-xl text-[#F5F0EB] tracking-wide">
                ÉLITE
              </span>
              <span className="font-['Inter'] text-[10px] tracking-[0.3em] uppercase text-[#C9A96E]">
                Fitness Club
              </span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="relative px-5 py-2 rounded-lg transition-colors"
              >
                <span className={`font-['Inter'] font-light tracking-wide text-sm uppercase ${
                  location.pathname === link.to
                    ? 'text-[#C9A96E]'
                    : 'text-[#8A8A8A] hover:text-[#F5F0EB]'
                } transition-colors duration-300`}>
                  {link.label}
                </span>
                {location.pathname === link.to && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute bottom-0 left-5 right-5 h-[1px] bg-gradient-to-r from-transparent via-[#C9A96E] to-transparent"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="hidden md:block px-7 py-2.5 bg-transparent text-[#C9A96E] font-['Inter'] font-medium text-sm tracking-wider uppercase border border-[#C9A96E]/50 hover:bg-[#C9A96E] hover:text-[#0A0A0A] transition-all duration-500 rounded-none"
          >
            Join Now
          </motion.button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#C9A96E]"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-[#C9A96E]/10 bg-[#0A0A0A]/98 backdrop-blur-xl"
          >
            <div className="px-6 py-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-3 transition-colors font-['Inter'] font-light tracking-wider text-sm uppercase ${
                    location.pathname === link.to
                      ? 'text-[#C9A96E] border-l-2 border-[#C9A96E]'
                      : 'text-[#8A8A8A] hover:text-[#F5F0EB] border-l-2 border-transparent'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4">
                <button className="w-full px-4 py-3 border border-[#C9A96E]/50 text-[#C9A96E] font-['Inter'] font-medium text-sm tracking-wider uppercase hover:bg-[#C9A96E] hover:text-[#0A0A0A] transition-all duration-500">
                  Join Now
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
