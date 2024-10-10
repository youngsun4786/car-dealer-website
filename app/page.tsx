"use client"

import { FlipWords } from "@/app/flipwords";
import Image from "next/image";

export default function Home() {
  const words = ["affordable", "customizable", "beautiful", "modern"];

  const addOpacity = () => {
    const opacity = document.getElementById("background-opacity");

    opacity!.classList.remove("hidden");

  };

  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      {/* Background Image */}
      <div className="absolute inset-0 pt-24 md:pt-28">
        <div className="relative w-full h-5/6 overflow-hidden">
          <Image
            fill
            priority
            alt="background-desktop"
            className="object-cover object-center"
            quality={100}
            sizes="100vw"
            src="/images/background.png"
            onLoad={addOpacity}
          />
          <div
            className="hidden absolute inset-0 bg-black opacity-70"
            id="background-opacity"
          />
        </div>
      </div>
      <div className="z-10 h-[15rem] flex px-4">
        <div className="text-3xl md:text-7xl font-normal mx-auto text-center text-neutral-600 dark:text-neutral-400">
          <FlipWords words={words} />
          <br /> cars for customers
        </div>
      </div>
    </section>
  );
}
