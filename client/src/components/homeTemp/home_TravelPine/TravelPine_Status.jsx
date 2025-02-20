import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { item_StatusBorder } from "Assets/items";
import { icon_Berry, icon_Honey } from "Assets/icons";
import { Icon_Pine } from "Assets/components";

export const TravelPine_Status = ({ itemCollected }) => {
  const [isCollected, setIsCollected] = useState(false);

  useEffect(() => {
    if (itemCollected === 0) return;

    const timing = 200;
    let count = 0;
    const maxToggles = 5;

    setIsCollected(true);
    count++;

    const intervalId = setInterval(() => {
      setIsCollected((prevState) => {
        if (!prevState) {
          count++;
        }
        return !prevState;
      });
      if (count >= maxToggles) {
        clearInterval(intervalId);
      }
    }, timing);

    return () => clearInterval(intervalId);
  }, [itemCollected]);

  return (
    <Container>
      <Border src={item_StatusBorder} />
      <WrapperPine>
        <IconPine $isCollected={isCollected} />
        <TextPine $isCollected={isCollected}>X&nbsp;{itemCollected}</TextPine>
      </WrapperPine>
      <WrapperBerry>
        <IconBerry src={icon_Berry} />
        <Text>X&nbsp;0</Text>
      </WrapperBerry>
      <WrapperHoney>
        <IconHoney src={icon_Honey} />
        <Text>X&nbsp;0</Text>
      </WrapperHoney>
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  top: 3.8%;
  left: 2.64%;
`;
const Border = styled.img`
  width: 54vh;
  /* max-height: 9.73vh; */
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 2.05vh;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`;
const WrapperPine = styled(Wrapper)`
  left: 3.5vh;
`;
const WrapperBerry = styled(Wrapper)`
  left: 20.7vh;
`;
const WrapperHoney = styled(Wrapper)`
  left: 37.7vh;
`;
const IconPine = styled(Icon_Pine).attrs(({ $isCollected, theme }) => ({
  color: $isCollected ? theme.colors.greenPine : "#000000", //
}))`
  width: 4.53vh;
`;
const IconBerry = styled.img`
  width: 3.9vh;
`;
const IconHoney = styled.img`
  width: 4.07vh;
`;
const Text = styled.p`
  font-size: 3.125vh;
`;
const TextPine = styled(Text)`
  color: ${({ $isCollected, theme }) =>
    $isCollected ? theme.colors.greenPine : "#000000"};
`;
