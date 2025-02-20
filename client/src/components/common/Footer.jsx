import React from "react";
import styled from "styled-components";

export const Footer = () => {
  return (
    <Base>
      <Container>
        <Text>CONCRETE CAKE INC | Lee Jihyun</Text>
        <Text>Slottsbacken 8, 111 30 Stockholm, Sweden</Text>
        <Text>Business Registration No. 4708603364</Text>
        <Text>Email. troll@concretecake.se</Text>
      </Container>
    </Base>
  );
};

const Base = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  background: #f6f8f8;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 6px;
  padding: 16px;
  width: 100%;
  max-width: 1442px;

  @media (min-width: 768px) {
    padding-left: 32px;
  }
  @media (min-width: 1024px) {
    flex-direction: row;
    align-items: center;
    height: 70px;
  }
`;
const Text = styled.p`
  flex: 1;
  color: ${({ theme }) => theme.colors.primary};
  /* font-family: "Albert Sans"; */
  font-weight: 500;
  font-size: 14px;
`;
