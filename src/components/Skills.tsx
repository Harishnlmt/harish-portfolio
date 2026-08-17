'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, Code2, Database, Layout, Hexagon } from 'lucide-react';
import { cn } from '@/lib/utils';

const CATEGORIES = [
  {
    id: 'ai',
    title: 'Generative AI',
    icon: Brain,
    skills: ['LLMs', 'RAG', 'LangChain', 'HuggingFace', 'OpenAI API'],
  },
  {
    id: 'backend',
    title: 'Backend',
    icon: Code2,
    skills: ['FastAPI', 'Python', 'Node.js', 'REST APIs'],
  },
  {
    id: 'frontend',
    title: 'Frontend',
    icon: Layout,
    skills: ['React', 'Next.js', 'Tailwind CSS', 'MUI'],
  },
  {
    id: 'database',
    title: 'Databases',
    icon: Database,
    skills: ['PostgreSQL', 'MongoDB', 'FAISS', 'Pinecone', 'Vector DBs'],
  },
];

// Position a skill blip around the circle, percentage-based so it scales with the container.
function blipPosition(index: number, total: number, radius: number) {
  const angle = (index / total) * 2 * Math.PI - Math.PI / 2;
  const x = 50 + radius * Math.cos(angle);
  const y = 50 + radius * Math.sin(angle);
  return { left: `${x}%`, top: `${y}%` };
}

export default function Skills() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = CATEGORIES[activeIndex];
  const ActiveIcon = active.icon;

  return (
    <section id="skills" className="relative py-24 md:py-36 bg-black overflow-hidden">

      {/* Dot-grid background */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '26px 26px',
        }}
      />
      <div className="absolute top-1/3 -right-40 w-96 h-96 bg-yellow-500/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/20 mb-6"
          >
            <Hexagon className="w-4 h-4 text-yellow-500" />
            <span className="text-xs font-bold text-yellow-500 uppercase tracking-widest">
              Skill Radar
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-black mb-6 text-white">
            Scanning My <span className="text-yellow-500">Technical Skills</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Select a category to sweep the radar — every signal it picks up is a tool I actually
            ship with.
          </p>
        </div>

        {/* Radar + selector */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">

          {/* ---------- CATEGORY SELECTOR ---------- */}
          <div className="order-2 lg:order-1 mx-auto w-full" style={{ maxWidth: '420px' }}>
            <div className="font-mono text-[11px] text-gray-600 uppercase tracking-widest mb-4 pl-1">
            
            </div>
            <div className="flex flex-col gap-2">
              {CATEGORIES.map((cat, idx) => {
                const isActive = idx === activeIndex;
                const CatIcon = cat.icon;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveIndex(idx)}
                    className={cn(
                      'group relative flex items-center gap-4 px-5 py-4 rounded-2xl border text-left transition-all duration-300 overflow-hidden',
                      isActive
                        ? 'border-yellow-500/40 bg-yellow-500/[0.06]'
                        : 'border-white/10 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.04]'
                    )}
                  >
                    <span
                      className={cn(
                        'absolute left-0 top-0 bottom-0 w-[3px] transition-colors duration-300',
                        isActive ? 'bg-yellow-500' : 'bg-transparent'
                      )}
                    />

                    <span className="font-mono text-xs text-gray-600 w-6">
                      {String(idx + 1).padStart(2, '0')}
                    </span>

                    <span
                      className={cn(
                        'p-2.5 rounded-xl transition-colors duration-300',
                        isActive ? 'bg-yellow-500/15 text-yellow-500' : 'bg-white/5 text-gray-500'
                      )}
                    >
                      <CatIcon className="w-5 h-5" />
                    </span>

                    <span className="flex-1">
                      <span
                        className={cn(
                          'block font-bold transition-colors duration-300',
                          isActive ? 'text-white' : 'text-gray-400'
                        )}
                      >
                        {cat.title}
                      </span>
                      <span className="block text-xs text-gray-600 font-mono">
                        {cat.skills.length} signals
                      </span>
                    </span>

                    {isActive && (
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75" />
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-yellow-400" />
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* ---------- RADAR VISUALIZATION ---------- */}
          <div className="order-1 lg:order-2 mx-auto w-full" style={{ maxWidth: '460px' }}>
            <div
              className="relative w-full aspect-square"
              style={{ aspectRatio: '1 / 1', minHeight: '360px' }}
            >
              {/* Concentric rings */}
              <div
                className="absolute rounded-full border border-white/5"
                style={{ inset: '0%' }}
              />
              <div
                className="absolute rounded-full border border-white/5"
                style={{ inset: '16%' }}
              />
              <div
                className="absolute rounded-full border border-yellow-500/10"
                style={{ inset: '32%' }}
              />

              {/* Crosshair lines */}
              <div className="absolute left-0 right-0 top-1/2 h-px bg-white/5" />
              <div className="absolute top-0 bottom-0 left-1/2 w-px bg-white/5" />

              {/* Rotating radar sweep */}
              <div
                className="absolute inset-0 rounded-full overflow-hidden animate-spin"
                style={{ animationDuration: '5s' }}
              >
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      'conic-gradient(from 0deg, rgba(234,179,8,0.35), transparent 22%, transparent 100%)',
                  }}
                />
              </div>

              {/* Center core */}
              <div
                className="absolute z-20 flex items-center justify-center rounded-full bg-black border border-yellow-500/40 shadow-[0_0_40px_rgba(234,179,8,0.15)]"
                style={{
                  left: '50%',
                  top: '50%',
                  width: '20%',
                  height: '20%',
                  transform: 'translate(-50%, -50%)',
                }}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active.id}
                    initial={{ opacity: 0, scale: 0.6 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.6 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ActiveIcon className="w-6 h-6 md:w-7 md:h-7 text-yellow-500" />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Skill blips */}
              <AnimatePresence mode="wait">
                <motion.div key={active.id} className="absolute inset-0">
                  {active.skills.map((skill, i) => {
                    const radius = i % 2 === 0 ? 40 : 27;
                    const pos = blipPosition(i, active.skills.length, radius);
                    return (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, scale: 0.3 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.3 }}
                        transition={{ duration: 0.35, delay: i * 0.08 }}
                        className="absolute z-10"
                        style={{ ...pos, transform: 'translate(-50%, -50%)' }}
                      >
                        <div className="relative flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black border border-yellow-500/30 shadow-lg whitespace-nowrap">
                          <span className="relative flex h-1.5 w-1.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-60" />
                            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-yellow-400" />
                          </span>
                          <span className="text-[11px] md:text-xs font-mono text-gray-200">
                            {skill}
                          </span>
                        </div>
                      </motion.div>
                    );
                  })}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Readout */}
            <div className="mt-6 text-center font-mono text-[11px] text-gray-600 uppercase tracking-widest">
              tracking {active.skills.length} signal{active.skills.length > 1 ? 's' : ''} ·{' '}
              <span className="text-yellow-500">{active.title}</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}