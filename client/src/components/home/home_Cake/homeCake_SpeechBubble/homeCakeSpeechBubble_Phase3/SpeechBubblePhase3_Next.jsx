import React from "react";
import styled from "styled-components";
import {
  icon_Pine,
  icon_Berry,
  icon_Honey,
  icon_ArrowRight,
} from "Assets/icons";

export const SpeechBubblePhase3_Next = ({
  parentWidth,
  showContents,
  setShowContents,
}) => {
  const isPine = showContents === "pine";
  const isBerry = showContents === "berry";
  const isHoney = showContents === "honey";

  const widthPine = parentWidth * 0.0234;
  const widthBerry = parentWidth * 0.0216;
  const widthHoney = parentWidth * 0.022;
  const widthArrow = parentWidth * 0.0163;

  const handleNext = () => {
    const routeNext = isPine
      ? "berry"
      : isBerry
      ? "honey"
      : isHoney
      ? "pine"
      : null;

    setShowContents(routeNext);
  };

  return (
    <Container onClick={handleNext}>
      {isPine && <IconIngredient $width={widthBerry} src={icon_Berry} />}
      {isBerry && <IconIngredient $width={widthHoney} src={icon_Honey} />}
      {isHoney && <IconIngredient $width={widthPine} src={icon_Pine} />}
      <IconArrow $width={widthArrow} src={icon_ArrowRight} />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 15%;
  position: absolute;
  top: 50%;
  right: 2%;
  padding: 2%;
  transform: translateY(-50%);
  transition: 0.5s;
`;
const IconIngredient = styled.img.attrs(({ $width }) => ({
  style: { width: $width + "px" },
}))``;
const IconArrow = styled.img.attrs(({ $width }) => ({
  style: { width: $width + "px" },
}))``;
