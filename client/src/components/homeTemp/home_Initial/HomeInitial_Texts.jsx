import React, { useState, useEffect } from "react";
import styled from "styled-components";
import imgLogo from "Assets/logos/logo_CakeText3D.svg";

export const HomeInitial_Texts = () => {
  const [showLetter, setShowLetter] = useState(0);

  const letters = [
    "H",
    "Ä",
    "R",
    " ",
    "S",
    "K",
    "A",
    " ",
    "D",
    "U",
    " ",
    "F",
    "Å",
    " ",
    "E",
    "N",
    "\n",
    "B",
    "I",
    "T",
    " ",
    "A",
    "V",
    " ",
    "E",
    "N",
    " ",
    "T",
    "R",
    "O",
    "L",
    "L",
    "Ö",
    "R",
    "T",
    ",",
    "\n",
    "S",
    "O",
    "M",
    " ",
    "I",
    "N",
    "G",
    "E",
    "N",
    " ",
    "M",
    "E",
    "R",
    " ",
    "Ä",
    "N",
    " ",
    "J",
    "A",
    "G",
    "\n",
    "K",
    "A",
    "N",
    " ",
    "L",
    "E",
    "T",
    "A",
    " ",
    "R",
    "Ä",
    "T",
    "T",
    " ",
    "P",
    "Å",
    ".",
  ];
  const filterLetters = letters.slice(0, showLetter);

  useEffect(() => {
    if (showLetter < letters.length) {
      const interval = setInterval(() => {
        setShowLetter((prev) => {
          if (prev + 1 >= letters.length) {
            clearInterval(interval);
          }
          return prev + 1;
        });
      }, 50);

      return () => clearInterval(interval);
    }
  }, [showLetter]);


  return (
    <>
      <Logo src={imgLogo} />
      <Text>
        {letters?.map((letter, i) => (
          <Letter key={`mainPhrase${letter}${i}`} $show={i < showLetter}>
            {letter}
          </Letter>
        ))}
      </Text>
    </>
  );
};

const Logo = styled.img`
  position: absolute;
  top: 15.8%;
  left: 50%;
  transform: translateX(-50%);
  max-width: 58vw;
  max-height: 23.34vh;
`;
const Text = styled.p`
  display: block;
  position: absolute;
  top: 47.2%;
  left: 50%;
  transform: translateX(-50%);
  /* font-size: 3.125vh; */
  font-size: 2.5vh;
  color: ${({ theme }) => theme.colors.primary};
  text-align: center;
  line-height: 125%;
  white-space: pre;
`;
const Letter = styled.span`
  opacity: ${({ $show }) => ($show ? 1 : 0)};
`;
