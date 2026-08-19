'use client';

import React from 'react';
import { Cpu } from 'lucide-react';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-12 border-t border-premium-red/10 relative bg-black">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="flex items-center space-x-2">
                    <div className="p-1 px-2 border border-premium-red/30 rounded bg-premium-red/5">
                        <Cpu className="w-4 h-4 text-premium-red" />
                    </div>
                    <span className="text-sm font-bold tracking-tight text-white uppercase">Harish C P</span>
                </div>

                <div className="flex items-center space-x-8 text-xs font-bold text-gray-500 uppercase tracking-widest">
                    <a
                        href="https://www.instagram.com/_.harish_27/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-premium-red transition-colors"
                    >
                        Instagram
                    </a>
                    <a href="https://www.linkedin.com/in/harish-c-p-578287247/" className="hover:text-premium-red transition-colors">LinkedIn</a>
                    <a href="https://github.com/Harishnlmt" className="hover:text-premium-red transition-colors">GitHub</a>
                </div>

                <div className="text-[10px] text-gray-600 uppercase tracking-widest font-bold">
                    © {currentYear} Harish C P . All rights reserved.
                </div>
            </div>
        </footer>
    );
}
