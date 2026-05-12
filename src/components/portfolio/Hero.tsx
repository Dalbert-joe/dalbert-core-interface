import { motion } from "framer-motion";
import { ArrowRight, Download, Mail, Activity, Cpu, Database, GitBranch } from "lucide-react";

export function Hero() {
  return (
    <section id="top" className="relative pt-40 pb-24 md:pt-48 md:pb-32 overflow-hidden">
      <div className="grid-bg absolute inset-0 opacity-30 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-12 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, filter: "blur(8px)", y: 20 }}
          animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="md:col-span-7"
        >
          <div className="mono text-xs text-[#2563eb] mb-5 flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#2563eb] animate-pulse" />
            STATUS / OPERATIONAL · CHENNAI · IN
          </div>
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-gradient-metal leading-[1.02]">
            DALBERT<br/>JOE J<span className="text-[#2563eb]">.</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-xl">
            <span className="mono text-foreground/80">SYSTEMS ARE BUILT BY THOSE WHO ENTER THE UNKNOWN.</span>
          </p>
          <p className="mt-4 text-sm text-muted-foreground max-w-xl">
            AI &amp; Data Science engineer building scalable ML systems, data pipelines and full-stack platforms.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects"
               className="edge-sweep metallic-border rounded-full px-5 py-3 text-sm font-medium bg-[#121f82] hover:bg-[#1a2aa8] text-white inline-flex items-center gap-2 transition-colors">
              View Projects <ArrowRight size={16} />
            </a>
            <a href="/Dalbert_Joe_J_Resume.pdf" download
               className="edge-sweep metallic-border rounded-full px-5 py-3 text-sm font-medium glass text-foreground inline-flex items-center gap-2 hover:bg-white/10 transition-colors">
              <Download size={16} /> Download Resume
            </a>
            <a href="#contact"
               className="edge-sweep metallic-border rounded-full px-5 py-3 text-sm font-medium glass text-foreground inline-flex items-center gap-2 hover:bg-white/10 transition-colors">
              <Mail size={16} /> Contact Me
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30, filter: "blur(10px)" }}
          animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, delay: 0.2 }}
          className="md:col-span-5"
        >
          <DashboardWidget />
        </motion.div>
      </div>
    </section>
  );
}

function DashboardWidget() {
  return (
    <div className="glass-strong metallic-border rounded-2xl p-5 relative overflow-hidden">
      <div className="flex items-center justify-between mb-4">
        <div className="mono text-[10px] tracking-widest text-muted-foreground">ML.RUNTIME / LIVE</div>
        <div className="flex gap-1">
          <span className="h-2 w-2 rounded-full bg-emerald-400/80" />
          <span className="h-2 w-2 rounded-full bg-amber-400/60" />
          <span className="h-2 w-2 rounded-full bg-[#2563eb]/80" />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3">
        {[
          { icon: Cpu, k: "INFER", v: "12.4ms", t: "p99" },
          { icon: Activity, k: "ACC", v: "94.7%", t: "val" },
          { icon: Database, k: "ROWS", v: "2.1M", t: "ingest" },
          { icon: GitBranch, k: "MODELS", v: "07", t: "deployed" },
        ].map(({ icon: Icon, k, v, t }) => (
          <div key={k} className="glass rounded-lg p-3">
            <div className="flex items-center justify-between text-muted-foreground">
              <Icon size={14} />
              <span className="mono text-[10px]">{k}</span>
            </div>
            <div className="mt-2 text-xl font-semibold text-gradient-metal">{v}</div>
            <div className="mono text-[10px] text-muted-foreground">{t}</div>
          </div>
        ))}
      </div>

      {/* Sparkline */}
      <div className="glass rounded-lg p-3 mt-3">
        <div className="flex items-center justify-between mb-2">
          <span className="mono text-[10px] text-muted-foreground">LOSS / TRAINING</span>
          <span className="mono text-[10px] text-[#2563eb]">↓ 0.0142</span>
        </div>
        <svg viewBox="0 0 200 60" className="w-full h-14">
          <defs>
            <linearGradient id="g1" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#2563eb" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#2563eb" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d="M0,40 L20,38 L40,32 L60,34 L80,24 L100,22 L120,18 L140,20 L160,12 L180,14 L200,8"
                fill="none" stroke="#2563eb" strokeWidth="1.5" />
          <path d="M0,40 L20,38 L40,32 L60,34 L80,24 L100,22 L120,18 L140,20 L160,12 L180,14 L200,8 L200,60 L0,60 Z"
                fill="url(#g1)" />
        </svg>
      </div>

      <div className="mt-3 mono text-[10px] text-muted-foreground flex justify-between">
        <span>node://chennai-01</span>
        <span>uptime 99.98%</span>
      </div>
    </div>
  );
}
