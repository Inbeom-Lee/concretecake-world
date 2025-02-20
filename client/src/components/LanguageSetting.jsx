import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { setLanguage } from "Features/sliceLanguage";

const LanguageSetting = () => {
  const { language } = useSelector((state) => state.language);
  const dispatch = useDispatch();

  const handleSet = () =>
    dispatch(setLanguage(language === "en" ? "kr" : "en"));

  return <Button onClick={handleSet}>{language}</Button>;
};

const Button = styled.div`
  display: grid;
  place-items: center;
  position: fixed;
  top: 20px;
  right: 100px;
  width: 80px;
  height: 40px;
  font-family: "MaxiRound";
  font-size: 15px;
  color: ${({ theme }) => theme.colors.primary};
  background: radial-gradient(
    50% 50% at 50% 50%,
    rgba(255, 255, 255, 1) 0%,
    rgba(0, 0, 0, 0) 100%
  );
  z-index: 10001;
  transition: 0.5s;

  @media (min-width: 768px) {
    top: 5%;
    right: calc(5% + 100px);
    width: 100px;
    height: 55px;
    font-size: 20px;

    &:hover {
      transform: scale(1.1);
    }
  }
`;

export default LanguageSetting;
