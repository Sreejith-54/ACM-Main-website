import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { CLUB, NAV_LINKS } from '../mock';

export default function Navbaar() {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <motion.header
            initial={{ y: -60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-3' : 'py-5'}`}
        >
            <div className="mx-auto max-w-7xl px-6">
                <div className={`flex items-center justify-between rounded-full border backdrop-blur-xl transition-all ${scrolled ? 'border-cyan-400/20 bg-[#050d22]/80 px-4 py-2' : 'border-white/10 bg-[#050d22]/40 px-5 py-3'}`}>
                    {/* Logo */}
                    <a href="#top" className="flex items-center gap-3 group">
                        <div className="relative h-9 w-9 rounded-md overflow-hidden ring-1 ring-cyan-400/40">
                            <img src={CLUB.logo} alt="ACM logo" className="h-full w-full object-cover" />
                        </div>
                        <div className="hidden sm:flex flex-col leading-tight">
                            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-cyan-300">Student Chapter</span>
                            <span className="font-display text-lg text-white -mt-0.5">ACM · Amritapuri</span>
                        </div>
                    </a>

                    {/* Desktop nav */}
                    <nav className="hidden md:flex items-center gap-1">
                        {NAV_LINKS.map((l) => (
                            <a
                                key={l.href}
                                href={l.href}
                                className="relative px-4 py-2 text-sm font-medium text-white/80 hover:text-white transition-colors group"
                            >
                                <span>{l.label}</span>
                                <span className="absolute left-4 right-4 -bottom-0.5 h-px scale-x-0 origin-left bg-cyan-300 transition-transform duration-300 group-hover:scale-x-100" />
                            </a>
                        ))}
                    </nav>

                    <div className="hidden md:flex items-center gap-2">
                        <a href="#contact" className="inline-flex items-center gap-1.5 rounded-full bg-cyan-400 px-4 py-2 text-sm font-semibold text-[#030814] hover:bg-cyan-300 transition-colors">
                            Join us <ArrowUpRight size={14} />
                        </a>
                    </div>

                    {/* Mobile */}
                    <button onClick={() => setOpen(!open)} className="md:hidden p-2 text-white" aria-label="menu">
                        {open ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </div>

                {/* Mobile menu */}
                {open && (
                    <motion.nav
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="md:hidden mt-2 rounded-2xl border border-cyan-400/15 bg-[#050d22]/95 backdrop-blur p-4 space-y-1"
                    >
                        {NAV_LINKS.map((l) => (
                            <a
                                key={l.href}
                                href={l.href}
                                onClick={() => setOpen(false)}
                                className="block rounded-lg px-3 py-2.5 text-white/85 hover:bg-white/5 hover:text-white"
                            >
                                {l.label}
                            </a>
                        ))}
                        <a
                            href="#contact"
                            onClick={() => setOpen(false)}
                            className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full bg-cyan-400 px-4 py-2.5 font-semibold text-[#030814]"
                        >
                            Join us <ArrowUpRight size={14} />
                        </a>
                    </motion.nav>
                )}
            </div>
        </motion.header>
    );
}
