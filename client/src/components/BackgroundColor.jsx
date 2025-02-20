import React from "react";
import styled from "styled-components";

const BackgroundColor = () => {
  return (
    <>
      <Red />
      <Purple />
      <Green />
    </>
  );
};

const Base = styled.div`
  position: fixed;
  z-index: -100;
`;
const Green = styled(Base)`
  top: 42.2%;
  left: -49.7%;
  width: 191vw;
  height: 98vh;
  background: radial-gradient(
    50% 50% at 50% 50%,
    rgba(117, 205, 169, 0.75) 0%,
    rgba(255, 255, 255, 0) 100%
  );
  border-radius: 191vw;
`;
const Purple = styled(Base)`
  top: -71.7%;
  left: 37.2%;
  width: 172vw;
  height: 214vh;
  background: radial-gradient(
    50% 50% at 50% 50%,
    #d2d0f3 19%,
    rgba(255, 255, 255, 0) 100%
  );
  border-radius: 172vw;
`;
const Red = styled(Base)`
  top: -130%;
  left: -93.6%;
  width: 206vw;
  height: 210vh;
  border-radius: 206vw;
  background: radial-gradient(#ffd2e7 0%, rgba(0, 0, 0, 0) 50%);
`;

export default BackgroundColor;
