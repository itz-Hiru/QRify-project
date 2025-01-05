"use client";
import HeroImage from "@/components/HeroImage";
import Link from "next/link";

export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full overflow-hidden relative">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="pt-8 order-2 xl:order-none">
            <h1 className="text-4xl xl:text-6xl font-bold text-white text-center xl:text-start">
              Create and Scan QR <br />
              <span className="bg-gradient-to-r from-[#DD6DFC] via-[#DD6DFC] to-[#C802FF] text-transparent bg-clip-text">
                Codes Effortlessly
              </span>
            </h1>
            <p className="text-white/75 pt-8 text-[14px] xl:text-[18px] px-4 xl:px-0">
              Transform the way you share and access information with our
              intuitive QR code generator and scanner. Generate custom QR codes
              in seconds and easily scan them for instant access. Whether for
              personal use or business needs, we've got you covered with a
              seamless and secure experience.
            </p>
            <div className="pt-8 pl-3">
              <Link href="/about">
                <button className="inline-flex h-12 rounded-xl animate-shimmer items-center justify-center border border-white/15 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-white/20">
                  View more...
                </button>
              </Link>
            </div>
          </div>
          <div className="pt-8 order-1 xl:order-none mb-8 xl:mb-0 mt-5 xl:mt-0">
            <HeroImage />
          </div>
        </div>
      </div>
    </section>
  );
}
