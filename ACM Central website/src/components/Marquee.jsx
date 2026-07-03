import React from 'react';
import { motion } from 'framer-motion';

export default function Marquee({ words = [], slow = false, reverse = false }) {
    const items = [...words, ...words, ...words];
    return (
        <div className="relative border-y border-cyan-400/15 bg-[#050d22]/50 overflow-hidden py-6">
            <motion.div
                className={`marquee-track ${slow ? 'marquee-slow' : ''}`}
                style={{ animationDirection: reverse ? 'reverse' : 'normal' }}
            >
                {items.map((w, i) => (
                    <div
                        key={i}
                        className="flex items-center gap-8 px-8 font-display text-4xl md:text-6xl whitespace-nowrap"
                    >
                        <span className={i % 3 === 1 ? 'text-outline' : 'text-white'}>{w}</span>
                        <span className="text-cyan-400">◆</span>
                    </div>
                ))}
            </motion.div>
        </div>
    );
}
