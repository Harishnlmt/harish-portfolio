'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, MessageSquare, Bot, Send } from 'lucide-react';
import { cn } from '@/lib/utils';

const messages = [
    { role: 'user', content: 'What does Harish do?' },
    { role: 'assistant', content: 'He builds scalable AI systems using FastAPI, React, and LLMs.' }
];

export default function ChatUI() {
    const [visibleIdx, setVisibleIdx] = useState(-1);

    useEffect(() => {
        const timer1 = setTimeout(() => setVisibleIdx(0), 1000);
        const timer2 = setTimeout(() => setVisibleIdx(1), 2500);

        // Loop the conversation
        const loop = setInterval(() => {
            setVisibleIdx(-1);
            setTimeout(() => setVisibleIdx(0), 1000);
            setTimeout(() => setVisibleIdx(1), 2500);
        }, 8000);

        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
            clearInterval(loop);
        };
    }, []);

    return (
        <div className="w-full max-w-md mx-auto">
            <div className="glass-card rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                {/* Chat Header */}
                <div className="px-4 py-3 border-b border-white/10 bg-white/5 flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        <span className="text-xs font-semibold text-gray-300 uppercase tracking-wider">AI Assistant Agent</span>
                    </div>
                    <Bot className="w-4 h-4 text-neon-purple" />
                </div>

                {/* Chat Body */}
                <div className="p-4 h-[240px] flex flex-col space-y-4 overflow-y-auto custom-scrollbar bg-[rgba(3,0,20,0.5)]">
                    <AnimatePresence>
                        {visibleIdx >= 0 && (
                            <motion.div
                                key="user-message"
                                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                className="flex items-start space-x-3"
                            >
                                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-neon-blue/20 flex items-center justify-center border border-neon-blue/30">
                                    <User className="w-4 h-4 text-neon-blue" />
                                </div>
                                <div className="px-4 py-2 rounded-2xl rounded-tl-none bg-white/5 border border-white/10 text-sm text-gray-200 shadow-sm">
                                    {messages[0].content}
                                </div>
                            </motion.div>
                        )}

                        {visibleIdx >= 1 && (
                            <motion.div
                                key="assistant-message"
                                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                className="flex items-start space-x-3 justify-end"
                            >
                                <div className="px-4 py-2 rounded-2xl rounded-tr-none bg-neon-purple/20 border border-neon-purple/20 text-sm text-gray-200 shadow-[0_0_15px_rgba(168,85,247,0.1)]">
                                    {messages[1].content}
                                </div>
                                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-neon-purple/20 flex items-center justify-center border border-neon-purple/30">
                                    <Bot className="w-4 h-4 text-neon-purple" />
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Chat Input Placeholder */}
                <div className="px-4 py-3 border-t border-white/10 bg-white/5 flex items-center space-x-3">
                    <div className="flex-1 bg-white/5 border border-white/10 rounded-full h-8 px-4 flex items-center">
                        <span className="text-xs text-gray-500">Ask something...</span>
                    </div>
                    <Send className="w-4 h-4 text-gray-600" />
                </div>
            </div>
        </div>
    );
}
