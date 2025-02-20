import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import imgButton from "Assets/images/button_Initial.png";
import itemStar from "Assets/items/item_StarGlowing.png";

export const HomeInitial_Button = ({ handleStart }) => {
  return (
    <Container>
      <Button src={imgButton} onClick={handleStart} />
      <Star1 transition={{ duration: 1, delay: 0.5 }} />
      <Star2 transition={{ duration: 1, delay: 0.8 }} />
      <Star3 transition={{ duration: 1, delay: 1.1 }} />
      <Star4 transition={{ duration: 1, delay: 1.2 }} />
      <Star5 transition={{ duration: 1, delay: 1.4 }} />
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  bottom: 11.5%;
  left: 50%;
  transform: translateX(-50%);
`;
const Button = styled(motion.img)`
  width: 200px;

  @media (min-width: 768px) {
    width: auto;
    max-width: 21.4vw;
    max-height: 20vh;
    transition: 0.3s;

    &:hover {
      transform: scale(1.1);
    }
  }
`;
const Star = styled(motion.img).attrs(({ transition }) => ({
  src: itemStar,
  animate: {
    scale: [1, 1.2, 1.2, 1, 1],
    opacity: [0.5, 1, 1, 0.7, 0.5],
  },
  transition: { repeat: Infinity, ...transition },
}))`
  position: absolute;
`;
const Star1 = styled(Star)`
  top: 15%;
  left: 10%;
  width: 3%;
`;
const Star2 = styled(Star)`
  top: 30%;
  left: 25%;
  width: 4%;
`;
const Star3 = styled(Star)`
  top: 25%;
  right: 20%;
  width: 2%;
`;
const Star4 = styled(Star)`
  bottom: 20%;
  left: 20%;
  width: 3%;
`;
const Star5 = styled(Star)`
  bottom: 17%;
  right: 30%;
  width: 4%;
`;
