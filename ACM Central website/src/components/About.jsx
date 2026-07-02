import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiGlobe, FiBook, FiZap, FiActivity, FiCpu, FiTerminal, FiShield, FiSliders } from 'react-icons/fi';

const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.15,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const stats = [
    {
      number: '3.5M+',
      label: 'Members',
      icon: FiGlobe,
      description: 'Global reach across 190+ countries',
      color: 'rgba(0, 169, 244, 0.15)',
      accentColor: 'text-acm-blue',
    },
    {
      number: '50K+',
      label: 'Workshops',
      icon: FiBook,
      description: 'Annual training sessions worldwide',
      color: 'rgba(168, 85, 247, 0.15)',
      accentColor: 'text-purple-400',
    },
    {
      number: '1,000+',
      label: 'Hackathons',
      icon: FiZap,
      description: 'Coding events organized yearly',
      color: 'rgba(0, 217, 255, 0.15)',
      accentColor: 'text-acm-cyan',
    },
    {
      number: '100+',
      label: 'Conferences',
      icon: FiActivity,
      description: 'Major research symposiums annually',
      color: 'rgba(239, 68, 68, 0.15)',
      accentColor: 'text-red-400',
    },
  ];

  return (
    <section id="about-acm" ref={ref} className="relative w-full py-24 sm:py-36 px-6 sm:px-8 overflow-hidden">
      {/* Background radial soft light */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-acm-blue/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Header content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 sm:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-8 h-[2px] bg-gradient-to-r from-acm-blue to-transparent" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-acm-blue">
                Discover the Movement
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight">
              What is <span className="bg-gradient-to-r from-acm-blue via-acm-cyan to-purple-400 bg-clip-text text-transparent">ACM?</span>
            </h2>
          </div>
          <p className="text-sm sm:text-base text-white/55 max-w-md leading-relaxed md:pb-1">
            ACM is the world's largest computing organization, bringing together educators, researchers, and professionals to inspire dialogue, share resources, and address the field's challenges.
          </p>
        </motion.div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-center mb-24">
          {/* Left Column: Description items */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="lg:col-span-7 space-y-6 sm:space-y-8"
          >
            {[
              {
                title: 'Innovation & Research',
                desc: 'Fostering bleeding-edge scientific discovery, publication archives, and technological advancement in computer science.',
                color: 'from-acm-blue to-acm-cyan',
              },
              {
                title: 'Workshops & Education',
                desc: 'Organizing professional lecture series, bootcamps, hands-on tech workshops, and skill accelerator courses.',
                color: 'from-acm-cyan to-purple-400',
              },
              {
                title: 'Community & Collaboration',
                desc: 'Bridging the gap between student enthusiasts and industry leaders, building an active network of lifelong mentors.',
                color: 'from-purple-400 to-acm-blue',
              },
            ].map((feature, idx) => (
              <motion.div key={idx} variants={itemVariants} className="flex gap-5 group">
                <div className={`w-[3px] bg-gradient-to-b ${feature.color} rounded-full group-hover:scale-y-110 transition-transform duration-500`} />
                <div className="space-y-1.5">
                  <h3 className="text-lg sm:text-xl font-extrabold text-white tracking-tight group-hover:text-acm-cyan transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-sm sm:text-base text-white/60 leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right Column: High-fidelity Orbital Visualizer */}
          <div className="lg:col-span-5 flex items-center justify-center relative min-h-[360px] sm:min-h-[420px]">
            {/* Core Nucleus */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={inView ? { scale: 1, opacity: 1 } : {}}
              transition={{ delay: 0.2, duration: 0.8, ease: 'easeOut' }}
              className="relative z-10 w-28 h-28 rounded-full bg-gradient-to-br from-acm-blue via-acm-electric to-acm-cyan flex items-center justify-center text-4xl font-black text-black shadow-[0_0_50px_rgba(0,169,244,0.4)]"
            >
              A
              <div className="absolute inset-[-4px] rounded-full border border-white/20 animate-ping pointer-events-none" style={{ animationDuration: '3s' }} />
            </motion.div>

            {/* Orbit 1: Inner Orbit (Cybersecurity) */}
            <motion.div
              animate={inView ? { rotate: 360 } : {}}
              transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
              className="absolute w-[200px] h-[200px] rounded-full border border-white/5 border-dashed flex items-center justify-center"
            >
              <div className="absolute top-0 w-8 h-8 rounded-xl bg-gradient-to-br from-red-500/20 to-orange-500/20 border border-red-500/40 backdrop-blur-md flex items-center justify-center text-red-400 shadow-[0_0_15px_rgba(239,68,68,0.2)]">
                <FiShield className="w-4 h-4" />
              </div>
            </motion.div>

            {/* Orbit 2: Middle Orbit (AI / Core computing) */}
            <motion.div
              animate={inView ? { rotate: -25 } : {}}
              className="absolute w-[280px] h-[280px] rounded-full border border-white/5"
            >
              <motion.div
                animate={inView ? { rotate: -360 } : {}}
                transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
                className="w-full h-full relative flex items-center justify-center"
              >
                <div className="absolute right-0 w-8 h-8 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/40 backdrop-blur-md flex items-center justify-center text-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.2)]">
                  <FiCpu className="w-4 h-4" />
                </div>
              </motion.div>
            </motion.div>

            {/* Orbit 3: Outer Orbit (Web Dev) */}
            <motion.div
              animate={inView ? { rotate: 45 } : {}}
              className="absolute w-[360px] h-[360px] rounded-full border border-white/5 border-dashed"
            >
              <motion.div
                animate={inView ? { rotate: 400 } : {}}
                transition={{ duration: 32, repeat: Infinity, ease: 'linear' }}
                className="w-full h-full relative flex items-center justify-center"
              >
                <div className="absolute bottom-0 w-8 h-8 rounded-xl bg-gradient-to-br from-acm-blue/20 to-acm-cyan/20 border border-acm-cyan/40 backdrop-blur-md flex items-center justify-center text-acm-cyan shadow-[0_0_15px_rgba(0,217,255,0.2)]">
                  <FiTerminal className="w-4 h-4" />
                </div>
              </motion.div>
            </motion.div>

            {/* Faint connecting laser sweeps */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(0,169,244,0.015)_60%,transparent_70%)] pointer-events-none animate-pulse" />
          </div>
        </div>

        {/* Stats Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="group relative p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-sm cursor-pointer overflow-hidden transition-all duration-300"
              >
                {/* Glowing neon background shadow on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl -z-10"
                  style={{
                    background: `radial-gradient(circle at center, ${stat.color} 0%, transparent 70%)`
                  }}
                />
                
                {/* Inner thin gradient border on hover */}
                <div className="absolute inset-0 border border-white/10 group-hover:border-white/20 rounded-2xl transition-colors duration-300" />

                <div className="relative z-10 flex flex-col justify-between h-full">
                  <div>
                    {/* Icon capsule */}
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:rotate-[360deg]"
                      style={{ backgroundColor: stat.color }}
                    >
                      <Icon className={`w-5 h-5 ${stat.accentColor}`} />
                    </div>

                    {/* Number and label */}
                    <h4 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-1">
                      {stat.number}
                    </h4>
                    <div className="text-xs font-bold uppercase tracking-wider text-white/80 mb-2">
                      {stat.label}
                    </div>
                  </div>
                  
                  <p className="text-xs sm:text-sm text-white/40 group-hover:text-white/60 transition-colors">
                    {stat.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
