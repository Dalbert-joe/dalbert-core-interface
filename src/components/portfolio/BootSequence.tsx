import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const lines = [
  "> INITIALIZING DALBERT_JOE.SYSTEM...",
  "> LOADING ML MODULES.............. [ok]",
  "> MOUNTING DATA PIPELINES......... [ok]",
  "> CALIBRATING NEURAL INTERFACE.... [ok]",
  "> SYSTEM READY.",
];

export function BootSequence({ onDone }: { onDone: () => void }) {
  const [shown, setShown] = useState<string[]>([]);
  const [hide, setHide] = useState(false);

  useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      setShown((s) => [...s, lines[i]]);
      i++;
      if (i >= lines.length) {
        clearInterval(id);
        setTimeout(() => setHide(true), 450);
        setTimeout(onDone, 950);
      }
    }, 280);
    return () => clearInterval(id);
  }, [onDone]);

  return (
    <AnimatePresence>
      {!hide && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: "blur(8px)" }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#050816]"
        >
          <div className="grid-bg absolute inset-0 opacity-40" />
          <div className="relative mono text-sm md:text-base text-foreground/90 w-[min(560px,90vw)]">
            <div className="mb-4 flex items-center gap-2 text-xs text-muted-foreground">
              <span className="h-2 w-2 rounded-full bg-[#2563eb] animate-pulse" />
              DALBERT_JOE.SYSTEM v2026.05
            </div>
            {shown.map((l, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                className="leading-7"
              >
                {l}
              </motion.div>
            ))}
            <span className="inline-block w-2 h-4 align-middle bg-[#2563eb] animate-pulse" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
