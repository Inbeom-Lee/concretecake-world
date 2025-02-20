import React, { useState, useEffect, useRef } from "react";
import styled, { css } from "styled-components";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { useMediaQuery } from "Hooks";
import { Home_HeroSection } from "Components/homeLegacy/index";

const Home = () => {
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  const isDesktop = useMediaQuery({ minWidth: 1100 });
  const refContainer = useRef();

  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

  useEffect(() => {
    // smooth scroll setup
    ScrollSmoother.create({
      content: "#smooth-content",
      smooth: 1,
      effects: true,
    });

    // set window height
    const handleResize = () => setWindowHeight(window.innerHeight);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!refContainer.current) return;
    if (!isDesktop) return;
    if (windowHeight < 840) return;

    let sections = gsap.utils.toArray(".ingredientBox");

    // Create a horizontal scroll animation
    const tl = gsap.to(".horizontalContainer", {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      duration: 6,
      scrollTrigger: {
        trigger: ".horizontalContainer",
        start: "top top",
        end: `+=${window.innerWidth * sections.length}`,
        pin: true,
        scrub: true,
        // markers: true,
      },
    });

    // Return a cleanup function that kills the animation
    return () => {
      if (tl.scrollTrigger) {
        tl.scrollTrigger.kill();
      }
      tl.kill();
    };
  }, [refContainer.current, isDesktop, windowHeight]);

  const handleScroll = (e) => {
    console.log({ ...e });
  };

  const render = (
    <Container id="smooth-content" onScroll={handleScroll}>
      <Home_HeroSection />
    </Container>
  );
  return render;
};

const Container = styled.div`
  width: 100vw;
`;
const HorizontalScroll = styled.div`
  ${(props) => {
    const { $windowHeight } = props;

    return $windowHeight > 840
      ? css`
          @media (min-width: 1100px) {
            display: flex;
            align-items: center;
          }
        `
      : css`
          @media (min-width: 1100px) {
            & > div {
              margin-top: 20vh;
            }
          }
        `;
  }}
`;

export default Home;
