import React from "react";
import Sidebar from "../components/Sidebar/Index";
import Table from "../components/Table/Table";
import Info from "../components/Info/index";
import Status from "../components/Status/index";
import Update from "../components/Update/index";
import Modal from "@/components/Modal/index";
import CustomModal from "@/components/Modal/info";
import { useState, useEffect } from "react";
import Clrs from "@/components/Carousels/clrs";
import {
  getTips,
  getBlockByHeight,
  getBlockByHash,
  addNode,
  removeNode,
  getBlockFromPeer,
} from "@/helper";

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

function Dashboard() {
  const [openAdd, setOpenAdd] = useState(false);
  // Remove modal
  const [openRemove, setOpenRemove] = useState(false);
  // State variables
  const [tips, setTips] = useState([]);
  const [blockData, setBlockData] = useState([]);
  const [maxHeight, setMaxHeight] = useState("");
  const [isAddActive, setAddActive] = useState(false);
  const [isRemoveActive, setRemoveActive] = useState(false);

  

  // useEffect(() => {
  //   getData();
  //   getBlockByHeight();
  // }, [maxHeight]);

  // const getData = () => {
  //   getTips()
  //     .then((nodes_data) => {
  //       setTips(nodes_data);
  //       console.log(nodes_data);
  //       setMaxHeight(nodes_data[0].height);
  //     })
  //     .catch((err) => console.log(err));
  // };

  const getData = async () => {
    try {
      const res = await getTips();
      console.log("This is the data", res);
    } catch (err) {
      console.log(err);
    }
  };


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
              onClick={() => setOpenAdd(!openAdd)}
              className="bg-orange-400 m-2 cursor-pointer py-2 text-center w-48 rounded tracking-wide text-white text-base font-normal"
            >
              Add
            </button>
            <button
              onClick={() => setOpenRemove(!openRemove)}
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
      {openAdd ? <Modal /> : ""}
      {openRemove ? (
        <CustomModal
          title={"Remove Node"}
          feild="Node Id"
          placeholder="Enter Node ID"
          buttonSlug={"Remove"}
          key={1}
        />
      ) : (
        ""
      )}
    </div>
  );
}

export default Dashboard;
