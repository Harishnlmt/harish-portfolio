'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Code2, Database, Layout, Hexagon } from 'lucide-react';
import { cn } from '@/lib/utils';

const skillCategories = [
    {
        title: 'Generative AI',
        icon: Brain,
        color: 'text-neon-yellow',
        skills: ['LLMs', 'RAG', 'LangChain', 'HuggingFace', 'OpenAI API']
    },
    {
        title: 'Backend',
        icon: Code2,
        color: 'text-neon-gold',
        skills: ['FastAPI', 'Python', 'Node.js', 'REST APIs']
    },
    {
        title: 'Frontend',
        icon: Layout,
        color: 'text-neon-amber',
        skills: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion']
    },
    {
        title: 'Databases',
        icon: Database,
        color: 'text-neon-orange',
        skills: ['PostgreSQL', 'MongoDB', 'FAISS', 'Pinecone', 'Vector DBs']
    }
];

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
};

export default function Skills() {
    return (
        <section id="skills" className="py-24 bg-white/[0.02]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-neon-yellow/10 border border-neon-yellow/20 mb-6"
                >
                    <Hexagon className="w-4 h-4 text-neon-yellow" />
                    <span className="text-xs font-bold text-neon-yellow uppercase tracking-widest">Skill Set</span>
                </motion.div>

                <h2 className="text-4xl md:text-5xl font-black mb-6 text-white">
                    My Technical <span className="text-neon-yellow">Arsenal</span>
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                    Combining cutting-edge AI technologies with modern web frameworks to deliver
                    intelligent and high-performance digital experiences.
                </p>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                    {skillCategories.map((cat, idx) => (
                        <motion.div
                            key={idx}
                            variants={item}
                            className="glass-card p-8 rounded-3xl group border-neon-yellow/5 relative overflow-hidden"
                        >
                            <div className={cn("mb-6 p-4 rounded-2xl bg-white/5 w-fit transition-transform group-hover:scale-110 group-hover:rotate-3", cat.color)}>
                                <cat.icon className="w-8 h-8" />
                            </div>

                            <h3 className="text-xl font-bold mb-6 text-white">{cat.title}</h3>

                            <div className="flex flex-wrap gap-2">
                                {cat.skills.map((skill, sIdx) => (
                                    <span
                                        key={sIdx}
                                        className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-medium text-gray-400 group-hover:text-white group-hover:border-neon-yellow/30 transition-all"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>

                            <div className={cn("absolute -bottom-12 -right-12 w-32 h-32 blur-[60px] opacity-20 -z-10 group-hover:opacity-40 transition-opacity", cat.color.replace('text-', 'bg-'))}></div>

                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
