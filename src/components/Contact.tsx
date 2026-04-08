'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, MessageCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

const GithubIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
        <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
    </svg>
);

export default function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                setFormData({ name: '', email: '', message: '' });
                alert('Message sent successfully!');
            }
        } catch (error) {
            console.error('Error sending message:', error);
            alert('Failed to send message');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-neon-blue/10 border border-neon-blue/20 mb-6"
                        >
                            <MessageCircle className="w-4 h-4 text-neon-blue" />
                            <span className="text-xs font-bold text-neon-blue uppercase tracking-widest">Connect</span>
                        </motion.div>

                        <h2 className="text-4xl md:text-5xl font-black mb-6">
                            Let’s <span className="bg-clip-text text-transparent bg-gradient-to-r from-neon-blue to-neon-purple">Collaborate</span>.
                        </h2>

                        <p className="text-lg text-gray-400 mb-10 max-w-md">
                            Whether you’re looking to build an AI-powered SaaS or need a full-stack engineer
                            to scale your systems, I’m always open to discussing new opportunities.
                        </p>

                        <div className="space-y-6">
                            {[
                                { icon: Mail, label: 'Email', value: 'harish@example.com', color: 'text-neon-purple' },
                                { icon: LinkedinIcon, label: 'LinkedIn', value: 'linkedin.com/in/harishcp', color: 'text-neon-blue' },
                                { icon: GithubIcon, label: 'GitHub', value: 'github.com/harishcp', color: 'text-neon-pink' },
                            ].map((link, idx) => (
                                <div key={idx} className="flex items-center space-x-4 group cursor-pointer">
                                    <div className={cn("p-3 rounded-xl bg-white/5 border border-white/10 group-hover:border-white/20 transition-all", link.color)}>
                                        <link.icon className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <div className="text-xs font-bold text-gray-500 uppercase tracking-widest">{link.label}</div>
                                        <div className="text-gray-300 group-hover:text-white transition-colors">{link.value}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="glass-card p-8 md:p-12 rounded-[2.5rem] border-white/5 relative"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-2">Name</label>
                                    <input 
                                        type="text" 
                                        placeholder="Your Name" 
                                        value={formData.name}
                                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                                        required
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-neon-purple transition-all" 
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-2">Email</label>
                                    <input 
                                        type="email" 
                                        placeholder="Your Email" 
                                        value={formData.email}
                                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                                        required
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-neon-purple transition-all" 
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-2">Message</label>
                                <textarea 
                                    rows={4} 
                                    placeholder="How can I help you?" 
                                    value={formData.message}
                                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                                    required
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-neon-purple transition-all resize-none"
                                />
                            </div>

                            <button 
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full group relative px-8 py-5 rounded-2xl bg-neon-purple font-bold text-white transition-all hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                                <Send className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                            </button>
                        </form>

                        {/* Background decorative element */}
                        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-neon-purple/20 blur-[80px] -z-10 rounded-full" />
                    </motion.div>

                </div>
            </div>
        </section>
    );
}

