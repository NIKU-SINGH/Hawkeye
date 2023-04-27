import React from "react";
import Image from "next/image";
import { useState } from "react";

function Index({ card }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex-row justify-center items-center m-8 font-Poppins -z-1000">
      <div className="flex-col items-center p-2 mt-2 w-72 bg-gray-500 rounded-lg hover:cursor-pointer hover:shadow border">
        {/* Logo */}
        <div className="w-full flex items-center justify-center">
          <Image
              src={"/images/core.png"}
              alt="img"
              height={1200}
              width={1200}
              className="rounded-lg h-24 w-24 object-contain"
            />
          {/* <img
            src={"/images/core.png"}
            className="rounded-lg h-24 w-24 object-contain my-8"
          ></img> */}
        </div>

        {/* Information */}
        <div className="rounded-lg">
          {/* <div className="p-2"> */}
          <h1 className="text-gray-800 font-medium text-2xl text-center">
            {card.name}
          </h1>
          <div className="p-1  flex-col items-center justify-center text-center">
            <div className=" w-full flex justify-around ">
              <p className="bg-gray-600 text-white w-1/2 border-2 p-2 border-gray">
                Node
              </p>
              <p className="bg-gray-400 w-1/2 border-2 border-gray p-2">
                {card.id}
              </p>
            </div>
            <div className="bg-gray-300 w-full flex justify-around">
              <p className="bg-gray-600 text-white w-1/2 border-2 p-2 border-gray">
                Staus
              </p>
              <p className="bg-gray-400 w-1/2 border-2 p-2 border-gray">
                {card.status}
              </p>
            </div>
            <div className="bg-gray-300 w-full flex justify-around">
              <p className="bg-gray-600 text-white w-1/2 border-2 p-2 border-gray">
                Height
              </p>
              <p className="bg-gray-400 w-1/2 border-2 p-2 border-gray">
                {card.height}
              </p>
            </div>
          </div>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}

export default Index;
