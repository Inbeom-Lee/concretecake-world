import React from "react";
import styled from "styled-components";

export const SpeechBubblePhase1_Text = () => {
  return (
    <Container>
      <Text>
        AHOY, ADVENTURERS! BEHOLD ALGINGLUCOSE® AND OILDIATIMA®—POTIONS BORN OF
        MY MYSTICAL POT! ALGINGLUCOSE® BLENDS ALGINIC ACID FROM BROWN ALGAE AND
        GLUCOSE FROM NATURAL SUGARS, CONTROLLING LIQUID VISCOSITY FOR
        PROTECTION, HYDRATION, AND REGENERATION.
        <br />
        <br />
        BUT HOLD ON! OILDIATIMA®—CRAFTED BY BLENDING NATURALLY FINE AND PURE
        DIATOMACEOUS EARTH WITH OILS EXTRACTED FROM JOJOBA SEEDS, CAMELLIA
        SEEDS, AND OLIVE FRUITS—WHEN THESE ELEMENTS UNITE,
      </Text>
      <Text>
        NOT ONLY PURIFY AND REJUVENATE BUT ALSO BOAST ANTIOXIDANT AND
        ANTI-INFLAMMATORY EFFECTS.
        <br />
        <br />
        THESE ELIXIRS AND POTIONS MELD TOGETHER, LOCKING IN PRECIOUS NUTRIENTS
        WITHOUT LOSS. IT'S LIKE WITNESSING CELESTIAL HARMONY!
        <br />
        <br />
        SO, EMBRACE THE MAGIC, AND LET YOUR SKIN BASK IN THE MYSTICAL EMBRACE OF
        ALGINGLUCOSE® AND OILDIATIMA®!
      </Text>
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  top: 100px;
  left: 50%;
  transform: translateX(-50%);
  padding: 0 20px;
  width: 97%;
  height: 60%;
  overflow: hidden auto;

  @media (min-width: 1000px) {
    top: 20%;
    display: flex;
    gap: 2.35vw;
    padding: 0;
    width: 80%;
    height: auto;
    overflow: visible;
  }
`;
const Text = styled.p`
  flex: 1;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.primary};
  line-height: 155%;

  @media (min-width: 1000px) {
    font-size: 15px;
  }
`;
