import Link from "next/link";

const socials = [
  { name: "Github", href: "https://github.com/Amjad-722" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/webdev-amjad/" },
  { name: "Twitter", href: "https://twitter.com/aliamjad" },
  { name: "Discord", href: "https://discord.gg/amjad" },
];

export const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-accent rounded-sm flex items-center justify-center font-mono font-bold text-background text-xs">
                AA
              </div>
              <span className="font-mono font-bold">amjadsite</span>
            </div>
            <p className="text-sm text-foreground/60 font-mono">
              Agentic AI & Full-stack Developer
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold font-mono text-lg">Media</h4>
            <div className="flex gap-4">
              {socials.map((social) => (
                <Link key={social.name} href={social.href} className="text-foreground/40 hover:text-accent transition-colors">
                  <span className="sr-only">{social.name}</span>
                  <div className="capitalize text-sm font-mono">{social.name}</div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center text-foreground/30 text-[10px] font-mono">
          © Copyright 2026. Made with Next.js, Tailwind, and Framer Motion by Amjad Ali.
        </div>
      </div>
    </footer>
  );
};
