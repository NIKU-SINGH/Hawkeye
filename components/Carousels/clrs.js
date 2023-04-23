import React from "react";
import Card from "../Cards/index";
import { Carousel } from "react-responsive-carousel";

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
    name: "lnd",
    node_id: "7",
    status: "Valid Fork",
    height: 670706,
    img: "/images/lnd.jpg",
  },
  {
    name: "Core",
    node_id: "25",
    status: "Active",
    height: 77777,
    img: "/images/core.png",
  },
];

function Clrs() {
  return (
    <div>
      {/* Main content */}
      <div className=" m-10 items-center justify-center flex-wrap">
        <div className="">
          <Carousel
            autoPlay={true}
            infiniteLoop={true}
            useKeyboardArrows={true}
          >
            {data.map((card, idx) => (
                <Card key={idx} card={card} />
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default Clrs;
