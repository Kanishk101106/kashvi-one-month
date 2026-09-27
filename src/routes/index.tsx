import { createFileRoute } from "@tanstack/react-router";
import { useRef, useState } from "react";
import { Hero } from "@/components/Hero";
import { Gallery } from "@/components/Gallery";
import { VideoGallery } from "@/components/VideoGallery";
import { Timeline } from "@/components/Timeline";
import { LoveCards } from "@/components/LoveCards";
import { Counters } from "@/components/Counters";
import { ChatSection } from "@/components/ChatSection";
import { Letter } from "@/components/Letter";
import { Surprise } from "@/components/Surprise";
import { Finale } from "@/components/Finale";
import { MusicPlayer } from "@/components/MusicPlayer";
import { content } from "@/content/site-content";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Chapter One: Us — One Month" },
      {
        name: "description",
        content:
          "A cinematic digital scrapbook for our first month together: photos, videos, a timeline and a letter.",
      },
      { property: "og:title", content: "Chapter One: Us — One Month" },
      {
        property: "og:description",
        content: "One month down. A whole story to go.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [started, setStarted] = useState(false);
  const [playing, setPlaying] = useState(false);

  const start = () => {
    setStarted(true);
    void audioRef.current?.play().then(
      () => setPlaying(true),
      () => setPlaying(false),
    );
  };

  const toggle = () => {
    const el = audioRef.current;
    if (!el) return;
    if (el.paused) {
      void el.play().then(
        () => setPlaying(true),
        () => setPlaying(false),
      );
    } else {
      el.pause();
      setPlaying(false);
    }
  };

  return (
    <main className="bg-background">
      <audio ref={audioRef} src={content.music.src} loop preload="none" />
      <Hero started={started} onStart={start} />
      <Gallery />
      <VideoGallery />
      <Timeline />
      <LoveCards />
      <Counters />
      <ChatSection />
      <Letter />
      <Surprise />
      <Finale />
      <MusicPlayer visible={started} playing={playing} onToggle={toggle} />
    </main>
  );
}
