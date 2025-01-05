"use client";

import { Spotlight as SpotlightEffect } from "@/components/ui/Spotlight";

const SpotlightWrapper = () => {
  return (
    <div className="relative">
      <SpotlightEffect
        className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen max-w-full"
        fill="#2C22C8"
      />
      <SpotlightEffect
        className="h-[80vh] w-[50vw] top-10 left-[calc(100%-50vw)] max-w-full"
        fill="#E7EDFF"
      />
      <SpotlightEffect
        className="left-80 top-28 h-[80vh] w-[50vw] max-w-full"
        fill="#A07FFA"
      />
    </div>
  );
};

export default SpotlightWrapper;
