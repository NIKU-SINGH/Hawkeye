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
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
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
  const [open, setOpen] = useState(false)

  return (
    <div>
      <div className="flex justify-around font-Poppins">
        <div className="z-20">
          <Sidebar />
        </div>

        {/* Node Info */}
        <div className="w-4/5 flex-col">
          {/* Carousel Component */}
          <div className="bg-gray-800 rounded-lg w-full ml-10">
            <h1 className=" text-2xl font-semibold p-2 ">Manage Node</h1>
            <button 
            onClick={( )=> setOpen(!open)}
            className="bg-orange-400 m-2 cursor-pointer py-2 text-center w-48 rounded tracking-wide text-white text-base font-normal">
              Add
            </button>
            <button className="bg-orange-400 m-2 cursor-pointer py-2 text-center w-48 rounded tracking-wide text-white text-base font-normal">
              Remove
            </button>
          </div>
          <h1 className="ml-8 text-2xl font-semibold p-4 ">Node Info</h1>
          <div className="w-full">
            <Carousel
              swipeable={false}
              draggable={false}
              showDots={true}
              responsive={responsive}
              ssr={true} // means to render carousel on server-side.
              infinite={true}
              autoPlay={true}
              autoPlaySpeed={3000}
              keyBoardControl={true}
              customTransition="all .5"
              transitionDuration={500}
              containerClass="carousel-container"
              removeArrowOnDeviceType={["tablet", "mobile"]}
              rewindWithAnimation={true}
              dotListClass="custom-dot-list-style"
              itemClass="carousel-item-padding-80-px"
              className="overflow-hidden flex items-center justify-center"
            >
              {data.map((card, idx) => (
                <Card key={idx} card={card} />
              ))}
            </Carousel>
          </div>

          {/* 2nd Section */}
          <div className="flex mt-10 flex-wrap">
            {/* Table */}
            <div className="w-full m-8">
              <h1 className="text-2xl font-semibold p-4 hover:underline-offset-2">
                Blockchain Info
              </h1>
              <Table />
            </div>
          </div>

          {/* Info */}
          <div className="m-8">
            <h1 className="text-2xl font-semibold p-4 ">Get Blockchain Info</h1>
            <Info />
          </div>

          <div className="m-8">
            <Status />
            <Update />
          </div>
        </div>
      </div>


      {/* Modals */}
      {
        open ? <Modal /> : ""
      }
    </div>
  );
}

export default dashboard;
