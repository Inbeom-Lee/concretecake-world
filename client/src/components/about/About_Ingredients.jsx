import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import {
  contentsIngredient_Formula1,
  contentsIngredient_Formula2,
  contentsIngredient_MixBake,
} from "Constants/contents";
import { Container_VH } from "Components";
import { icon_Molecule3, icon_Molecule4, icon_Molecule5 } from "Assets/icons";

export const About_Ingredients = () => {
  const { language } = useSelector((state) => state.language);

  const getFormula1 = contentsIngredient_Formula1[language];
  const getFormula2 = contentsIngredient_Formula2[language];
  const getMixBake = contentsIngredient_MixBake[language];

  return (
    <Base height={100}>
      <Container>
        <Wrapper>
          <Image src={icon_Molecule3} />
          <Title>
            Formula 1<br />
            Alginglucose®
          </Title>
          <Text>{getFormula1}</Text>
        </Wrapper>
        <Wrapper>
          <Image src={icon_Molecule4} />
          <Title>
            Formula 2<br />
            Oildiatima®
          </Title>
          <Text>{getFormula2}</Text>
        </Wrapper>
        <Wrapper>
          <Image src={icon_Molecule5} />
          <Title>
            <br />
            Mix & bake!
          </Title>
          <Text>{getMixBake}</Text>
        </Wrapper>
      </Container>
    </Base>
  );
};

const Base = styled(Container_VH)`
  display: grid;
  place-items: center;
  padding-top: 75px;
  width: 100vw;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 120px;
  padding: 20px;
  width: 100%;

  @media (min-width: 900px) {
    flex-direction: row;
    align-items: start;
    gap: 50px;
    padding: 50px;
  }
`;
const Wrapper = styled.div`
  flex: 1;
  max-width: 500px;
`;
const Image = styled.img`
  display: block;
  margin: 0 auto;
  height: 80px;
`;
const Title = styled.h4`
  margin-top: 30px;
  font-size: 30px;
`;
const Text = styled.p`
  margin-top: 20px;
  font-family: "OpenSans";
  white-space: pre-line;
  text-align: justify;
  text-align-last: left;
`;
