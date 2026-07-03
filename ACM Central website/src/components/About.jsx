import React from 'react';
import { motion } from 'framer-motion';
import { Code2, GraduationCap, Globe2 } from 'lucide-react';
import { ABOUT_CARDS } from '../mock';

const ICONS = [Code2, GraduationCap, Globe2];

export default function About() {
  return (
    <section id="about" className="relative py-28 md:py-36">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-40 left-0 h-72 w-72 rounded-full bg-cyan-500/8 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <div className="eyebrow">// 01 — About</div>
          <h2 className="section-heading mt-4 text-white">
            not just another <span className="text-cyan-400">tech club</span>.<br />
            we treat computing like a craft.
          </h2>
          <p className="mt-6 text-white/60 max-w-2xl text-lg leading-relaxed">
            Three ideas hold this chapter together — the community we build, the institution that
            shelters us, and the global body we’re proud to be part of.
          </p>
        </motion.div>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {ABOUT_CARDS.map((c, i) => {
            const Icon = ICONS[i];
            return (
              <motion.article
                key={c.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className="cassette-frame p-8 pt-12 relative overflow-hidden group"
              >
                <span className="corners" aria-hidden />
                <div className="absolute top-4 left-1/2 -translate-x-1/2 font-mono text-[10px] tracking-[0.3em] text-cyan-300/80 uppercase">
                  {c.tag}
                </div>

                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 rounded-md bg-cyan-400/10 border border-cyan-400/30 flex items-center justify-center text-cyan-300 group-hover:bg-cyan-400/20 transition-colors">
                    <Icon size={18} />
                  </div>
                  <h3 className="font-display text-2xl text-white">{c.title}</h3>
                </div>

                <p className="text-white/65 leading-relaxed text-[15px]">{c.body}</p>

                {/* Decorative reels */}
                <div className="mt-8 flex items-center justify-between text-cyan-300/40">
                  <div className="h-8 w-8 rounded-full border-2 border-current spin-slow" />
                  <div className="font-mono text-[10px] tracking-widest text-white/40">v0{i + 1}/03</div>
                  <div className="h-8 w-8 rounded-full border-2 border-current spin-slow" style={{ animationDirection: 'reverse' }} />
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
