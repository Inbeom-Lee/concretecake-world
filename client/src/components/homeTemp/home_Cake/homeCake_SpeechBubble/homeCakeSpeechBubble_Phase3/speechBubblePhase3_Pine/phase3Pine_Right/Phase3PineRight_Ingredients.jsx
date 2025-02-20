import React from "react";
import styled from "styled-components";
import { Phase3Right_Wrapper, Phase3Right_Text } from "../../common";

export const Phase3PineRight_Ingredients = ({ fontBase }) => {
  const fontSize = fontBase * 0.015;

  return (
    <Wrapper $fontSize={fontSize}>
      <Title>5 HERBS</Title>
      <TextContainer>
        <TextWrapper>
          <TextItem>Mentha</TextItem>
          <TextItem>Piperita</TextItem>
          <TextItemThird>(Peppermint)</TextItemThird>
          <TextItemLast>Extract</TextItemLast>
        </TextWrapper>
        <TextWrapper>
          <TextItem>Thymus</TextItem>
          <TextItem>Vulgaris</TextItem>
          <TextItemThird>(Thyme)</TextItemThird>
          <TextItemLast>Extract</TextItemLast>
        </TextWrapper>
        <TextWrapper>
          <TextItem>Rosmarinus</TextItem>
          <TextItem>Officinalis</TextItem>
          <TextItemThird>(Rosemary)</TextItemThird>
          <TextItemLast>Extract</TextItemLast>
        </TextWrapper>
        <TextWrapper>
          <TextItem>Lavandula</TextItem>
          <TextItem>Angustifolia</TextItem>
          <TextItemThird>(Lavender)</TextItemThird>
          <TextItemLast>Extract</TextItemLast>
        </TextWrapper>
        <TextWrapper>
          <TextItem>Origanum</TextItem>
          <TextItem>Vulgare</TextItem>
          <TextItemThird>Flower/Leaf/Stem</TextItemThird>
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
  width: 13%;
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
const TextItemThird = styled(Phase3Right_Text)`
  width: 34%;
`;
const TextItemLast = styled(Phase3Right_Text)`
  width: 14%;
`;
