import React from "react";
import { useHome } from "Contexts";
import {
  BackgroundColor_Red as Red,
  BackgroundColor_Purple as Purple,
  BackgroundColor_Green as Green,
} from "./home_BackgroundColor/index";

export const Home_BackgroundColor = () => {
  const { page } = useHome();

  return (
    <>
      <Red page={page} />
      <Purple page={page} />
      <Green page={page} />
    </>
  );
};
