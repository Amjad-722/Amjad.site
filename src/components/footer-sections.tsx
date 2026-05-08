"use client";

import React from "react";
import { motion } from "framer-motion";
import { StarIcon } from "@heroicons/react/24/solid";
import { CheckIcon } from "@heroicons/react/24/outline";

const testimonials = [
  {
    name: "Upwork Client",
    role: "System Optimization & MVP Development",
    content: "Working with Amjad was smooth and professional. He delivered the WhatsApp end-to-end messaging flow successfully, integrated Stripe, improved performance, and deployed the app on Vercel. Communication was clear and support was great.",
    stars: 5,
  },
  {
    name: "Upwork Client",
    role: "Stripe Integration for E-Commerce",
    content: "It was great working with Amjad. He is very responsive and easy to work with. He is brilliant in his technical skills and understands requirements quickly. He successfully implemented Stripe on my Lovable website.",
    stars: 5,
  },
  {
    name: "Upwork Client",
    role: "Lovable Expert for Accounting LLM",
    content: "Amjad was super reliable and got our UI off to a great start. Recommend for Lovable projects. Thanks again!",
    stars: 5,
  },
  {
    name: "Upwork Client",
    role: "Lovable Development Project",
    content: "Amjad was very helpful and efficient in helping me with technical issues and development on my Lovable project. Definitely recommend.",
    stars: 5,
  },
];

