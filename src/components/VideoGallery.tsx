import { useRef, useState } from "react";
import { motion } from "motion/react";
import { Play } from "lucide-react";
import { content } from "@/content/site-content";
import { SectionTitle } from "./SectionTitle";

function VideoCard({ src, poster, title }: { src: string; poster: string; title: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [failed, setFailed] = useState(false);

  return (
    <div className="relative w-[78vw] max-w-[340px] shrink-0 snap-center overflow-hidden rounded-3xl bg-ink shadow-soft">
      <video
        ref={ref}
        src={src}
        poster={poster}
        playsInline
        preload="none"
        controls={playing}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onError={() => setFailed(true)}
        className="aspect-[9/14] h-full w-full object-cover"
      />
      {!playing && (
        <button
          onClick={() => {
  if (failed) return;
  void ref.current?.play();
}}
          className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-ink/35 transition-colors hover:bg-ink/20"
        >
          <span className="glass-dark flex h-16 w-16 items-center justify-center rounded-full">
            <Play className="ml-1 h-6 w-6 fill-ink-foreground text-ink-foreground" />
          </span>
          <span className="font-sans text-[11px] tracking-[0.24em] uppercase text-ink-foreground">
            {failed ? "Add this clip to /public/videos" : title}
          </span>
        </button>
      )}
    </div>
  );
}

export function VideoGallery() {
  return (
    <section className="relative overflow-hidden bg-ink py-20 sm:py-28">
      <div className="grain absolute inset-0 opacity-50" />
      <div className="relative">
        <SectionTitle kicker="Our videos" title="Moving pictures of you" dark />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 sm:justify-center sm:px-10"
        >
          {content.videos.map((v) => (
            <VideoCard key={v.src} {...v} />
          ))}
        </motion.div>
        <p className="mt-2 text-center font-sans text-[10px] tracking-[0.24em] uppercase text-ink-foreground/40">
          swipe
        </p>
      </div>
    </section>
  );
}
