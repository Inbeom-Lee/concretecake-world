import React from "react";
import styled from "styled-components";
import { Container_VH } from "Components";
import pngOverall from "Assets/images/image_ProductOverall.png";
import pngPine from "Assets/images/image_ProductPine.png";
import pngBerry from "Assets/images/image_ProductBerry.png";
import pngHoney from "Assets/images/image_ProductHoney.png";

export const Product_MockUp = () => {
  return (
    <Container height={100}>
      <Image src={pngOverall} />
      <Image src={pngPine} />
      <Image src={pngBerry} />
      <Image src={pngHoney} />
      <div style={{ width: "100%", height: "1px" }} />
    </Container>
  );
};

const Container = styled(Container_VH)`
  display: flow-root;
  padding-top: 60px;
  width: 100vw;
`;
const Image = styled.img`
  display: block;
  margin: 30px auto;
  width: 90%;
  object-fit: contain;
  border-radius: 20px;
  overflow: hidden;

  @media (min-width: 768px) {
    margin: 50px auto;
    width: 80%;
  }
`;
