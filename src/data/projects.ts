export interface ProjectProcess {
  title: string;
  description: string;
}

export interface Project {
  slug: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl: string;
  clientGoal: string;
  clientChallenge: string[];
  turningPoint: string;
  process: ProjectProcess[];
  result: string[];
  technologies: string[];
  role: string;
  timeline: string;
}

export const projects: Project[] = [
  {
    slug: "mantid",
    title: "Mantid",
    description: "The largest Tailwind CSS community where developers share resources, components, and UI kits.",
    image: "/project1.jpg",
    tags: ["Next.js", "Tailwind", "Supabase", "TypeScript"],
    liveUrl: "https://mantid.dev",
    clientGoal: "The objective was to create a centralized, high-performance hub for the Tailwind CSS community that facilitates seamless sharing and discovery of UI components.",
    clientChallenge: [
      "Fragmented community resources",
      "Lack of real-time preview capabilities for shared components",
      "Difficult discovery of high-quality UI kits",
      "Performance bottlenecks with thousands of concurrent users"
    ],
    turningPoint: "Instead of just a static directory, I architected a real-time playground system that allowed users to see changes instantly, fundamentally changing how the community interacts with code.",
    process: [
      {
        title: "Architecture Design",
        description: "Implemented a scalable backend using Supabase and optimized Next.js server components for peak performance."
      },
      {
        title: "UI/UX System",
        description: "Developed a custom design system based on Tailwind CSS that ensures consistency across the entire platform."
      },
      {
        title: "Real-time Playground",
        description: "Built an AST-based preview engine that renders Tailwind components in real-time within the browser."
      }
    ],
    result: [
      "Modern and responsive UI matching community standards",
      "50% faster component discovery compared to previous solutions",
      "Supports over 10k monthly active users",
      "Seamless integration with modern development workflows"
    ],
    technologies: ["Next.js 14", "Tailwind CSS", "Supabase Auth & DB", "Framer Motion", "TypeScript"],
    role: "Lead Frontend Developer",
    timeline: "Jan 2024 - Present"
  },
  {
    slug: "restaurant-site",
    title: "Gourmet Garden",
    description: "A modern and fully responsive restaurant website delivering a smooth user experience and fast performance.",
    image: "/project2.jpg",
    tags: ["React", "Lovable.dev", "Tailwind", "Figma"],
    liveUrl: "https://gourmetgarden.com",
    clientGoal: "The client wanted a modern and fully responsive restaurant website that matched their Figma design and delivered a smooth user experience across all devices.",
    clientChallenge: [
      "Inconsistent UI across pages",
      "Poor mobile responsiveness",
      "Layout and spacing problems",
      "Weak visual hierarchy",
      "Slow and unoptimized sections",
      "Design mismatch between Figma and development"
    ],
    turningPoint: "Instead of making small UI fixes, I redesigned and optimized the entire frontend experience to create a cleaner and more polished website, focusing on responsive layouts and smooth interactions.",
    process: [
      {
        title: "UI/UX Improvements",
        description: "Improved the overall website layout, spacing, typography, and responsiveness for a cleaner user experience."
      },
      {
        title: "Lovable Development",
        description: "Built and customized the website using Lovable.dev for fast and scalable frontend development."
      },
      {
        title: "Figma Design Matching",
        description: "Carefully aligned the website UI with the client's Figma design system and branding."
      },
      {
        title: "Frontend Optimization",
        description: "Improved frontend structure and loading performance for smoother navigation and faster rendering."
      }
    ],
    result: [
      "Modern and responsive UI that works across all devices",
      "Accurate implementation of Figma designs",
      "Significantly faster loading and performance",
      "Stronger brand identity for the restaurant",
      "Cleaner and more professional layout"
    ],
    technologies: ["React", "Tailwind CSS", "Framer Motion", "Lovable.dev", "Vite"],
    role: "Full Stack Developer",
    timeline: "March 2024 - April 2024"
  },
  {
    slug: "c2-engine",
    title: "C2 Engine",
    description: "An advanced playground for processing Tailwind CSS AST, allowing for real-time visualization.",
    image: "/project3.jpg",
    tags: ["React", "AST", "Monaco Editor", "Next.js"],
    liveUrl: "https://c2engine.io",
    clientGoal: "To provide developers with a deep visual understanding of how Tailwind CSS classes are processed into styles through AST inspection.",
    clientChallenge: [
      "Complexity in debugging Tailwind JIT behavior",
      "No visual representation of the CSS transformation process",
      "Slow iteration loops for plugin developers",
      "Steep learning curve for understanding Tailwind internals"
    ],
    turningPoint: "I realized that developers didn't just need code, they needed a visual map. I shifted the focus from a text-based debugger to a full interactive tree visualization.",
    process: [
      {
        title: "Compiler Integration",
        description: "Wrapped the PostCSS and Tailwind compilers in a web worker to ensure the UI remains responsive during processing."
      },
      {
        title: "Visualization Engine",
        description: "Built a custom D3.js implementation to map the AST nodes into an interactive, zoomable diagram."
      },
      {
        title: "Editor Customization",
        description: "Configured Monaco Editor with custom language support for Tailwind classes and real-time error checking."
      }
    ],
    result: [
      "Real-time AST visualization that simplifies debugging",
      "Enabled faster development for Tailwind plugin authors",
      "Highly interactive and responsive developer tool",
      "Open-sourced and adopted by core community members"
    ],
    technologies: ["Next.js", "PostCSS", "Monaco Editor", "D3.js", "Web Workers"],
    role: "Project Architect",
    timeline: "May 2023 - Aug 2023"
  },
];
