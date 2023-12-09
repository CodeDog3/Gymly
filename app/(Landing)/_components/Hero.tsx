import React from "react";

import svg from "@/public/design.svg";
import hero from "@/public/Gymly Hero Image2.png";
import Image from "next/image";
import Blur from "./Blur";

const Hero = () => {
  return (
    <div className="min-h-[90vh] h-[90vh] max-w-screen min-w-full overflow-x-hidden relative bg overflow-y-hidden">
      <Image
        className="absolute rotate-3"
        src={svg}
        alt="svg"
        height={800}
        width={800}
      />
      <div className="flex h-full">
        <div className="flex flex-col space-y-3 justify-center items-center text-white font-medium">
          <h1 className="text-4xl max-w-[43%]">
            Unlock your <span className="transbg2">true potential</span> with
            the help of <span className="transbg">Gymly.IO~</span>
          </h1>
          <h3 className="max-w-[43%] text-slate-100">
            filler filler filler filler filler filler filler filler filler
            filler filler filler filler filler filler filler filler filler
            filler filler filler filler filler filler filler filler filler
            filler.{" "}
          </h3>
          <div className="absolute">
            <Blur width={440} height={440} type="type1" />
          </div>
        </div>
      </div>
      <div>
        <Image
          className="absolute right-0 bottom-0 translate-x-[150px] z-10"
          src={hero}
          alt="hero"
          width={1200}
          height={1000}
        />
        <div className="absolute right-0 bottom-0">
          <Blur width={800} height={800} type="type2" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
