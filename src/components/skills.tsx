"use client";

import React from "react";
import { motion } from "framer-motion";

const skills = [
  {
    category: "Languages",
    items: ["TypeScript", "JavaScript", "Python", "SQL"],
  },
  {
    category: "Databases",
    items: ["SQLite", "PostgreSQL", "Supabase", "Redis"],
  },
  {
    category: "Frameworks",
    items: ["Next.js", "React", "Vue.js", "Tailwind CSS"],
  },
  {
    category: "Tools",
    items: ["Git", "Docker", "Vite", "Framer Motion"],
  },
  {
    category: "Other",
    items: ["HTML", "CSS", "REST", "GraphQL"],
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
      </div>
    </section>
  );
};
