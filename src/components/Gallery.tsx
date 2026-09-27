import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";
import { SectionTitle } from "./SectionTitle";

const photoFiles = [
  "image.png",
  "image copy.png",
  "image copy 2.png",
  "image copy 3.png",
  "image copy 4.png",
  "image copy 5.png",
  "image copy 6.png",
  "image copy 7.png",
  "image copy 8.png",
  "image copy 9.png",
  "image copy 10.png",
  "image copy 11.png",
  "image copy 12.png",
  "image copy 13.png",
  "image copy 14.png",
  "image copy 15.png",
  "image copy 16.png",
  "image copy 17.png",
  "image copy 18.png",
  "image copy 19.png",
  "image copy 20.png",
  "image copy 21.png",
  "image copy 22.png",
  "photo1.jpg",
  "photo2.jpg",
  "photo3.jpg",
];

const photos = photoFiles.map((file, index) => ({
  src: `/photos/${encodeURIComponent(file)}`,
  caption: `Memory ${String(index + 1).padStart(2, "0")}`,
}));

const spans = [
  "col-span-2 aspect-[4/5]",
  "col-span-1 aspect-[3/4] sm:mt-16",
  "col-span-1 aspect-square sm:-mt-10",
  "col-span-2 aspect-[16/10]",
];

export function Gallery() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="relative bg-background px-5 py-20 sm:px-10 sm:py-28">
      <SectionTitle
        kicker="Our memories"
        title="Frames that belong to us."
      />

      <div className="mx-auto grid max-w-4xl grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5">
        {photos.map((p, i) => (
          <motion.button
            key={p.src + i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.7,
              delay: (i % 3) * 0.08,
            }}
            onClick={() => setOpen(i)}
            className={`group relative overflow-hidden rounded-2xl shadow-soft ${
              spans[i % spans.length]
            }`}
          >
            <img
              src={p.src}
              alt={p.caption}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            <div className="grain absolute inset-0 opacity-40" />

            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/70 to-transparent p-3 pt-10 text-left opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              <p className="font-sans text-[11px] tracking-wide text-ink-foreground">
                {p.caption}
              </p>
            </div>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {open !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(null)}
            className="fixed inset-0 z-[60] flex flex-col items-center justify-center bg-ink/95 p-5"
          >
            <button
              onClick={() => setOpen(null)}
              aria-label="Close"
              className="absolute right-5 top-5 rounded-full p-2 text-ink-foreground/80 hover:text-ink-foreground"
            >
              <X className="h-6 w-6" />
            </button>

            <motion.img
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              src={photos[open]?.src}
              alt={photos[open]?.caption ?? ""}
              className="max-h-[75vh] w-auto max-w-full rounded-xl object-contain"
            />

            <p className="mt-5 max-w-md text-center font-serif text-lg italic text-ink-foreground/90">
              {photos[open]?.caption}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}