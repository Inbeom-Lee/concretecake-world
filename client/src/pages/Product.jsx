import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import BackgroundColor from "Components/BackgroundColor";
import LanguageSetting from "Components/LanguageSetting";
import Menu from "Components/Menu";
import {
  // Product_Menu as Menu,
  Product_MockUp as MockUp,
  Product_Bulk as Bulk,
  Product_Instruction as Instruction,
} from "Components/product/index";

const Product = () => {
  return (
    <>
      <BackgroundColor />
      <LanguageSetting />
      <Menu />
      <Routes>
        <Route path="mockUp" element={<MockUp />} />
        <Route path="bulk" element={<Bulk />} />
        <Route path="instruction" element={<Instruction />} />
        <Route path="*" element={<Navigate to="mockUp" replace />} />
      </Routes>
    </>
  );
};

export default Product;
