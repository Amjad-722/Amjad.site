"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowTopRightOnSquareIcon, CodeBracketIcon } from "@heroicons/react/24/outline";

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
}

const projects: Project[] = [
  {
    title: "Mantid",
    description: "The largest Tailwind CSS community where developers share resources, components, and UI kits.",
    image: "/project1.jpg",
    tags: ["Next.js", "Tailwind", "Supabase", "TypeScript"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Shorten.it",
    description: "A fast and secure URL shortening service with analytics, custom links, and API access.",
    image: "/project2.jpg",
    tags: ["React", "Node.js", "Redis", "Vite"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "C2 Engine",
    description: "An advanced playground for processing Tailwind CSS AST, allowing for real-time visualization.",
    image: "/project3.jpg",
    tags: ["React", "AST", "Monaco Editor", "Next.js"],
    liveUrl: "#",
    githubUrl: "#",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl font-bold font-mono">
            <span className="text-accent">#</span>projects
          </h2>
          <div className="h-px bg-accent/30 flex-1" />
          <Link href="#projects" className="text-foreground/60 hover:text-accent font-mono text-sm transition-colors">
            View all ~~{">"}
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="border border-border bg-background group hover:border-accent/50 transition-all"
            >
              <div className="aspect-video relative overflow-hidden bg-muted">
                {/* Placeholder for project image */}
                <div className="absolute inset-0 flex items-center justify-center text-accent/20 font-mono text-4xl font-bold">
                   {project.title}
                </div>
                <div className="absolute inset-0 bg-accent/5 group-hover:bg-transparent transition-colors" />
              </div>
              
              <div className="p-6 space-y-4">
                <div className="flex gap-2 flex-wrap">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-mono text-foreground/40 border border-border px-2 py-0.5">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-xl font-bold font-mono group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-foreground/60 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex gap-3 pt-2">
                  <Link 
                    href={project.liveUrl}
                    className="flex items-center gap-2 border border-accent text-accent px-4 py-2 font-mono text-xs hover:bg-accent hover:text-background transition-all"
                  >
                    View <ArrowTopRightOnSquareIcon className="w-4 h-4" />
                  </Link>
                  <Link 
                    href={project.githubUrl}
                    className="flex items-center gap-2 border border-border text-foreground/60 px-4 py-2 font-mono text-xs hover:bg-border/50 transition-all"
                  >
                    GitHub <CodeBracketIcon className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
