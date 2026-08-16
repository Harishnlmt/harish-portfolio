'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, FolderCode } from 'lucide-react';
import { cn } from '@/lib/utils';

const GithubIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.81 1.6a2.7 2.7 0 0 1-1.19-2.1c0-1.1.8-2 1.8-2" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const projects = [
  {
    title: 'TeaMS – AI-Powered SaaS',
    description: 'AI chatbot + RAG-based document intelligence system for enterprise collaboration.',
    tech: ['React', 'FastAPI', 'RAG', 'LLMs'],
    links: { live: 'https://teams-platform.example.com', github: 'https://github.com/harishcp/teams-platform' },
    color: 'from-neon-yellow/20 to-neon-gold/20'
  },
  {
    title: 'Stanes I2P Portal',
    description: 'Indent-to-payment system with AI automation and RAG-driven insights.',
    tech: ['Next.js', 'Python', 'RAG', 'Automation'],
    links: { live: 'https://stanes-i2p.example.com', github: 'https://github.com/harishcp/stanes-i2p' },
    color: 'from-neon-gold/20 to-neon-amber/20'
  },
  {
    title: 'RAG Document QA System',
    description: 'Upload PDFs and query documents using LLMs and vector databases.',
    tech: ['React', 'OpenAI', 'FAISS', 'FastAPI'],
    links: { live: 'https://rag-qa-system.example.com', github: 'https://github.com/harishcp/rag-document-qa' },
    color: 'from-neon-amber/20 to-neon-orange/20'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 sm:py-20 md:py-24 relative bg-black">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center space-x-2 px-2.5 py-1 rounded-full bg-neon-yellow/10 border border-neon-yellow/20 mb-4">
            <FolderCode className="w-3 h-3 sm:w-4 sm:h-4 text-neon-yellow" />
            <span className="text-xs font-bold text-neon-yellow uppercase tracking-wider">Featured Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white">
            Latest <span className="bg-clip-text text-transparent bg-gradient-to-r from-neon-yellow to-neon-gold">Innovations</span>
          </h2>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card group rounded-2xl sm:rounded-3xl overflow-hidden border border-neon-yellow/5 flex flex-col h-full hover:border-neon-yellow/20 transition-all"
            >
              {/* Image Section */}
              <div className={cn("h-32 sm:h-40 md:h-48 bg-gradient-to-br relative overflow-hidden", project.color)}>
                <div className="absolute inset-0 opacity-10" />
              </div>

              {/* Content Section */}
              <div className="p-4 sm:p-6 flex flex-col flex-1">
                <h3 className="text-base sm:text-lg font-bold text-white mb-2 group-hover:text-neon-yellow transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-400 mb-4 line-clamp-2 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4 mt-auto">
                  {project.tech.map((t, tIdx) => (
                    <span key={tIdx} className="text-[9px] sm:text-[10px] uppercase tracking-wider font-bold px-2 py-1 rounded-md bg-white/5 text-gray-400 border border-white/5 group-hover:border-neon-yellow/20 group-hover:text-neon-yellow transition-all">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-2">
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2 sm:py-2.5 rounded-lg bg-white/5 border border-white/10 text-xs sm:text-sm font-bold text-center hover:bg-neon-yellow/10 hover:border-neon-yellow/30 transition-colors"
                  >
                    Demo
                  </a>
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-2 sm:px-3 py-2 sm:py-2.5 rounded-lg bg-white/5 border border-white/10 hover:bg-neon-yellow/10 hover:border-neon-yellow/30 transition-colors"
                  >
                    <GithubIcon className="w-4 h-4" />
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
