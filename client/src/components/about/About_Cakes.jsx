import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import {
  contentsCake_PineTitle,
  contentsCake_BerryTitle,
  contentsCake_HoneyTitle,
  contentsCake_PineText,
  contentsCake_BerryText,
  contentsCake_HoneyText,
} from "Constants/contents";
import { Container_VH } from "Components";
import {
  image_CakePine,
  image_CakeBerry,
  image_CakeHoney,
} from "Assets/images";
import { icon_Pine, icon_Berry, icon_Honey } from "Assets/icons";
import { item_StatusBorder2 } from "Assets/items";

export const About_Cakes = () => {
  const { language } = useSelector((state) => state.language);

  const isKorean = language === "kr";

  const pineTitle = contentsCake_PineTitle[language];
  const pineText = contentsCake_PineText[language];

  const berryTitle = contentsCake_BerryTitle[language];
  const berryText = contentsCake_BerryText[language];

  const honeyTitle = contentsCake_HoneyTitle[language];
  const honeyText = contentsCake_HoneyText[language];

  return (
    <Base height={100}>
      <Container>
        <Wrapper>
          <Image src={image_CakePine} />
          <GroupTitle>
            <Title>{pineTitle}</Title>
            {isKorean && <SubTitle1>(포레스트 스펠, Forest Spell)</SubTitle1>}
            <img src={icon_Pine} />
          </GroupTitle>
          <Text>{pineText}</Text>
          <Group>
            <Part>
              <ItemBorder src={item_StatusBorder2} />
              <SubText1>
                {isKorean ? "주성분: 피크노제놀" : "WITH"}&nbsp;PYCNOGENOL®
              </SubText1>
            </Part>
            <SubText2>
              {isKorean && "주효능: 피부결 및 피부 탄력 향상\n"}
              IMPROVES SKIN SMOOTHNESS
              <br />
              AND ELASTICITY
            </SubText2>
          </Group>
        </Wrapper>
        <Wrapper>
          <Image src={image_CakeBerry} />
          <GroupTitle>
            <Title>{berryTitle}</Title>
            {isKorean && <SubTitle1>(베리 위스퍼, Berry Whisper)</SubTitle1>}
            <img src={icon_Berry} />
          </GroupTitle>
          <Text>{berryText}</Text>
          <Group>
            <Part>
              <ItemBorder src={item_StatusBorder2} />
              <SubText1>
                {isKorean ? "주성분: 프로안토시아니딘\n" : "WITH "}
                PROANTHOCYANIDINS
              </SubText1>
            </Part>
            <SubText2>
              {isKorean && "주효능: 항산화 특성,피부 장벽 강화\n"}
              ANTIOXIDANT PROPERTIES,
              <br />
              STRENGTHENS THE SKIN BARRIER
            </SubText2>
          </Group>
        </Wrapper>
        <Wrapper>
          <Image src={image_CakeHoney} />
          <GroupTitle>
            <Title>{honeyTitle}</Title>
            {isKorean && <SubTitle1>(매직 허니, Magic Honey)</SubTitle1>}
            <img src={icon_Honey} />
          </GroupTitle>
          <Text>{honeyText}</Text>
          <Group>
            <Part>
              <ItemBorder src={item_StatusBorder2} />
              <SubText1>
                {isKorean ? "주성분: 메틸글리옥살\n" : "WITH "}METHYLGLYOXAL
              </SubText1>
            </Part>
            <SubText2>
              {isKorean && "주효능: 피부 진정 및 재생\n"}
              SOOTHES AND
              <br />
              REGENERATES THE SKIN
            </SubText2>
          </Group>
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
  align-items: center;
  gap: 120px;
  padding: 24px;
  width: 100%;

  @media (min-width: 1050px) {
    flex-direction: row;
    justify-content: center;
    align-items: start;
    gap: 20px;
    padding: 20px;
  }
  @media (min-width: 1200px) {
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
  height: 200px;
`;
const GroupTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 30px;
`;
const Title = styled.h4`
  font-size: 20px;
  word-break: keep-all;

  @media (min-width: 440px) {
    font-size: 30px;
  }
  @media (min-width: 1050px) {
    font-size: 20px;
  }
  @media (min-width: 1200px) {
    font-size: 20px;
  }
  @media (min-width: 1550px) {
    font-size: 30px;
  }
`;
const SubTitle1 = styled.h4`
  display: block;
  margin-top: 5px;
  font-size: 15px;
  word-break: keep-all;

  @media (min-width: 440px) {
    margin-top: 10px;
    font-size: 20px;
  }
  @media (min-width: 1050px) {
    font-size: 14px;
  }
  @media (min-width: 1200px) {
    font-size: 15px;
  }
  @media (min-width: 1550px) {
    font-size: 20px;
  }
`;

const Text = styled.p`
  margin-top: 20px;
  font-family: "OpenSans";
  white-space: pre-line;
  word-break: keep-all;
  text-align: justify;
  text-align-last: left;
`;

const Group = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  position: relative;
  margin-top: 20px;

  @media (min-width: 440px) {
    flex-direction: row;
    gap: 20px;
  }
`;
const Part = styled.div`
  position: relative;
  width: fit-content;
  height: fit-content;
`;
const ItemBorder = styled.img`
  width: 180px;
`;
const SubText1 = styled.div`
  position: absolute;
  top: 45%;
  left: 90px;
  transform: translate(-50%, -50%);
  width: 100%;
  font-size: 10px;
  text-align: center;
  white-space: pre-line;
  word-break: keep-all;
`;
const SubText2 = styled.div`
  flex: 1;
  font-size: 10px;
  text-align: center;
  white-space: pre-line;
`;
