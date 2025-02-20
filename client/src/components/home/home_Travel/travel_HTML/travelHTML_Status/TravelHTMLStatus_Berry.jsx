import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { Icon_Berry } from "Assets/components";
import { Status_Container, Status_Text } from "./statusElements";
import "./test.css";

export const TravelHTMLStatus_Berry = ({ itemCollected }) => {
  const prevItemCollected = useRef(itemCollected);
  const iconRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    if (itemCollected > prevItemCollected.current) {
      const element = iconRef.current;
      const textElement = textRef.current;

      element.classList.add("blink");
      element.style.animation = `blink 200ms step(1) ${5 * 200}ms`;
      textElement.style.animation = `blink 200ms step(1) ${5 * 200}ms`;

      const clearAnimation = () => {
        element.classList.remove("blink");
        textElement.classList.remove("blink");
        element.style.animation = "";
        textElement.style.animation = "";
      };

      const timer = setTimeout(clearAnimation, 5 * 200);

      return () => clearTimeout(timer);
    }
    prevItemCollected.current = itemCollected;
  }, [itemCollected]);

  return (
    <Container>
      <Icon ref={iconRef} $isCollected={!!itemCollected} />
      <Text ref={textRef} $isCollected={!!itemCollected}>
        X&nbsp;{itemCollected}
      </Text>
    </Container>
  );
};

const Container = styled(Status_Container)`
  /* left: 20.7vh; */
  left: 35.23vw;

  @media (min-width: 440px) {
    left: 155px;
  }
`;

const Icon = styled(Icon_Berry).attrs(({ $isCollected, theme }) => ({
  color: $isCollected ? theme.colors.pinkBerry : "#000000", //
}))`
  /* width: 4.53vh; */
  width: 7.27vw;

  @media (min-width: 440px) {
    width: 32px;
  }
`;

const Text = styled(Status_Text)`
  color: ${({ $isCollected, theme }) =>
    $isCollected ? theme.colors.pinkBerry : "#000000"};
`;
