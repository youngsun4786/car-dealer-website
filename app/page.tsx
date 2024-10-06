import { FlipWords } from "@/app/flipwords";

export default function Home() {
  const words = ["affordable", "customizable", "beautiful", "modern"];

  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="h-[40rem] flex px-4">
        <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
          Buy
          <FlipWords words={words} />
          <br />
          cars today at AutoMAXX
        </div>
      </div>
    </section>
  );
}
