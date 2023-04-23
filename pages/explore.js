import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from "../components/Cards/index";
import Table from "../components/Table/Table";
import Mainnav from '../components/Navbar/mainNavbar'

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 6,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

// Card Data
const data = [
  {
    name: "Rpi 4",
    node_id: "5",
    status: "Active",
    height: 77777,
    img: "/images/rpi.png",
  },
  {
    name: "bcoin",
    node_id: "15",
    status: "Stale",
    height: 77779,
    img: "/images/bcoin.png",
  },
  {
    name: "Core",
    node_id: "25",
    status: "Active",
    height: 77777,
    img: "/images/core.png",
  },
  {
    name: "bcoin",
    node_id: "15",
    status: "Stale",
    height: 77779,
    img: "/images/bcoin.png",
  },
  {
    name: "Core",
    node_id: "25",
    status: "Active",
    height: 77777,
    img: "/images/core.png",
  },
];

function explore() {
  return (
    <div>
      <Mainnav />

      {/* TO manage Nodes */}
      <div className=" flex items-center justify-center flex-col">
        <h1 className="text-lg font-Poppins font-semibold">Manage Node</h1>
        <div className="flex justify-around w-96 bg-orange-200 p-4 rounded-full">
          <button className="bg-orange-500 p-2 hover:bg-orange-400 w-32 text-white rounded">
            Add
          </button>
          <button className="bg-orange-500 p-2 w-32 hover:bg-orange-400 text-white rounded">
            Remove
          </button>
        </div>

        {/* Carousel Section */}
        <div className="bg-orange-100 h-1/2 w-full m-4">
          <Carousel responsive={responsive}>
            {data.map((card, idx) => (
              <Card key={idx} card={card} />
            ))}
          </Carousel>
        </div>

        {/* Table Section */}
        <div className=" w-full h-auto">
          <Table />
        </div>

        {/* Get Block Info Section */}
        <div className="w-full p-10 mx-8">
          <h1 className="font-Poppins font-bold text-center text-3xl mt-4">
            Get Blockchain Info
          </h1>

          <form className="flex flex-wrap items-center justify-center ">
            <div class=" m-2 px-4 py-2 flex items-center justify-center bg-white rounded-full ">
              <label
                className=" w-48  tracking-wide text-black text-base font-normal"
                htmlFor="Enter the Node Name"
              >
                <button className="bg-orange-400 p-2 w-48 rounded text-white">
                  Block By Height
                </button>
              </label>
              <input
                className="ml-2 w-full bg-gray-200 text-black border border-gray-200 rounded py-1 px-4"
                id="company"
                type="text"
                placeholder="Enter the Block Height"
              />
            </div>

            <div class=" px-4 m-2 py-2 flex items-center justify-center bg-white rounded-full ">
              <label
                className=" w-48  tracking-wide text-black text-base font-normal"
                htmlFor="Enter the Node Name"
              >
                <button className="bg-orange-400 p-2 w-48 rounded text-white">
                  Block By Hash
                </button>
              </label>
              <input
                className="ml-2 w-full bg-gray-200 text-black border border-gray-200 rounded py-1 px-4"
                id="company"
                type="text"
                placeholder="Enter the Block Height"
              />
            </div>

            <div class=" px-4 m-2 py-2 flex items-center justify-center bg-white rounded-full ">
              <label
                className=" w-48  tracking-wide text-black text-base font-normal"
                htmlFor="Enter the Node Name"
              >
                <button className="bg-orange-400 p-2 w-48 rounded text-white">
                  Get tips
                </button>
              </label>
              <input
                className="ml-2 w-full bg-gray-200 text-black border border-gray-200 rounded py-1 px-4"
                id="company"
                type="text"
                placeholder="Enter the Block Height"
              />
            </div>

            <div class=" px-4 m-2 py-2 flex items-center justify-center bg-white rounded-full ">
              <label
                className=" w-48  tracking-wide text-black text-base font-normal"
                htmlFor="Enter the Node Name"
              >
                <button className="bg-orange-400 p-2 w-48 rounded text-white">
                  Get Peers
                </button>
              </label>
              <input
                className="ml-2 w-full bg-gray-200 text-black border border-gray-200 rounded py-1 px-4"
                id="company"
                type="text"
                placeholder="Enter the Block Height"
              />
            </div>

            <div class=" px-4 m-2 py-2 flex items-center justify-center bg-white rounded-full ">
              <label
                className=" w-48  tracking-wide text-black text-base font-normal"
                htmlFor="Enter the Node Name"
              >
                <button className="bg-orange-400 p-2 w-48 rounded text-white">
                  Block from Peer
                </button>
              </label>
              <input
                className="ml-2 w-full bg-gray-200 text-black border border-gray-200 rounded py-1 px-4"
                id="company"
                type="text"
                placeholder="Enter the Block Height"
              />
            </div>
          </form>
        </div>

        {/* Check Transaction Status */}
        <h1 className="font-Poppins font-bold text-center text-3xl mt-4">
          Check Transaction Status
        </h1>
        <form>
          <div class=" px-4 m-2 py-2 flex items-center justify-center bg-white rounded-full ">
            <label
              className=" w-48  tracking-wide text-black text-base font-normal"
              htmlFor="Enter the Node Name"
            >
              <button className="bg-orange-400 p-2 w-48 rounded text-white">
                Check
              </button>
            </label>
            <input
              className="ml-2 w-full bg-gray-200 text-black border border-gray-200 rounded py-1 px-4"
              id="company"
              type="text"
              placeholder="Enter the Block Height"
            />
          </div>
        </form>

        {/* Update Address List */}
        <h1 className="font-Poppins font-bold text-center text-3xl mt-4">
          Update Address List
        </h1>
        <form>
          <div class=" px-4 m-2 py-2 flex items-center justify-center bg-white rounded-full ">
            <label
              className=" w-48  tracking-wide text-black text-base font-normal"
              htmlFor="Enter the Node Name"
            >
              <button className="bg-orange-400 p-2 w-48 rounded text-white">
                Add
              </button>
            </label>
            <input
              className="ml-2 w-full bg-gray-200 text-black border border-gray-200 rounded py-1 px-4"
              id="company"
              type="text"
              placeholder="Enter the Block Height"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default explore;
