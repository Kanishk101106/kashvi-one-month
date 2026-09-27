import { motion } from "motion/react";
import { content } from "@/content/site-content";
import { SectionTitle } from "./SectionTitle";

export function Timeline() {
  return (
    <section className="bg-background px-5 py-20 sm:px-10 sm:py-28">
      <SectionTitle kicker="Our first month" title="How it went" />

      <div className="relative mx-auto max-w-2xl pl-8 sm:pl-0">
        <div className="absolute left-[7px] top-2 h-full w-px bg-border sm:left-1/2" />

        {content.timeline.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 45 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
            className={`relative mb-16 sm:w-1/2 ${
              i % 2
                ? "sm:ml-auto sm:pl-10"
                : "sm:pr-10 sm:text-right"
            }`}
          >
            {/* Timeline dot */}
            <motion.span
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: 0.15,
                type: "spring",
                stiffness: 180,
              }}
              className={`absolute -left-8 top-2 h-[15px] w-[15px] rounded-full border-2 border-primary bg-background sm:left-auto ${
                i % 2
                  ? "sm:-left-[8px]"
                  : "sm:-right-[7px]"
              }`}
            />

            {/* Date */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-sans text-[11px] tracking-[0.26em] uppercase text-primary"
            >
              {item.date}
            </motion.p>

            {/* Memory text */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mt-2 font-serif text-2xl italic text-foreground"
            >
              {item.text}
            </motion.p>

            {/* Memory photo */}
            {item.photo && (
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.92,
                  y: 25,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.25,
                }}
                transition={{
                  duration: 1,
                  delay: 0.2,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="mt-5 overflow-hidden rounded-2xl shadow-soft"
              >
                <img
                  src={item.photo}
                  alt={item.text}
                  loading="lazy"
                  className="block h-auto w-full object-contain transition-transform duration-1000 hover:scale-[1.02]"
                />
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}