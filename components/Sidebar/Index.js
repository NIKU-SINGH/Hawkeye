import React from "react";
import { useRouter } from "next/router";

function Index() {
  const router = useRouter();
  return (
    <div>
      <div class="bg-gray-800 font-Poppins z-10">
        <div class="sidebar fixed top-0 bottom-0 lg:left-0 p-2 w-[300px] overflow-y-auto text-center bg-gray-900">
          <div class="text-gray-100 text-xl">
            <div class="p-2.5 mt-1 flex items-center">
              <h1
                onClick={() => router.push("/")}
                class="font-bold text-gray-200 text-xl ml-3 cursor-pointer"
              >
                HawkEye.
              </h1>
              <i
                class="bi bi-x cursor-pointer ml-28 lg:hidden"
                onclick="openSidebar()"
              ></i>
            </div>
            <div class="my-2 bg-gray-600 h-[1px]"></div>
          </div>

          <div class="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-gray-700 text-white">
            <span
              onClick={() => router.push("/")}
              class="text-base ml-4 text-gray-200 font-bold"
            >
              Home
            </span>
          </div>

          <div class="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-gray-700 text-white">
            <span
              onClick={() => router.push("/")}
              class="text-base ml-4 text-gray-200 font-bold"
            >
              Notification
            </span>
          </div>

          

          <div class="my-4 bg-gray-600 h-[1px]"></div>
        </div>
      </div>
    </div>
  );
}

export default Index;
