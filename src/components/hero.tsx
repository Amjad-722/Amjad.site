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
              I&apos;m <span className="text-accent text-glow">Imran Baithan</span>,
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
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative w-64 h-64 md:w-96 md:h-96"
        >
          {/* Decorative elements */}
          <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-accent/50" />
          <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-accent/50" />
          
          <div className="relative w-full h-full overflow-hidden border border-border rounded-lg group">
            <Image
              src="/hero-portrait.png"
              alt="Imran Baithan"
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-500 scale-110"
              priority
            />
            <div className="absolute inset-0 bg-accent/10 group-hover:bg-transparent transition-colors" />
          </div>

          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-max bg-background border border-border px-4 py-2 flex items-center gap-2">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
            <span className="font-mono text-xs text-foreground/60">Currently working on <span className="text-foreground">Portfolio</span></span>
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
        <div className="mt-4 font-mono text-accent">- M. Imran Baithan</div>
      </motion.div>
    </section>
  );
};
