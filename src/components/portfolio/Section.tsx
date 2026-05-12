import { motion, useInView } from "framer-motion";
import { useRef, type ReactNode } from "react";

export function Section({
  id, label, title, children,
}: { id: string; label?: string; title?: string; children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15% 0px" });

  return (
    <section id={id} ref={ref} className="relative py-24 md:py-32">
      {/* Scanline */}
      {inView && (
        <motion.div
          className="scanline"
          initial={{ top: "0%", opacity: 0 }}
          animate={{ top: "100%", opacity: [0, 1, 1, 0] }}
          transition={{ duration: 1.1, ease: "easeOut" }}
        />
      )}
      <div className="mx-auto max-w-6xl px-6">
        {(label || title) && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-10 md:mb-14"
          >
            {label && (
              <div className="mono text-xs text-[#2563eb] mb-3 flex items-center gap-2">
                <span className="h-px w-8 bg-[#2563eb]" /> {label}
              </div>
            )}
            {title && (
              <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-gradient-metal">
                {title}
              </h2>
            )}
          </motion.div>
        )}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}
