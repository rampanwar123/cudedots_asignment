import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Iframe from "react-iframe";

const links = [
  "http://www.youtube.com/embed/xDMP3i36naA",
  "http://www.youtube.com/embed/xDMP3i36naA",
  "http://www.youtube.com/embed/xDMP3i36naA",
  "http://www.youtube.com/embed/xDMP3i36naA",
  "http://www.youtube.com/embed/xDMP3i36naA",
];

const AutoCarousel = () => {
  return (
    <Carousel
      infiniteLoop
      useKeyboardArrows
      autoPlay
      showArrows={false}
      showStatus={false}
    >
      {links.map((link, index) => (
        <div style={{ height: "90vh" }}>
          <Iframe
            key={index}
            url={link}
            width="100%"
            height="120%"
            id="myId"
            className="myClassname"
            display="initial"
            position="relative"
          />
        </div>
      ))}
    </Carousel>
  );
};

export default AutoCarousel;
