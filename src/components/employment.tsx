"use client";

import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    title: "Full-stack Developer / Owner",
    company: "Imran.me",
    period: "January 2021 - Present",
    description: [
      "Built and maintained complex web applications using Next.js and Supabase.",
      "Optimized performance and SEO for various client projects.",
      "Managed project timelines and deliverables for multiple concurrent stakeholders.",
    ],
    tags: ["React", "Next.js", "Vite", "Supabase", "SQL"],
  },
  {
    title: "Senior Front-end Developer",
    company: "Freelance / Remote",
    period: "July 2018 - December 2020",
    description: [
      "Developed high-performance UI components using Tailwind CSS.",
      "Collaborated with designers to implement pixel-perfect layouts.",
      "Integrated RESTful APIs and optimized front-end state management.",
    ],
    tags: ["JavaScript", "HTML/CSS", "Figma", "Redux"],
  },
];

export const Employment = () => {
  return (
    <section id="employment" className="py-20 px-6 bg-accent/[0.02]">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-16">
          <h2 className="text-3xl font-bold font-mono">
            <span className="text-accent">#</span>employment
          </h2>
          <div className="h-px bg-accent/30 w-32" />
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="border border-border p-8 bg-background relative overflow-hidden group hover:border-accent/30 transition-all"
            >
              <div className="absolute top-0 right-0 p-4 font-mono text-[10px] text-foreground/30">
                {exp.period}
              </div>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold font-mono text-accent">
                    {exp.title}
                  </h3>
                  <p className="text-sm font-mono text-foreground/50">{exp.company}</p>
                </div>

                <ul className="space-y-2 list-disc list-inside text-sm text-foreground/70 leading-relaxed">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 pt-4">
                  {exp.tags.map(tag => (
                    <span key={tag} className="px-2 py-1 bg-accent/10 text-accent font-mono text-[10px] uppercase tracking-wider">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
