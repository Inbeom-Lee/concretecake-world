import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Home_MenuAbout = () => {
  return (
    <Container>
      <Link to={`/about`}>About</Link>
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  top: 5%;
  right: 5%;
  padding: 1.2vw;
  z-index: 100;
  background: radial-gradient(
    50% 50% at 50% 50%,
    rgba(137, 137, 246, 0.5) 0%,
    rgba(0, 0, 0, 0) 100%
  );
`;
const Link = styled(NavLink)`
  font-family: "MaxiRound";
  font-size: 1.7vw;
  color: #fff;
  text-decoration: none;
`;
