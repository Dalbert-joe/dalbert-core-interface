import { Award, Briefcase, GraduationCap } from "lucide-react";

const items = [
  {
    icon: Briefcase,
    tag: "FREELANCE / FULL-STACK",
    title: "Siddharth Vibe Events, Madurai",
    period: "2024 — Present",
    bullets: [
      "Developed a high-performance event management platform using React and Node.js.",
      "Architected the frontend in TypeScript (TSX) and integrated Supabase for secure auth and database management.",
    ],
    tags: ["React", "TypeScript", "Node.js", "Supabase"],
  },
  {
    icon: GraduationCap,
    tag: "AMBASSADOR",
    title: "Google Student Ambassador",
    period: "May 2026 — Present",
    bullets: [
      "Representing student engagement initiatives and participating in technical community activities focused on technology awareness and collaboration.",
    ],
    tags: ["Community", "Outreach"],
  },
  {
    icon: Award,
    tag: "PUBLICATION · BEST PAPER AWARD",
    title: "From Video to Tactics: An AI-Based System for Automated Football Match Analysis",
    period: "ICAIDS 2026 · Loyola College, Chennai",
    bullets: [
      "Best Paper Award at the International Conference on Artificial Intelligence and Data Science.",
      "Research focused on AI-powered football analytics and automated tactical performance evaluation using intelligent video analysis systems.",
      "Co-authors: Siddheshwaran U.R., Jeff Reuben S I, Antony Thomas Sharone A, Ananya S V.",
      "Mentors: Ms. Christina J, Mr. Srivatsava M.",
    ],
    tags: ["Computer Vision", "Sports Analytics", "Research"],
  },
];

export function Experience() {
  return (
    <div className="space-y-5">
      {items.map((it, i) => {
        const Icon = it.icon;
        return (
          <div key={i}
               className="edge-sweep glass-strong metallic-border rounded-2xl p-6 md:p-8 grid md:grid-cols-12 gap-6 hover:bg-white/[0.07] transition-colors">
            <div className="md:col-span-3 flex md:flex-col gap-4 items-start">
              <div className="glass rounded-lg p-3"><Icon size={18} className="text-[#2563eb]" /></div>
              <div>
                <div className="mono text-[10px] tracking-widest text-[#2563eb]">{it.tag}</div>
                <div className="mono text-xs text-muted-foreground mt-1">{it.period}</div>
              </div>
            </div>
            <div className="md:col-span-9">
              <h3 className="text-lg md:text-xl font-semibold text-gradient-metal">{it.title}</h3>
              <ul className="mt-3 space-y-2">
                {it.bullets.map((b, j) => (
                  <li key={j} className="text-sm text-foreground/85 flex gap-2">
                    <span className="mono text-[#2563eb] mt-0.5">▸</span><span>{b}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {it.tags.map((t) => (
                  <span key={t}
                        className="mono text-[10px] px-2 py-1 rounded-md bg-white/5 border border-white/10 text-foreground/80">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
