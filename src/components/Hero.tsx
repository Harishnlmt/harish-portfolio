'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import Image from 'next/image';

const phrases = [
    "Building AI-powered applications...",
    "Specialized in RAG, LLMs, and automation...",
    "FastAPI + React + Gen AI"
];

export default function Hero() {
    const [displayText, setDisplayText] = useState('');
    const [phraseIndex, setPhraseIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [charIndex, setCharIndex] = useState(0);

    useEffect(() => {
        const currentPhrase = phrases[phraseIndex];
        const typingSpeed = isDeleting ? 40 : 80;
        const pauseTime = 2000;

        const timer = setTimeout(() => {
            if (!isDeleting && charIndex < currentPhrase.length) {
                setDisplayText(currentPhrase.substring(0, charIndex + 1));
                setCharIndex(prev => prev + 1);
            } else if (isDeleting && charIndex > 0) {
                setDisplayText(currentPhrase.substring(0, charIndex - 1));
                setCharIndex(prev => prev - 1);
            } else if (!isDeleting && charIndex === currentPhrase.length) {
                setTimeout(() => setIsDeleting(true), pauseTime);
            } else if (isDeleting && charIndex === 0) {
                setIsDeleting(false);
                setPhraseIndex((prev) => (prev + 1) % phrases.length);
            }
        }, typingSpeed);

        return () => clearTimeout(timer);
    }, [charIndex, isDeleting, phraseIndex]);

    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
            {/* Background Glows */}
            <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-neon-purple/20 rounded-full blur-[120px] -z-10 animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-neon-blue/20 rounded-full blur-[120px] -z-10 animate-pulse" style={{ animationDelay: '1s' }} />

            {/* Grid Pattern */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none -z-10" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] -z-20" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8"
                        >
                            <Sparkles className="w-4 h-4 text-neon-purple" />
                            <span className="text-xs font-medium text-gray-300 uppercase tracking-widest">Available for new projects</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-5xl md:text-7xl lg:text-6xl font-black mb-6 tracking-tight text-left"
                        >
                            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50">
                                Harish C P
                            </span>
                        </motion.h1>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="mb-10 min-h-[40px]"
                        >
                            <h2 className="text-xl md:text-2xl text-gray-400 font-medium mb-4 text-left">
                                Generative AI Developer | Full Stack Engineer
                            </h2>
                            <div className="flex items-center text-lg md:text-xl font-mono text-neon-purple text-left">
                                <span className="mr-2">&gt;</span>
                                <span>{displayText}</span>
                                <span className="w-2 h-6 bg-neon-purple ml-1 animate-pulse" />
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6"
                        >
                            <a href="#projects" className="group relative px-8 py-4 rounded-full bg-neon-purple font-bold text-white transition-all hover:shadow-[0_0_30px_rgba(168,85,247,0.6)] flex items-center">
                                View My Work
                                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                            </a>
                            <a href="#contact" className="px-8 py-4 rounded-full bg-white/5 border border-white/10 font-bold text-white hover:bg-white/10 transition-all backdrop-blur-md">
                                Get in Touch
                            </a>
                        </motion.div>
                    </div>

                    {/* Right Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, x: 30 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        whileHover={{ scale: 1.05, y: -10 }}
                        className="relative hidden lg:block"
                    >
                        <div className="relative w-full aspect-square max-w-sm mx-auto group cursor-pointer">
                            {/* Animated glow effect behind image */}
                            <motion.div 
                                className="absolute inset-0 bg-gradient-to-r from-neon-purple/20 to-neon-blue/20 rounded-3xl blur-2xl"
                                animate={{ scale: [1, 1.1, 1] }}
                                transition={{ duration: 3, repeat: Infinity }}
                            />
                            
                            {/* Animated border glow on hover */}
                            <motion.div 
                                className="absolute inset-0 rounded-3xl border-2 border-neon-purple/30 group-hover:border-neon-purple/60 transition-colors duration-300"
                                whileHover={{ boxShadow: "0 0 30px rgba(168, 85, 247, 0.6)" }}
                            />
                            
                            {/* Enhanced shadow on hover */}
                            <motion.div
                                className="absolute -inset-4 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                style={{
                                    background: "radial-gradient(circle, rgba(168, 85, 247, 0.4) 0%, transparent 70%)",
                                    filter: "blur(20px)"
                                }}
                            />
                            
                            {/* Image */}
                            <motion.div 
                                className="relative w-full h-full rounded-3xl overflow-hidden"
                                whileHover={{ rotate: 2 }}
                                transition={{ duration: 0.3 }}
                            >
                                <Image
                                    src="/harish.jpeg"
                                    alt="Harish C P"
                                    fill
                                    priority
                                    className="rounded-3xl object-cover group-hover:brightness-110 transition-all duration-300"
                                />
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
