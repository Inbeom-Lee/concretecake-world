import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { item_StatusBorder } from "Assets/items";
import { icon_Pine, icon_Berry } from "Assets/icons";
import { Icon_Honey } from "Assets/components";

export const TravelHoney_Status = ({ itemCollected }) => {
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
        <IconPine src={icon_Pine} />
        <Text>X&nbsp;2</Text>
      </WrapperPine>
      <WrapperBerry>
        <IconBerry src={icon_Berry} />
        <Text>X&nbsp;3</Text>
      </WrapperBerry>
      <WrapperHoney>
        <IconHoney $isCollected={isCollected} />
        <TextHoney $isCollected={isCollected}>X&nbsp;{itemCollected}</TextHoney>
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
  width: 38.38vw;
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1.46vw;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`;
const WrapperPine = styled(Wrapper)`
  left: 2.49vw;
`;
const WrapperBerry = styled(Wrapper)`
  left: 14.71vw;
`;
const WrapperHoney = styled(Wrapper)`
  left: 26.79vw;
`;
const IconHoney = styled(Icon_Honey).attrs(({ $isCollected, theme }) => ({
  color: $isCollected ? theme.colors.yellowHoney : "#000000", //
}))`
  width: 2.89vw;
`;
const IconPine = styled.img`
  width: 2.78vw;
`;
const IconBerry = styled.img`
  width: 2.78vw;
`;
const Text = styled.p`
  font-size: 2.22vw;
`;
const TextHoney = styled(Text)`
  color: ${({ $isCollected, theme }) =>
    $isCollected ? theme.colors.yellowHoney : "#000000"};
`;
