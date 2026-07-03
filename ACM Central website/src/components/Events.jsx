import React from 'react';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
import { EVENTS } from '../mock';

export default function Events() {
    return (
        <section id="events" className="relative py-28 md:py-36">
            <div className="absolute inset-0 pointer-events-none opacity-40 grid-bg" />

            <div className="relative mx-auto max-w-7xl px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="flex flex-col md:flex-row md:items-end md:justify-between gap-6"
                >
                    <div>
                        <div className="eyebrow">// 03 — Events</div>
                        <h2 className="section-heading mt-4 text-white">
                            hackathons, hunts &amp;<br />
                            <span className="text-cyan-400">unorthodox</span> nights.
                        </h2>
                    </div>
                    <p className="max-w-md text-white/60 text-[15px] leading-relaxed">
                        A year of the ACM Amritapuri calendar — flagship hackathons, cipher hunts,
                        open-source cycles and the occasional 3AM CTF.
                    </p>
                </motion.div>

                <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {EVENTS.map((e, i) => (
                        <motion.article
                            key={e.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                            whileHover={{ y: -6, borderColor: 'rgba(34,211,238,0.5)' }}
                            className="group cassette-frame p-6 pt-10 relative overflow-hidden"
                        >
                            <span className="corners" aria-hidden />
                            <div className="absolute top-3 left-6 font-mono text-[10px] tracking-[0.25em] text-cyan-300/70 uppercase">
                                {e.code}
                            </div>
                            <div className="absolute top-3 right-6 font-mono text-[10px] text-white/40">
                                ep.{e.id}
                            </div>

                            {/* Tape reels */}
                            <div className="flex items-center justify-center gap-14 my-6">
                                <div className="h-16 w-16 rounded-full border-[3px] border-cyan-400/40 group-hover:border-cyan-300 transition-colors relative spin-slow">
                                    <div className="absolute inset-2 rounded-full border border-cyan-400/30" />
                                </div>
                                <div className="h-16 w-16 rounded-full border-[3px] border-cyan-400/40 group-hover:border-cyan-300 transition-colors relative spin-slow" style={{ animationDirection: 'reverse' }}>
                                    <div className="absolute inset-2 rounded-full border border-cyan-400/30" />
                                </div>
                            </div>

                            <div className="mt-4 border-t border-white/10 pt-4">
                                <h3 className="font-display text-2xl text-white group-hover:text-cyan-300 transition-colors">
                                    {e.name}
                                </h3>
                                <p className="mt-2 text-sm text-white/60 leading-relaxed line-clamp-3">{e.desc}</p>
                                <div className="mt-4 flex items-center gap-2 text-[11px] font-mono uppercase tracking-widest text-white/40">
                                    <Calendar size={12} className="text-cyan-300" /> annual
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}
