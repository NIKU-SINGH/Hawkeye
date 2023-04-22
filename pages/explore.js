import React from "react";
import Marquee from "react-fast-marquee";

function explore() {
  return (
    <div>
      <Marquee
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
      </Marquee>
    </div>
  );
}

export default explore;
