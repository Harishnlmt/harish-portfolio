'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, X, Cpu, Download, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [hidden, setHidden] = useState(false);
    const [activeItem, setActiveItem] = useState('Home');
    const lastScrollY = useRef(0);

    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, 'change', (latest) => {
        const previous = lastScrollY.current;
        if (latest > previous && latest > 80) {
            setHidden(true);
        } else {
            setHidden(false);
        }
        setScrolled(latest > 20);
        lastScrollY.current = latest;
    });

    return (
        <motion.nav
            variants={{
                visible: { y: 0 },
                hidden: { y: '-100%' }
            }}
            animate={hidden ? 'hidden' : 'visible'}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className={cn(
                'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
                scrolled
                    ? 'py-2'
                    : 'py-4'
            )}
        >
            {/* Backdrop blur container */}
            <div
                className={cn(
                    'max-w-6xl mx-auto px-4 sm:px-6 transition-all duration-500',
                    scrolled ? 'px-3' : ''
                )}
            >
                <div
                    className={cn(
                        'flex justify-between items-center rounded-2xl px-5 py-3 transition-all duration-500',
                        scrolled
                            ? 'bg-black/60 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.4)]'
                            : 'bg-transparent border border-transparent'
                    )}
                >
                    {/* Logo */}
                    <motion.a
                        href="#"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="flex items-center space-x-2.5 group"
                    >
                        <div className="relative">
                            <div className="absolute inset-0 bg-violet-500/30 rounded-xl blur-md group-hover:bg-violet-500/50 transition-all duration-300" />
                            <div className="relative p-2 bg-gradient-to-br from-violet-600/40 to-blue-600/40 rounded-xl border border-violet-500/40 group-hover:border-violet-400/60 transition-all duration-300">
                                <Cpu className="w-5 h-5 text-violet-300" />
                            </div>
                        </div>
                        <div className="flex flex-col leading-none">
                            <span className="text-base font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-violet-300 via-white to-blue-300">
                                HARISH C P
                            </span>
                            <span className="text-[9px] font-medium tracking-[0.2em] text-gray-500 uppercase">
                                Full Stack Dev
                            </span>
                        </div>
                    </motion.a>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center">
                        {/* Nav pill container */}
                        <div className="flex items-center space-x-1 bg-white/5 rounded-xl p-1 border border-white/8">
                            {navItems.map((item, index) => (
                                <motion.a
                                    key={item.name}
                                    href={item.href}
                                    initial={{ opacity: 0, y: -8 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.07, duration: 0.4 }}
                                    onClick={() => setActiveItem(item.name)}
                                    className={cn(
                                        'relative px-4 py-1.5 text-sm font-medium rounded-lg transition-all duration-200',
                                        activeItem === item.name
                                            ? 'text-white'
                                            : 'text-gray-400 hover:text-gray-200'
                                    )}
                                >
                                    {activeItem === item.name && (
                                        <motion.span
                                            layoutId="activeNav"
                                            className="absolute inset-0 bg-gradient-to-r from-violet-600/50 to-blue-600/50 rounded-lg border border-violet-500/30"
                                            transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
                                        />
                                    )}
                                    <span className="relative z-10">{item.name}</span>
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* CTA Button */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4, duration: 0.4 }}
                        className="hidden md:flex items-center"
                    >
                        <motion.button
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            className="group relative flex items-center gap-2 px-5 py-2 rounded-xl overflow-hidden"
                        >
                            {/* Button background */}
                            <span className="absolute inset-0 bg-gradient-to-r from-violet-600 to-blue-600 transition-all duration-300 group-hover:from-violet-500 group-hover:to-blue-500" />
                            <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.15),transparent_60%)]" />
                            {/* Glow */}
                            <span className="absolute -inset-1 bg-gradient-to-r from-violet-600/40 to-blue-600/40 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <Download className="relative w-3.5 h-3.5 text-white/80" />
                            <span className="relative text-sm font-semibold text-white tracking-wide">
                                Resume
                            </span>
                        </motion.button>
                    </motion.div>

                    {/* Mobile Menu Toggle */}
                    <div className="md:hidden">
                        <motion.button
                            whileTap={{ scale: 0.9 }}
                            onClick={() => setIsOpen(!isOpen)}
                            className="relative p-2 rounded-xl border border-white/10 bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-all"
                        >
                            <AnimatePresence mode="wait" initial={false}>
                                <motion.div
                                    key={isOpen ? 'close' : 'open'}
                                    initial={{ rotate: -90, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    exit={{ rotate: 90, opacity: 0 }}
                                    transition={{ duration: 0.15 }}
                                >
                                    {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                                </motion.div>
                            </AnimatePresence>
                        </motion.button>
                    </div>
                </div>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="md:hidden max-w-6xl mx-auto px-4 mt-2"
                    >
                        <div className="rounded-2xl bg-black/80 backdrop-blur-xl border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.5)] overflow-hidden">
                            {/* Nav links */}
                            <div className="p-3 space-y-0.5">
                                {navItems.map((item, index) => (
                                    <motion.a
                                        key={item.name}
                                        href={item.href}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.05 }}
                                        onClick={() => {
                                            setActiveItem(item.name);
                                            setIsOpen(false);
                                        }}
                                        className={cn(
                                            'flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 group',
                                            activeItem === item.name
                                                ? 'bg-gradient-to-r from-violet-600/20 to-blue-600/20 text-white border border-violet-500/20'
                                                : 'text-gray-400 hover:text-white hover:bg-white/5'
                                        )}
                                    >
                                        <span>{item.name}</span>
                                        <ChevronRight
                                            className={cn(
                                                'w-4 h-4 transition-all duration-200',
                                                activeItem === item.name
                                                    ? 'text-violet-400'
                                                    : 'text-gray-600 group-hover:text-gray-400 group-hover:translate-x-0.5'
                                            )}
                                        />
                                    </motion.a>
                                ))}
                            </div>

                            {/* Divider */}
                            <div className="mx-4 border-t border-white/5" />

                            {/* Resume button */}
                            <div className="p-4">
                                <motion.button
                                    whileTap={{ scale: 0.97 }}
                                    className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 text-white text-sm font-semibold shadow-[0_4px_20px_rgba(139,92,246,0.4)] hover:shadow-[0_4px_24px_rgba(139,92,246,0.6)] transition-all duration-300"
                                >
                                    <Download className="w-4 h-4" />
                                    Download Resume
                                </motion.button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
