"use client";
import HeroImage from "@/components/HeroImage";
import Image from "next/image";

export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full overflow-hidden relative">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="pt-8 order-2 xl:order-none">
            <h1 className="text-6xl font-bold text-center xl:text-start">
              QRify
            </h1>
            <p className="text-2xl font-semibold text-accent pt-5">
              Scan, Create Connect
            </p>
          </div>
          <div className="pt-8 order-1 xl:order-none mb-8 xl:mb-0 mt-5 xl:mt-0">
            <HeroImage />
          </div>
        </div>
      </div>
    </section>
  );
}
