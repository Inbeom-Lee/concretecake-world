import styled from "styled-components";

export const SpeechBubble_Container = styled.div`
  position: fixed;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  visibility: ${({ $show }) => ($show ? "visible" : "hidden")};
  opacity: ${({ $show }) => ($show ? 1 : 0)};
  will-change: opacity;
  overflow: hidden;
  z-index: 10000;
  transition: 1s;
`;
export const SpeechBubble_Image = styled.img`
  width: 340px;

  @media (min-width: 440px) {
    width: 400px;
  }
`;
export const SpeechBubble_Text = styled.p`
  position: absolute;
  top: 40%;
  left: 15%;
  transform: translateY(-50%);
  font-size: 16px;
  color: ${({ theme }) => theme.colors.primary};

  @media (min-width: 440px) {
    font-size: 18px;
  }
`;
