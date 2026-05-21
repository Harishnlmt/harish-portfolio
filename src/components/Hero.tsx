'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  Sparkles,
  ArrowRight,
  ChevronDown,
  Brain,
  Code2,
  Cpu,
  Database,
  Zap
} from 'lucide-react';

const bootMessages = [
  "Initializing AI Core...",
  "Loading FastAPI services...",
  "RAG System Online...",
  "System Ready ✓"
];

const cards = [
  {
    title: "AI Systems",
    icon: <Brain size={16} />,
    desc: "RAG • LLM • Agents"
  },
  {
    title: "Frontend",
    icon: <Code2 size={16} />,
    desc: "React • NextJS"
  },
  {
    title: "Backend",
    icon: <Cpu size={16} />,
    desc: "FastAPI • APIs"
  },
  {
    title: "Database",
    icon: <Database size={16} />,
    desc: "PostgreSQL"
  }
];

export default function Hero() {
  const [visible, setVisible] = useState(1);
  const [isDesktop, setIsDesktop] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check desktop
    setIsDesktop(window.innerWidth >= 1024);
    
    // Check reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleMediaChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };
    mediaQuery.addEventListener('change', handleMediaChange);
    return () => mediaQuery.removeEventListener('change', handleMediaChange);
  }, []);

  useEffect(() => {
    // Skip boot animation on mobile or if reduced motion
    if (!isDesktop || prefersReducedMotion) {
      setVisible(bootMessages.length);
      return;
    }

    if (visible < bootMessages.length) {
      const timer = setTimeout(() => {
        setVisible(prev => prev + 1);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [visible, isDesktop, prefersReducedMotion]);

  const containerVariants = prefersReducedMotion ? { initial: {}, animate: {} } : {
    initial: { opacity: 0 },
    animate: { opacity: 1 }
  };

  const itemVariants = prefersReducedMotion ? { initial: {}, animate: {} } : {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 }
  };

  return (
    <section className="relative min-h-screen bg-black text-white pt-20 md:pt-32 pb-12 md:pb-24">
      {/* OPTIMIZED BACKGROUND - Minimal on mobile */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Hide large blur elements on mobile for performance */}
        {isDesktop && (
          <>
            <div className="absolute top-[10%] left-[10%] w-[500px] h-[500px] rounded-full bg-purple-500/10 blur-[100px] opacity-50" />
            <div className="absolute bottom-[10%] right-[10%] w-[400px] h-[400px] rounded-full bg-cyan-500/10 blur-[100px] opacity-50" />
          </>
        )}
        {/* Simple gradient grid - very performant */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:50px_50px] md:bg-[size:40px_40px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* LEFT SECTION */}
          <motion.div
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
            animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Badge */}
            <motion.div
              initial={prefersReducedMotion ? {} : { opacity: 0 }}
              animate={prefersReducedMotion ? {} : { opacity: 1 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-6 text-xs"
            >
              <Sparkles size={12} className="text-purple-400" />
              <span className="uppercase tracking-[3px] text-gray-300">Available for Projects</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
              animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6"
            >
              <span className="bg-gradient-to-r from-purple-300 via-white to-cyan-300 bg-clip-text text-transparent">
                Building Intelligent
              </span>
              <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-purple-300 via-white to-cyan-300 bg-clip-text text-transparent">Systems</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={prefersReducedMotion ? {} : { opacity: 0 }}
              animate={prefersReducedMotion ? {} : { opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-gray-400 text-base md:text-lg leading-relaxed mb-8 max-w-xl"
            >
              Hi, I'm <span className="text-white font-semibold">Harish C P</span>
              <br className="hidden sm:inline" /> Generative AI Developer & Full Stack Engineer creating scalable systems using FastAPI, React, LLMs and automation.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={prefersReducedMotion ? {} : { opacity: 0 }}
              animate={prefersReducedMotion ? {} : { opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3 mb-12"
            >
              <a
                href="#projects"
                className="group px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 flex items-center justify-center sm:justify-start font-semibold text-sm sm:text-base transition-transform hover:scale-105 active:scale-95"
              >
                Explore Work
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition" />
              </a>
              <a
                href="#contact"
                className="px-6 sm:px-8 py-3 sm:py-4 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-sm sm:text-base font-semibold transition-colors hover:bg-white/10 active:scale-95"
              >
                Contact
              </a>
            </motion.div>

            {/* Stats Grid - Responsive */}
            <motion.div
              initial={prefersReducedMotion ? {} : { opacity: 0 }}
              animate={prefersReducedMotion ? {} : { opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-3 gap-3 sm:gap-4"
            >
              <div className="rounded-2xl bg-white/5 p-3 sm:p-4 border border-white/10">
                <h2 className="text-2xl sm:text-3xl font-bold">50+</h2>
                <p className="text-gray-400 text-xs sm:text-sm">Projects</p>
              </div>
              <div className="rounded-2xl bg-white/5 p-3 sm:p-4 border border-white/10">
                <h2 className="text-2xl sm:text-3xl font-bold">AI</h2>
                <p className="text-gray-400 text-xs sm:text-sm">LLM + RAG</p>
              </div>
              <div className="rounded-2xl bg-white/5 p-3 sm:p-4 border border-white/10">
                <h2 className="text-2xl sm:text-3xl font-bold">24/7</h2>
                <p className="text-gray-400 text-xs sm:text-sm">Learning</p>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT SECTION - PROFILE IMAGE */}
          <motion.div
            initial={prefersReducedMotion ? {} : { opacity: 0, x: 20 }}
            animate={prefersReducedMotion ? {} : { opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col items-center gap-4 sm:gap-6"
          >
            {/* Profile Image - Optimized for mobile */}
            <div className="relative w-full max-w-xs h-auto">
              {/* Simple border - no blur for performance */}
              <div className="relative rounded-3xl overflow-hidden border-2 border-white/20 bg-gradient-to-br from-white/10 to-white/5">
                {/* Image Container */}
                <div className="relative w-full aspect-square overflow-hidden">
                  <Image
                    src="/harish.jpeg"
                    alt="Harish C P"
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 50vw"
                    quality={80}
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                </div>

                {/* Status Indicator - simple, no animation on mobile */}
                {isDesktop && !prefersReducedMotion && (
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 2
                    }}
                    className="absolute bottom-4 right-4 w-4 h-4 sm:w-5 sm:h-5 bg-green-400 rounded-full border-2 border-white/50"
                  />
                )}
                {!isDesktop && (
                  <div className="absolute bottom-4 right-4 w-4 h-4 sm:w-5 sm:h-5 bg-green-400 rounded-full border-2 border-white/50" />
                )}
              </div>
            </div>

            {/* Skills Grid Below Image */}
            <div className="grid grid-cols-2 gap-2 sm:gap-3 w-full max-w-xs">
              {cards.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={prefersReducedMotion ? {} : { opacity: 0, y: 10 }}
                  animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className="rounded-xl p-3 sm:p-4 bg-white/5 border border-white/10 backdrop-blur-sm text-center hover:bg-white/10 transition-colors"
                >
                  <div className="mb-1.5 text-purple-400 flex justify-center">
                    {item.icon}
                  </div>
                  <h2 className="font-semibold text-xs sm:text-sm">{item.title}</h2>
                  <p className="text-xs text-gray-400 mt-0.5">{item.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* Currently Building Card */}
            <motion.div
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 10 }}
              animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="w-full max-w-xs rounded-xl border border-purple-500/30 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 p-3 sm:p-4"
            >
              <div className="flex items-center gap-2">
                <Zap className="text-yellow-400 flex-shrink-0 w-4 h-4" />
                <div>
                  <h3 className="font-semibold text-xs sm:text-sm">Currently Building</h3>
                  <p className="text-gray-400 text-xs mt-0.5">AI Inventory Platform + RAG Assistant</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator - Desktop only */}
      {isDesktop && !prefersReducedMotion && (
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{
            repeat: Infinity,
            duration: 2
          }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:block"
        >
          <ChevronDown className="text-gray-400" />
        </motion.div>
      )}
    </section>
  );
}
