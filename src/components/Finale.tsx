import { motion } from "motion/react";
import { content } from "@/content/site-content";

const isVideo = (src: string) => /\.(mp4|webm|mov)$/i.test(src);

export function Finale() {
  const bg = content.finale.background;

  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-ink px-6 py-16">
      
      {/* Blurred background */}
      {!isVideo(bg) && (
        <img
          src={bg}
          alt=""
          className="absolute inset-0 h-full w-full scale-110 object-cover opacity-30 blur-3xl"
        />
      )}

      {/* Dark cinematic overlay */}
      <div className="absolute inset-0 bg-black/65" />
      <div className="grain absolute inset-0 opacity-50" />

      <div className="relative z-10 flex min-h-[90svh] flex-col items-center justify-center text-center">

        {/* Secret assignment reference */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-5 font-sans text-[9px] tracking-[0.45em] uppercase text-white/45"
        >
          OMA — Components K & K
        </motion.p>

        {/* PHONE PHOTO */}
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
            rotate: 3,
            scale: 0.92,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            rotate: -2,
            scale: 1,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 1.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative w-[min(72vw,320px)]"
        >
          {/* Tape */}
          <div className="absolute -right-5 -top-3 z-20 h-8 w-20 rotate-6 bg-white/15 backdrop-blur-sm" />

          {/* Polaroid */}
          <div className="rounded-[26px] bg-[#f7f5f0] p-2 pb-5 shadow-[0_30px_80px_rgba(0,0,0,0.6)]">
            
            <div className="overflow-hidden rounded-[20px] bg-black">
              <img
                src={bg}
                alt="Kashvi and Kanishk"
                className="block h-auto max-h-[62vh] w-full object-contain"
              />
            </div>

            <div className="flex items-center justify-between px-3 pt-3">
              <span className="font-serif text-sm italic text-black/70">
                one month.
              </span>

              <span className="font-sans text-[8px] tracking-[0.3em] uppercase text-black/40">
                K × K
              </span>
            </div>
          </div>
        </motion.div>

        {/* CHAPTER */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-10 font-serif text-4xl text-white sm:text-6xl"
        >
          {content.finale.line1}
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-3 font-serif text-sm italic tracking-[0.12em] text-white/60 sm:text-base"
        >
          {content.finale.line2}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1.7 }}
          className="mt-7 font-serif text-2xl italic text-blush sm:text-4xl"
        >
          {content.finale.line3}
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 2.2 }}
          className="mt-6 max-w-xs font-sans text-[9px] leading-relaxed tracking-[0.25em] uppercase text-white/40"
        >
          {content.finale.small}
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 2.7 }}
          className="mt-8 font-serif text-sm italic text-white/40"
        >
          K + K
        </motion.p>

      </div>
    </section>
  );
}