import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { BootSequence } from "@/components/portfolio/BootSequence";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { Section } from "@/components/portfolio/Section";
import { About } from "@/components/portfolio/About";
import { Projects } from "@/components/portfolio/Projects";
import { Experience } from "@/components/portfolio/Experience";
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
      <Section id="about" label="01 / IDENTITY" title="About the system.">
        <About />
      </Section>
      <Section id="projects" label="02 / DEPLOYED MODULES" title="Selected projects.">
        <Projects />
      </Section>
      <Section id="experience" label="03 / TIMELINE" title="Experience & publication.">
        <Experience />
      </Section>
      <Section id="skills" label="04 / CAPABILITIES" title="Skills & beyond engineering.">
        <Skills />
      </Section>
      <Section id="contact" label="05 / I/O" title="Contact.">
        <Contact />
      </Section>
      <footer className="border-t border-white/5 py-10 mt-10">
        <div className="mx-auto max-w-6xl px-6 flex flex-wrap items-center justify-between gap-3">
          <div className="mono text-xs text-muted-foreground">© DALBERT JOE J · ALL SYSTEMS RESERVED</div>
          <div className="mono text-xs text-foreground tracking-[0.3em]">SINCE 2007.</div>
        </div>
      </footer>
    </main>
  );
}
