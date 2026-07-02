import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiCpu, FiCode, FiShield, FiStar, FiArrowRight } from 'react-icons/fi';

const SIGSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.15,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
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

  const sigs = [
    {
      title: 'Artificial Intelligence',
      shortTitle: 'AI',
      icon: FiCpu,
      description:
        'Diving deep into Machine Learning, Neural Networks, Computer Vision, and Natural Language Processing.',
      color: 'from-purple-500 via-pink-500 to-red-500',
      glowColor: 'rgba(168, 85, 247, 0.4)',
      accentColor: 'text-purple-400',
      badge: 'ML / DL / LLM',
    },
    {
      title: 'Web & App Dev',
      shortTitle: 'Dev',
      icon: FiCode,
      description:
        'Building fast, responsive, and beautifully designed websites and mobile applications using modern frameworks.',
      color: 'from-blue-500 via-cyan-500 to-teal-500',
      glowColor: 'rgba(59, 130, 246, 0.4)',
      accentColor: 'text-acm-cyan',
      badge: 'Fullstack / UIUX',
    },
    {
      title: 'Cyber Security',
      shortTitle: 'Sec',
      icon: FiShield,
      description:
        'Mastering ethical hacking, cryptography, network security, digital forensics, and CTF competitions.',
      color: 'from-red-500 via-orange-500 to-yellow-500',
      glowColor: 'rgba(239, 68, 68, 0.4)',
      accentColor: 'text-red-400',
      badge: 'Infosec / CTF',
    },
    {
      title: 'Glitch',
      shortTitle: 'Glitch',
      icon: FiStar,
      description:
        'Exploring creative coding, generative design, game development, and weird experimental technologies.',
      color: 'from-emerald-500 via-green-500 to-cyan-500',
      glowColor: 'rgba(16, 185, 129, 0.4)',
      accentColor: 'text-green-400',
      badge: 'Creative / Indiedev',
    },
  ];

  return (
    <section id="sigs" ref={ref} className="relative w-full py-24 sm:py-36 px-6 sm:px-8 overflow-hidden">
      {/* Background neon elements */}
      <div className="absolute right-0 top-1/3 w-[400px] h-[400px] bg-purple-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 sm:mb-24 text-center space-y-3"
        >
          <div className="flex items-center justify-center gap-2">
            <span className="w-4 h-[2px] bg-acm-blue" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-acm-blue">
              Specialized Units
            </span>
            <span className="w-4 h-[2px] bg-acm-blue" />
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight">
            Special Interest <span className="bg-gradient-to-r from-acm-blue via-acm-cyan to-purple-400 bg-clip-text text-transparent">Groups</span>
          </h2>
          <p className="text-sm sm:text-base text-white/50 max-w-2xl mx-auto leading-relaxed">
            Choose your focus area and grow alongside peers in specialized domains within the vast computing landscape.
          </p>
        </motion.div>

        {/* SIG Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
        >
          {sigs.map((sig, index) => {
            const Icon = sig.icon;
            return (
              <motion.div
                key={sig.title}
                variants={itemVariants}
                whileHover={{ y: -12, scale: 1.02 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="group relative h-full"
              >
                {/* Background outer neon border sweep on hover */}
                <div
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500 -z-10"
                  style={{
                    background: `radial-gradient(circle at center, ${sig.glowColor} 0%, transparent 80%)`,
                  }}
                />

                {/* Card Container */}
                <div className="relative h-full flex flex-col justify-between p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-white/15 backdrop-blur-md overflow-hidden cursor-pointer transition-all duration-300">
                  {/* Subtle color highlight in card corner */}
                  <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${sig.color} opacity-[0.03] group-hover:opacity-[0.08] blur-xl rounded-full transition-opacity duration-300`} />

                  <div className="space-y-6">
                    {/* Badge and Icon */}
                    <div className="flex items-center justify-between">
                      <div className={`p-3 rounded-2xl bg-white/5 border border-white/10 ${sig.accentColor} shadow-[0_0_15px_rgba(255,255,255,0.02)] transition-transform duration-500 group-hover:scale-110`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] font-extrabold uppercase tracking-widest text-white/40 bg-white/5 px-2.5 py-1 rounded-full border border-white/5">
                        {sig.badge}
                      </span>
                    </div>

                    {/* Title */}
                    <div className="space-y-1.5">
                      <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight leading-snug group-hover:text-white transition-colors duration-300">
                        {sig.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-white/55 leading-relaxed">
                      {sig.description}
                    </p>
                  </div>

                  {/* Learn More link */}
                  <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-acm-blue group-hover:text-white transition-colors">
                      Learn More
                    </span>
                    <motion.div
                      variants={{
                        hover: { x: 6 },
                        initial: { x: 0 },
                      }}
                      className="text-acm-blue group-hover:text-white transition-colors"
                    >
                      <FiArrowRight className="w-4 h-4" />
                    </motion.div>
                  </div>

                  {/* Hover bottom gradient border shine */}
                  <div className={`absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r ${sig.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default SIGSection;
