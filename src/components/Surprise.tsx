import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { content } from "@/content/site-content";

export function Surprise() {
  const [open, setOpen] = useState(false);

  return (
    <section className="bg-background px-6 py-16 text-center">
      <button
        onClick={() => setOpen(!open)}
        className="rounded-full border border-border px-6 py-3 font-sans text-xs tracking-[0.22em] uppercase text-muted-foreground transition-colors hover:border-primary hover:text-primary"
      >
        {content.surprise.button}
      </button>

      <AnimatePresence>
        {open && (
          <motion.p
            initial={{ opacity: 0, y: 12, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: 12, height: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto mt-6 max-w-sm whitespace-pre-line font-serif text-xl italic leading-relaxed text-foreground"
          >
            {content.surprise.reveal}
          </motion.p>
        )}
      </AnimatePresence>
    </section>
  );
}
