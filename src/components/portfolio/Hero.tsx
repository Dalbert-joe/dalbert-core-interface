import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";

export function Hero() {
  return (
    <section id="top" className="relative pt-40 pb-24 md:pt-48 md:pb-32 overflow-hidden">
      <div className="grid-bg absolute inset-0 opacity-30 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      <div className="mx-auto max-w-4xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, filter: "blur(8px)", y: 20 }}
          animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <div className="mono text-xs text-[#2563eb] mb-5 flex items-center justify-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#2563eb] animate-pulse" />
            STATUS / RUNNING · CHENNAI · IN
          </div>
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-gradient-metal leading-[1.02]">
            DALBERT<br />JOE J
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-xl mx-auto">
            <span className="mono text-foreground/80">SYSTEMS ARE BUILT BY THOSE WHO ENTER THE UNKNOWN.</span>
          </p>
          <p className="mt-4 text-sm text-muted-foreground max-w-xl mx-auto">
            AI &amp; Data Science engineer building scalable ML systems, data pipelines and full-stack platforms.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href="#projects"
               className="edge-sweep metallic-border rounded-full px-5 py-3 text-sm font-medium bg-[#121f82] hover:bg-[#1a2aa8] text-white inline-flex items-center gap-2 transition-colors">
              View Projects <ArrowRight size={16} />
            </a>
            <a href="#contact"
               className="edge-sweep metallic-border rounded-full px-5 py-3 text-sm font-medium glass text-foreground inline-flex items-center gap-2 hover:bg-white/10 transition-colors">
              <Mail size={16} /> Contact Me
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
