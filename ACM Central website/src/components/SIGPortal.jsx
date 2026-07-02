import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiCpu, FiCode, FiShield, FiStar, FiChevronRight } from 'react-icons/fi';
import { useState, useEffect } from 'react';

const SIGPortal = () => {
  const { ref, inView } = useInView({
    threshold: 0.15,
    triggerOnce: true,
  });

  const [hoveredSig, setHoveredSig] = useState(null);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const sigs = [
    {
      title: 'AI',
      fullName: 'Artificial Intelligence',
      icon: FiCpu,
      color: 'from-purple-500 to-pink-500',
      rgb: '168, 85, 247',
      tech: 'PyTorch • Transformers • Agentic AI • OpenCV',
      description: 'Building deep neural systems and large language agents that sense, adapt, and reason.',
    },
    {
      title: 'Web & App Dev',
      fullName: 'Web & App Dev',
      icon: FiCode,
      color: 'from-blue-500 to-cyan-500',
      rgb: '59, 130, 246',
      tech: 'React • Next.js • Flutter • GraphQL • AWS',
      description: 'Designing distributed applications, responsive user interfaces, and high-performance server grids.',
    },
    {
      title: 'Cyber Security',
      fullName: 'Cyber Security',
      icon: FiShield,
      color: 'from-red-500 to-orange-500',
      rgb: '239, 68, 68',
      tech: 'Metasploit • Reverse Engineering • CTFs • Cryptography',
      description: 'Analyzing security vulnerabilities, reverse-engineering protocols, and strengthening defense networks.',
    },
    {
      title: 'Glitch',
      fullName: 'Glitch Creative',
      icon: FiStar,
      color: 'from-emerald-500 to-green-500',
      rgb: '16, 185, 129',
      tech: 'WebGL • Three.js • Canvas Shaders • Indie Games',
      description: 'Pioneering procedural game environments, dynamic interactive shaders, and innovative UI models.',
    },
  ];

  // Dynamic radius based on viewport
  const radius = windowWidth < 640 ? 110 : windowWidth < 1024 ? 160 : 200;

  const getPosition = (index) => {
    const angle = (index / sigs.length) * Math.PI * 2 - Math.PI / 2; // Offset by -90 deg to start top
    return {
      x: Math.cos(angle) * radius,
      y: Math.sin(angle) * radius,
    };
  };

  const getActiveGlowStyle = () => {
    if (hoveredSig === null) {
      return 'from-acm-blue/30 via-acm-electric/20 to-acm-cyan/30 shadow-[0_0_50px_rgba(0,169,244,0.35)]';
    }
    const sig = sigs[hoveredSig];
    return `bg-gradient-to-br ${sig.color} opacity-85 shadow-[0_0_70px_rgba(${sig.rgb},0.6)]`;
  };

  return (
    <section id="sig-portal" ref={ref} className="relative w-full py-24 sm:py-36 px-6 sm:px-8 overflow-hidden">
      {/* Dynamic atmospheric ambient glow behind the portal */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[140px] opacity-10 transition-all duration-700 pointer-events-none -z-10"
        style={{
          background: hoveredSig !== null 
            ? `radial-gradient(circle, rgba(${sigs[hoveredSig].rgb}, 0.4) 0%, transparent 70%)`
            : 'radial-gradient(circle, rgba(0, 169, 244, 0.2) 0%, transparent 70%)'
        }}
      />

      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 sm:mb-20 text-center space-y-3"
        >
          <div className="flex items-center justify-center gap-2">
            <span className="w-4 h-[2px] bg-acm-cyan" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-acm-cyan">
              Interactive Matrix
            </span>
            <span className="w-4 h-[2px] bg-acm-cyan" />
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight">
            Explore Our <span className="bg-gradient-to-r from-acm-blue via-acm-cyan to-purple-400 bg-clip-text text-transparent">Portal</span>
          </h2>
          <p className="text-sm sm:text-base text-white/50 max-w-2xl mx-auto leading-relaxed">
            Hover over the orbiting crystal nodes to establish a system link and unlock portal configurations.
          </p>
        </motion.div>

        {/* Visualizer Grid container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left/Center Column: Floating Orbital Portal */}
          <div className="lg:col-span-7 flex items-center justify-center h-[340px] sm:h-[450px] relative">
            
            {/* Center Core Orb (changes colors dynamic on hover) */}
            <motion.div
              animate={{
                scale: hoveredSig !== null ? 1.08 : 1,
                rotate: 360,
              }}
              transition={{
                scale: { duration: 0.4 },
                rotate: { duration: 25, repeat: Infinity, ease: 'linear' },
              }}
              className={`absolute w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-gradient-to-br flex items-center justify-center z-10 transition-all duration-500 ${getActiveGlowStyle()}`}
            >
              <div className="w-full h-full rounded-full bg-black/10 flex items-center justify-center backdrop-blur-sm">
                <motion.span 
                  key={hoveredSig}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="font-black text-white text-3xl sm:text-4xl tracking-tighter"
                >
                  {hoveredSig !== null ? sigs[hoveredSig].title[0] : 'A'}
                </motion.span>
              </div>

              {/* Pulsing neon outline */}
              <div className="absolute inset-[-6px] rounded-full border border-white/10 animate-pulse pointer-events-none" />
            </motion.div>

            {/* Orbit paths backdrop */}
            <div className="absolute rounded-full border border-white/5 pointer-events-none" style={{ width: radius * 2, height: radius * 2 }} />
            <div className="absolute rounded-full border border-white/[0.02] border-dashed pointer-events-none" style={{ width: (radius + 40) * 2, height: (radius + 40) * 2 }} />

            {/* Orbiting Crystals */}
            {sigs.map((sig, index) => {
              const Icon = sig.icon;
              const pos = getPosition(index);
              const isHovered = hoveredSig === index;

              return (
                <motion.div
                  key={sig.title}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={inView ? { 
                    opacity: 1, 
                    scale: isHovered ? 1.15 : 1,
                    x: pos.x, 
                    y: pos.y 
                  } : {}}
                  transition={{
                    opacity: { delay: index * 0.1, duration: 0.5 },
                    scale: { duration: 0.3 },
                    x: { type: 'spring', stiffness: 100, damping: 20 },
                    y: { type: 'spring', stiffness: 100, damping: 20 },
                  }}
                  whileHover={{ y: pos.y - 8 }} // Custom shift relative to normal y offset
                  className="absolute"
                  onMouseEnter={() => setHoveredSig(index)}
                  onMouseLeave={() => setHoveredSig(null)}
                >
                  <div className="relative group cursor-pointer">
                    {/* Glowing outer shadow ring */}
                    <div 
                      className={`absolute inset-[-8px] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md bg-gradient-to-br ${sig.color}`}
                    />

                    {/* Crystal core module */}
                    <div className="relative w-14 h-14 sm:w-18 sm:h-18 rounded-2xl bg-white/[0.03] border border-white/10 group-hover:border-white/20 backdrop-blur-md flex items-center justify-center transition-all duration-300">
                      <Icon className={`w-6 h-6 sm:w-7 sm:h-7 text-white/80 group-hover:text-white transition-colors`} />
                      
                      {/* Sub-node corner borders */}
                      <div className={`absolute bottom-0 right-0 w-3 h-3 border-r-2 border-b-2 border-transparent group-hover:border-white/40 transition-all rounded-br-md`} />
                    </div>

                    {/* Small tag next to node */}
                    <div className="absolute top-1/2 -translate-y-1/2 left-full ml-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap bg-black/60 border border-white/10 backdrop-blur-md px-2.5 py-1 rounded-md text-[10px] sm:text-xs font-bold text-white uppercase tracking-wider">
                      {sig.title}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Right Column: Portal Link Terminal Dashboard */}
          <div className="lg:col-span-5 flex flex-col justify-center h-full">
            <div className="relative p-6 sm:p-8 rounded-3xl bg-white/[0.01] border border-white/5 backdrop-blur-lg overflow-hidden min-h-[260px] flex flex-col justify-between">
              
              {/* Background ambient lighting */}
              <div 
                className="absolute inset-0 opacity-[0.02] transition-colors duration-500 -z-10"
                style={{
                  backgroundColor: hoveredSig !== null ? `rgba(${sigs[hoveredSig].rgb}, 0.5)` : 'transparent'
                }}
              />

              <AnimatePresence mode="wait">
                {hoveredSig !== null ? (
                  <motion.div
                    key={hoveredSig}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-5"
                  >
                    {/* Header */}
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-widest text-white/40">
                        System Link Active
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-1">
                        {sigs[hoveredSig].fullName}
                      </h3>
                    </div>

                    {/* Technology Stack */}
                    <div className="space-y-1">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-acm-cyan">
                        Core Architecture
                      </span>
                      <p className="text-xs sm:text-sm font-semibold text-white/80">
                        {sigs[hoveredSig].tech}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-white/60 leading-relaxed">
                      {sigs[hoveredSig].description}
                    </p>

                    {/* Action Link */}
                    <motion.a
                      href={`#sigs`}
                      whileHover={{ x: 6 }}
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-white hover:text-acm-cyan transition-colors pt-2"
                    >
                      Establish Portal Connection
                      <FiChevronRight className="w-4 h-4" />
                    </motion.a>
                  </motion.div>
                ) : (
                  <motion.div
                    key="default"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center justify-center text-center py-10 space-y-4"
                  >
                    <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/30 animate-pulse">
                      <FiCpu className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold uppercase text-white tracking-wider">
                        Portal Core Offline
                      </h4>
                      <p className="text-xs text-white/40 max-w-xs mt-1 leading-relaxed">
                        Establish a link by hovering over an orbital crystal to synchronize portal modules.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Shifting neon bottom accent line */}
              <div 
                className="absolute bottom-0 left-0 right-0 h-[2.5px] transition-all duration-500"
                style={{
                  background: hoveredSig !== null 
                    ? `linear-gradient(to right, transparent, rgba(${sigs[hoveredSig].rgb}, 0.8), transparent)`
                    : 'linear-gradient(to right, transparent, rgba(0, 169, 244, 0.2), transparent)'
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SIGPortal;
