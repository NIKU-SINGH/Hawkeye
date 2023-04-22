import React from "react";
import Marquee from "react-fast-marquee";
import Card from "../components/Cards/index";

function explore() {
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

      {/* Main content */}
      <div className="h-full m-10 flex flex-col items-center justify-center">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default explore;
