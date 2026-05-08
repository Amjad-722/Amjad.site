"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { 
  BriefcaseIcon, 
  CpuChipIcon, 
  HeartIcon, 
  CameraIcon,
  ArrowLeftIcon
} from "@heroicons/react/24/outline";

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-foreground/40 hover:text-accent font-mono text-sm mb-12 transition-colors group"
        >
          <ArrowLeftIcon className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          back_to_home
        </Link>

        {/* Header */}
        <header className="mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold font-mono mb-6"
          >
            <span className="text-accent">/</span>about-me
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-foreground/60 font-mono leading-relaxed max-w-2xl"
          >
            I&apos;m a front-end developer based in Pakistan, passionate about building 
            intelligent interfaces and solving complex digital problems.
          </motion.p>
        </header>

        <div className="space-y-32">
          {/* Who am I? */}
          <section className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-accent">
                <HeartIcon className="w-6 h-6" />
                <h2 className="text-xl font-bold font-mono uppercase tracking-widest">Who am I?</h2>
              </div>
              <p className="text-foreground/80 leading-relaxed">
                Hello, I&apos;m Amjad! My journey into the world of web development started with a curiosity 
                about how things work behind the screen. Today, I specialize in creating high-performance 
                web applications with a focus on user experience and clean code.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                I love working with modern technologies like Next.js and Supabase, and I&apos;m currently 
                exploring the frontier of Agentic AI to build smarter, more autonomous web tools.
              </p>
            </div>
            <div className="relative aspect-square border border-border bg-muted/20 overflow-hidden group">
               {/* User can replace this with their own photo */}
               <div className="absolute inset-0 flex items-center justify-center text-accent/20 font-mono text-4xl font-bold opacity-10">
                 [ MY PHOTO ]
               </div>
               <div className="absolute inset-0 bg-accent/5 group-hover:bg-transparent transition-colors" />
            </div>
          </section>

          {/* Career Section */}
          <section className="space-y-12">
            <div className="flex items-center gap-4 text-accent">
              <BriefcaseIcon className="w-6 h-6" />
              <h2 className="text-xl font-bold font-mono uppercase tracking-widest">Career Journey</h2>
            </div>
            <div className="space-y-8 border-l border-border pl-8 ml-3">
              {[
                {
                  year: "2024 - Present",
                  title: "Front-end Developer & AI Specialist",
                  desc: "Focusing on building Agentic AI applications and high-performance React dashboards for global clients on Upwork."
                },
                {
                  year: "2023",
                  title: "Full-stack Developer (Freelance)",
                  desc: "Successfully delivered multiple MVPs using Lovable, Supabase, and Next.js, specializing in rapid prototyping and UI polish."
                },
                {
                  year: "2022",
                  title: "Self-taught Developer Journey",
                  desc: "Started learning web development, mastering HTML, CSS, and JavaScript before diving deep into the React ecosystem."
                }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative"
                >
                  <div className="absolute -left-[41px] top-1.5 w-4 h-4 bg-background border-2 border-accent rounded-full" />
                  <span className="text-sm font-mono text-accent mb-2 block">{item.year}</span>
                  <h3 className="text-xl font-bold font-mono mb-2">{item.title}</h3>
                  <p className="text-foreground/60 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* My Setup / Tech Stack */}
          <section className="space-y-12">
            <div className="flex items-center gap-4 text-accent">
              <CpuChipIcon className="w-6 h-6" />
              <h2 className="text-xl font-bold font-mono uppercase tracking-widest">My Setup</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {[
                { label: "OS", value: "Linux (Ubuntu/Arch)" },
                { label: "Editor", value: "VS Code / Cursor" },
                { label: "Terminal", value: "Alacritty + Zsh" },
                { label: "Browser", value: "Brave / Chrome" },
                { label: "Design", value: "Figma" },
                { label: "Hardware", value: "Custom Workstation" }
              ].map((item, i) => (
                <div key={i} className="p-6 border border-border bg-muted/10 hover:border-accent/30 transition-colors group">
                  <span className="text-[10px] font-mono text-foreground/40 uppercase tracking-widest block mb-2 group-hover:text-accent transition-colors">
                    {item.label}
                  </span>
                  <span className="font-mono text-sm font-bold">{item.value}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Stuff I Like */}
          <section className="space-y-12">
            <div className="flex items-center gap-4 text-accent">
              <CameraIcon className="w-6 h-6" />
              <h2 className="text-xl font-bold font-mono uppercase tracking-widest">Life Outside Code</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 border border-border bg-accent/5 space-y-4 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <HeartIcon className="w-16 h-16" />
                </div>
                <h3 className="text-xl font-bold font-mono">What I Do for Fun</h3>
                <ul className="space-y-3 font-mono text-sm text-foreground/70">
                  <li className="flex items-center gap-3">
                    <span className="text-accent">~~{">"}</span> Exploring New Tech
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-accent">~~{">"}</span> Contributing to Open Source
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-accent">~~{">"}</span> Traveling & Nature
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-accent">~~{">"}</span> Strategic Gaming
                  </li>
                </ul>
              </div>
              <div className="relative border border-border bg-muted/20 flex items-center justify-center p-12 overflow-hidden">
                <div className="text-center space-y-4">
                  <p className="font-mono text-sm italic text-foreground/40">
                    &ldquo;Code is my craft, but curiosity is my fuel.&rdquo;
                  </p>
                  <div className="font-mono text-accent text-xs">- Amjad Ali</div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Footer CTA */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-32 pt-20 border-t border-border text-center space-y-8"
        >
          <h2 className="text-3xl font-bold font-mono">Want to work together?</h2>
          <Link 
            href="/#contact"
            className="inline-block px-12 py-4 bg-accent text-background font-bold font-mono hover:bg-accent/90 transition-all border-glow"
          >
            LET&apos;S CHAT !!
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
