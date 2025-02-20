import React, { useEffect, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useFrame } from "@react-three/fiber";
import { Html, Scroll, useScroll } from "@react-three/drei";
import { useHome } from "Contexts";
import { setItemsCollected, setStage } from "Features/sliceTravel";
import { GlobalTheme, GlobalStyle } from "Theme/index";
import {
  Travel_Canvas,
  Travel_HTML,
  Travel_Road,
  Travel_Intro,
  Travel_Pine,
  Travel_Berry,
  Travel_Honey,
  Travel_Troll,
  Travel_Ground,
} from "./home_Travel/index";

export const Home_Travel = () => {
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setOpacity(1);
    }, 1000);
  }, []);

  return (
    <Container id="travelContainer" $opacity={opacity}>
      <Travel_HTML />
      <Travel_Canvas>
        <_Home_Travel setOpacity={setOpacity} />
      </Travel_Canvas>
    </Container>
  );
};

const _Home_Travel = ({ setOpacity }) => {
  const dispatch = useDispatch();
  const { setPage } = useHome();
  const { scroll } = useScroll();
  const { itemsCollected } = useSelector((state) => state.travel);

  useFrame(() => {
    const scrollY = scroll.current;

    // status - item collecting
    const pointLeaf = 0.066;
    const pointPine = 0.085;
    const pointBlueberry = 0.141;
    const pointRaspberry = 0.16;
    const pointBlackberry = 0.177;
    const pointHoney = 0.26;
    const { pine, berry, honey } = itemsCollected;

    if (scrollY >= pointLeaf && pine === 0) {
      dispatch(
        setItemsCollected({
          pine: 1,
        })
      );
    }

    if (scrollY >= pointPine && pine === 1) {
      dispatch(
        setItemsCollected({
          pine: 2,
        })
      );
    }

    if (scrollY >= pointBlueberry && berry === 0) {
      dispatch(
        setItemsCollected({
          berry: 1,
        })
      );
    }

    if (scrollY >= pointRaspberry && berry === 1) {
      dispatch(
        setItemsCollected({
          berry: 2,
        })
      );
    }

    if (scrollY >= pointBlackberry && berry === 2) {
      dispatch(
        setItemsCollected({
          berry: 3,
        })
      );
    }

    if (scrollY >= pointHoney && honey === 0) {
      dispatch(
        setItemsCollected({
          honey: 1,
        })
      );
    }

    // bubbleSpeech
    if (scrollY >= 0.063 && scrollY < 0.09) {
      dispatch(setStage("pine"));
      return;
    }
    if (scrollY >= 0.14 && scrollY < 0.18) {
      dispatch(setStage("berry"));
      return;
    }
    if (scrollY >= 0.25 && scrollY < 0.29) {
      dispatch(setStage("honey"));
      return;
    }
    dispatch(setStage(null));

    // page transtiion
    if (scrollY >= 0.31) {
      setOpacity(0);
      setTimeout(() => {
        setPage("cakeAndPot");
      }, 3000);
      return;
    }
  });

  return (
    <>
      <Travel_Ground />
      <Travel_Road />
      <Travel_Intro />
      <Travel_Pine />
      <Travel_Berry />
      <Travel_Honey />
      <Travel_Troll />
      {/* <Html>
        <div style={{ position: "fixed" }}>test</div>
      </Html> */}
      {/* <Scroll></Scroll> */}
      {/* <Scroll html>
        <GlobalStyle />
        <ThemeProvider theme={GlobalTheme}>
          <Travel_HTML />
        </ThemeProvider>
      </Scroll> */}
    </>
  );
};

const Container = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  opacity: ${({ $opacity }) => $opacity};
  z-index: 1000;
  transition: 3s;
`;
