"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  XMarkIcon, 
  RocketLaunchIcon, 
  CodeBracketIcon, 
  PaintBrushIcon, 
  CpuChipIcon, 
  BugAntIcon,
  CheckIcon
} from "@heroicons/react/24/outline";

const needs = [
  { id: "saas", label: "SaaS Product", icon: RocketLaunchIcon, category: "Niche" },
  { id: "landing", label: "Landing Page", icon: PaintBrushIcon, category: "Niche" },
  { id: "ecommerce", label: "E-commerce", icon: CodeBracketIcon, category: "Niche" },
  { id: "bugfix", label: "Bug Fixing", icon: BugAntIcon, category: "Service" },
  { id: "mobile", label: "Mobile App", icon: CpuChipIcon, category: "Niche" },
  { id: "lowcode", label: "Low/No Code", icon: PaintBrushIcon, category: "Service" },
  { id: "ai", label: "AI Agents", icon: RocketLaunchIcon, category: "Service" },
  { id: "crm", label: "CRM Systems", icon: CpuChipIcon, category: "Niche" },
  { id: "backend", label: "API & Backend", icon: CpuChipIcon, category: "Service" },
  { id: "automation", label: "Automations", icon: CodeBracketIcon, category: "Service" },
];

const budgets = [
  { id: "1k", label: ">$1K" },
  { id: "5k", label: "$1K - $5K" },
  { id: "10k", label: "$5K - $10K" },
  { id: "20k", label: "$10K - $20K" },
  { id: "plus", label: "$20K+" },
];

const services = [
  { id: "dev", label: "Agentic AI Setup" },
  { id: "lowcode", label: "Low/No Code Dev" },
  { id: "crm", label: "CRM Development" },
  { id: "api", label: "Supabase & RLS" },
  { id: "consult", label: "Performance Opt." },
  { id: "not-sure", label: "Not Sure Yet" },
];

