import React from "react";
import Marquee from "react-fast-marquee";
import Card from "../components/Cards/index";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

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

          <button
            onClick={() => handleSubmit()}
            className="bg-[#f2a900] p-3 text-white"
          >
            Add
          </button>
        </div>
      </div>

      {/* Main content */}
      <div className="h-[500px] m-10 items-center justify-center flex-wrap">
        <Carousel autoPlay={true}>
          <div className="flex">
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
          <div>
            <div className="flex">
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
          </div>
          <div>
            <div className="flex">
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default explore;
