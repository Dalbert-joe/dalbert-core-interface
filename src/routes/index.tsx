import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { BootSequence } from "@/components/portfolio/BootSequence";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { Section } from "@/components/portfolio/Section";
import { About } from "@/components/portfolio/About";
import { Projects } from "@/components/portfolio/Projects";
import { Experience, Publication, Achievements } from "@/components/portfolio/Experience";
import { Skills } from "@/components/portfolio/Skills";
import { Contact } from "@/components/portfolio/Contact";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const [booted, setBooted] = useState(false);
  return (
    <main className="relative min-h-screen text-foreground antialiased overflow-x-hidden">
      {!booted && <BootSequence onDone={() => setBooted(true)} />}
      <Navbar />
      <Hero />
      <Section id="about" label="01 / IDENTITY" title="About me.">
        <About />
      </Section>
      <Section id="projects" label="02 / DEPLOYED MODULES" title="Selected projects.">
        <Projects />
      </Section>
      <Section id="experience" label="03 / TIMELINE" title="Experience.">
        <Experience />
      </Section>
      <Section id="publication" label="04 / RESEARCH" title="Publication.">
        <Publication />
      </Section>
      <Section id="achievements" label="05 / RECOGNITION" title="Achievements.">
        <Achievements />
      </Section>
      <Section id="skills" label="06 / CAPABILITIES" title="Skills & beyond engineering.">
        <Skills />
      </Section>
      <Section id="contact" label="07 / I/O" title="Contact.">
        <Contact />
      </Section>
      <footer className="border-t border-white/5 py-10 mt-10">
        <div className="mx-auto max-w-6xl px-6 flex flex-wrap items-center justify-between gap-3">
          <div className="mono text-xs text-muted-foreground">© DALBERT JOE J</div>
          <div className="mono text-xs text-foreground tracking-[0.3em]">SINCE 2007.</div>
        </div>
      </footer>
    </main>
  );
}
