import styled from "styled-components";

export const Status_Container = styled.div`
  display: flex;
  align-items: center;
  /* gap: 2.05vh; */
  gap: 14px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`;
export const Status_Text = styled.p`
  font-size: 5.68vw;

  @media (min-width: 440px) {
    font-size: 25px;
  }
`;
