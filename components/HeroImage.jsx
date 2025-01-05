"use client";
import Image from "next/image";

const HeroImage = () => {
  return (
    <div className="relative w-72 h-52 xl:w-[510px] xl:h-[350px] items-center justify-center">
      <div className="absolute w-full h-full overflow-hidden items-center justify-center">
        <Image
          src="/assets/home/hero.png"
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
