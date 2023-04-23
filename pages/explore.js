import React from "react";
import Marquee from "react-fast-marquee";
import Card from "../components/Cards/index";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const data = [
  {
    name : "R pi 4",
    node_id: "5",
    status: "Active",
    height: 77777,
    img: "/images/rpi.png"

  },
  {
    name : "bcoin",
    node_id: "15",
    status: "Stale",
    height: 77779,
    img: "/images/bcoin.png"
  },
  {
    name : "lnd",
    node_id: "7",
    status: "Valid Fork",
    height: 670706,
    img: "/images/lnd.jpg"

  },
  {
    name : "Core",
    node_id: "25",
    status: "Active",
    height: 77777,
    img: "/images/core.png"

  },
]
function explore() {
  const [showModal, setShowModal] = React.useState(false);
  console.log("datra",data.img)

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

      <div className="max-w-md mx-auto absoulte mt-10 ">
        <div className="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
          <div className="grid place-items-center h-full w-12 text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>

          <input
            class="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
            type="text"
            id="search"
            placeholder="Add nodes here"
          />

          {/* Start */}

          <button
            className="bg-[#f2a900] text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
            onClick={() => setShowModal(true)}
          >
            Add
          </button>

          {showModal ? (
            <>
              <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                  {/*content*/}
                  <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    {/*header*/}
                    <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                      <h3 className="text-3xl font-semibold">Add Node</h3>
                      <button
                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                        onClick={() => setShowModal(false)}
                      >
                        <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                          
                        </span>
                      </button>
                    </div>
                    {/*body*/}


                    <form>
                      <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">

                      {/* First form */}
                          <div class="w-full px-3 mb-6 md:mb-0 flex items-center justify-center">
                            <label
                              class=" tracking-wide text-black text-base font-normal mb-2"
                              htmlFor="Enter the Node Name"
                            >
                              Name 
                            </label>
                            <input
                              class="ml-2 w-full bg-gray-200 text-black border border-gray-200 rounded py-1 px-4 mb-3"
                              id="company"
                              type="text"
                              placeholder="Enter the Node Name"
                            />
                          </div>
                        {/* Second Form */}
                          <div class="w-full px-3 mb-6 md:mb-0 flex items-center justify-center">
                            <label
                              class=" tracking-wide text-black text-base font-normal mb-2"
                              htmlFor="Enter the Node Name"
                            >
                              Name 
                            </label>
                            <input
                              class="ml-2 w-full bg-gray-200 text-black border border-gray-200 rounded py-1 px-4 mb-3"
                              id="company"
                              type="text"
                              placeholder="Enter the Node Name"
                            />
                          </div>
                        {/* Second Form */}
                          <div class="w-full px-3 mb-6 md:mb-0 flex items-center justify-center">
                            <label
                              class=" tracking-wide text-black text-base font-normal mb-2"
                              htmlFor="Enter the Node Name"
                            >
                              Name 
                            </label>
                            <input
                              class="ml-2 w-full bg-gray-200 text-black border border-gray-200 rounded py-1 px-4 mb-3"
                              id="company"
                              type="text"
                              placeholder="Enter the Node Name"
                            />
                          </div>
                        {/* Second Form */}
                          <div class="w-full px-3 mb-6 md:mb-0 flex items-center justify-center">
                            <label
                              class=" tracking-wide text-black text-base font-normal mb-2"
                              htmlFor="Enter the Node Name"
                            >
                              Name 
                            </label>
                            <input
                              class="ml-2 w-full bg-gray-200 text-black border border-gray-200 rounded py-1 px-4 mb-3"
                              id="company"
                              type="text"
                              placeholder="Enter the Node Name"
                            />
                          </div>
                      


                       
                        
                        <div class="-mx-3 md:flex mt-2">
                          <div class="md:w-full px-3">
                            <button class="md:w-full bg-gray-900 text-white font-bold py-2 px-4 border-b-4 hover:border-b-2 border-gray-500 hover:border-gray-100 rounded-full">
                              Button
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>




                    {/*footer*/}
                    <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                      <button
                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => setShowModal(false)}
                      >
                        Close
                      </button>
                      <button
                        className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => setShowModal(false)}
                      >
                        Save Changes
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
          ) : null}

          {/* End */}
        </div>
      </div>

      {/* Main content */}
      <div className="h-[500px] m-10 items-center justify-center flex-wrap">
        <Carousel autoPlay={true}>
          <div className="flex">
            {
              data.map((card,idx) => (
                
                <Card key={idx} card={card} />
              ))
            }
          </div>
          <div className="flex">
            {
              data.map((card,idx) => (

                <Card key={idx} card={card} />
              ))
            }
          </div>
            <div className="flex">
              {
                data.map((card,idx) => (

                  <Card key={idx} card={card} />
                ))
              }
            </div>
        </Carousel>
      </div>
    </div>
  );
}

export default explore;
