import { motion } from "motion/react";
import { content } from "@/content/site-content";

export function Letter() {
  return (
    <section className="relative overflow-hidden bg-secondary px-5 py-24 sm:px-10 sm:py-32">
      <div className="grain absolute inset-0 opacity-30" />

      <div className="relative mx-auto max-w-2xl">
        {/* LETTER CARD — intentionally NOT hidden by whileInView */}
        <div className="relative rounded-[28px] bg-background/90 px-6 py-10 shadow-soft sm:px-12 sm:py-14">

          {/* tiny label */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{ duration: 0.5 }}
            className="mb-8 text-center font-sans text-[9px] tracking-[0.4em] uppercase text-muted-foreground"
          >
            A letter I probably should have written sooner
          </motion.p>

          {/* heading */}
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{ duration: 0.6 }}
            className="font-serif text-3xl italic leading-tight text-foreground sm:text-5xl"
          >
            {content.letter.heading}
          </motion.h2>

          {/* letter body */}
          <div className="mt-8 space-y-6">
            {content.letter.body.map((paragraph, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.05 }}
                transition={{
                  duration: 0.55,
                  delay: Math.min(i * 0.08, 0.5),
                }}
                className={`font-serif text-[17px] leading-[1.9] text-foreground/85 sm:text-lg ${
                  i === 0 ? "text-xl italic text-foreground" : ""
                }`}
              >
                {paragraph}
              </motion.p>
            ))}
          </div>

          {/* signoff */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{ duration: 0.6 }}
            className="mt-10 border-t border-border pt-8"
          >
            <p className="whitespace-pre-line font-serif text-lg italic leading-relaxed text-foreground">
              {content.letter.signoff}
            </p>
          </motion.div>

          {/* K × K */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-10 text-center font-sans text-[8px] tracking-[0.4em] uppercase text-muted-foreground/50"
          >
            K × K
          </motion.p>

        </div>
      </div>
    </section>
  );
}