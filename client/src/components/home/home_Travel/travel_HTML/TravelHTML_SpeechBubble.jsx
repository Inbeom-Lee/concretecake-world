import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  TravelHTMLSpeechBubble_Pine1,
  TravelHTMLSpeechBubble_Berry1,
  TravelHTMLSpeechBubble_Honey1,
} from "./travelHTML_SpeechBubble/index";

export const TravelHTML_SpeechBubble = () => {
  const { stage } = useSelector((state) => state.travel);

  return (
    <>
      <TravelHTMLSpeechBubble_Pine1 isVisible={stage === "pine"} />
      <TravelHTMLSpeechBubble_Berry1 isVisible={stage === "berry"} />
      <TravelHTMLSpeechBubble_Honey1 isVisible={stage === "honey"} />
    </>
  );
};
