import React from "react";
import styled from "styled-components";
import logoConcrete from "Assets/logos/logo_Concrete.svg";
import logoHeroCake from "Assets/logos/logo_HeroCake.svg";

export const HomeHeroSectionMain_Logo = () => {
  const render = (
    <Container>
      <ImageConcrete src={logoConcrete} />
      <CakeContainer src={logoHeroCake} />
    </Container>
  );
  return render;
};

const Container = styled.div`
  display: flow-root;
  position: relative;
  margin: 0;
  width: 90%;
  max-width: 1060px;

  @media (min-width: 1200px) {
    margin: 200px auto 0;
  }
`;
const ImageConcrete = styled.img`
  display: block;
  margin: 0 auto;
  width: 36%;
  opacity: 0;

  @media (min-width: 1200px) {
    width: 100%;
    max-width: 374px;
  }

  @keyframes fadeInConcrete {
    from {
      margin-top: 100px;
      opacity: 0;
    }
    to {
      margin-top: 0;
      opacity: 1;
    }
  }
  animation: fadeInConcrete 1s forwards;
  animation-delay: 0.8s;
`;
const CakeContainer = styled.img`
  display: block;
  width: 100%;
  opacity: 0;

  @keyframes fadeInLogoCake {
    from {
      margin-top: 170px;
      transform: scale(1.5);
      opacity: 0;
    }
    to {
      margin-top: -3px;
      transform: scale(1);
      opacity: 1;
    }
  }
  animation: fadeInLogoCake 2s forwards;
  animation-delay: 0.8s;
`;
