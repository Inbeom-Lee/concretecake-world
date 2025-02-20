import styled from "styled-components";

export const Ingredient_Base = styled.div.attrs(() => ({
  className: "ingredientBox",
}))`
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10%;
  margin-top: 20vw;
  padding: 0 20px;
  width: 100%;
  overflow: hidden;

  @media (min-width: 1100px) {
    margin-top: 0;
    flex-direction: row;
    align-items: center;
    height: 100vh;
  }
`;
export const Ingredient_Image = styled.img`
  display: block;
  width: 100%;
  max-width: 500px;
  object-fit: contain;

  @media (min-width: 1100px) {
    width: 40%;
    max-width: 500px;
  }
`;
export const Ingredient_Container = styled.div`
  margin-top: 20px;
  width: 100%;
  max-width: 600px;
  height: fit-content;

  @media (min-width: 1100px) {
    margin-top: 0;
    width: 40%;
    max-width: 600px;
  }
`;
export const Ingredient_Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Ingredient_Text = styled.p`
  text-align: justify;
  text-align-last: justify;
`;
export const Ingredient_TextWrapper = styled.div`
  display: grid;
`;
export const Ingredient_Title = styled.p`
  font-size: 12vw;

  @media (min-width: 430px) {
    font-size: 53px;
  }
`;
export const Ingredient_SVGLine = styled.svg`
  margin: 20px 0 10px;
  width: 100%;
  height: 2px;
`;
export const Ingredient_SVGLine_Line = styled.line.attrs(() => ({
  x1: 0,
  y1: 0,
  x2: 600,
  y2: 0,
}))`
  stroke: black;
  stroke-width: 2;
  stroke-dasharray: 5, 5;
`;
