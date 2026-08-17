'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Briefcase, Zap, Globe, Sparkles, Terminal } from 'lucide-react';

const STATS = [
  { icon: Zap, label: 'Experience', value: '2+ Yrs' },
  { icon: Globe, label: 'Projects', value: '15+' },
  { icon: Briefcase, label: 'Focus', value: 'Full Stack AI' },
];

const TECH_STACK = [
  'Python',
  'FastAPI',
  'React',
  'Next.js',
  'LLMs',
  'RAG',
  'LangChain',
  'PostgreSQL',
];

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-36 bg-black overflow-hidden">

      {/* Dot-grid background */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '26px 26px',
        }}
      />

      {/* Ambient glows */}
      <div className="absolute top-0 -left-40 w-96 h-96 bg-yellow-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 -right-40 w-96 h-96 bg-yellow-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-24 items-center">

          {/* ---------- IMAGE / ID-CARD SIDE ---------- */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative mx-auto"
            style={{ width: '100%', maxWidth: '420px', minWidth: '280px' }}
          >
            {/* Rotating conic glow ring */}
            <div className="absolute -inset-5 rounded-[2.5rem] bg-[conic-gradient(from_0deg,#eab308,transparent_25%,transparent_75%,#eab308)] blur-2xl opacity-30 animate-about-spin -z-10" />

            {/* Card frame */}
            <div
              className="relative rounded-[2rem] overflow-hidden border border-yellow-500/25 bg-neutral-950 shadow-2xl shadow-yellow-500/5"
              style={{ width: '100%', minHeight: '480px', aspectRatio: '4 / 5' }}
            >
              <Image
                src="/hari1.png"
                alt="Harish CP"
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 500px"
                className="object-cover object-top grayscale-[15%] contrast-105"
              />

              {/* Bottom gradient for legibility */}
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black via-black/40 to-transparent" />

              {/* Scanline */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute inset-x-0 h-24 bg-gradient-to-b from-transparent via-yellow-400/20 to-transparent animate-about-scan" />
              </div>

              {/* Corner brackets */}
              <span className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-yellow-500/70 rounded-tl-md" />
              <span className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-yellow-500/70 rounded-tr-md" />
              <span className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-yellow-500/70 rounded-bl-md" />
              <span className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-yellow-500/70 rounded-br-md" />

              {/* Status badge */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-yellow-500/30 z-20">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
                </span>
                <span className="text-[10px] font-mono uppercase tracking-widest text-white/90">
                  Identity Verified
                </span>
              </div>

              {/* Name plate */}
              <div className="absolute bottom-5 left-5 right-5 z-20">
                <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-yellow-400/80 mb-1">
                  Dev Profile / 001
                </p>
                <p className="text-xl font-bold text-white">Harish C P</p>
              </div>
            </div>

            {/* Floating stat chips */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="hidden md:flex absolute -left-10 top-10 items-center gap-3 px-4 py-3 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-xl"
            >
              <Zap className="w-5 h-5 text-yellow-500" />
              <div>
                <div className="text-sm font-bold text-white leading-none">2+ Yrs</div>
                <div className="text-[10px] text-gray-500 uppercase tracking-wide">Experience</div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              className="hidden md:flex absolute -right-10 top-1/2 -translate-y-1/2 items-center gap-3 px-4 py-3 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-xl"
            >
              <Globe className="w-5 h-5 text-yellow-500" />
              <div>
                <div className="text-sm font-bold text-white leading-none">15+</div>
                <div className="text-[10px] text-gray-500 uppercase tracking-wide">Projects</div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="hidden md:flex absolute -left-6 bottom-6 items-center gap-3 px-4 py-3 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-xl"
            >
              <Briefcase className="w-5 h-5 text-yellow-500" />
              <div>
                <div className="text-sm font-bold text-white leading-none">Full Stack AI</div>
                <div className="text-[10px] text-gray-500 uppercase tracking-wide">Role</div>
              </div>
            </motion.div>

            {/* Mobile stat row (fallback for hidden floaters) */}
            <div className="flex md:hidden justify-center gap-3 mt-6">
              {STATS.map((stat, idx) => (
                <div
                  key={idx}
                  className="flex-1 flex flex-col items-center gap-1 px-3 py-3 rounded-xl bg-white/5 border border-white/10"
                >
                  <stat.icon className="w-4 h-4 text-yellow-500" />
                  <div className="text-xs font-bold text-white">{stat.value}</div>
                  <div className="text-[9px] text-gray-500 uppercase tracking-wide text-center">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ---------- TEXT SIDE ---------- */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/20 mb-6">
              <Sparkles className="w-4 h-4 text-yellow-500" />
              <span className="text-xs font-bold text-yellow-500 uppercase tracking-widest">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-black mb-6 text-white leading-tight">
              Engineering the <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-200">
                Next Generation
              </span>{' '}
              of AI.
            </h2>

            <p className="text-lg text-gray-400 leading-relaxed mb-8">
              I am a Generative AI Developer with experience building LLM-powered applications,
              RAG systems, and scalable full-stack solutions using FastAPI, React, and modern AI
              tools. My focus is on creating seamless integrations between complex AI backends and
              intuitive, high-performance frontends.
            </p>

            {/* Tech stack chips */}
            <div className="flex flex-wrap gap-2 mb-10">
              {TECH_STACK.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-full text-xs font-mono text-gray-300 border border-white/10 bg-white/5 hover:border-yellow-500/50 hover:text-yellow-400 transition-colors duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Current focus terminal card */}
            <div className="relative rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-white/[0.02]">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                <span className="ml-3 flex items-center gap-1.5 text-[11px] font-mono text-gray-500">
                  <Terminal className="w-3 h-3" />
                  current_focus.sh
                </span>
              </div>
              <p className="px-5 py-4 text-sm font-mono text-gray-400 leading-relaxed">
                <span className="text-yellow-500">$</span> Building automated RAG workflows and
                optimizing LLM token usage for enterprise SaaS platforms
                <span className="inline-block w-2 h-4 align-middle bg-yellow-500 ml-1 animate-about-blink" />
              </p>
            </div>
          </motion.div>

        </div>
      </div>

    
    </section>
  );
}