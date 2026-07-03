import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { CLUB, NAV_LINKS } from '../mock';

export default function Footer() {
  return (
    <footer className="relative border-t border-cyan-400/15 bg-[#03091a] pt-20 pb-10 overflow-hidden">
      <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 h-96 w-[900px] rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Huge outro */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-10 items-end pb-16 border-b border-white/10"
        >
          <div>
            <div className="eyebrow">Since {CLUB.founded}</div>
            <h3 className="section-heading mt-3 text-white">
              built by builders.<br />
              <span className="text-cyan-400">welcome</span> to the crew.
            </h3>
          </div>
          <div className="flex md:justify-end">
            <a href="#contact" className="btn-primary text-base">
              Join the chapter <ArrowUpRight size={16} />
            </a>
          </div>
        </motion.div>

        <div className="mt-14 grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-md ring-1 ring-cyan-400/40 overflow-hidden">
                <img src={CLUB.logo} alt="logo" className="h-full w-full object-cover" />
              </div>
              <div>
                <div className="font-display text-2xl text-white leading-none">ACM · Amritapuri</div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-cyan-300/80 mt-1">Student Chapter</div>
              </div>
            </div>
            <p className="mt-5 text-white/55 max-w-md text-sm leading-relaxed">
              The official ACM Student Chapter at Amrita School of Computing, Amritapuri. Built by
              students, driven by curiosity, powered by community.
            </p>
          </div>

          <div>
            <div className="font-mono text-[10px] uppercase tracking-widest text-white/40 mb-4">Navigate</div>
            <ul className="space-y-2">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-white/70 hover:text-cyan-300 transition-colors text-sm">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="font-mono text-[10px] uppercase tracking-widest text-white/40 mb-4">Elsewhere</div>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-white/70 hover:text-cyan-300">Instagram</a></li>
              <li><a href="#" className="text-white/70 hover:text-cyan-300">LinkedIn</a></li>
              <li><a href="#" className="text-white/70 hover:text-cyan-300">GitHub</a></li>
              <li><a href="#" className="text-white/70 hover:text-cyan-300">Blog</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col md:flex-row md:items-center md:justify-between gap-3 border-t border-white/5 pt-6 font-mono text-[11px] text-white/40">
          <div>© {new Date().getFullYear()} ACM Student Chapter — Amritapuri. All rights reserved.</div>
          <div className="flex items-center gap-4">
            <span>v2.0 / made with caffeine + Framer Motion</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
