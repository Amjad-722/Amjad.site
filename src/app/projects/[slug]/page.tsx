"use client";

import React, { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { projects } from "@/data/projects";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { 
  ArrowLeftIcon, 
  ArrowTopRightOnSquareIcon, 
  CheckCircleIcon,
  CalendarIcon,
  UserIcon,
  CpuChipIcon,
  LightBulbIcon,
  WrenchScrewdriverIcon,
  TrophyIcon,
  ExclamationTriangleIcon,
  FlagIcon
} from "@heroicons/react/24/outline";

type TabType = "goal" | "challenge" | "turning-point" | "process" | "result";

export default function ProjectDetail() {
  const { slug } = useParams();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<TabType>("goal");
  
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center space-y-4">
        <h1 className="text-4xl font-bold font-mono text-accent">404</h1>
        <p className="text-foreground/60">Project not found</p>
        <Link href="/" className="text-accent hover:underline font-mono">Back to Home</Link>
      </div>
    );
  }

  const tabs: { id: TabType; label: string; icon: any }[] = [
    { id: "goal", label: "Goal", icon: FlagIcon },
    { id: "challenge", label: "Challenge", icon: ExclamationTriangleIcon },
    { id: "turning-point", label: "Strategy", icon: LightBulbIcon },
    { id: "process", label: "Process", icon: WrenchScrewdriverIcon },
    { id: "result", label: "Result", icon: TrophyIcon },
  ];

  const contentVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 }
  };

  return (
    <main className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Navigation */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => router.back()}
          className="flex items-center gap-2 text-foreground/60 hover:text-accent transition-colors mb-8 font-mono text-sm"
        >
          <ArrowLeftIcon className="w-4 h-4" />
          back_to_projects
        </motion.button>

        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="space-y-6"
          >
            <div className="space-y-2">
              <div className="flex gap-2 flex-wrap">
                {project.tags.map(tag => (
                  <span key={tag} className="text-[10px] font-mono text-accent border border-accent/30 bg-accent/5 px-2 py-0.5">
                    {tag}
                  </span>
                ))}
              </div>
              <h1 className="text-4xl md:text-6xl font-bold font-mono tracking-tight">
                {project.title}
              </h1>
            </div>

            <p className="text-xl text-foreground/80 leading-relaxed font-light">
              {project.description}
            </p>

            <div className="flex gap-4 pt-4">
              <a 
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-accent text-background px-6 py-3 font-mono text-sm font-bold hover:bg-accent/80 transition-all shadow-[4px_4px_0px_0px_rgba(0,255,153,0.2)]"
              >
                LIVE PREVIEW <ArrowTopRightOnSquareIcon className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="relative aspect-video bg-muted border border-border overflow-hidden group shadow-2xl"
          >
            <div className="absolute inset-0 flex items-center justify-center text-accent/10 font-mono text-6xl font-bold select-none">
              {project.title}
            </div>
            <div className="absolute inset-0 bg-gradient-to-tr from-accent/5 via-transparent to-transparent pointer-events-none" />
            <div className="absolute inset-0 border border-white/5 pointer-events-none" />
          </motion.div>
        </div>

        {/* Tabs and Content */}
        <div className="grid lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2 space-y-8">
            {/* Tab Navigation */}
            <div className="flex flex-wrap gap-2 border-b border-border pb-4">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2 font-mono text-xs transition-all relative ${
                    activeTab === tab.id 
                      ? "text-accent border border-accent bg-accent/5" 
                      : "text-foreground/40 border border-transparent hover:border-border hover:text-foreground/60"
                  }`}
                >
                  <tab.icon className={`w-4 h-4 ${activeTab === tab.id ? "text-accent" : "text-foreground/20"}`} />
                  {tab.label}
                  {activeTab === tab.id && (
                    <motion.div 
                      layoutId="activeTab"
                      className="absolute -bottom-[17px] left-0 right-0 h-0.5 bg-accent"
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="min-h-[400px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  variants={contentVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  transition={{ duration: 0.2 }}
                >
                  {activeTab === "goal" && (
                    <section className="space-y-6">
                      <h2 className="text-2xl font-bold font-mono flex items-center gap-3">
                        <span className="text-accent">01.</span> Client Goal
                      </h2>
                      <p className="text-foreground/70 text-lg leading-relaxed">
                        {project.clientGoal}
                      </p>
                    </section>
                  )}

                  {activeTab === "challenge" && (
                    <section className="space-y-6">
                      <h2 className="text-2xl font-bold font-mono flex items-center gap-3">
                        <span className="text-accent">02.</span> Client Challenge
                      </h2>
                      <div className="grid gap-4">
                        {project.clientChallenge.map((challenge, i) => (
                          <div key={i} className="flex items-start gap-3 p-4 border border-border bg-muted/30 group hover:border-accent/20 transition-colors">
                            <span className="text-accent/50 mt-0.5">•</span>
                            <span className="text-foreground/80 text-sm">{challenge}</span>
                          </div>
                        ))}
                      </div>
                    </section>
                  )}

                  {activeTab === "turning-point" && (
                    <section className="space-y-6">
                      <h2 className="text-2xl font-bold font-mono flex items-center gap-3">
                        <span className="text-accent">03.</span> The Turning Point
                      </h2>
                      <div className="p-8 border-l-2 border-accent/20 bg-accent/5 backdrop-blur-sm">
                        <p className="text-foreground/80 text-xl italic leading-relaxed font-light">
                          "{project.turningPoint}"
                        </p>
                      </div>
                    </section>
                  )}

                  {activeTab === "process" && (
                    <section className="space-y-8">
                      <h2 className="text-2xl font-bold font-mono flex items-center gap-3">
                        <span className="text-accent">04.</span> The Process
                      </h2>
                      <div className="space-y-6">
                        {project.process.map((step, i) => (
                          <div key={i} className="group relative pl-8 pb-8 border-l border-border last:pb-0 last:border-0">
                            <div className="absolute left-[-5px] top-0 w-[9px] h-[9px] bg-accent group-hover:scale-150 transition-transform" />
                            <h3 className="text-lg font-bold font-mono mb-2 group-hover:text-accent transition-colors">{step.title}</h3>
                            <p className="text-foreground/60 text-sm leading-relaxed">{step.description}</p>
                          </div>
                        ))}
                      </div>
                    </section>
                  )}

                  {activeTab === "result" && (
                    <section className="space-y-6">
                      <h2 className="text-2xl font-bold font-mono flex items-center gap-3">
                        <span className="text-accent">05.</span> The Result
                      </h2>
                      <div className="grid gap-4">
                        {project.result.map((res, i) => (
                          <div key={i} className="flex items-center gap-4 p-5 border border-accent/10 bg-accent/5 group hover:bg-accent/10 transition-colors">
                            <CheckCircleIcon className="w-6 h-6 text-accent shrink-0" />
                            <span className="text-foreground/90 font-medium">{res}</span>
                          </div>
                        ))}
                      </div>
                    </section>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Sidebar Info */}
          <motion.aside
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="p-8 border border-border bg-background/50 backdrop-blur-sm space-y-8 sticky top-32">
              <div className="space-y-2">
                <h3 className="text-sm font-mono text-foreground/40 uppercase tracking-widest flex items-center gap-2">
                  <CpuChipIcon className="w-4 h-4" /> Technologies
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map(tech => (
                    <span key={tech} className="text-xs font-mono border border-border px-2 py-1 bg-background">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-sm font-mono text-foreground/40 uppercase tracking-widest flex items-center gap-2">
                  <UserIcon className="w-4 h-4" /> My Role
                </h3>
                <p className="font-mono text-accent">{project.role}</p>
              </div>

              <div className="space-y-2">
                <h3 className="text-sm font-mono text-foreground/40 uppercase tracking-widest flex items-center gap-2">
                  <CalendarIcon className="w-4 h-4" /> Project Timeline
                </h3>
                <p className="font-mono text-foreground/70">{project.timeline}</p>
              </div>

              <div className="pt-4 border-t border-border">
                <Link 
                  href="/#projects" 
                  className="w-full py-3 flex items-center justify-center gap-2 border border-accent text-accent font-mono text-xs hover:bg-accent hover:text-background transition-all"
                >
                  Explore more projects
                </Link>
              </div>
            </div>
          </motion.aside>
        </div>

        {/* View All Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 pt-12 border-t border-border flex justify-center"
        >
          <Link 
            href="/projects"
            className="group flex items-center gap-3 px-8 py-4 border border-accent text-accent font-mono text-sm hover:bg-accent hover:text-background transition-all"
          >
            VIEW ALL PROJECTS 
            <span className="group-hover:translate-x-2 transition-transform">~~{">"}</span>
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
