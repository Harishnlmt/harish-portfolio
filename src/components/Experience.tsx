'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const experiences = [
    {
        company: 'Likemind Technologies Pvt Ltd',
        role: 'Generative AI Developer (Full Stack)',
        period: '2023 - Present',
        highlights: [
            'Built LLM-powered apps with production-grade reliability.',
            'Developed advanced RAG systems for complex document intelligence.',
            'Integrated AI into real-world business workflows, automating manual tasks.'
        ]
    }
];

export default function Experience() {
    return (
        <section id="experience" className="py-24 relative overflow-hidden">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-neon-purple/10 border border-neon-purple/20 mb-6"
                    >
                        <Briefcase className="w-4 h-4 text-neon-purple" />
                        <span className="text-xs font-bold text-neon-purple uppercase tracking-widest">Journey</span>
                    </motion.div>
                    <h2 className="text-4xl md:text-5xl font-black text-white">Work <span className="text-neon-purple">History</span></h2>
                </div>

                <div className="relative border-l border-white/10 ml-4 py-8 space-y-12">
                    {experiences.map((exp, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative pl-12"
                        >
                            {/* Timeline Dot */}
                            <div className="absolute left-[-9px] top-1 w-4 h-4 rounded-full bg-neon-purple shadow-[0_0_10px_rgba(168,85,247,0.8)]" />

                            <div className="glass-card p-8 rounded-3xl border-white/5 relative">
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-6">
                                    <div>
                                        <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
                                        <p className="text-neon-purple font-medium">{exp.company}</p>
                                    </div>
                                    <span className="text-xs font-bold uppercase tracking-widest text-gray-500 bg-white/5 px-4 py-2 rounded-full border border-white/5">
                                        {exp.period}
                                    </span>
                                </div>

                                <ul className="space-y-4">
                                    {exp.highlights.map((item, iIdx) => (
                                        <li key={iIdx} className="flex items-start text-gray-400 text-sm leading-relaxed">
                                            <div className="w-1.5 h-1.5 rounded-full bg-white/20 mr-4 mt-1.5 flex-shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>

                                {/* Decorative background */}
                                <div className="absolute bottom-0 right-0 w-32 h-32 bg-neon-purple/5 blur-3xl rounded-full -z-10" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
