import React from "react";
import Marquee from "react-fast-marquee";
import Card from "../components/Cards/index";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Carousel from "../components/Carousels/clrs.js";
import BlockInfo from "../components/Info/index";

function explore() {
  const handleSubmit = () => {
    console.log("Entering explore");
  };
  return (
    <div>
      {/* <Marquee
        play={true}
        pauseOnHover={true}
        onFinish={() => null}
        speed={100}
        direction="left"
        className="overflow-hidden  "
        gradient={true}
      >
        I can be a React component, multiple React components, or just some
        text.
      </Marquee> */}

      <div className="flex items-center justify-center">
        <div className="w-1/3 h-1/3 ">
          <Carousel />
        </div>

        {/* Second Column */}
        <div className=" h-full w-1/2 ">
          <h1 className="font-semibold text-2xl flex flex-col text-center">
            Blochain Info
          </h1>
          <div>
            <div class="flex flex-col">
              <div class="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
                <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                  <div class="overflow-hidden">
                    <table class="min-w-full">
                      <thead class="bg-gray-200 border-b">
                        <tr>
                          <th
                            scope="col"
                            class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                          >
                            #
                          </th>
                          <th
                            scope="col"
                            class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                          >
                            First
                          </th>
                          <th
                            scope="col"
                            class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                          >
                            Last
                          </th>
                          <th
                            scope="col"
                            class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                          >
                            Handle
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                          <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            1
                          </td>
                          <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            Mark
                          </td>
                          <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            Otto
                          </td>
                          <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            @mdo
                          </td>
                        </tr>
                        <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                          <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            2
                          </td>
                          <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            Jacob
                          </td>
                          <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            Thornton
                          </td>
                          <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            @fat
                          </td>
                        </tr>
                        <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                          <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            3
                          </td>
                          <td
                            colspan="2"
                            class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                          >
                            Larry
                          </td>
                          <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            @twitter
                          </td>
                        </tr>
                        <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                          <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            4
                          </td>
                          <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            Whitney
                          </td>
                          <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            Austin
                          </td>
                          <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            @mdo
                          </td>
                        </tr>
                        <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                          <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            5
                          </td>
                          <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            Ted
                          </td>
                          <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            Obama
                          </td>
                          <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            @fat
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    {/* New Section */}
      <BlockInfo />



    </div>
  );
}

export default explore;
