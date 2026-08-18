'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FolderCode, ExternalLink } from 'lucide-react';

const GithubIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.81 1.6a2.7 2.7 0 0 1-1.19-2.1c0-1.1.8-2 1.8-2" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const projects = [
  {
    title: 'HMS – Hotel Management SaaS',
    image: '/projects/hms.png',
    description:
      'A comprehensive multi-property hotel management platform featuring reservations, front office operations, housekeeping, billing, guest management, reporting, and centralized property administration.',
    tech: ['React', 'FastAPI', 'PostgreSQL', 'Docker'],
    links: {
      live: 'https://hms.example.com',
      github: 'https://github.com/harishcp/hms',
    },
  },
  {
    title: 'Stanes I2P Portal',
    image: '/projects/teams.png',
    description:
      'Enterprise Indent-to-Payment procurement platform integrating indent management, purchase orders, GRNs, invoice processing, payment workflows, approvals, and ERP synchronization.',
    tech: ['React', 'FastAPI', 'PostgreSQL', 'ERP'],
    links: {
      live: '#',
      github: '#',
    },
  },
  {
    title: 'HarishGPT',
    image: '/projects/harishgpt.png',
    description:
      'An intelligent chatbot platform with PDF upload, semantic search, conversation memory, RAG-powered knowledge retrieval, and context-aware AI responses.',
    tech: ['React', 'FastAPI', 'RAG', 'LLMs', 'ChromaDB'],
    links: {
      live: '#',
      github: '#',
    },
  },
  {
    title: 'ISC Football Academy',
    image: '/projects/iscfootball.png',
    description:
      'Modern football academy website showcasing coaching staff, facilities, training programs, achievements, and student enrollment management.',
    tech: ['React', 'Vite', 'JavaScript'],
    links: {
      live: 'https://iscfootball-sigma.vercel.app/',
      github: '#',
    },
  },
  {
    title: "Mala's Kitchen",
    image: '/projects/malaskitchen.png',
    description:
      'Restaurant and food ordering website featuring menu management, food showcases, customer engagement, and a fully responsive experience.',
    tech: ['React', 'JavaScript', 'Responsive'],
    links: {
      live: 'https://malaskitchen.vercel.app/',
      github: '#',
    },
  },
  {
    title: 'MJM Catering Services',
    image: '/projects/mjm.png',
    description:
      'Professional catering business website highlighting event services, menu offerings, booking enquiries, and customer testimonials.',
    tech: ['React', 'JavaScript', 'UI/UX'],
    links: {
      live: 'https://mjm-catering.vercel.app/',
      github: '#',
    },
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative py-20 md:py-28 bg-black"
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-yellow-500/20 bg-yellow-500/10 mb-5">
            <FolderCode className="w-4 h-4 text-yellow-400" />
            <span className="text-xs font-bold tracking-widest uppercase text-yellow-400">
              Featured Work
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white">
            Latest{' '}
            <span className="bg-gradient-to-r from-yellow-300 via-yellow-500 to-amber-500 bg-clip-text text-transparent">
              Innovations
            </span>
          </h2>
        </motion.div>

        {/* Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{
                y: -10,
                transition: { duration: 0.25 },
              }}
              viewport={{ once: true }}
              transition={{
                delay: idx * 0.08,
              }}
              className="
                group
                overflow-hidden
                rounded-3xl
                bg-white/[0.03]
                backdrop-blur-xl
                border
                border-white/10
                shadow-[0_10px_40px_rgba(255,215,0,0.08)]
                hover:border-yellow-500/30
                transition-all
                duration-500
              "
            >
              {/* Project Image */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col h-[260px]">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-sm text-gray-400 mb-5 line-clamp-3 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mt-auto mb-5">
                  {project.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="
                        px-2.5
                        py-1
                        text-[10px]
                        font-semibold
                        uppercase
                        tracking-wider
                        rounded-lg
                        bg-white/5
                        border
                        border-white/10
                        text-gray-300
                      "
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3">
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      flex-1
                      flex
                      items-center
                      justify-center
                      gap-2
                      py-2.5
                      rounded-xl
                      bg-yellow-500/10
                      border
                      border-yellow-500/20
                      text-yellow-400
                      font-semibold
                      hover:bg-yellow-500/20
                      transition-all
                    "
                  >
                    <ExternalLink className="w-4 h-4" />
                    Demo
                  </a>

                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      p-2.5
                      rounded-xl
                      bg-white/5
                      border
                      border-white/10
                      hover:border-yellow-500/30
                      hover:bg-yellow-500/10
                      transition-all
                    "
                  >
                    <GithubIcon className="w-5 h-5 text-white" />
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