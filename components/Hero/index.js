import React from "react";
import Image from "next/image";

function index() {
  return (
    <div className="h-full p-10 mx-4 md:mx-20 font-Poppins">

      {/* Content */}
      <div className="flex-col flex items-center justify-center text-center">
        <div className="font-Montserrat text-3xl md:text-5xl font-bold w-full md:w-1/2 ">
          Scan and secure your network with Forkscanner.
        </div>

        <div className="font-Raleway text-lg text font-medium mt-4 md:mt-10 w-3/4">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`&apos;` standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it
        </div>
      </div>

      {/* Image */}
      <div className=" w-full  flex items-center md:p-10 mt-4 justify-center overflow-hidden ">
        <Image
          src="/images/btc_world.jpg"
          height={1200}
          width={1200}
          alt="logo"
          className="h-64 w-64 md:h-96 md:w-96 rounded-full"
        />
      </div>
    </div>
  );
}

export default index;
