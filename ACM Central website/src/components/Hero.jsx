import { motion } from 'framer-motion';
import { FiChevronDown, FiActivity, FiArrowRight } from 'react-icons/fi';
import { useState, useEffect } from 'react';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Calculate normalized mouse coords (-0.5 to 0.5)
      setMousePosition({
        x: (e.clientX / window.innerWidth) - 0.5,
        y: (e.clientY / window.innerHeight) - 0.5,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="home" className="relative w-full min-h-screen flex flex-col justify-between items-center overflow-hidden pt-28 pb-12">
      {/* Background Gradient Mesh & Overlays */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] bg-gradient-to-r from-acm-blue/10 via-acm-cyan/5 to-purple-500/10 blur-[140px] rounded-full" />
      </div>

      {/* Interactive Parallax Background Blobs */}
      <motion.div
        style={{
          x: mousePosition.x * -45,
          y: mousePosition.y * -45,
        }}
        className="absolute top-[20%] right-[12%] w-72 h-72 rounded-full bg-gradient-to-br from-acm-blue/15 to-acm-cyan/15 blur-3xl -z-10 pointer-events-none"
      />
      <motion.div
        style={{
          x: mousePosition.x * 55,
          y: mousePosition.y * 55,
        }}
        className="absolute bottom-[20%] left-[8%] w-80 h-80 rounded-full bg-gradient-to-tr from-purple-500/10 to-acm-blue/10 blur-3xl -z-10 pointer-events-none"
      />

      <div /> {/* Top flex spacer */}

      {/* Main content container */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 sm:px-8 flex flex-col items-center justify-center text-center my-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center justify-center text-center"
        >
          {/* Animated Tech Tagline */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-acm-blue/30 bg-acm-blue/5 backdrop-blur-md mb-6"
          >
            <FiActivity className="text-acm-cyan w-3.5 h-3.5 animate-pulse" />
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-acm-cyan">
              INNOVATION • COMMUNITY • TECHNOLOGY
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.div variants={itemVariants} className="space-y-1 sm:space-y-3 mb-6 sm:mb-8">
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tight text-white leading-[1.05]">
              ACM STUDENT CHAPTER
            </h1>
            <h2 className="text-3xl sm:text-5xl md:text-7xl font-bold tracking-tight bg-gradient-to-r from-acm-blue via-acm-cyan to-purple-400 bg-clip-text text-transparent drop-shadow-[0_2px_15px_rgba(0,169,244,0.15)]">
              Amritapuri
            </h2>
          </motion.div>

          {/* Subtitle description */}
          <motion.p
            variants={itemVariants}
            className="text-sm sm:text-base md:text-lg text-white/60 max-w-2xl mb-8 sm:mb-10 leading-relaxed font-medium"
          >
            World's largest educational and scientific computing society at Amrita Vishwa Vidyapeetham, empowering students to shape the next era of technology.
          </motion.p>

          {/* High-fidelity CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full sm:w-auto"
          >
            {/* Primary explore btn with shimmer border */}
            <motion.a
              href="#sigs"
              whileHover={{ scale: 1.04, boxShadow: '0 0 25px rgba(0, 217, 255, 0.4)' }}
              whileTap={{ scale: 0.96 }}
              className="group relative w-full sm:w-auto px-8 py-3.5 bg-white text-black font-extrabold rounded-full text-sm sm:text-base overflow-hidden transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.25)] flex items-center justify-center gap-2"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-acm-blue to-acm-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="relative z-10 group-hover:text-black transition-colors flex items-center gap-2">
                Explore Chapters
                <FiArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </span>
            </motion.a>

            {/* Secondary details btn with border sweep */}
            <motion.a
              href="#about-acm"
              whileHover={{ scale: 1.04, borderColor: 'rgba(255, 255, 255, 0.8)' }}
              whileTap={{ scale: 0.96 }}
              className="w-full sm:w-auto px-8 py-3.5 border border-white/20 hover:bg-white/5 text-white font-extrabold rounded-full text-sm sm:text-base backdrop-blur-sm transition-all duration-300 flex items-center justify-center"
            >
              Learn More
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Responsive scroll indicator placed properly in DOM flow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="w-full flex flex-col items-center justify-center z-10 pointer-events-none mt-6 sm:mt-10"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] sm:text-xs text-white/40 uppercase tracking-[0.2em] font-semibold">
            Scroll to discover
          </span>
          <motion.div
            animate={{
              y: [0, 8, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="flex items-center justify-center w-8 h-8 rounded-full border border-white/10 bg-white/5 backdrop-blur-md"
          >
            <FiChevronDown className="text-acm-cyan w-4 h-4" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
