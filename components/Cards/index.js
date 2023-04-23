import React from "react";
import Image from "next/image";
import { useState } from "react";

function Index({ key, card }) {
  const [open, setOpen] = useState(false);
  console.log("Card details is", card.img);

  console.log("status is", open);
  return (
    <div className="flex-row justify-center items-center m-8">
      <div className="flex-col items-center p-2 mt-2  bg-blue-200 rounded-lg hover:cursor-pointer hover:shadow border">
        {/* Logo */}
        <div className="w-64">
          <Image
            src={`${card.img}`}
            height={1200}
            width={1200}
            className="rounded-lg h-24 w-24 object-contain"
          />
        </div>

        {/* Information */}
        <div className="rounded-lg">
          {/* <div className="p-2"> */}
          <h1 className="text-gray-800 font-medium text-2xl text-center">
            {card.name}
          </h1>
          <div className="p-1  flex-col items-center justify-center">
            <div className="bg-gray-300 w-full flex justify-around ">
              <p className="bg-gray-600 text-white w-1/2 border-2 border-gray">Node</p>
              <p className="bg-gray-400 w-1/2 border-2 border-gray">{card.node_id}</p>
            </div>
            <div className="bg-gray-300 w-full flex justify-around">
              <p className="bg-gray-600 text-white w-1/2 border-2 border-gray">Staus</p>
              <p className="bg-gray-400 w-1/2 border-2 border-gray">{card.status}</p>
            </div>
            <div className="bg-gray-300 w-full flex justify-around">
              <p className="bg-gray-600 text-white w-1/2 border-2 border-gray">Height</p>
              <p className="bg-gray-400 w-1/2 border-2 border-gray">{card.height}</p>
            </div>
          </div>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}

export default Index;
