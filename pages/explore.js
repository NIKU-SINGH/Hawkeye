import React from "react";
import Marquee from "react-fast-marquee";
import Card from "../components/Cards/index";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Carousel from "../components/Carousels/clrs.js";
import BlockInfo from "../components/Info/index";
import Navbar from '../components/Navbar/index';

function explore() {
  const handleSubmit = () => {
    console.log("Entering explore");
  };
  return (
    <div>
    <Navbar />
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
            Blockhain Info
          </h1>
          <div>
            <div class="flex flex-col">
              <div class="overflow-x-auto sm: lg:mx-0.5">
                <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                  <div class="overflow-hidden">
                    <table class="min-w-full">
                      <thead class="bg-gray-200 border-b">
                        <tr>
                          <th
                            scope="col"
                            class="text-sm font-medium bg-gray-400 text-gray-900 px-6 py-4 text-left"
                          >
                            Property
                          </th>
                          <th
                            scope="col"
                            class="text-sm font-medium bg-gray-300 text-gray-900 px-6 py-4 text-left"
                          >
                            
                          </th>
                          <th
                            scope="col"
                            class="text-sm font-medium bg-gray-400 text-gray-900 px-6 py-4 text-left"
                          >
                            Property
                          </th>
                          <th
                            scope="col"
                            class="text-sm font-medium bg-gray-300 text-gray-900 px-6 py-4 text-left"
                          >
                            
                          </th>
                        </tr>
                      </thead>

                      <tbody>
                        <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                          <td class="px-6 py-4 bg-gray-400  whitespace-nowrap text-sm font-medium text-gray-900">
                            Height
                          </td>
                          <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            
                          </td>
                          <td class="text-sm text-gray-900  bg-gray-400  font-light px-6 py-4 whitespace-nowrap">
                            Pow
                          </td>
                          <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            
                          </td>
                        </tr>

                        <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                          <td class="px-6 py-4 bg-gray-400 whitespace-nowrap text-sm font-medium text-gray-900">
                            Forks
                          </td>
                          <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            
                          </td>
                          <td class="text-sm bg-gray-400 text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            Size
                          </td>
                          <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            
                          </td>
                        </tr>


                        <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                          <td class="px-6 py-4 whitespace-nowrap bg-gray-400 text-sm font-medium text-gray-900">
                            First Seen
                          </td>
                          <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          </td>
                          
                          <td class="text-sm text-gray-900 bg-gray-400 font-light px-6 py-4 whitespace-nowrap">
                            
                          </td>
                        </tr>

                        <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                          <td class="px-6 py-4 whitespace-nowrap bg-gray-400 text-sm font-medium text-gray-900">
                            Miner
                          </td>
                          <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            
                          </td>
                          <td class="text-sm text-gray-900 bg-gray-400 font-light px-6 py-4 whitespace-nowrap">
                            Fees
                          </td>
                          <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            
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
