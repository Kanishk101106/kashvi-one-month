import { useState } from "react";
import { motion } from "motion/react";
import { content } from "@/content/site-content";
import { SectionTitle } from "./SectionTitle";

export function LoveCards() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-secondary px-5 py-20 sm:px-10 sm:py-28">
      <SectionTitle kicker="Things about you" title="Things I didn't know I'd fall for" />

      <div className="mx-auto grid max-w-3xl grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
        {content.loveCards.map((c, i) => (
          <motion.button
            key={c.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: (i % 2) * 0.06 }}
            onClick={() => setOpen(open === i ? null : i)}
            className="glass rounded-2xl p-5 text-left shadow-soft transition-transform duration-300 hover:-translate-y-1"
          >
            <p className="font-serif text-xl italic text-foreground">{c.title}</p>
            <motion.div
              initial={false}
              animate={{ height: open === i ? "auto" : 0, opacity: open === i ? 1 : 0 }}
              transition={{ duration: 0.4 }}
              className="overflow-hidden"
            >
              <p className="pt-3 font-sans text-sm leading-relaxed text-muted-foreground">
                {c.message}
              </p>
            </motion.div>
            {open !== i && (
              <p className="mt-2 font-sans text-[10px] tracking-[0.24em] uppercase text-primary">
                tap to open
              </p>
            )}
          </motion.button>
        ))}
      </div>
    </section>
  );
}
