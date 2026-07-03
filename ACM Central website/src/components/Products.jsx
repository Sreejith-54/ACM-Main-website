import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Github } from 'lucide-react';
import { PROJECTS } from '../mock';

export default function Projects() {
    const [hover, setHover] = useState(null);

    return (
        <section id="projects" className="relative py-28 md:py-36 overflow-hidden">
            <div className="absolute -left-40 top-40 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />

            <div className="relative mx-auto max-w-7xl px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >
                    <div className="eyebrow">// 04 — Projects</div>
                    <h2 className="section-heading mt-4 text-white max-w-4xl">
                        we ship. sometimes we <span className="text-cyan-400">break things</span>.
                    </h2>
                    <p className="mt-6 max-w-2xl text-white/60 text-lg leading-relaxed">
                        Structured project cycles run through the year — members pick a stack, a mentor, and a
                        problem worth solving. Here’s a slice of what got shipped.
                    </p>
                </motion.div>

                {/* Interactive list — Bruno-style */}
                <div
                    className="mt-16 border-t border-white/10 relative"
                    onMouseLeave={() => setHover(null)}
                >
                    {PROJECTS.map((p, i) => (
                        <motion.a
                            key={p.name}
                            href={p.link}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.4 }}
                            transition={{ duration: 0.5, delay: i * 0.05 }}
                            onMouseEnter={() => setHover(i)}
                            className="group relative flex items-center justify-between gap-6 border-b border-white/10 py-8 md:py-10 px-2 transition-colors hover:bg-white/[0.02]"
                        >
                            <div className="flex items-center gap-6 md:gap-10 min-w-0">
                                <span className="font-mono text-xs text-cyan-300/60 w-8">{String(i + 1).padStart(2, '0')}</span>
                                <h3 className="font-display text-3xl md:text-5xl text-white group-hover:text-cyan-300 transition-colors truncate">
                                    {p.name}
                                </h3>
                                <span className="hidden md:inline font-mono text-xs text-white/40 truncate">— {p.tagline}</span>
                            </div>

                            <div className="flex items-center gap-3 shrink-0">
                                <span className="hidden lg:inline font-mono text-[10px] uppercase tracking-widest text-white/40">view</span>
                                <ArrowUpRight
                                    size={22}
                                    className="text-white/40 group-hover:text-cyan-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all"
                                />
                            </div>

                            {/* Floating preview */}
                            <motion.div
                                animate={{ opacity: hover === i ? 1 : 0, scale: hover === i ? 1 : 0.9 }}
                                transition={{ duration: 0.25 }}
                                className="pointer-events-none hidden md:block absolute right-24 top-1/2 -translate-y-1/2 h-40 w-64 rounded-lg overflow-hidden border border-cyan-400/30 shadow-2xl shadow-cyan-500/20 z-10"
                            >
                                <img src={p.image} alt={p.name} className="h-full w-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#030814]/70 to-transparent" />
                            </motion.div>
                        </motion.a>
                    ))}
                </div>

                {/* Descriptions grid below */}
                <div className="mt-16 grid md:grid-cols-2 gap-5">
                    {PROJECTS.slice(0, 4).map((p, i) => (
                        <motion.div
                            key={`d-${p.name}`}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.08 }}
                            className="cassette-frame p-6 pt-10 relative"
                        >
                            <span className="corners" aria-hidden />
                            <div className="absolute top-3 left-6 font-mono text-[10px] tracking-[0.25em] text-cyan-300/70 uppercase">
                                PROJECT / {String(i + 1).padStart(2, '0')}
                            </div>
                            <div className="flex gap-4">
                                <div className="h-24 w-24 shrink-0 rounded-md overflow-hidden ring-1 ring-cyan-400/30">
                                    <img src={p.image} alt={p.name} className="h-full w-full object-cover" />
                                </div>
                                <div className="min-w-0">
                                    <h4 className="font-display text-2xl text-white">{p.name}</h4>
                                    <p className="text-sm text-white/60 mt-1 leading-relaxed line-clamp-3">{p.desc}</p>
                                    <div className="mt-3 flex items-center gap-2 text-cyan-300 text-xs font-mono">
                                        <Github size={12} /> repository
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
