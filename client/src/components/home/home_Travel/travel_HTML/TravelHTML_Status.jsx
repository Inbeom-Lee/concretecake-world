import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { Div_Opacity } from "Components";
import { item_StatusBorder } from "Assets/items";
import {
  TravelHTMLStatus_Pine,
  TravelHTMLStatus_Berry,
  TravelHTMLStatus_Honey,
} from "./travelHTML_Status/index";

export const TravelHTML_Status = () => {
  const { itemsCollected } = useSelector((state) => state.travel);

  const { pine, berry, honey } = itemsCollected;

  return (
    <Container $duration={3} $delay={2.2}>
      <Border src={item_StatusBorder} />
      <TravelHTMLStatus_Pine itemCollected={pine} />
      <TravelHTMLStatus_Berry itemCollected={berry} />
      <TravelHTMLStatus_Honey itemCollected={honey} />
    </Container>
  );
};

const Container = styled(Div_Opacity)`
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10000;

  @media (min-width: 600px) {
    top: 30px;
    left: 30px;
    transform: translateX(0);
  }
`;
const Border = styled.img`
  /* width: 54vh; */
  width: 91vw;

  @media (min-width: 440px) {
    width: 400px;
  }
`;
