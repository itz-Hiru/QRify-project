"use client";
import Image from "next/image";

const HeroImage = () => {
  return (
    <div className="relative w-60 h-60 xl:w-[500px] xl:h-[400px] items-center justify-center">
      <div className="absolute w-full h-full overflow-hidden items-center justify-center">
        <Image
          src="/assets/home/hero.jpg"
          fill
          priority
          quality={100}
          className="object-cover items-center justify-center"
          alt="hero image"
        />
      </div>
    </div>
  );
};

export default HeroImage;
