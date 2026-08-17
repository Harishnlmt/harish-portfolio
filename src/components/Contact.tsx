'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, MessageCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

const GithubIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.81 1.6a2.7 2.7 0 0 1-1.19-2.1c0-1.1.8-2 1.8-2" />
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
      const result = await response.json();

      if (result.success) {
        setFormData({
          name: '',
          email: '',
          message: '',
        });
      
        alert(
          'Thank you! Your message has been sent successfully.'
        );
      }
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Failed to send message');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-20 md:py-24 relative overflow-hidden bg-black">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center space-x-2 px-2.5 py-1 rounded-full bg-neon-yellow/10 border border-neon-yellow/20 mb-4">
              <MessageCircle className="w-3 h-3 sm:w-4 sm:h-4 text-neon-yellow" />
              <span className="text-xs font-bold text-neon-yellow uppercase tracking-wider">Connect</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 sm:mb-6 text-white">
              Let's <span className="bg-clip-text text-transparent bg-gradient-to-r from-neon-yellow to-neon-gold">Collaborate</span>.
            </h2>

            <p className="text-sm sm:text-base text-gray-400 mb-8 max-w-md leading-relaxed">
              Whether you're looking to build an AI-powered SaaS or need a full-stack engineer to scale your systems, I'm always open to discussing new opportunities.
            </p>

            {/* Contact Links */}
            <div className="space-y-4 sm:space-y-5">
              {[
                { icon: Mail, label: 'Email', value: 'harishcp2710@gmail.com', color: 'text-neon-yellow' },
                { icon: LinkedinIcon, label: 'LinkedIn', value: 'linkedin.com/in/harishcp', color: 'text-neon-gold' },
                { icon: GithubIcon, label: 'GitHub', value: 'github.com/harishcp', color: 'text-neon-amber' },
              ].map((link, idx) => (
                <div key={idx} className="flex items-center space-x-3">
                  <div className={cn("p-2 sm:p-2.5 rounded-lg bg-white/5 border border-white/10", link.color)}>
                    <link.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-gray-500 uppercase tracking-wider">{link.label}</div>
                    <div className="text-xs sm:text-sm text-gray-300">{link.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl border border-neon-yellow/10 relative"
          >
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              {/* Name & Email Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">Name</label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-3 sm:px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-neon-yellow transition-all"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">Email</label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-3 sm:px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-neon-yellow transition-all"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">Message</label>
                <textarea
                  rows={4}
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-3 sm:px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-neon-yellow transition-all resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full group relative px-4 sm:px-6 py-3 sm:py-3.5 rounded-lg bg-neon-yellow font-bold text-black text-sm sm:text-base transition-all hover:shadow-[0_0_20px_rgba(250,204,21,0.4)] active:scale-95 disabled:opacity-50"
              >
                <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                <Send className="inline ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
