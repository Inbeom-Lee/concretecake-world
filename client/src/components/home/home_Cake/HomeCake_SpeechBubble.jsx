import React from "react";
import {
  HomeCakeSpeechBubble_Phase1,
  HomeCakeSpeechBubble_Phase2,
  HomeCakeSpeechBubble_Phase3,
} from "./homeCake_SpeechBubble/index";

export const HomeCake_SpeechBubble = ({
  phase,
  setPage,
  setPhase,
  setCheckDetail,
}) => {
  return (
    <>
      <HomeCakeSpeechBubble_Phase1 show={phase === 1} setPhase={setPhase} />
      <HomeCakeSpeechBubble_Phase2 show={phase === 2} setPage={setPage} />
      <HomeCakeSpeechBubble_Phase3
        show={phase === 3}
        setCheckDetail={setCheckDetail}
      />
    </>
  );
};
