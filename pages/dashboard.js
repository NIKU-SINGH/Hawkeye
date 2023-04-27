import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from "../components/Cards/index";
import Sidebar from "../components/Sidebar/Index";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
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
];

function dashboard() {
  return (
    <div className="flex justify-around">
      <Sidebar />
      <div className="w-4/5 bg-gray-800">
        <Carousel
          swipeable={false}
          draggable={false}
          showDots={true}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlaySpeed={1000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-80-px"
        >
          {data.map((card, idx) => (
            <Card key={idx} card={card} />
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default dashboard;
