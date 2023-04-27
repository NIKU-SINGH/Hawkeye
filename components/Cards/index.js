import React from "react";
import Image from "next/image";
import { useState } from "react";

function Index({ card }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex-row justify-center items-center m-8 font-Poppins">
      <div className="flex-col items-center p-2 mt-2 h-64 w-64 bg-gray-800 rounded-lg hover:cursor-pointer shadow-2xl hover:shadow-cyan-500/50">
        {/* Logo */}
        <div className="w-full flex items-center justify-center">
          <Image
              src={"/images/core.png"}
              alt="img"
              height={1200}
              width={1200}
              className="bg-white rounded-full h-20 w-20 object-contain"
            />
          {/* <img
            src={"/images/core.png"}
            className="rounded-lg h-24 w-24 object-contain my-8"
          ></img> */}
        </div>

        {/* Information */}
        <div className="rounded-lg">
          {/* <div className="p-2"> */}
          <h1 className="text-gray-300 font-medium text-2xl text-center">
            {card.name}
          </h1>


          <div className="p-1  flex-col items-center justify-center text-center">
            <div className=" w-full flex justify-around ">
              <p className=" text-white w-1/2  p-2">
                Node
              </p>
              <p className=" text-white w-1/2  p-2">
                {card.id}
              </p>
            </div>


            <div className=" w-full flex justify-around">
              <p className="text-white w-1/2  p-2 ">
                Staus
              </p>
              <p className=" w-1/2 p-2 ">
                {card.status ? 'Active': card.status}
              </p>
            </div>


            <div className=" w-full flex justify-around">
              <p className=" text-white w-1/2  p-2">
                Height
              </p>
              <p className=" w-1/2 p-2">
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
