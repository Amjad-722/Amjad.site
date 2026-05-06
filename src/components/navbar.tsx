"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Employment", href: "#employment" },
  { name: "Plans", href: "#plans" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
        scrolled ? "bg-background/80 backdrop-blur-md border-b border-border py-3" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-accent rounded-sm flex items-center justify-center font-mono font-bold text-background group-hover:scale-110 transition-transform">
            AA
          </div>
          <span className="font-mono text-xl font-bold tracking-tighter">amjadsite</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-mono text-foreground/70 hover:text-accent transition-colors relative group"
            >
              <span className="text-accent/50 mr-1">#</span>
              {link.name.toLowerCase()}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full" />
            </Link>
          ))}
          <Link
            href="#contact"
            className="px-4 py-2 border border-accent text-accent font-mono text-sm hover:bg-accent hover:text-background transition-all"
          >
            Hire me!
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <XMarkIcon className="w-8 h-8" /> : <Bars3Icon className="w-8 h-8" />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-background border-b border-border p-6 md:hidden flex flex-col gap-4"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-mono text-foreground/70 hover:text-accent"
              >
                <span className="text-accent/50 mr-2">#</span>
                {link.name.toLowerCase()}
              </Link>
            ))}
            <Link
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="w-full py-3 border border-accent text-accent font-mono text-center hover:bg-accent hover:text-background transition-all"
            >
              Hire me!
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
