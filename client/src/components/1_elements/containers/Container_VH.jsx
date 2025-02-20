import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

export const Container_VH = ({ height, children, ...props }) => {
  const { isAppleDevice } = useSelector((state) => state.device);

  return (
    <Container $isApple={isAppleDevice} $height={height} {...props}>
      {children}
    </Container>
  );
};

const Container = styled.div`
  height: ${({ $isApple, $height }) =>
    $isApple ? `${$height}svh` : `${$height}vh`};
`;
