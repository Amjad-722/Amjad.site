"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckIcon } from "@heroicons/react/24/outline";

const plans = [
  {
    name: "Starter",
    price: "$500",
    description: "Perfect for small projects and individuals looking to get started.",
    features: [
      "Modern Front-end (React/Next.js)",
      "Responsive Design",
      "SEO Optimization",
      "Basic Animations",
      "1 Week Support",
    ],
    buttonText: "Let's Talk",
  },
  {
    name: "Pro / Custom",
    price: "$Custom",
    description: "For larger businesses and complex applications with advanced needs.",
    features: [
      "Full-stack Development",
      "Advanced State Management",
      "Custom UI/UX Design",
      "Performance Optimization",
      "Priority Support",
      "Cloud Infrastructure Setup",
    ],
    buttonText: "Make a Free Call",
    highlight: true,
  },
];

export const Plans = () => {
  return (
    <section id="plans" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-16">
          <h2 className="text-3xl font-bold font-mono">
            <span className="text-accent">#</span>plans
          </h2>
          <div className="h-px bg-accent/30 w-32" />
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`border p-8 bg-background flex flex-col ${
                plan.highlight ? "border-accent shadow-[0_0_30px_var(--accent-muted)]" : "border-border"
              }`}
            >
              <div className="mb-6">
                <h3 className="text-2xl font-bold font-mono mb-2">{plan.name}</h3>
                <div className="text-3xl font-bold font-mono text-accent mb-4">{plan.price}</div>
                <p className="text-sm text-foreground/50 leading-relaxed min-h-[3rem]">
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-4 mb-8 flex-1">
                {plan.features.map(feature => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-foreground/70">
                    <CheckIcon className="w-5 h-5 text-accent shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button 
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className={`w-full py-3 font-mono font-bold transition-all ${
                plan.highlight 
                  ? "bg-accent text-background hover:bg-accent/90" 
                  : "border border-border text-foreground/60 hover:bg-border/50"
              }`}>
                {plan.buttonText}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
