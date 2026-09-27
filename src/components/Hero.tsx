import { motion } from "motion/react";
import { Heart } from "lucide-react";

import { content } from "@/content/site-content";

const isVideo = (src: string) => /\.(mp4|webm|mov)$/i.test(src);

export function Hero({
  started,
  onStart,
}: {
  started: boolean;
  onStart: () => void;
}) {
  const bg = content.hero.background;

  return (
    <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-ink">
      {isVideo(bg) ? (
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src={bg}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        />
      ) : (
        <img
          src={bg}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
          width={1280}
          height={1600}
        />
      )}

      {/* Dark cinematic overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/35 to-black/80" />

      <div className="grain absolute inset-0" />

      <div className="relative z-10 px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-serif text-5xl leading-none tracking-tight text-ink-foreground sm:text-7xl"
        >
          {content.hero.line1}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="mt-2 font-serif text-6xl italic text-blush sm:text-8xl"
        >
          {content.hero.line2}
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 2 }}
          className="mx-auto mt-6 max-w-xs font-sans text-sm leading-relaxed tracking-[0.14em] uppercase text-ink-foreground/75 sm:max-w-md sm:text-base"
        >
          {content.hero.line3}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 2.8 }}
          className="mt-10"
        >
          <button
            onClick={onStart}
            className="glass-dark group inline-flex items-center gap-2 rounded-full px-7 py-3 font-sans text-sm tracking-[0.2em] uppercase text-ink-foreground transition-transform duration-300 hover:scale-105"
          >
            {started ? "Playing" : content.hero.button}

            <Heart className="h-4 w-4 fill-blush text-blush transition-transform group-hover:scale-110" />
          </button>
        </motion.div>
      </div>

      <motion.div
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 2.4, repeat: Infinity }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 font-sans text-[10px] tracking-[0.3em] uppercase text-ink-foreground/60"
      >
        scroll
      </motion.div>
    </section>
  );
}