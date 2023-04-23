import React from "react";
import { useRouter } from "next/router";

function Index() {
  const router = useRouter();
  return (
    <div className="mx-1 p-4 md:mx-10 flex items-center justify-between text-gray-800">
      {/* Logo */}
      <div
        onClick={() => router.push("/")}
        className="font-extrabold font-Raleway text-2xl md:text-3xl flex-1 cursor-pointer"
      >
        Hawkeye.
      </div>

      <div className="mx-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-8 h-8 text-[#f2a900] cursor-pointer"
        >
          <path d="M5.85 3.5a.75.75 0 00-1.117-1 9.719 9.719 0 00-2.348 4.876.75.75 0 001.479.248A8.219 8.219 0 015.85 3.5zM19.267 2.5a.75.75 0 10-1.118 1 8.22 8.22 0 011.987 4.124.75.75 0 001.48-.248A9.72 9.72 0 0019.266 2.5z" />
          <path
            fillRule="evenodd"
            d="M12 2.25A6.75 6.75 0 005.25 9v.75a8.217 8.217 0 01-2.119 5.52.75.75 0 00.298 1.206c1.544.57 3.16.99 4.831 1.243a3.75 3.75 0 107.48 0 24.583 24.583 0 004.83-1.244.75.75 0 00.298-1.205 8.217 8.217 0 01-2.118-5.52V9A6.75 6.75 0 0012 2.25zM9.75 18c0-.034 0-.067.002-.1a25.05 25.05 0 004.496 0l.002.1a2.25 2.25 0 11-4.5 0z"
            clipRule="evenodd"
          />
        </svg>
      </div>

      <div className="border-2 rounded-full  border-gray-400 flex items-center justify-center px-4">
        <h1 clxassName="mx-2 font-Raleway font-bold text-base">Manage Nodes</h1>
        <div className="flex items-center text-sm  font-normal font-Poppins cursor-pointer p-2">
          <button
            onClick={() => router.push("/explore")}
            className="bg-[#f2a900] p-2 mx-2 rounded-full w-24 text-white "
          >
            Add
          </button>
        </div>
        <div>
          <button
            onClick={() => router.push("/lightning")}
            className="bg-[#f2a900] p-2 mx-2 rounded-full w-24 text-white "
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}

export default Index;
