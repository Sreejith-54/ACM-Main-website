import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Cpu, Brain, Trophy, ShieldAlert, Palette, ArrowRight } from 'lucide-react';
import { SIGS } from '../mock';

const ICONS = { dev: Cpu, ai: Brain, cp: Trophy, cyber: ShieldAlert, design: Palette };

export default function SIGs() {
  const [active, setActive] = useState(SIGS[0].id);
  const activeSig = SIGS.find((s) => s.id === active);
  const ActiveIcon = ICONS[activeSig.id];

  return (
    <section id="sigs" className="relative py-28 md:py-36 overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />
      <div className="absolute -right-40 top-40 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="eyebrow">// 02 — Special Interest Groups</div>
          <h2 className="section-heading mt-4 text-white max-w-4xl">
            five SIGs. one <span className="text-cyan-400">chapter</span>.<br />
            all in sync.
          </h2>
          <p className="mt-6 max-w-2xl text-white/60 text-lg leading-relaxed">
            Every SIG at ACM Amritapuri is a mindset, not just a skillset. We build, break,
            design, analyze and communicate — never in silos, always in sync. Innovation happens
            where these worlds intersect.
          </p>
        </motion.div>

        {/* Interactive rail */}
        <div className="mt-16 grid lg:grid-cols-[380px_1fr] gap-8">
          {/* Rail */}
          <div className="flex flex-col gap-2">
            {SIGS.map((s) => {
              const Icon = ICONS[s.id];
              const isActive = active === s.id;
              return (
                <button
                  key={s.id}
                  onMouseEnter={() => setActive(s.id)}
                  onClick={() => setActive(s.id)}
                  className={`group relative text-left rounded-lg border transition-all duration-300 px-5 py-4 flex items-center gap-4 ${isActive
                      ? 'border-cyan-400/60 bg-cyan-400/[0.06]'
                      : 'border-white/8 bg-white/[0.015] hover:border-white/20'
                    }`}
                >
                  <div className={`h-10 w-10 rounded-md flex items-center justify-center transition-colors ${isActive ? 'bg-cyan-400 text-[#030814]' : 'bg-white/5 text-cyan-300'}`}>
                    <Icon size={18} />
                  </div>
                  <div className="flex-1">
                    <div className="font-mono text-[10px] tracking-[0.25em] text-cyan-300/80 uppercase">{s.code}</div>
                    <div className="font-display text-xl text-white -mt-0.5">{s.name}</div>
                  </div>
                  <ArrowRight
                    size={16}
                    className={`transition-all ${isActive ? 'text-cyan-300 translate-x-0.5' : 'text-white/30 opacity-0 group-hover:opacity-100'}`}
                  />
                </button>
              );
            })}
          </div>

          {/* Detail card */}
          <motion.div
            key={activeSig.id}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.35 }}
            className="cassette-frame p-10 md:p-14 relative overflow-hidden min-h-[420px] flex flex-col justify-between"
          >
            <span className="corners" aria-hidden />

            {/* Big monogram in bg */}
            <div className="absolute -right-8 -bottom-16 font-display text-[18rem] leading-none text-white/[0.03] pointer-events-none select-none">
              {activeSig.code.split('.')[1]}
            </div>

            <div className="relative">
              <div className="flex items-center gap-3 font-mono text-xs tracking-[0.25em] text-cyan-300 uppercase">
                <span>{activeSig.code}</span>
                <span className="h-px w-16 bg-cyan-400/40" />
                <span className="text-white/50">now playing</span>
              </div>
              <h3 className="mt-4 font-display text-5xl md:text-6xl text-white leading-none">
                {activeSig.name}
              </h3>
              <p className="mt-3 text-xl md:text-2xl italic text-cyan-200/80">“{activeSig.tagline}”</p>
              <p className="mt-8 max-w-xl text-white/70 text-[15px] leading-relaxed">{activeSig.desc}</p>
            </div>

            <div className="relative mt-10 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="h-14 w-14 rounded-full border-2 border-cyan-400/60 flex items-center justify-center text-cyan-300 spin-slow">
                  <ActiveIcon size={20} />
                </div>
                <div className="h-14 w-14 rounded-full border-2 border-cyan-400/30 spin-slow" style={{ animationDirection: 'reverse' }} />
              </div>
              <a href="#contact" className="btn-ghost text-sm">Join this SIG <ArrowRight size={14} /></a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
