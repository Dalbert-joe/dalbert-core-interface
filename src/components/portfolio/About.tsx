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
      <div className="md:col-span-5 flex justify-center md:justify-end">
        <img
          src="/DALBERT.png"
          alt="Dalbert Joe J"
          className="w-64 h-72 object-cover object-top rounded-2xl metallic-border"
        />
      </div>
    </div>
  );
}
