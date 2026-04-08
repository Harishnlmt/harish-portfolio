'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, FolderCode } from 'lucide-react';
import { cn } from '@/lib/utils';

const GithubIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
        <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
);

const projects = [
    {
        title: 'TeaMS – AI-Powered SaaS Platform',
        description: 'A comprehensive AI chatbot + RAG-based document intelligence system for enterprise collaboration.',
        tech: ['React', 'FastAPI', 'RAG', 'LLMs'],
        links: { live: 'https://teams-platform.example.com', github: 'https://github.com/harishcp/teams-platform' },
        color: 'from-purple-500/20 to-blue-500/20'
    },
    {
        title: 'Stanes I2P Portal',
        description: 'Indent-to-payment system enhanced with AI automation and RAG-driven insights for complex business workflows.',
        tech: ['Next.js', 'Python', 'RAG', 'Automation'],
        links: { live: 'https://stanes-i2p.example.com', github: 'https://github.com/harishcp/stanes-i2p' },
        color: 'from-blue-500/20 to-cyan-500/20'
    },
    {
        title: 'RAG Document QA System',
        description: 'Upload PDFs and query documents using state-of-the-art LLMs and vector databases (FAISS/Pinecone).',
        tech: ['React', 'OpenAI', 'FAISS', 'FastAPI'],
        links: { live: 'https://rag-qa-system.example.com', github: 'https://github.com/harishcp/rag-document-qa' },
        color: 'from-pink-500/20 to-purple-500/20'
    }
];

export default function Projects() {
    return (
        <section id="projects" className="py-24 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-4">
                    <div className="max-w-2xl">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-neon-pink/10 border border-neon-pink/20 mb-6"
                        >
                            <FolderCode className="w-4 h-4 text-neon-pink" />
                            <span className="text-xs font-bold text-neon-pink uppercase tracking-widest">Featured Work</span>
                        </motion.div>
                        <h2 className="text-4xl md:text-5xl font-black text-white">
                            Latest <span className="bg-clip-text text-transparent bg-gradient-to-r from-neon-purple to-neon-blue">Innovations</span>
                        </h2>
                    </div>
                    <button className="text-sm font-bold text-gray-400 hover:text-white transition-colors flex items-center group">
                        All Projects
                        <ExternalLink className="ml-2 w-4 h-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="glass-card group rounded-3xl overflow-hidden border-white/5 flex flex-col h-full"
                        >
                            <div className={cn("h-48 bg-gradient-to-br relative overflow-hidden", project.color)}>
                                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
                                <div className="absolute inset-0 flex items-center justify-center translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    <div className="w-24 h-24 bg-white/10 rounded-2xl blur-xl animate-pulse" />
                                </div>
                            </div>

                            <div className="p-8 flex flex-col flex-1">
                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-neon-purple transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-sm text-gray-400 mb-6 line-clamp-3 leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                                    {project.tech.map((t, tIdx) => (
                                        <span key={tIdx} className="text-[10px] uppercase tracking-wider font-bold px-2 py-1 rounded-md bg-white/5 text-gray-400 border border-white/5">
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex items-center space-x-4">
                                    <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="flex-1 py-3 rounded-xl bg-white/5 border border-white/10 text-xs font-bold text-center hover:bg-neon-purple hover:border-neon-purple transition-all duration-300">
                                        Live Demo
                                    </a>
                                    <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-all">
                                        <GithubIcon className="w-4 h-4 text-white" />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

