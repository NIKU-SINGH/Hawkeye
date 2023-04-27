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
    items: 2,
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
          className="overflow-hidden flex items-center justify-center"
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
