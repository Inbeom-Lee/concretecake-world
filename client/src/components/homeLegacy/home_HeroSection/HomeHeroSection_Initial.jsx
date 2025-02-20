import React from "react";
import styled from "styled-components";
import { Container_VH } from "Components";
import svgLogo from "Assets/logos/logo_CakeSquare.svg";

export const HomeHeroSection_Initial = () => {
  const render = (
    <Container height={100}>
      <Image src={svgLogo} />
      <ProgressContainer>
        <ProgressBar />
      </ProgressContainer>
      <ProgressText>100%</ProgressText>
    </Container>
  );
  return render;
};

const Container = styled(Container_VH)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  padding: 40px;
  width: 100vw;

  @keyframes fadeOut {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
  animation: fadeOut 1s forwards;
`;
const Image = styled.img`
  width: 100%;
  max-width: 300px;
`;
const ProgressContainer = styled.div`
  position: relative;
  margin-top: 40px;
  padding: 4px;
  width: 100%;
  max-width: 200px;
  height: 30px;
  border: 2px solid ${(props) => props.theme.colors.primary};
  border-radius: 10px;
`;
const ProgressBar = styled.div`
  width: 100%;
  height: 18px;
  background: ${(props) => props.theme.colors.primary};
  border-radius: 6px;
  transition: 1s;
`;
const ProgressText = styled.p`
  margin-top: 10px;
  font-size: 18px;
  color: ${(props) => props.theme.colors.primary};
`;
