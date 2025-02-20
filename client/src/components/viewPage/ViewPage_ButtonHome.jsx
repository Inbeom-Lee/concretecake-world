import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const ViewPage_ButtonHome = () => {
  return <ButtonMenu to="/">Home</ButtonMenu>;
};

const ButtonMenu = styled(NavLink)`
  display: grid;
  place-items: center;
  position: fixed;
  top: 20px;
  right: 20px;
  width: 80px;
  height: 40px;
  font-family: "MaxiRound";
  font-size: 15px;
  text-decoration: none;
  color: #fff;
  background: radial-gradient(
    50% 50% at 50% 50%,
    rgba(137, 137, 246, 0.5) 0%,
    rgba(0, 0, 0, 0) 100%
  );
  border-radius: 20px;
  z-index: 10003;
  transition: 0.5s;

  @media (min-width: 768px) {
    top: 5%;
    right: 5%;
    width: 100px;
    height: 55px;
    font-size: 20px;

    &:hover {
      transform: scale(1.1);
    }
  }
`;
