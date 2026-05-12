const technical = [
  "Python", "C", "Java", "TypeScript",
  "Machine Learning", "OpenCV", "SQL", "PL/SQL",
  "React", "Node.js", "Supabase", "REST APIs",
  "GitHub", "Git", "MongoDB", "DSA",
  "Scikit-learn", "Data Engineering", "DBMS", "JavaScript",
  "Data Visualization", "Inference",
];

const creative = [
  "Music Production", "Lyric Writing", "Pianist",
  "Story Writing", "Video Editing", "Public Speaking", "Rap",
  "Show Hosting", "Leadership", "Team Management",
  "Quick to Social Networking", "Task Management",
  "Consistent AI Video Generation", "Content Creation", "Live Streaming",
];

export function Skills() {
  return (
    <div className="grid md:grid-cols-2 gap-5">
      <div className="glass-strong metallic-border rounded-2xl p-7">
        <div className="mono text-[10px] text-[#2563eb] tracking-widest mb-4">/ TECHNICAL</div>
        <div className="flex flex-wrap gap-2">
          {technical.map((s) => (
            <span key={s}
                  className="edge-sweep mono text-xs px-3 py-1.5 rounded-md bg-white/5 border border-white/10 text-foreground/90 hover:bg-white/10 transition-colors">
              {s}
            </span>
          ))}
        </div>
      </div>
      <div className="glass-strong metallic-border rounded-2xl p-7">
        <div className="mono text-[10px] text-[#2563eb] tracking-widest mb-4">/ BEYOND ENGINEERING</div>
        <div className="flex flex-wrap gap-2">
          {creative.map((s) => (
            <span key={s}
                  className="edge-sweep mono text-xs px-3 py-1.5 rounded-md bg-white/5 border border-white/10 text-foreground/90 hover:bg-white/10 transition-colors">
              {s}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
