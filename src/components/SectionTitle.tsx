import { motion } from "motion/react";

export function SectionTitle({
  kicker,
  title,
  dark = false,
}: {
  kicker?: string;
  title: string;
  dark?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.8 }}
      className="mb-10 text-center"
    >
      {kicker && (
        <p
          className={`font-sans text-[10px] tracking-[0.34em] uppercase ${
            dark ? "text-blush" : "text-primary"
          }`}
        >
          {kicker}
        </p>
      )}
      <h2
        className={`mt-3 font-serif text-3xl italic sm:text-5xl ${
          dark ? "text-ink-foreground" : "text-foreground"
        }`}
      >
        {title}
      </h2>
    </motion.div>
  );
}
