import React from "react";
import { useRouter } from "next/router";

function Index() {
  const router = useRouter();
  return (
    <div>
      <div className="bg-gray-900 font-Poppins z-10">
        <div className="sidebar fixed top-0 bottom-0 lg:left-0 w-48 p-2 overflow-y-auto text-center bg-gray-900">
          <div className="text-gray-100 text-xl">
            <div className="p-2.5 mt-1 flex items-center">
              <h1
                onClick={() => router.push("/")}
                className="font-bold text-gray-200 text-xl ml-3 cursor-pointer"
              >
                HawkEye.
              </h1>
              <i
                className="bi bi-x cursor-pointer ml-28 lg:hidden"
                onclick="openSidebar()"
              ></i>
            </div>
            <div className="my-2 bg-gray-600 h-[1px]"></div>
          </div>

          <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-gray-700 text-white">
            <div>
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
                  d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>
            </div>
            <span
              onClick={() => router.push("/")}
              className="text-base ml-4 text-gray-200 font-bold"
            >
              Home
            </span>
          </div>

          <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-gray-700 text-white">
            <div>
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
                  d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5"
                />
              </svg>
            </div>
            <span
              onClick={() => router.push("/")}
              className="text-base ml-4 text-gray-200 font-bold"
            >
              Notification
            </span>
          </div>

          <div className="my-4 bg-gray-600 h-[1px]"></div>
        </div>
      </div>
    </div>
  );
}

export default Index;
