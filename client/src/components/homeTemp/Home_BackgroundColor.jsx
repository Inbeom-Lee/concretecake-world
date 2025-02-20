import React from "react";
import {
  HomeBackgroundColor_Red as Red,
  HomeBackgroundColor_Purple as Purple,
  HomeBackgroundColor_Green as Green,
} from "./homeTemp/home_BackgroundColor/index";

export const Home_BackgroundColor = ({ page }) => {
  return (
    <>
      <Red page={page} />
      <Purple page={page} />
      <Green page={page} />
    </>
  );
};
