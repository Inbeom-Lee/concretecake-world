import React from "react";
import styled from "styled-components";
import {
  HomeHeroSection_Initial,
  HomeHeroSection_Main,
} from "./home_HeroSection/index";

export const Home_HeroSection = () => {
  const render = (
    <>
      <HomeHeroSection_Initial />
      <HomeHeroSection_Main />
    </>
  );
  return render;
};
