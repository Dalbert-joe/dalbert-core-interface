export function About() {
  return (
    <div className="grid md:grid-cols-12 gap-8 items-start">
      <div className="md:col-span-7 space-y-5 text-base md:text-lg leading-relaxed text-foreground/85">
        <p>
          I'm an <span className="text-foreground">AI &amp; Data Science</span> undergraduate at
          <span className="text-foreground"> Loyola ICAM College of Engineering and Technology (LICET)</span>,
          building scalable ML systems, data pipelines and full-stack platforms.
        </p>
        <p>
          My work focuses on the boundary between <span className="text-foreground">data engineering</span>
          {" "}and <span className="text-foreground">applied AI</span> — designing systems that move from raw signal to deployed inference, with engineered clarity over hype.
        </p>

      </div>
      <div className="md:col-span-5 grid grid-cols-2 gap-3">
        {[
          { k: "FOCUS", v: "AI / ML" },
          { k: "STACK", v: "Python · TS" },
          { k: "BASE", v: "Chennai, IN" },
          { k: "STUDY", v: "LICET" },
        ].map((s) => (
          <div key={s.k} className="glass metallic-border rounded-xl p-4">
            <div className="mono text-[10px] text-muted-foreground tracking-widest">{s.k}</div>
            <div className="mt-1 text-foreground font-medium">{s.v}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
