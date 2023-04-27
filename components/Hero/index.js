import React from "react";
import Image from "next/image";

function index() {
  return (
    <div className="flex flex-col relative h-screen w-full mt-24 items-center justify-center">
      <div className="absolute -top-10 left-0">
        <Image
          src="/images/circle2.png"
          height={1200}
          width={1200}
          alt="image"
          className="object-full h-48 w-48 md:h-96 md:w-96 -z-10"
        />
      </div>
      <div className="hidden md:inline-block absolute bottom-10 right-0">
        <Image
          src="/images/circle1.png"
          height={1200}
          width={1200}
          alt="image"
          className="object-full h-48 w-48 md:h-96 md:w-96 -z-10"
        />
      </div>

      {/* Content */}
      <div className=" relative text-5xl w-full  md:w-3/4 text-center p-10 flex items-center flex-col justify-center">
        <h1 className="text-5xl md:text-6xl font-bold z-20">
          Monitor your Bitcoin Node
        </h1>
        <h1 className="text-lg font-light md:text-2xl md:font-thin w-full md:w-1/2 text-center items-center">
          Forkscanner - Your all-in-one solution for monitoring the Bitcoin
          chain and staying ahead of chain forks, double spends, and other
          critical events.
        </h1>
        <div className=" md:hidden absolute -bottom-24 right-0">
          <Image
            src="/images/circle1.png"
            height={1200}
            width={1200}
            alt="image"
            className="object-full h-48 w-48 md:h-96 md:w-96 -z-10"
          />
        </div>
      </div>
      <div className="relative text-5xl">
        <Image
          src="/images/bg2.png"
          height={1200}
          width={1200}
          alt="image"
          className=" object-full h-72 w-72 md:h-96 md:w-96"
        />
      </div>
    </div>
  );
}

export default index;
