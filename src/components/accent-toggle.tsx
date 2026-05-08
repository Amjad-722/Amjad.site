"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SwatchIcon } from "@heroicons/react/24/outline";

export type AccentColor = "cyan" | "indigo" | "rose" | "emerald" | "amber";

interface AccentOption {
  id: AccentColor;
  label: string;
  cssVar: string;
}

const accents: AccentOption[] = [
  { id: "cyan", label: "Cyber Cyan", cssVar: "var(--clr-cyan)" },
  { id: "indigo", label: "Electric Indigo", cssVar: "var(--clr-indigo)" },
  { id: "rose", label: "Rose Luxe", cssVar: "var(--clr-rose)" },
  { id: "emerald", label: "Emerald Luxe", cssVar: "var(--clr-emerald)" },
  { id: "amber", label: "Amber Glow", cssVar: "var(--clr-amber)" },
];

export const AccentToggle = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeAccent, setActiveAccent] = useState<AccentColor>("indigo");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = (localStorage.getItem("amjad-accent") as AccentColor) || "indigo";
    setActiveAccent(saved);
    document.documentElement.setAttribute("data-accent", saved);
  }, []);

  const handleAccentChange = (id: AccentColor) => {
    setActiveAccent(id);
    document.documentElement.setAttribute("data-accent", id);
    localStorage.setItem("amjad-accent", id);
    setIsOpen(false);
  };

  if (!mounted) return null;

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-10 h-10 flex items-center justify-center border border-border hover:border-accent transition-colors group relative"
        aria-label="Change accent color"
      >
        <SwatchIcon className="w-5 h-5 text-accent" />
        <div className="absolute inset-0 bg-accent-muted opacity-0 group-hover:opacity-100 transition-opacity" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <div 
              className="fixed inset-0 z-40" 
              onClick={() => setIsOpen(false)} 
            />
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              className="absolute top-full right-0 mt-2 z-50 p-2 bg-background border border-border shadow-2xl flex flex-col gap-2 backdrop-blur-md"
            >
              {accents.map((accent) => (
                <button
                  key={accent.id}
                  onClick={() => handleAccentChange(accent.id)}
                  className={`w-8 h-8 rounded-full border-2 transition-all flex items-center justify-center relative overflow-hidden ${
                    activeAccent === accent.id ? "border-accent scale-110 shadow-lg" : "border-transparent hover:scale-110"
                  }`}
                  style={{ backgroundColor: accent.cssVar }}
                  title={accent.label}
                >
                  {activeAccent === accent.id && (
                    <div className="w-2 h-2 bg-white rounded-full shadow-[0_0_5px_rgba(0,0,0,0.3)]" />
                  )}
                </button>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};
