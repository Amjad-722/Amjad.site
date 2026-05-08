"use client";

import React from "react";
import { projects } from "@/data/projects";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

export default function AllProjectsPage() {
  return (
    <main className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold font-mono tracking-tight">
              <span className="text-accent">/</span>projects
            </h1>
            <p className="text-foreground/60 font-mono text-sm max-w-md">
              A comprehensive list of my professional work, experimental projects, and open-source contributions.
            </p>
          </div>
          <div className="font-mono text-xs text-foreground/30">
            Total Projects: {projects.length}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="border border-border bg-background group hover:border-accent/50 transition-all flex flex-col"
            >
              <Link href={`/projects/${project.slug}`} className="block overflow-hidden aspect-video relative bg-muted">
                <div className="absolute inset-0 flex items-center justify-center text-accent/20 font-mono text-4xl font-bold group-hover:scale-110 transition-transform duration-500">
                   {project.title}
                </div>
                <div className="absolute inset-0 bg-accent/5 group-hover:bg-transparent transition-colors" />
              </Link>
              
              <div className="p-6 space-y-4 flex-1 flex flex-col">
                <div className="flex gap-2 flex-wrap">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-mono text-foreground/40 border border-border px-2 py-0.5">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <Link href={`/projects/${project.slug}`}>
                  <h3 className="text-xl font-bold font-mono group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                </Link>
                
                <p className="text-foreground/60 text-sm leading-relaxed flex-1">
                  {project.description}
                </p>
                
                <div className="flex gap-3 pt-4">
                  <Link 
                    href={`/projects/${project.slug}`}
                    className="flex items-center gap-2 border border-accent text-accent px-4 py-2 font-mono text-xs hover:bg-accent hover:text-background transition-all w-full justify-center"
                  >
                    View Details <ArrowTopRightOnSquareIcon className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
