import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowUpRight } from "lucide-react";

type Project = {
  id: string;
  name: string;
  tagline: string;
  meta: string;
  tags: string[];
  expanded: { title: string; subtitle?: string; bullets: string[] };
};

const projects: Project[] = [
  {
    id: "nexora",
    name: "Nexora MedAssist",
    tagline: "Healthcare AI Platform",
    meta: "Top 10 · Infosys TechZooka 2025",
    tags: ["Python", "REST APIs", "SQL"],
    expanded: {
      title: "Healthcare AI Platform",
      subtitle: "Infosys TechZooka 2025 — Top 10",
      bullets: [
        "Architected an AI-powered healthcare support platform integrating patient management workflows.",
        "Automated triage features and improved care delivery efficiency.",
      ],
    },
  },
  {
    id: "eyes",
    name: "Eyes",
    tagline: "Portable Traffic Detector — OpenCV",
    meta: "MIT Prayatna 2026",
    tags: ["OpenCV", "Python", "Computer Vision"],
    expanded: {
      title: "Eyes — Portable Traffic Detector",
      subtitle: "Prayatna 2026 (MIT)",
      bullets: [
        "Architected a mobile OpenCV system to detect helmet and seatbelt violations in real-time for areas lacking CCTV coverage.",
        "Implemented a portable diagnostic UI for traffic authorities to identify non-compliance and trigger instant safety alerts.",
      ],
    },
  },
  {
    id: "churnel",
    name: "Churn-el",
    tagline: "Customer Retention System",
    meta: "AI feedback summarizer · SME-focused",
    tags: ["Python", "Scikit-learn", "ML", "Data Analysis"],
    expanded: {
      title: "Customer Retention System",
      bullets: [
        "Developed a predictive model using Logistic Regression and Random Forest to identify at-risk customers for SMEs.",
        "Integrated an AI feedback summarizer that generates automated, personalized retention strategies and direct re-engagement messaging.",
      ],
    },
  },
  {
    id: "bus",
    name: "Bus Route Optimizer",
    tagline: "Transit engine using A* Algorithm",
    meta: "BrainStormX 2026 Finalist",
    tags: ["React", "JavaScript", "A*", "Mapping"],
    expanded: {
      title: "Bus Route Optimizer",
      subtitle: "BrainStormX 2026 Finalist",
      bullets: [
        "Engineered a transit engine using the A* Algorithm to calculate and visualize optimal paths across Chennai via an interactive map interface.",
        "Secured a finalist position by optimizing heuristic search efficiency for a lightweight, single-page React component.",
      ],
    },
  },
  {
    id: "attendance",
    name: "Attendance Manager",
    tagline: "Oracle DB · Triggers · Stored Procedures",
    meta: "Database Application",
    tags: ["SQL", "PL/SQL", "Java", "Oracle DB"],
    expanded: {
      title: "Attendance Manager — Database Application",
      bullets: [
        "Built a relational database-driven attendance management system using SQL, PL/SQL, and Java, automating record-keeping and generating analytical reports for institutional use.",
        "Implemented stored procedures and triggers in Oracle DB for data integrity and automated reporting workflows.",
      ],
    },
  },
  {
    id: "waste",
    name: "Smart Waste Classifier",
    tagline: "AI-based segregation system",
    meta: "Smart India Hackathon 2025",
    tags: ["Python", "Machine Learning", "AI", "Sensors"],
    expanded: {
      title: "Smart Waste Classifier",
      subtitle: "Smart India Hackathon 2025",
      bullets: [
        "Designed and prototyped an AI-based waste classification system for SIH 2025, applying ML models to automate waste segregation across multiple categories.",
        "Integrated sensor data pipelines and an ML inference backend to support sustainable waste management objectives.",
      ],
    },
  },
];

export function Projects() {
  const [active, setActive] = useState<Project | null>(null);
  return (
    <>
      <div className="grid md:grid-cols-2 gap-4 md:gap-5">
        {projects.map((p, i) => (
          <motion.button
            layoutId={`card-${p.id}`}
            key={p.id}
            onClick={() => setActive(p)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="edge-sweep group glass-strong metallic-border rounded-2xl p-6 text-left relative overflow-hidden hover:bg-white/[0.07] transition-colors"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="mono text-[10px] text-[#2563eb] tracking-widest mb-2">{p.meta}</div>
                <h3 className="text-xl font-semibold text-gradient-metal">{p.name}</h3>
                <p className="text-sm text-muted-foreground mt-1">{p.tagline}</p>
              </div>
              <ArrowUpRight size={18} className="text-muted-foreground group-hover:text-[#2563eb] transition-colors" />
            </div>
            <div className="mt-5 flex flex-wrap gap-1.5">
              {p.tags.map((t) => (
                <span key={t}
                      className="mono text-[10px] px-2 py-1 rounded-md bg-white/5 border border-white/10 text-foreground/80">
                  {t}
                </span>
              ))}
            </div>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[80] flex items-center justify-center p-4 md:p-8"
            onClick={() => setActive(null)}
          >
            <div className="absolute inset-0 bg-[#050816]/70 backdrop-blur-xl" />
            <motion.div
              layoutId={`card-${active.id}`}
              onClick={(e) => e.stopPropagation()}
              className="relative glass-strong metallic-border rounded-2xl p-8 md:p-10 max-w-2xl w-full"
            >
              <button
                onClick={() => setActive(null)}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/10 text-muted-foreground"
                aria-label="Close"
              >
                <X size={18} />
              </button>
              <div className="mono text-[10px] text-[#2563eb] tracking-widest mb-2">{active.meta}</div>
              <h3 className="text-3xl font-semibold text-gradient-metal">{active.expanded.title}</h3>
              {active.expanded.subtitle && (
                <p className="text-sm text-muted-foreground mt-2">{active.expanded.subtitle}</p>
              )}
              <ul className="mt-6 space-y-3">
                {active.expanded.bullets.map((b, i) => (
                  <li key={i} className="flex gap-3 text-sm md:text-base text-foreground/90">
                    <span className="mono text-[#2563eb] mt-1">▸</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-7">
                <div className="mono text-[10px] text-muted-foreground tracking-widest mb-2">TECH STACK</div>
                <div className="flex flex-wrap gap-1.5">
                  {active.tags.map((t) => (
                    <span key={t}
                          className="mono text-xs px-2.5 py-1 rounded-md bg-[#121f82]/40 border border-[#2563eb]/30 text-foreground">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
