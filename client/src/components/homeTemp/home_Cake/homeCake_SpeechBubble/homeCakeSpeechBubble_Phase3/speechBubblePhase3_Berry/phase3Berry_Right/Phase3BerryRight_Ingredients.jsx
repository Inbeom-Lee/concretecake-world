import React from "react";
import styled from "styled-components";
import { Phase3Right_Wrapper, Phase3Right_Text } from "../../common";

export const Phase3BerryRight_Ingredients = ({ fontBase }) => {
  const fontSize = fontBase * 0.015;

  return (
    <Wrapper $fontSize={fontSize}>
      <Title>6 berries</Title>
      <TextContainer>
        <TextWrapper>
          <TextItem>Rubus</TextItem>
          <TextItem>Idaeus</TextItem>
          <TextItem>(Raspberry)</TextItem>
          <TextItemLast>Extract</TextItemLast>
        </TextWrapper>
        <TextWrapper>
          <TextItem>Rubus</TextItem>
          <TextItem>Fruticosus</TextItem>
          <TextItem>(Cranberry)</TextItem>
          <TextItemLast>Extract</TextItemLast>
        </TextWrapper>
        <TextWrapper>
          <TextItem>Fragaria</TextItem>
          <TextItem>Chiloensis</TextItem>
          <TextItem>(Blackberry)</TextItem>
          <TextItemLast>Extract</TextItemLast>
        </TextWrapper>
        <TextWrapper>
          <TextItem>Vaccinium</TextItem>
          <TextItem>Macrocarpon</TextItem>
          <TextItem>(Strawberry)</TextItem>
          <TextItemLast>Extract</TextItemLast>
        </TextWrapper>
        <TextWrapper>
          <TextItem>Vaccinium</TextItem>
          <TextItem>Angustifolium</TextItem>
          <TextItem>(Blueberry)</TextItem>
          <TextItemLast>Extract</TextItemLast>
        </TextWrapper>
        <TextWrapper>
          <TextItem>Euterpe</TextItem>
          <TextItem>Oleracea</TextItem>
          <TextItem />
          <TextItemLast>Extract</TextItemLast>
        </TextWrapper>
      </TextContainer>
    </Wrapper>
  );
};

const Wrapper = styled(Phase3Right_Wrapper)`
  align-items: start;
  gap: 4%;
`;
const Title = styled(Phase3Right_Text)`
  flex-shrink: 0;
  text-align: left;
  text-align-last: left;
  width: 15%;
`;
const TextContainer = styled.div`
  flex: 1;
`;
const TextWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const TextItem = styled(Phase3Right_Text)`
  flex: 1;
`;
const TextItemLast = styled(Phase3Right_Text)`
  width: 14%;
`;
