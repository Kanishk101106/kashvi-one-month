import { motion } from "motion/react";
import { content } from "@/content/site-content";

export function Letter() {
  return (
    <section className="relative overflow-hidden bg-secondary px-5 py-24 sm:px-10 sm:py-32">
      <div className="grain absolute inset-0 opacity-30" />

      <div className="relative mx-auto max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1 }}
          className="relative rounded-[28px] bg-background/90 px-6 py-10 shadow-soft sm:px-12 sm:py-14"
        >
          {/* tiny label */}
          <p className="mb-8 text-center font-sans text-[9px] tracking-[0.4em] uppercase text-muted-foreground">
            A letter I probably should have written sooner
          </p>

          {/* heading */}
          <h2 className="font-serif text-3xl italic leading-tight text-foreground sm:text-5xl">
            {content.letter.heading}
          </h2>

          {/* letter body */}
          <div className="mt-8 space-y-6">
            {content.letter.body.map((paragraph, i) => (
  <p
    key={i}
    className={`font-serif text-[17px] leading-[1.9] text-foreground/85 sm:text-lg ${
      i === 0 ? "text-xl italic text-foreground" : ""
    }`}
  >
    {paragraph}
  </p>
))}
          </div>

          {/* signoff */}
          <div className="mt-10 border-t border-border pt-8">
            <p className="whitespace-pre-line font-serif text-lg italic leading-relaxed text-foreground">
              {content.letter.signoff}
            </p>
          </div>

          {/* little K × K detail */}
          <p className="mt-10 text-center font-sans text-[8px] tracking-[0.4em] uppercase text-muted-foreground/50">
            K × K
          </p>
        </motion.div>
      </div>
    </section>
  );
}