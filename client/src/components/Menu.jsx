import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";
import { Container_VH } from "Components";
import svgClose from "Assets/icons/icon_Close.svg";

const Menu = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleShow = () => setShowMenu(!showMenu);

  const handleMenu = () => setShowMenu(false);

  return (
    <>
      {showMenu ? (
        <ButtonClose onClick={handleShow}>
          <img src={svgClose} />
        </ButtonClose>
      ) : (
        <ButtonMenu onClick={handleShow}>Menu</ButtonMenu>
      )}
      <Container $show={showMenu} height={100}>
        <Title>About</Title>
        <Link to={`/about/us`} onClick={handleMenu}>
          About Us
        </Link>
        <Link to={`/about/world`} onClick={handleMenu}>
          World
        </Link>
        <Link to={`/about/ingredient`} onClick={handleMenu}>
          Ingredient
        </Link>
        <Link to={`/about/cakes`} onClick={handleMenu}>
          Cakes
        </Link>
        <Title>Product</Title>
        <Link to={`/product/mockup`} onClick={handleMenu}>
          Mock Up
        </Link>
        <Link to={`/product/bulk`} onClick={handleMenu}>
          Bulk
        </Link>
        <Link to={`/product/instruction`} onClick={handleMenu}>
          Instruction
        </Link>
      </Container>
    </>
  );
};

const ButtonMenu = styled.div`
  display: grid;
  place-items: center;
  position: fixed;
  top: 20px;
  right: 20px;
  width: 80px;
  height: 40px;
  font-family: "MaxiRound";
  font-size: 15px;
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
const ButtonClose = styled.div`
  position: fixed;
  top: 30px;
  right: 30px;
  z-index: 10003;

  & img {
    width: 30px;
  }
`;
const Container = styled(Container_VH)`
  position: fixed;
  top: 0;
  left: 0;
  padding: 0 12vw;
  width: 100vw;
  background: #fff;
  z-index: 10002;

  ${({ $show }) =>
    $show
      ? css`
          visibility: visible;
          opacity: 1;
          transition: 1s;
        `
      : css`
          visibility: hidden;
          opacity: 0;
          transition: 0.5s;
        `}
`;
const Title = styled.div`
  margin-top: 10vh;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.colors.primary};
`;
const Link = styled(NavLink)`
  display: block;
  height: 50px;
  line-height: 50px;
  font-family: "MaxiRound";
  font-size: 15px;
  color: #000;
  text-decoration: none;

  @media (min-width: 768px) {
    font-size: 20px;
  }
`;

export default Menu;
