'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { User, Briefcase, Zap, Globe } from 'lucide-react';
import ChatUI from './ChatUI';

const stats = [
    { icon: Zap, label: 'Experience', value: '2+ Years' },
    { icon: Globe, label: 'Projects', value: '15+ Built' },
    { icon: Briefcase, label: 'Role', value: 'Full Stack AI' },
];

export default function About() {
    return (
        <section id="about" className="py-24 relative overflow-hidden bg-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-neon-yellow/10 border border-neon-yellow/20 mb-6">
                            <User className="w-4 h-4 text-neon-yellow" />
                            <span className="text-xs font-bold text-neon-yellow uppercase tracking-widest">About Me</span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-black mb-6">
                            Engineering the <br />
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-neon-yellow to-neon-gold">
                                Next Generation
                            </span> of AI.
                        </h2>

                        <p className="text-lg text-gray-400 leading-relaxed mb-8">
                            I am a Generative AI Developer with experience building LLM-powered applications,
                            RAG systems, and scalable full-stack solutions using FastAPI, React, and modern AI tools.
                            My focus is on creating seamless integrations between complex AI backends and
                            intuitive, high-performance frontends.
                        </p>

                        <div className="grid grid-cols-3 gap-6">
                            {stats.map((stat, idx) => (
                                <div key={idx} className="glass-card p-4 rounded-xl border border-neon-yellow/10">
                                    <stat.icon className="w-5 h-5 text-neon-yellow mb-2" />
                                    <div className="text-xl font-bold text-white">{stat.value}</div>
                                    <div className="text-xs text-gray-500 uppercase tracking-tighter">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="absolute inset-0 bg-neon-yellow/10 rounded-3xl blur-3xl -z-10" />
                        <div className="relative z-10 p-4 md:p-8">
                            <ChatUI />
                            <div className="mt-8 glass-card p-6 rounded-2xl border border-neon-yellow/10 relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-24 h-24 bg-neon-yellow/10 rounded-full blur-2xl -mr-12 -mt-12" />
                                <h4 className="text-sm font-bold text-white mb-2 flex items-center">
                                    <div className="w-1.5 h-1.5 rounded-full bg-neon-yellow mr-2" />
                                    Current Focus
                                </h4>
                                <p className="text-sm text-gray-400">
                                    Building automated RAG workflows and optimizing LLM token usage for enterprise SaaS platforms.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
