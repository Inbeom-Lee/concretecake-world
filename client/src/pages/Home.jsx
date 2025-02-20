import React from "react";
import { HomeProvider, useHome } from "Contexts";
import {
  Home_BackgroundColor,
  Home_BackgroundMusic,
  Home_Travel,
  Home_Initial,
  Home_Cake,
} from "Components/home";

const Home = () => {
  return (
    <HomeProvider>
      <Home_BackgroundColor />
      {/* <Home_BackgroundMusic /> */}
      <_Home />
    </HomeProvider>
  );
};

const _Home = () => {
  const { page } = useHome();

  const checkPage = (pages) => pages.includes(page);

  if (checkPage(["initial"])) return <Home_Initial />;
  if (checkPage(["travel"])) return <Home_Travel />;
  if (checkPage(["cakeAndPot", "cakeDetail", "cakeFinal"]))
    return <Home_Cake />;
};

export default Home;
