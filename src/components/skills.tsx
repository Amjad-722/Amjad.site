"use client";

import React from "react";
import { motion } from "framer-motion";

const skills = [
  {
    category: "AI & Low-Code",
    items: ["Agentic AI Coding", "Cursor", "Lovable", "Replit", "No-Code Dev"],
  },
  {
    category: "Solutions",
    items: ["CRM Development", "SaaS Platforms", "Dashboards", "API Design"],
  },
  {
    category: "Full-stack",
    items: ["Next.js", "React", "TypeScript", "Supabase"],
  },
  {
    category: "Performance",
    items: ["Performance Opt.", "SEO", "RLS Policies", "Code Audit"],
  },
  {
    category: "Maintenance",
    items: ["Bug Fixing", "UI Repair", "Database Fixes", "Hotfixes"],
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-16">
          <h2 className="text-3xl font-bold font-mono">
            <span className="text-accent">#</span>skills
          </h2>
          <div className="h-px bg-accent/30 w-32" />
        </div>

        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Decorative Pattern */}
          <div className="flex-1 hidden lg:block relative">
            <div className="grid grid-cols-4 gap-4 opacity-20">
              {[...Array(16)].map((_, i) => (
                <div key={i} className="w-12 h-12 border border-accent/40" />
              ))}
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border-2 border-accent/20 rotate-45" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-accent/40 -rotate-12" />
          </div>

          <div className="flex-[2] grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {skills.map((skillGroup, index) => (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                className="border border-border p-5 bg-background/50 hover:border-accent/30 transition-all group"
              >
                <h3 className="font-mono font-bold mb-3 text-foreground pb-2 border-b border-border group-hover:text-accent transition-colors">
                  {skillGroup.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((item) => (
                    <span key={item} className="text-sm font-mono text-foreground/50">
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        {/* Solutions Marquee */}
        <div className="mt-24 relative overflow-hidden">
          <div className="flex items-center gap-4 mb-8">
            <h3 className="text-xl font-bold font-mono">
              <span className="text-accent">/</span>solutions
            </h3>
            <div className="h-px bg-accent/20 flex-1" />
          </div>
          
          <div className="flex flex-col gap-4">
             <div className="flex gap-4 animate-[marquee_30s_linear_infinite] whitespace-nowrap py-4">
                {[
                  "SaaS Platforms", "Admin Panels", "API Integrations", "Auth Systems", 
                  "Payment Gateways", "CMS Portals", "E-commerce", "Chat Apps", 
                  "Dashboards", "Portfolio Sites", "CRM Systems", "Landing Pages"
                ].map((item, i) => (
                  <motion.div 
                    key={item} 
                    animate={{ y: [0, -8, 0] }}
                    transition={{ 
                      duration: 3 + (i % 2), 
                      repeat: Infinity, 
                      ease: "easeInOut",
                      delay: i * 0.1
                    }}
                    className="px-6 py-3 border border-border bg-background/50 font-mono text-sm hover:border-accent transition-colors shadow-sm"
                  >
                    {item}
                  </motion.div>
                ))}
                {/* Duplicate for seamless loop */}
                {[
                  "SaaS Platforms", "Admin Panels", "API Integrations", "Auth Systems", 
                  "Payment Gateway", "CMS Portal", "E-commerce", "Chat App", 
                  "Dashboard", "Portfolio Site", "CRM System", "Landing Page"
                ].map((item, i) => (
                  <motion.div 
                    key={item + "-dup"} 
                    animate={{ y: [0, -8, 0] }}
                    transition={{ 
                      duration: 3 + (i % 2), 
                      repeat: Infinity, 
                      ease: "easeInOut",
                      delay: i * 0.1
                    }}
                    className="px-6 py-3 border border-border bg-background/50 font-mono text-sm hover:border-accent transition-colors shadow-sm"
                  >
                    {item}
                  </motion.div>
                ))}
             </div>

             <div className="flex gap-4 animate-[marquee_25s_linear_infinite_reverse] whitespace-nowrap py-4">
                {[
                  "Bug Fixing", "UI Repair", "Performance Audit", "RLS Setup", 
                  "Agentic AI Setup", "Cursor Workflows", "Lovable Expert", 
                  "Database Design", "Cloud Migration", "SEO Optimization"
                ].map((item, i) => (
                  <motion.div 
                    key={item} 
                    animate={{ y: [0, -8, 0] }}
                    transition={{ 
                      duration: 2.5 + (i % 2), 
                      repeat: Infinity, 
                      ease: "easeInOut",
                      delay: i * 0.1
                    }}
                    className="px-6 py-3 border border-border bg-background/50 font-mono text-sm hover:border-accent transition-colors shadow-sm"
                  >
                    {item}
                  </motion.div>
                ))}
                {/* Duplicate for seamless loop */}
                {[
                  "Bug Fixing", "UI Repair", "Performance Audit", "RLS Setup", 
                  "Agentic AI Setup", "Cursor Workflows", "Lovable Expert", 
                  "Database Design", "Cloud Migration", "SEO Optimization"
                ].map((item, i) => (
                  <motion.div 
                    key={item + "-dup"} 
                    animate={{ y: [0, -8, 0] }}
                    transition={{ 
                      duration: 2.5 + (i % 2), 
                      repeat: Infinity, 
                      ease: "easeInOut",
                      delay: i * 0.1
                    }}
                    className="px-6 py-3 border border-border bg-background/50 font-mono text-sm hover:border-accent transition-colors shadow-sm"
                  >
                    {item}
                  </motion.div>
                ))}
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};
