import React from "react";
import styled from "styled-components";
import { Container_VH } from "Components";
import jpgBulk from "Assets/images/image_ProductBulk.jpg";

export const Product_Bulk = () => {
  return (
    <Container height={100}>
      <Image src={jpgBulk} />
    </Container>
  );
};

const Container = styled(Container_VH)`
  display: grid;
  place-items: center;
  padding-top: 60px;
  width: 100vw;
`;
const Image = styled.img`
  width: 90%;
  object-fit: contain;
  border-radius: 20px;
  overflow: hidden;

  @media (min-width: 768px) {
    width: 80%;
  }
`;
