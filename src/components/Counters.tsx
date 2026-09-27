import { motion } from "motion/react";
import { content } from "@/content/site-content";

export function Counters() {
  return (
    <section className="relative overflow-hidden bg-ink px-6 py-24 sm:py-36">
      <div className="grain absolute inset-0 opacity-50" />
      <div className="relative mx-auto flex max-w-2xl flex-col items-center gap-10 text-center">
        {content.counters.map((line, i) => (
          <motion.p
            key={line}
            initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.9 }}
            className={`font-serif ${
              i === content.counters.length - 1
                ? "text-2xl italic text-blush sm:text-4xl"
                : "text-4xl text-ink-foreground sm:text-6xl"
            }`}
          >
            {line}
          </motion.p>
        ))}
      </div>
    </section>
  );
}
