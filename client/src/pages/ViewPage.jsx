import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import BackgroundColor from "Components/BackgroundColor";
import {
  ViewPage_ButtonHome,
  ViewPage_Pine,
  ViewPage_Berry,
  ViewPage_Honey,
} from "Components/viewPage";

const ViewPage = () => {
  return (
    <>
      <BackgroundColor />
      <ViewPage_ButtonHome />
      <Routes>
        <Route path="pine" element={<ViewPage_Pine />} />
        <Route path="berry" element={<ViewPage_Berry />} />
        <Route path="honey" element={<ViewPage_Honey />} />
        <Route path="*" element={<Navigate to="pine" replace />} />
      </Routes>
    </>
  );
};

export default ViewPage;
