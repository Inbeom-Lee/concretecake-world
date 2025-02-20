import React from "react";
import styled from "styled-components";

export const SpeechBubblePhase1_Text = ({ fontSize }) => {
  return (
    <Container>
      <Text $fontSize={fontSize}>
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
      <Text $fontSize={fontSize}>
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
  display: flex;
  gap: 2.35vw;
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translateX(-50%);
  width: 80%;
`;
const Text = styled.p.attrs(({ $fontSize }) => ({
  style: { fontSize: $fontSize },
}))`
  flex: 1;
  color: ${({ theme }) => theme.colors.primary};
  line-height: 155%;
`;
