import React from "react";
import Marquee from "react-fast-marquee";

function explore() {
  return (
    <div>
      <Marquee speed={200}>
        I can be a React component, multiple React components, or just some
        text.
      </Marquee>
    </div>
  );
}

export default explore;
