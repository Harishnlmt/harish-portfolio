'use client';

import React from 'react';
import { Cpu } from 'lucide-react';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-12 border-t border-white/5 relative">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="flex items-center space-x-2">
                    <div className="p-1 px-2 border border-neon-purple/30 rounded bg-neon-purple/5">
                        <Cpu className="w-4 h-4 text-neon-purple" />
                    </div>
                    <span className="text-sm font-bold tracking-tight text-white uppercase">Harish C P</span>
                </div>

                <div className="flex items-center space-x-8 text-xs font-bold text-gray-500 uppercase tracking-widest">
                    <a href="#" className="hover:text-white transition-colors">Twitter</a>
                    <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
                    <a href="#" className="hover:text-white transition-colors">GitHub</a>
                </div>

                <div className="text-[10px] text-gray-600 uppercase tracking-widest font-bold">
                    © {currentYear} Harish C P . All rights reserved.
                </div>
            </div>
        </footer>
    );
}
