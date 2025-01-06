"use client";
import { motion } from "framer-motion";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const header = `Welcome to QRify`;

const page = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 0.8,
          duration: 2,
          ease: "easeIn",
        },
      }}
      className="h-full px-4 xl:px-0 mb-6"
    >
      <div className="container">
        <TextGenerateEffect words={header} className="xl:text-start text-center"/>
        <p className="xl:pt-8 pt-4 xl:text-[20px] text-[18px] text-white/70 xl:text-start text-justify">
          We’re here to make sharing, connecting, and accessing information
          simpler, faster, and smarter. Our platform combines cutting-edge
          technology with an intuitive design to empower you to create and scan
          QR codes effortlessly.
        </p>
        <div className="mt-5 xl:mt-10">
          <h2 className="xl:text-[36px] text-[24px] text-white/85 font-medium">
            What we offer
          </h2>
          <ul className="text-white/60 mt-4 xl:text-[18px] text-[16px] list-disc">
            <li className="mb-3">
              <span className="font-semibold">QR Code Generation: </span>Create
              custom QR codes in seconds for your business, events, or personal
              use.
            </li>
            <li className="mb-3">
              <span className="font-semibold mr-1">QR Code Scanning: </span>
              Instantly scan QR codes with our seamless, browser-based
              scanner—no app downloads required!
            </li>
            <li>
              <span className="font-semibold mr-1">Custom designs: </span>Make
              your QR codes stand out with personalized colors, logos, and
              styles.
            </li>
          </ul>
        </div>
        <div className="mt-5 xl:mt-10">
          <h2 className="xl:text-[36px] text-[24px] text-white/85 font-medium">
            Our vision
          </h2>
          <p className="text-white/60 xl:text-[18px] text-[16px] mt-4 xl:text-start text-justify">
            We believe in breaking barriers between digital and physical worlds.
            By simplifying QR code technology, we aim to help you share
            information creatively and conveniently.
          </p>
        </div>
        <div className="mt-5 xl:mt-10">
          <h2 className="xl:text-[36px] text-[24px] text-white/85 font-medium">
            Why choose us
          </h2>
          <ul className="text-white/60 mt-4 xl:text-[18px] text-[16px] list-disc">
            <li className="mb-3">Modern, responsive design</li>
            <li className="mb-3">Fast and secure processing</li>
            <li className="mb-3">Completely free to use</li>
            <li>Built for everyone—developers, businesses, and individuals</li>
          </ul>
        </div>
      </div>
    </motion.section>
  );
};

export default page;
