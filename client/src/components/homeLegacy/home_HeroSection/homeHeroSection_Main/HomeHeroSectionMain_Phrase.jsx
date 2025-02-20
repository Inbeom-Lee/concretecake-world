import React, { useState, useEffect } from "react";
import styled from "styled-components";

export const HomeHeroSectionMain_Phrase = () => {
  const [showPhrase, setShowPhrase] = useState(false);
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
    " ",
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
    " ",
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
    setTimeout(() => {
      setShowPhrase(true);
    }, 2000);
  }, []);

  useEffect(() => {
    if (!showPhrase) return;

    if (showLetter < letters.length) {
      const interval = setInterval(() => {
        setShowLetter((prev) => {
          if (prev + 1 >= letters.length) {
            clearInterval(interval);
          }
          return prev + 1;
        });
      }, 40);

      return () => clearInterval(interval);
    }
  }, [showPhrase, showLetter]);

  const render = (
    <Container>
      <Text>
        {filterLetters?.map((letter, i) => (
          <Letter key={`mainPhrase${letter}${i}`}>{letter}</Letter>
        ))}
      </Text>
    </Container>
  );
  return render;
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 4vw auto 0;
  width: 270px;
  max-width: 712px;
  height: 79px;

  @media (min-width: 450px) {
    width: 60vw;
  }

  @media (min-width: 1200px) {
    width: 100%;
    margin-top: 50px;
  }
`;
const Text = styled.p`
  display: block;
  width: 100%;
  /* max-width: 712px; */
  font-size: 12px;
  color: ${(props) => props.theme.colors.primary};
  white-space: pre;

  @media (min-width: 450px) {
    font-size: 2.5vw;
  }

  @media (min-width: 1200px) {
    font-size: 30px;
  }
`;
const Letter = styled.span`
  /* @keyframes fadeInPhraseLetter {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  animation: fadeInPhraseLetter 1s forwards; */
`;
