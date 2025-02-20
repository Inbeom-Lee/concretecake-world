import React from "react";
import {
  HomeCakeButton_Detail,
  HomeCakeButton_Final,
} from "./homeCake_Button/index";

export const HomeCake_Button = ({ page, setPage, setPhase, setShowPage }) => {
  const isDetail = page === "cakeDetail";
  const isFinal = page === "cakeFinal";

  return isDetail ? (
    <HomeCakeButton_Detail setPhase={setPhase} />
  ) : isFinal ? (
    <HomeCakeButton_Final setPage={setPage} setShowPage={setShowPage} />
  ) : null;
};
