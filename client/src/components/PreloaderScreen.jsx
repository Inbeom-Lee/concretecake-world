import React from "react";
import styled from "styled-components";
import { Container_VH } from "Components";
import imageLogo from "Assets/logos/logo_CakeSquare3D.png";

const PreloaderScreen = ({ numberLoaded }) => {
  const render = (
    <Container height={100}>
      <Image src={imageLogo} />
      <ProgressContainer>
        <ProgressBar $numberLoaded={numberLoaded} />
      </ProgressContainer>
      <ProgressText>{numberLoaded}%</ProgressText>
    </Container>
  );
  return render;
};

const Container = styled(Container_VH)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px;
  width: 100vw;
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
  width: ${(props) => props.$numberLoaded}%;
  height: 18px;
  background: ${(props) => props.theme.colors.primary};
  border-radius: 6px;
`;
const ProgressText = styled.p`
  margin-top: 10px;
  font-size: 18px;
  color: ${(props) => props.theme.colors.primary};
`;

export default PreloaderScreen;
