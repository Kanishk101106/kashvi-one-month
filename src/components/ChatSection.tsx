import { motion } from "motion/react";
import { content } from "@/content/site-content";
import { SectionTitle } from "./SectionTitle";

export function ChatSection() {
  return (
    <section className="bg-background px-5 py-20 sm:py-28">
      <SectionTitle kicker="Our little chat" title="Exhibit A" />

      <div className="mx-auto flex max-w-sm flex-col gap-3">
        {content.chat.map((m, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 14, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.5, delay: i * 0.35 }}
            className={`max-w-[78%] rounded-3xl px-4 py-3 font-sans text-sm shadow-soft ${
              m.from === "me"
                ? "self-end rounded-br-md bg-primary text-primary-foreground"
                : "self-start rounded-bl-md bg-secondary text-foreground"
            }`}
          >
            {m.text}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
