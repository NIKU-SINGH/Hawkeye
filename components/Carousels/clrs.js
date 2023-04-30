import React from "react";
import Card from "../Cards/index";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
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

function Clrs({ data }) {
  return (
    <div>
      {/* Main content */}
      <div className=" m-10 items-center justify-center flex-wrap">
        <Carousel
          ssr
          partialVisbile
          itemClass="image-item"
          responsive={responsive}
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
          transitionDuration={500}
          infinite={true}
          autoPlay={true}
          showDots={true}
        >
          {data.map((card, idx) => (
            <Card key={idx} card={card} />
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default Clrs;
