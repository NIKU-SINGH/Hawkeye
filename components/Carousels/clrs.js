import React from "react";
import Card from "../Cards/index";
import { Carousel } from "react-responsive-carousel";


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
