"use client";

import React from "react";
import { motion } from "framer-motion";
import { StarIcon } from "@heroicons/react/24/solid";

const testimonials = [
  {
    name: "Ahmad Suleiman",
    role: "CEO at TechFlow",
    content: "Imran delivered a high-quality dashboard that exceeded our expectations. His attention to detail is remarkable.",
    stars: 5,
  },
  {
    name: "Sarah Jenkins",
    role: "Product Manager",
    content: "Perfect UI/UX implementation. The site is incredibly fast and looks stunning on all devices.",
    stars: 5,
  },
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-16">
          <h2 className="text-3xl font-bold font-mono">
            <span className="text-accent">#</span>testimonials
          </h2>
          <div className="h-px bg-accent/30 w-32" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="border border-border p-8 bg-background relative"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(t.stars)].map((_, i) => (
                  <StarIcon key={i} className="w-5 h-5 text-accent" />
                ))}
              </div>
              
              <p className="text-lg text-foreground/80 mb-6 italic">
                &ldquo;{t.content}&rdquo;
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center font-mono font-bold text-accent">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold font-mono text-sm">{t.name}</h4>
                  <p className="text-xs text-foreground/50">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-16">
          <h2 className="text-3xl font-bold font-mono">
            <span className="text-accent">#</span>contacts
          </h2>
          <div className="h-px bg-accent/30 w-32" />
        </div>

        <div className="flex flex-col md:flex-row gap-16">
          <div className="flex-1 space-y-6">
            <p className="text-foreground/60 leading-relaxed max-w-md">
              I&apos;m currently seeking front-end developer opportunities and freelance projects. 
              If you have any questions or just want to say hi, feel free to contact me!
            </p>
            
            <div className="border border-border p-6 space-y-4 max-w-sm">
              <h4 className="font-bold font-mono text-accent">Message me here</h4>
              <div className="space-y-2">
                <a href="mailto:imran@example.com" className="block text-sm text-foreground/60 hover:text-accent font-mono transition-colors">
                   Email: imran@example.com
                </a>
                <a href="#" className="block text-sm text-foreground/60 hover:text-accent font-mono transition-colors">
                   Twitter: @imranbaithan
                </a>
                <a href="#" className="block text-sm text-foreground/60 hover:text-accent font-mono transition-colors">
                   Discord: Imran#1234
                </a>
              </div>
            </div>
          </div>

          {/* Decorative Pattern or simple social links */}
          <div className="flex-1 hidden md:flex items-center justify-center">
            <div className="relative w-64 h-64 border border-accent/20 flex items-center justify-center">
               <div className="w-48 h-48 border border-accent/10 absolute rotate-12" />
               <div className="w-48 h-48 border border-accent/10 absolute -rotate-12" />
               <div className="text-accent/20 font-mono text-9xl font-bold opacity-10 select-none">@</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
