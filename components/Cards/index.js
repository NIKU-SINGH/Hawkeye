import React from "react";
import Image from "next/image";
import { useState } from "react";

function Index() {
  const [open, setOpen] = useState(false);

  console.log("status is", open);
  return (
    <div className="flex-row justify-center items-center m-8">
      <div className="flex w-64">
        <div className="flex-col items-center p-2 mt-2  bg-orange-200 rounded-lg hover:cursor-pointer hover:shadow border">
          {/* Logo */}
          <div>
            <Image
              src="/images/nostr_btc.jpg"
              height={1200}
              width={1200}
              className="  rounded-lg  "
            />
          </div>
          {/* Information */}
          <div className="flex justify-between w-full items-center">
            <div className="mx-2">
              <h1 className="text-gray-800 font-medium text-lg">Hello</h1>
              <p className="text-gray-800 font-light text-sm">
                Lorem10dsfjsfsjf[sjsfkslsf dfhdsfhs adfdsfd sfsfijbsafoefib
                dfioaehgno ouibv sofis
              </p>
            </div>
            {/* Pointer icon */}
            <div
              onClick={() => setOpen(!open)}
              className="bg-[#f2a900] text-white rounded-full h-6 w-6 p-1 flex items-center justify-center"
            >
              {open ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.47 7.72a.75.75 0 011.06 0l7.5 7.5a.75.75 0 11-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 01-1.06-1.06l7.5-7.5z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Dropover */}
      {open ? (
        <div className="bg-orange-300 p-4 w-64 rounded flex">
          <h className="font-medium">Explorer : </h>
          <p> Content can be added here</p>
          
        </div>
      ) : (
        <p></p>
      )}
    </div>
  );
}

export default Index;
