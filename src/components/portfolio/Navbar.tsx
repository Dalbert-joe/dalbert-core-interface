import { motion } from "framer-motion";

const links = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  return (
    <motion.nav
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[min(960px,92vw)]"
    >
      <div className="glass-strong metallic-border rounded-full px-5 py-2.5 flex items-center justify-between">
        <a href="#top" className="mono text-xs tracking-widest text-foreground/90">
          DJ<span className="text-[#2563eb]">_</span>SYS
        </a>
        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <a key={l.href} href={l.href}
               className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {l.label}
            </a>
          ))}
        </div>
        <a href="#contact"
           className="edge-sweep metallic-border rounded-full px-4 py-1.5 text-xs mono bg-white/5 text-foreground hover:bg-white/10 transition-colors">
          CONNECT
        </a>
      </div>
    </motion.nav>
  );
}
