import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { contentsProduct_Menu } from "Constants/contents";

export const Product_Menu = () => {
  const { language } = useSelector((state) => state.language);

  const getContents = (content) => contentsProduct_Menu[content][language];

  return (
    <Container>
      <Link to={`mockUp`}>{getContents("mockUp")}</Link>
      <Link to={`bulk`}>{getContents("bulk")}</Link>
      <Link to={`instruction`}>{getContents("instruction")}</Link>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  gap: 20px;
`;
const Link = styled(NavLink)`
  font-family: "MaxiRound";
  font-size: 15px;
  color: #fff;
  text-decoration: none;
`;
