import React from "react";
import styled from "styled-components";
import { icon_Molecule2, icon_Molecule3, icon_Molecule4 } from "Assets/icons";

export const SpeechBubblePhase1_Icons = () => {
  return (
    <Container>
      <Molecule1 src={icon_Molecule4} />
      <Molecule2 src={icon_Molecule2} />
      <Molecule3 src={icon_Molecule3} />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 6.53vw;
  position: absolute;
  top: 8%;
  left: 50%;
  transform: translateX(-50%);
`;
const Molecule1 = styled.img`
  width: 3.47vw;
  height: 4.3vh;
`;
const Molecule2 = styled.img`
  width: 2.01vw;
  height: 4.79vh;
`;
const Molecule3 = styled.img`
  width: 3.19vw;
  height: 4.49vh;
`;
