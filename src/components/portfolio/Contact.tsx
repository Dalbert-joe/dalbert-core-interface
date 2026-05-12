import { Mail, Github, Linkedin } from "lucide-react";

export function Contact() {
  return (
    <div className="glass-strong metallic-border rounded-2xl p-8 md:p-12 text-center">
      <div className="mono text-[10px] text-[#2563eb] tracking-widest mb-3">/ ESTABLISH CONNECTION</div>
      <h3 className="text-3xl md:text-4xl font-semibold text-gradient-metal">
        Let's build something engineered.
      </h3>
      <p className="mt-3 text-muted-foreground max-w-lg mx-auto">
        Open to research collaborations, AI/ML engineering roles, and full-stack project work.
      </p>
      <div className="mt-7 flex flex-wrap justify-center gap-3">
        <a href="mailto:dalbertjoe@example.com"
           className="edge-sweep metallic-border rounded-full px-5 py-3 text-sm bg-[#121f82] hover:bg-[#1a2aa8] text-white inline-flex items-center gap-2">
          <Mail size={16} /> dalbertjoe@example.com
        </a>
        <a href="#" className="edge-sweep metallic-border rounded-full px-5 py-3 text-sm glass hover:bg-white/10 inline-flex items-center gap-2">
          <Github size={16} /> GitHub
        </a>
        <a href="#" className="edge-sweep metallic-border rounded-full px-5 py-3 text-sm glass hover:bg-white/10 inline-flex items-center gap-2">
          <Linkedin size={16} /> LinkedIn
        </a>
      </div>
    </div>
  );
}
