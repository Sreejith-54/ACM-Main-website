import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Github } from 'lucide-react';
import { TEAM } from '../mock';

export default function Team() {
    return (
        <section id="team" className="relative py-28 md:py-36 overflow-hidden">
            <div className="absolute inset-0 pointer-events-none glow-cyan opacity-60" />

            <div className="relative mx-auto max-w-7xl px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >
                    <div className="eyebrow">// 05 — The Team</div>
                    <h2 className="section-heading mt-4 text-white">
                        the humans behind<br />
                        the <span className="text-cyan-400">chapter</span>.
                    </h2>
                    <p className="mt-6 max-w-2xl text-white/60 text-lg leading-relaxed">
                        A rotating crew of designers, developers, researchers and organizers who make every
                        event, hackathon and midnight commit possible.
                    </p>
                </motion.div>

                <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
                    {TEAM.map((m, i) => (
                        <motion.div
                            key={m.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.5, delay: (i % 5) * 0.06 }}
                            whileHover={{ y: -6 }}
                            className="group cassette-frame p-4 pt-8 relative"
                        >
                            <span className="corners" aria-hidden />
                            <div className="absolute top-3 left-4 font-mono text-[9px] tracking-[0.25em] text-cyan-300/70">
                                #{String(i + 1).padStart(3, '0')}
                            </div>

                            <div className="relative aspect-square rounded-md overflow-hidden ring-1 ring-cyan-400/20 group-hover:ring-cyan-300 transition-all">
                                <img
                                    src={m.img}
                                    alt={m.name}
                                    className="h-full w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#030814] via-transparent to-transparent opacity-70" />
                            </div>

                            <div className="mt-3 px-1">
                                <div className="font-display text-lg text-white leading-tight">{m.name}</div>
                                <div className="font-mono text-[10px] uppercase tracking-widest text-cyan-300/80 mt-0.5">{m.role}</div>

                                <div className="mt-3 flex items-center gap-2 opacity-60 group-hover:opacity-100 transition">
                                    <button className="h-7 w-7 rounded-md bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-cyan-300 hover:border-cyan-400/40">
                                        <Linkedin size={12} />
                                    </button>
                                    <button className="h-7 w-7 rounded-md bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-cyan-300 hover:border-cyan-400/40">
                                        <Github size={12} />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