export const InquirySection = () => {
  const [selectedNeed, setSelectedNeed] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "sent">("idle");

  const openInquiry = (id: string) => {
    setSelectedNeed(id);
    setIsModalOpen(true);
  };

  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [selectedBudget, setSelectedBudget] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("sending");
    setTimeout(() => {
      setFormStatus("sent");
      setTimeout(() => {
        setIsModalOpen(false);
        setFormStatus("idle");
        setSelectedNeed(null);
        setSelectedService(null);
        setSelectedBudget(null);
      }, 2000);
    }, 1500);
  };

  return (
    <section id="inquiry" className="py-20 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold font-mono">
            Got a <span className="text-accent">project</span> in mind?
          </h2>
          <p className="text-foreground/50 max-w-lg font-mono text-sm">
            Select what you need help with to get a customized proposal. 
            I typically respond within 24 hours.
          </p>
        </div>

        {/* Floating Pickup Area */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6 max-w-6xl mx-auto">
          {needs.map((need, index) => (
            <motion.button
              key={need.id}
              onClick={() => openInquiry(need.id)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ 
                opacity: 1, 
                y: [0, -12, 0],
                transition: {
                  y: {
                    duration: 3 + (index % 3),
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.1
                  },
                  opacity: { duration: 0.5, delay: index * 0.1 }
                }
              }}
              whileHover={{ 
                scale: 1.05, 
                rotate: [0, -1, 1, 0],
                boxShadow: "0 20px 40px -15px var(--accent-muted)" 
              }}
              className="flex flex-col items-center gap-4 p-6 border border-border bg-background/50 backdrop-blur-sm group hover:border-accent transition-all relative overflow-hidden"
            >
              {/* Animated Background Glow */}
              <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="w-12 h-12 rounded-full bg-accent/5 flex items-center justify-center group-hover:bg-accent/20 transition-colors relative z-10">
                <need.icon className="w-6 h-6 text-accent" />
              </div>
              <div className="space-y-1 relative z-10 text-center">
                <span className="font-mono text-sm font-bold block">{need.label}</span>
                <span className="text-[10px] font-mono text-foreground/30 uppercase tracking-widest block">{need.category}</span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Inquiry Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-background/80 backdrop-blur-md"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-background border border-border overflow-hidden shadow-2xl"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-border bg-background/50">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-accent animate-pulse" />
                  <h3 className="text-xl font-bold font-mono">
                    {needs.find(n => n.id === selectedNeed)?.label || "Inquiry"}
                  </h3>
                </div>
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="p-2 hover:bg-accent/10 rounded-full transition-colors"
                >
                  <XMarkIcon className="w-6 h-6 text-foreground/50" />
                </button>
              </div>

              {/* Content */}
              <div className="p-8 space-y-8 max-h-[80vh] overflow-y-auto custom-scrollbar">
                {formStatus === "sent" ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-20 flex flex-col items-center justify-center text-center space-y-4"
                  >
                    <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mb-4">
                      <CheckIcon className="w-10 h-10 text-accent" />
                    </div>
                    <h4 className="text-2xl font-bold font-mono">Inquiry Sent Successfully!</h4>
                    <p className="text-foreground/50 font-mono">
                      Thanks for reaching out! I&apos;ll be in touch very soon.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <p className="text-sm text-foreground/60 font-mono italic">
                      &ldquo;We review every inquiry personally and respond within 24 hours with clear next steps.&rdquo;
                    </p>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] font-mono text-foreground/40 uppercase tracking-widest">Name</label>
                        <input 
                          required
                          type="text" 
                          placeholder="What should I call you?"
                          className="w-full bg-background border border-border px-4 py-3 font-mono text-sm focus:border-accent focus:outline-none transition-colors"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-mono text-foreground/40 uppercase tracking-widest">Email</label>
                        <input 
                          required
                          type="email" 
                          placeholder="Where can I reach you?"
                          className="w-full bg-background border border-border px-4 py-3 font-mono text-sm focus:border-accent focus:outline-none transition-colors"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-mono text-foreground/40 uppercase tracking-widest">Message</label>
                      <textarea 
                        required
                        rows={4}
                        placeholder={selectedNeed === 'bugfix' ? "Describe the bug, what's happening, and where it is..." : "Tell me more about your project goals and vision..."}
                        className="w-full bg-background border border-border px-4 py-3 font-mono text-sm focus:border-accent focus:outline-none transition-colors resize-none"
                      />
                    </div>

                    <div className="space-y-4">
                      <label className="text-[10px] font-mono text-foreground/40 uppercase tracking-widest block">What do you need?</label>
                      <div className="flex flex-wrap gap-2">
                        {services.map(service => (
                          <button
                            key={service.id}
                            type="button"
                            onClick={() => setSelectedService(service.id)}
                            className={`px-4 py-2 border font-mono text-[10px] uppercase transition-all ${
                              selectedService === service.id 
                                ? "border-accent bg-accent text-background" 
                                : "border-border hover:border-accent text-foreground/60"
                            }`}
                          >
                            {service.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-4">
                      <label className="text-[10px] font-mono text-foreground/40 uppercase tracking-widest block">Budget Range</label>
                      <div className="flex flex-wrap gap-2">
                        {budgets.map(budget => (
                          <button
                            key={budget.id}
                            type="button"
                            onClick={() => setSelectedBudget(budget.id)}
                            className={`px-4 py-2 border font-mono text-[10px] uppercase transition-all ${
                              selectedBudget === budget.id 
                                ? "border-accent bg-accent text-background" 
                                : "border-border hover:border-accent text-foreground/60"
                            }`}
                          >
                            {budget.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Footer Actions */}
                    <div className="flex items-center justify-end gap-4 pt-4 border-t border-border">
                      <button 
                        type="button"
                        onClick={() => setIsModalOpen(false)}
                        className="px-6 py-3 border border-border font-mono text-xs hover:bg-border/50 transition-all"
                      >
                        Close
                      </button>
                      <button 
                        disabled={formStatus === 'sending'}
                        className="px-8 py-3 bg-accent text-background font-mono font-bold hover:bg-accent/90 transition-all flex items-center gap-2"
                      >
                        {formStatus === 'sending' ? (
                          <>
                            <div className="w-4 h-4 border-2 border-background/30 border-t-background rounded-full animate-spin" />
                            Sending...
                          </>
                        ) : (
                          "Send Inquiry"
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
