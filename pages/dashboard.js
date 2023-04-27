import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from "../components/Cards/index";
import Sidebar from "../components/Sidebar/Index";
import Table from "../components/Table/Table";
import Info from "../components/Info/index";
import Status from "../components/Status/index";
import Update from "../components/Update/index";
import Modal from "../components/Modal/index";
import { useState } from "react";
import Clrs from "@/components/Carousels/clrs";

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
  {
    name: "Core",
    node_id: "25",
    status: "Active",
    height: 77777,
    img: "/images/core.png",
  },
  {
    name: "Core",
    node_id: "25",
    status: "Active",
    height: 77777,
    img: "/images/core.png",
  },
  {
    name: "Core",
    node_id: "25",
    status: "Active",
    height: 77777,
    img: "/images/core.png",
  },
  {
    name: "Core",
    node_id: "25",
    status: "Active",
    height: 77777,
    img: "/images/core.png",
  },
  {
    name: "Core",
    node_id: "25",
    status: "Active",
    height: 77777,
    img: "/images/core.png",
  },
];

function dashboard() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div className="flex justify-between font-Poppins">
      <div className="w-64 h-screen ">
        <Sidebar />
      </div>
        {/* Node Info */}
        <div className="w-4/5 flex-col">
          {/* Carousel Component */}
          <div className="m-8 bg-gray-800 rounded-lg">
            <h1 className="text-xl font-semibold p-4">Manage Node</h1>
            <button
              onClick={() => setOpen(!open)}
              className="bg-orange-400 m-2 cursor-pointer py-2 text-center w-48 rounded tracking-wide text-white text-base font-normal"
            >
              Add
            </button>
            <button
              onClick={() => setOpen(!open)}
              className="bg-orange-400 m-2 cursor-pointer py-2 text-center w-48 rounded tracking-wide text-white text-base font-normal"
            >
              Remove
            </button>
          </div>

          <div className="m-8 bg-gray-800 rounded-lg">
            <h1 className=" text-xl font-semibold p-4 ">Node Info</h1>
            <div className="w-full">
              <Clrs data={data} />
            </div>
          </div>

          {/* 2nd Section */}
          <div className="flex mt-10 flex-wrap">
            {/* Table */}
            <div className="w-full m-8 p-4">
              <Table />
            </div>
          </div>

          {/* Info */}
          <div className="m-8">
            <Info />
          </div>

          <div className="m-8 flex">
            <Status />
            <Update />
          </div>
        </div>
      </div>

      {/* Modals */}
      {open ? <Modal /> : ""}
    </div>
  );
}

export default dashboard;
