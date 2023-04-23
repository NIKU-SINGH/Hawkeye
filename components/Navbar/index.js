import React from "react";
import { useRouter } from "next/router";

function Index() {
  const router = useRouter();
  return (
    <div className="mx-1 p-4 md:mx-10 md:p-6 flex items-center justify-between text-gray-800">
      {/* Logo */}
      <div
        onClick={() => router.push("/")}
        className="font-extrabold font-Raleway text-2xl md:text-2xl flex-1 cursor-pointer"
      >
        Hawkeye.
      </div>

      {/* Button */}
      <div className="flex items-center text-sm  font-normal font-Poppins cursor-pointer">
        <button
          onClick={() => router.push("/explore")}
          className="bg-[#f2a900] p-2 mx-2 rounded-full w-24 md:w-36 text-white "
        >
          Explore
        </button>
      </div>

      {/* Button */}
      <div>
        <button
          onClick={() => router.push("/lightning")}
          className="bg-[#f2a900] p-2 mx-2 rounded-full w-24 md:w-36 text-white "
        >
          Lightning
        </button>
      </div>
    </div>
  );
}

export default Index;
