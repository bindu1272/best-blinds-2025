import React from "react";
import Marquee from "react-fast-marquee";

const MarqueeScroll = () => {
  return (
    <div className="marquee_section">
      <Marquee pauseOnHover={true}>
        <h1> BLINDS WAREHOUSE SYDNEY</h1>
        <h1> BLINDS WAREHOUSE SYDNEY</h1>
        <h1> BLINDS WAREHOUSE SYDNEY</h1>
        <h1> BLINDS WAREHOUSE SYDNEY</h1>
      </Marquee>
    </div>
  );
};

export default MarqueeScroll;
