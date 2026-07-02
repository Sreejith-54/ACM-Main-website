import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState('Home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About ACM', href: '#about-acm' },
    { name: 'SIGs', href: '#sigs' },
    { name: 'SIG Portal', href: '#sig-portal' },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed z-50 transition-all duration-500 ${
        isScrolled
          ? 'top-4 left-1/2 -translate-x-1/2 w-[92%] sm:w-[85%] max-w-5xl rounded-full bg-black/60 border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.4)] backdrop-blur-xl px-6 py-2.5'
          : 'top-0 left-0 right-0 w-full bg-transparent border-b border-transparent px-8 py-6'
      }`}
    >
      <div className="flex items-center justify-between mx-auto w-full">
        {/* Logo Section */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2.5 cursor-pointer group"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            setActiveItem('Home');
          }}
        >
          <div className="relative w-9 h-9 bg-gradient-to-br from-acm-blue via-acm-electric to-acm-cyan rounded-xl flex items-center justify-center text-white font-black text-lg overflow-hidden shadow-[0_0_15px_rgba(0,169,244,0.3)] group-hover:shadow-[0_0_25px_rgba(0,217,255,0.6)] transition-all">
            <span className="relative z-10">A</span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </div>
          <span className="font-extrabold text-white text-sm tracking-wider uppercase bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent group-hover:from-acm-blue group-hover:to-acm-cyan transition-all">
            ACM Chapter
          </span>
        </motion.div>

        {/* Navigation Items (Desktop) */}
        <div className="hidden md:flex items-center gap-2">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setActiveItem(item.name)}
              className="relative px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white/75 hover:text-white transition-colors duration-300"
            >
              <span className="relative z-10">{item.name}</span>
              {activeItem === item.name && (
                <motion.span
                  layoutId="activeNavBackground"
                  className="absolute inset-0 bg-white/10 rounded-full border border-white/5"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </a>
          ))}
        </div>

        {/* Explore / CTA Button */}
        <motion.a
          href="#sigs"
          whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(0, 169, 244, 0.4)' }}
          whileTap={{ scale: 0.95 }}
          className="relative inline-flex items-center justify-center px-5 py-2.5 sm:px-6 sm:py-2 text-xs font-bold uppercase tracking-wider text-black bg-gradient-to-r from-acm-blue to-acm-cyan rounded-full cursor-pointer hover:shadow-glow-cyan overflow-hidden transition-all duration-300"
        >
          <span className="relative z-10 flex items-center gap-1.5">
            Explore 
            <svg className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </span>
        </motion.a>
      </div>
    </motion.nav>
  );
};

export default Navbar;
