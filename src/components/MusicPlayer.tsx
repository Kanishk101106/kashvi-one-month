import { motion, AnimatePresence } from "motion/react";
import { Pause, Play } from "lucide-react";
import { content } from "@/content/site-content";

export function MusicPlayer({
  visible,
  playing,
  onToggle,
}: {
  visible: boolean;
  playing: boolean;
  onToggle: () => void;
}) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.5 }}
          className="fixed bottom-4 right-4 z-50"
        >
          <button
            onClick={onToggle}
            aria-label={playing ? "Pause music" : "Play music"}
            className="glass flex items-center gap-3 rounded-full py-2 pl-2 pr-4 shadow-soft"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground">
              {playing ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
            </span>
            <span className="flex items-end gap-[3px]" aria-hidden>
              {[0, 1, 2, 3].map((i) => (
                <motion.span
                  key={i}
                  className="w-[3px] rounded-full bg-primary"
                  animate={playing ? { height: [5, 16, 8, 14, 5] } : { height: 5 }}
                  transition={
                    playing
                      ? { duration: 1.1, repeat: Infinity, delay: i * 0.13, ease: "easeInOut" }
                      : { duration: 0.2 }
                  }
                />
              ))}
            </span>
            <span className="font-sans text-xs tracking-[0.18em] uppercase text-foreground/80">
              {content.music.title}
            </span>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