export const Testimonials = () => {
  const [active, setActive] = React.useState(0);

  const next = React.useCallback(() => {
    setActive((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = React.useCallback(() => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  React.useEffect(() => {
    const timer = setInterval(() => {
      next();
    }, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section id="testimonials" className="py-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-16">
          <h2 className="text-3xl font-bold font-mono">
            <span className="text-accent">#</span>testimonials
          </h2>
          <div className="h-px bg-accent/30 w-32" />
        </div>

        <div className="relative h-[450px] flex items-center justify-center">
          {/* Controls */}
          <div className="absolute inset-0 flex items-center justify-between z-30 px-4 md:px-0 pointer-events-none">
            <button 
              onClick={prev}
              className="w-12 h-12 flex items-center justify-center border border-border bg-background/80 backdrop-blur-md hover:border-accent transition-colors pointer-events-auto group"
            >
              <div className="w-2 h-2 border-l border-t border-foreground group-hover:border-accent -rotate-45" />
            </button>
            <button 
              onClick={next}
              className="w-12 h-12 flex items-center justify-center border border-border bg-background/80 backdrop-blur-md hover:border-accent transition-colors pointer-events-auto group"
            >
              <div className="w-2 h-2 border-r border-t border-foreground group-hover:border-accent rotate-45" />
            </button>
          </div>

          <div className="relative w-full max-w-5xl h-full flex items-center justify-center">
            {testimonials.map((t, index) => {
              const isActive = index === active;
              const isPrev = index === (active - 1 + testimonials.length) % testimonials.length;
              const isNext = index === (active + 1) % testimonials.length;

              if (!isActive && !isPrev && !isNext) return null;

              return (
                <motion.div
                  key={index}
                  initial={false}
                  animate={{
                    x: isActive ? 0 : isPrev ? "-75%" : "75%",
                    scale: isActive ? 1 : 0.85,
                    opacity: isActive ? 1 : 0.5,
                    zIndex: isActive ? 20 : 10,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 26,
                  }}
                  className={`absolute w-full max-w-xl border border-border p-8 bg-background shadow-2xl transition-all ${
                    isActive ? "border-accent/30" : "grayscale pointer-events-none blur-[1px]"
                  }`}
                >
                  <div className="flex gap-1 mb-4">
                    {[...Array(t.stars)].map((_, i) => (
                      <StarIcon key={i} className="w-5 h-5 text-accent" />
                    ))}
                  </div>
                  
                  <p className="text-lg md:text-xl text-foreground/80 mb-8 italic leading-relaxed">
                    &ldquo;{t.content}&rdquo;
                  </p>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-accent/10 border border-accent/20 rounded-full flex items-center justify-center font-mono font-bold text-accent">
                      {t.name.charAt(0)}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold font-mono text-sm">{t.name}</h4>
                      <p className="text-[10px] text-foreground/40 font-mono uppercase tracking-tighter">{t.role}</p>
                    </div>
                    {isActive && (
                      <div className="hidden sm:block">
                        <span className="text-[10px] font-mono bg-accent/10 text-accent px-2 py-1 border border-accent/20">
                          UPWORK VERIFIED
                        </span>
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`w-2 h-2 border border-accent/30 transition-all ${
                i === active ? "bg-accent w-8" : "bg-transparent hover:bg-accent/20"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export const Contact = () => {
  const [status, setStatus] = React.useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => setStatus("sent"), 2000);
  };

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-16">
          <h2 className="text-3xl font-bold font-mono">
            <span className="text-accent">#</span>contacts
          </h2>
          <div className="h-px bg-accent/30 w-32" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold font-mono">Let&apos;s build something great</h3>
              <p className="text-foreground/60 leading-relaxed max-w-md">
                I&apos;m currently seeking front-end developer opportunities and freelance projects. 
                If you have any questions or just want to say hi, feel free to contact me!
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="border border-border p-6 space-y-4 bg-background/50 backdrop-blur-sm">
                <h4 className="font-bold font-mono text-accent">Message me here</h4>
                <div className="space-y-2">
                  <a href="mailto:aliamjad722ee@gmail.com" className="block text-sm text-foreground/60 hover:text-accent font-mono transition-colors">
                     Email: aliamjad722ee@gmail.com
                  </a>
                  <a href="#" className="block text-sm text-foreground/60 hover:text-accent font-mono transition-colors">
                     Discord: Amjad#1234
                  </a>
                </div>
              </div>

              <div className="border border-border p-6 space-y-4 bg-background/50 backdrop-blur-sm">
                <h4 className="font-bold font-mono text-accent">Socials</h4>
                <div className="space-y-2">
                  <a href="https://twitter.com/aliamjad" className="block text-sm text-foreground/60 hover:text-accent font-mono transition-colors">
                     Twitter: @aliamjad
                  </a>
                  <a href="https://linkedin.com/in/aliamjad722" className="block text-sm text-foreground/60 hover:text-accent font-mono transition-colors">
                     LinkedIn: /in/aliamjad722
                  </a>
                </div>
              </div>
            </div>

            <div className="hidden lg:flex items-center justify-center p-12">
               <div className="relative w-48 h-48 border border-accent/20 flex items-center justify-center">
                  <div className="w-32 h-32 border border-accent/10 absolute rotate-45 animate-pulse" />
                  <div className="w-32 h-32 border border-accent/10 absolute -rotate-45" />
                  <div className="text-accent/20 font-mono text-8xl font-bold opacity-10 select-none">@</div>
               </div>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="border border-border p-8 bg-background relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 -mr-12 -mt-12 rounded-full blur-3xl group-hover:bg-accent/10 transition-colors" />
            
            {status === "sent" ? (
              <div className="h-full flex flex-col items-center justify-center space-y-4 py-12">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center">
                  <CheckIcon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold font-mono">Message Sent!</h3>
                <p className="text-foreground/50 text-center font-mono text-sm">
                  Thank you for reaching out. I&apos;ll get back to you soon.
                </p>
                <button 
                  onClick={() => setStatus("idle")}
                  className="mt-4 text-accent font-mono text-xs hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 relative">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-mono text-foreground/50 uppercase tracking-widest">Name</label>
                    <input 
                      required
                      type="text" 
                      placeholder="Your name"
                      className="w-full bg-background border border-border px-4 py-3 font-mono text-sm focus:border-accent focus:outline-none transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-mono text-foreground/50 uppercase tracking-widest">Email</label>
                    <input 
                      required
                      type="email" 
                      placeholder="Your email"
                      className="w-full bg-background border border-border px-4 py-3 font-mono text-sm focus:border-accent focus:outline-none transition-colors"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-xs font-mono text-foreground/50 uppercase tracking-widest">Subject</label>
                  <input 
                    required
                    type="text" 
                    placeholder="Project Inquiry"
                    className="w-full bg-background border border-border px-4 py-3 font-mono text-sm focus:border-accent focus:outline-none transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-mono text-foreground/50 uppercase tracking-widest">Message</label>
                  <textarea 
                    required
                    rows={4}
                    placeholder="Tell me about your project..."
                    className="w-full bg-background border border-border px-4 py-3 font-mono text-sm focus:border-accent focus:outline-none transition-colors resize-none"
                  />
                </div>

                <button 
                  disabled={status === "sending"}
                  className="w-full py-4 bg-accent text-background font-mono font-bold hover:bg-accent/90 transition-all disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  {status === "sending" ? (
                    <>
                      <div className="w-4 h-4 border-2 border-background/30 border-t-background rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Send Message !!"
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
