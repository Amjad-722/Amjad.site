"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 px-6 overflow-hidden grid-bg">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1 space-y-6"
        >
          <div className="space-y-2">
            <h1 className="text-4xl md:text-6xl font-bold font-mono">
              I&apos;m <span className="text-accent text-glow">Amjad Ali</span>,
              <br />
              a <span className="text-accent/80">front-end developer</span>
            </h1>
          </div>
          
          <p className="text-foreground/60 text-lg max-w-xl leading-relaxed">
            I build fast, responsive, and pixel-perfect Next.js apps. 
            High efficiency, clean code, zero-limit deadlines.
          </p>

          <div className="flex gap-4">
            <button className="px-8 py-3 bg-accent text-background font-mono font-bold hover:bg-accent/90 transition-all border-glow">
              Contact me !!
            </button>
            <button className="px-8 py-3 border border-border text-foreground/70 font-mono hover:bg-border/50 transition-all">
              View Skills
            </button>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative w-72 h-80 md:w-[450px] md:h-[550px]"
        >
          {/* Animated decorative rings */}
          <div className="absolute inset-0 border-2 border-accent/20 rounded-2xl -rotate-3 scale-105 animate-[spin_20s_linear_infinite]" />
          <div className="absolute inset-0 border-2 border-accent/10 rounded-2xl rotate-6 scale-110 animate-[spin_15s_linear_infinite_reverse]" />
          
          {/* Main image container with glassmorphism and glow */}
          <div className="relative w-full h-full overflow-hidden border border-border rounded-2xl group shadow-2xl shadow-accent/20">
            <Image
              src="/hero-portrait.jpg"
              alt="Amjad Ali"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 450px"
              className="object-cover object-top transition-all duration-700 group-hover:scale-105"
              priority
            />
            
            {/* Subtle overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />
            
            {/* Glow effect on hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-accent/5 pointer-events-none" />
          </div>

          {/* Status Badge */}
          <div className="absolute -bottom-6 right-4 md:-right-8 bg-background/80 backdrop-blur-md border border-border px-6 py-3 rounded-xl shadow-xl flex items-center gap-3">
            <div className="relative">
              <div className="w-3 h-3 bg-green-500 rounded-full" />
              <div className="absolute inset-0 w-3 h-3 bg-green-500 rounded-full animate-ping opacity-75" />
            </div>
            <div className="flex flex-col">
              <span className="font-mono text-[10px] text-foreground/40 uppercase tracking-widest leading-none mb-1">Availability</span>
              <span className="font-mono text-xs font-bold text-foreground">Available for Projects</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Background Quote */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="max-w-4xl mx-auto mt-20 text-center relative px-6"
      >
        <div className="absolute -top-10 left-0 text-8xl font-serif text-accent/10">&quot;</div>
        <p className="text-xl md:text-2xl font-mono text-foreground/80 italic">
          &ldquo;With a developer who thinks like a user, builds like an engineer, and delivers like a professional.&rdquo;
        </p>
        <div className="mt-4 font-mono text-accent">- Amjad Ali</div>
      </motion.div>
    </section>
  );
};
