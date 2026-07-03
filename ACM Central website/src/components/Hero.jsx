import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, Sparkles } from 'lucide-react';
import { CLUB, STATS } from '../mock';

export default function Hero() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 0.2], [0, -60]);

  return (
    <section id="top" className="relative min-h-screen overflow-hidden pt-28 pb-16">
      {/* Background layers */}
      <div className="absolute inset-0 grid-bg opacity-70" />
      <div className="absolute inset-0 glow-cyan" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[720px] w-[720px] rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex items-center gap-3 font-mono text-xs text-cyan-300/90"
        >
          <span className="h-px w-10 bg-cyan-400/60" />
          <span className="uppercase tracking-[0.3em]">{CLUB.established}</span>
        </motion.div>

        {/* Massive display text */}
        <motion.h1
          style={{ y }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 font-display leading-[0.88] tracking-tight"
        >
          <span className="block text-[clamp(3rem,10vw,10rem)] text-white">we are the</span>
          <span className="block text-[clamp(3rem,10vw,10rem)] text-outline">association for</span>
          <span className="block text-[clamp(3rem,10vw,10rem)] text-white">
            computing <span className="text-cyan-400">machinery.</span>
          </span>
        </motion.h1>

        {/* Sub row */}
        <div className="mt-14 grid gap-8 md:grid-cols-[1.4fr_1fr] items-end">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="max-w-xl text-lg text-white/70 leading-relaxed"
          >
            The official <span className="text-cyan-300">ACM Student Chapter</span> of{' '}
            <span className="text-white">Amrita School of Computing, Amritapuri</span>. We build
            impactful software, host unorthodox events and grow a community that treats technology
            like a craft.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.55 }}
            className="flex flex-col sm:flex-row md:justify-end gap-3"
          >
            <a href="#about" className="btn-primary">
              <Sparkles size={16} /> Explore chapter
            </a>
            <a href="#projects" className="btn-ghost">See our work</a>
          </motion.div>
        </div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 border-y border-white/10"
        >
          {STATS.map((s, i) => (
            <div key={s.label} className={`px-5 py-6 ${i !== 0 ? 'md:border-l border-white/10' : ''} ${i > 1 ? 'border-t md:border-t-0' : ''} ${i % 2 === 1 ? 'border-l' : ''}`}>
              <div className="font-display text-4xl md:text-5xl text-cyan-300">{s.value}</div>
              <div className="mt-1 text-xs font-mono uppercase tracking-widest text-white/50">{s.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-12 flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-white/40"
        >
          <motion.span
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.6, repeat: Infinity }}
          >
            <ArrowDown size={14} className="text-cyan-300" />
          </motion.span>
          scroll to enter
        </motion.div>
      </div>
    </section>
  );
}
