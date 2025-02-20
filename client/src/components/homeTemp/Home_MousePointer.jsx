import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import svgStar from "Assets/icons/icon_Star.svg";

export const Home_MousePointer = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let timerId;

    const handleMouseMove = (e) => {
      setIsVisible(true); // Show the element when the mouse moves
      setPosition({ x: e.pageX, y: e.pageY });

      clearTimeout(timerId); // Clear the previous timer
      timerId = setTimeout(() => {
        setIsVisible(false); // Hide the element after a period of inactivity
      }, 500); // 2000 ms = 2 seconds of inactivity before fading out
    };

    // Attach the event listener
    document.addEventListener("mousemove", handleMouseMove);

    // Cleanup function to remove the event listener
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(timerId); // Clean up the timer when the component unmounts
    };
  }, []); // Empty array means this effect runs only once on mount

  console.log(isVisible);

  return (
    <>
      <Star1
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          opacity: isVisible ? 1 : 0,
        }}
        // transition={{ duration: 1, delay: 0.5 }}
      />
      <Star2
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          opacity: isVisible ? 1 : 0,
        }}
        // transition={{ duration: 1, delay: 0.8 }}
      />
      <Star3
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          opacity: isVisible ? 1 : 0,
        }}
        // transition={{ duration: 1, delay: 1.1 }}
      />
      <Star4
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          opacity: isVisible ? 1 : 0,
        }}
        // transition={{ duration: 1, delay: 1.2 }}
      />
      <Star5
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          opacity: isVisible ? 1 : 0,
        }}
        // transition={{ duration: 1, delay: 1.4 }}
      />
    </>
  );
};

const Container = styled.div`
  position: absolute;
  width: 10px;
  height: 10px;
`;
const Star = styled(motion.img).attrs(({ transition }) => ({
  src: svgStar,
  // animate: {
  //   scale: [1, 1.2, 1.2, 1, 1],
  //   opacity: [0.5, 1, 1, 0.7, 0.5],
  // },
  // transition: { repeat: Infinity, ...transition },
}))`
  position: absolute;
`;
const Star1 = styled(Star)`
  width: 1%;
  transition: top 0.2s, bottom 0.2s;
`;
const Star2 = styled(Star)`
  width: 0.5%;
  transition: top 0.3s, bottom 0.3s;
`;
const Star3 = styled(Star)`
  width: 0.7%;
  transition: top 0.4s, bottom 0.4s;
`;
const Star4 = styled(Star)`
  width: 0.4%;
  transition: top 0.5s, bottom 0.5s;
`;
const Star5 = styled(Star)`
  width: 0.2%;
  transition: top 0.6s, bottom 0.6s;
`;
