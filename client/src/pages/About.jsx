import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import BackgroundColor from "Components/BackgroundColor";
import LanguageSetting from "Components/LanguageSetting";
import Menu from "Components/Menu";
import {
  About_Us as Us,
  About_World as World,
  About_Ingredients as Ingredient,
  About_Cakes as Cakes,
} from "Components/about/index";

const About = () => {
  return (
    <>
      <BackgroundColor />
      <LanguageSetting />
      <Menu />
      <Routes>
        <Route path="us" element={<Us />} />
        <Route path="world" element={<World />} />
        <Route path="ingredient" element={<Ingredient />} />
        <Route path="cakes" element={<Cakes />} />
        <Route path="*" element={<Navigate to="us" replace />} />
      </Routes>
    </>
  );
};
export default About;
