import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-accent rounded-sm flex items-center justify-center font-mono font-bold text-background text-xs">
                IB
              </div>
              <span className="font-mono font-bold">imransite</span>
              <span className="text-foreground/40 text-xs font-mono ml-4">imran@example.com</span>
            </div>
            <p className="text-sm text-foreground/60 font-mono">
              Front-end developer and UI designer
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold font-mono text-lg">Media</h4>
            <div className="flex gap-4">
              {["github", "linkedin", "twitter", "discord"].map((social) => (
                <Link key={social} href="#" className="text-foreground/40 hover:text-accent transition-colors">
                  <span className="sr-only">{social}</span>
                  <div className="capitalize text-sm font-mono">{social}</div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center text-foreground/30 text-[10px] font-mono">
          © Copyright 2026. Made with Next.js, Tailwind, and Framer Motion by Imran.
        </div>
      </div>
    </footer>
  );
};
