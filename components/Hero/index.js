import React from "react";
import Image from "next/image";
import Block from "../Block/index";

function index() {
  return (
    <div className="h-full p-10 mx-4 md:mx-20 font-Poppins relative">
      <div>
        <div>
          <Image
            src="/images/coin.jpg"
            height={1200}
            width={1200}
            alt="logo"
            className="h-32 w-32 hidden md:inline-block absolute right-0 top-30 md:h-48 md:w-48 rounded-full"
          />
        </div>
      </div>

      {/* Content */}
      <div className="flex-col flex items-center justify-center text-center">
        <div className="font-Montserrat text-3xl md:text-5xl font-bold w-full md:w-1/2 ">
          Scan and secure your network with Forkscanner.
        </div>

        <div className="font-Raleway text-lg text font-medium mt-4 md:mt-10 w-3/4">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry`&apos;` standard dummy
          text ever since the 1500s, when an unknown printer took a galley of
          type and scrambled it
        </div>
      </div>

      {/* Image */}
      <div className=" w-full  flex items-center md:p-10 mt-4 justify-center overflow-hidden ">
        <Image
          src="/images/nostr_btc.jpg"
          height={1200}
          width={1200}
          alt="logo"
          className="h-64 w-64 md:h-96 md:w-96 rounded-full"
        />
      </div>

      <div>
        <Image
          src="/images/btc1.png"
          height={1200}
          width={1200}
          alt="logo"
          className="h-32 w-32 hidden md:inline-block absolute left-0 bottom-40 md:h-48 md:w-48 rounded-full"
        />
      </div>
    </div>
  );
}

export default index;
