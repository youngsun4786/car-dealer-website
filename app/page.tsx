import { FlipWords } from "@/app/flipwords";
import Image from "next/image";

export default function Home() {
  const words = ["affordable", "customizable", "beautiful", "modern"];

  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      {/* Background Image */}
      <div className="absolute inset-0 pt-28">
        <div className="relative w-full h-5/6">
          <Image
            alt="Background" // className="object-cover w-full h-[250px] bg-cover bg-center bg-no-repeat mb-8 md:h-[350px]"
            className="object-cover object-center"
            fill={true}
            priority={true}
            quality={100}
            src="/images/background.jpg"
          />
          <div className="absolute inset-0 bg-black opacity-70" />
        </div>
      </div>
      <div className="z-10 h-[15rem] flex px-4">
        <div className="text-3xl md:text-7xl font-normal mx-auto text-center text-neutral-600 dark:text-neutral-400">
          Buy
          <FlipWords words={words} />
          <br />
          cars today at AutoMAXX
        </div>
      </div>
    </section>
  );
}
