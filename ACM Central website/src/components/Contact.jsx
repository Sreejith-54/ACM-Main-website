import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Instagram, Linkedin, Github } from 'lucide-react';
import { useToast } from '../hooks/use-toast';
import { Toaster } from './ui/toaster';

export default function Contact() {
    const { toast } = useToast();
    const [form, setForm] = useState({ firstName: '', lastName: '', email: '', phone: '', message: '' });
    const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

    const submit = (e) => {
        e.preventDefault();
        if (!form.firstName || !form.email || !form.message) {
            toast({ title: 'Missing fields', description: 'First name, email and message are required.' });
            return;
        }
        // Save locally for the mock
        const stored = JSON.parse(localStorage.getItem('acm_messages') || '[]');
        stored.push({ ...form, at: new Date().toISOString() });
        localStorage.setItem('acm_messages', JSON.stringify(stored));
        toast({ title: 'Message received', description: `Thanks ${form.firstName} — we\'ll be in touch soon.` });
        setForm({ firstName: '', lastName: '', email: '', phone: '', message: '' });
    };

    return (
        <section id="contact" className="relative py-28 md:py-36">
            <Toaster />
            <div className="absolute inset-0 grid-bg opacity-30" />

            <div className="relative mx-auto max-w-7xl px-6">
                <div className="grid lg:grid-cols-[1fr_1.1fr] gap-16">
                    {/* Left */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <div className="eyebrow">// 06 — Contact</div>
                        <h2 className="section-heading mt-4 text-white">
                            say <span className="text-cyan-400">hello.</span><br />
                            or better — <span className="text-outline">build</span> with us.
                        </h2>
                        <p className="mt-6 max-w-md text-white/60 text-lg leading-relaxed">
                            Whether you want to collaborate, sponsor an event, or just chat about the future of
                            computing — our inbox is open.
                        </p>

                        <div className="mt-10 space-y-4">
                            <div className="flex items-center gap-4">
                                <span className="h-10 w-10 rounded-md bg-cyan-400/10 border border-cyan-400/30 flex items-center justify-center text-cyan-300">
                                    <Mail size={16} />
                                </span>
                                <a href="mailto:acm@am.amrita.edu" className="text-white/85 hover:text-cyan-300">acm@am.amrita.edu</a>
                            </div>
                            <div className="flex items-center gap-4">
                                <span className="h-10 w-10 rounded-md bg-cyan-400/10 border border-cyan-400/30 flex items-center justify-center text-cyan-300">
                                    <MapPin size={16} />
                                </span>
                                <span className="text-white/85">Amrita School of Computing, Amritapuri</span>
                            </div>
                        </div>

                        <div className="mt-10 flex items-center gap-3">
                            {[Instagram, Linkedin, Github].map((Icon, i) => (
                                <button key={i} className="h-11 w-11 rounded-full border border-white/15 flex items-center justify-center text-white/70 hover:text-cyan-300 hover:border-cyan-400/50 transition-colors">
                                    <Icon size={16} />
                                </button>
                            ))}
                        </div>
                    </motion.div>

                    {/* Form */}
                    <motion.form
                        onSubmit={submit}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        className="cassette-frame p-8 md:p-10 relative"
                    >
                        <span className="corners" aria-hidden />
                        <div className="absolute top-4 left-1/2 -translate-x-1/2 font-mono text-[10px] tracking-[0.3em] text-cyan-300/80 uppercase">
                            contact // form
                        </div>

                        <div className="mt-6 grid sm:grid-cols-2 gap-4">
                            <Field label="First name" value={form.firstName} onChange={set('firstName')} />
                            <Field label="Last name" value={form.lastName} onChange={set('lastName')} />
                            <Field label="Email" type="email" value={form.email} onChange={set('email')} />
                            <Field label="Phone" value={form.phone} onChange={set('phone')} />
                        </div>

                        <div className="mt-4">
                            <label className="block font-mono text-[10px] tracking-[0.25em] uppercase text-white/50 mb-2">Message</label>
                            <textarea
                                rows={5}
                                value={form.message}
                                onChange={set('message')}
                                className="w-full bg-[#02091b] border border-white/10 rounded-md px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-cyan-400/60 focus:ring-1 focus:ring-cyan-400/40 transition-colors resize-none"
                                placeholder="Tell us what you want to build..."
                            />
                        </div>

                        <button type="submit" className="mt-6 btn-primary">
                            Send message <Send size={14} />
                        </button>
                    </motion.form>
                </div>
            </div>
        </section>
    );
}

function Field({ label, type = 'text', value, onChange }) {
    return (
        <label className="block">
            <span className="block font-mono text-[10px] tracking-[0.25em] uppercase text-white/50 mb-2">{label}</span>
            <input
                type={type}
                value={value}
                onChange={onChange}
                className="w-full bg-[#02091b] border border-white/10 rounded-md px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-cyan-400/60 focus:ring-1 focus:ring-cyan-400/40 transition-colors"
            />
        </label>
    );
}
