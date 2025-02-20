import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { item_StatusBorder } from "Assets/items";
import { icon_Pine, icon_Honey } from "Assets/icons";
import { Icon_Berry } from "Assets/components";

export const TravelBerry_Status = ({ itemCollected }) => {
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
        <IconBerry $isCollected={isCollected} />
        <TextBerry $isCollected={isCollected}>X&nbsp;{itemCollected}</TextBerry>
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
const IconBerry = styled(Icon_Berry).attrs(({ $isCollected, theme }) => ({
  color: $isCollected ? theme.colors.pinkBerry : "#000000", //
}))`
  width: 3.22vw;
`;
const IconPine = styled.img`
  width: 2.78vw;
`;
const IconHoney = styled.img`
  width: 2.89vw;
`;
const Text = styled.p`
  font-size: 2.22vw;
`;
const TextBerry = styled(Text)`
  color: ${({ $isCollected, theme }) =>
    $isCollected ? theme.colors.pinkBerry : "#000000"};
`;
