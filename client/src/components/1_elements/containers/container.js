import styled from "styled-components";

export const Div_Opacity = styled.div`
  visibility: hidden;
  opacity: 0;

  @keyframes fadeIn {
    from {
      visibility: hidden;
      opacity: 0;
    }
    to {
      visibility: visible;
      opacity: 1;
    }
  }

  animation-name: fadeIn;
  animation-duration: ${(props) => props.$duration || 0.5}s;
  animation-delay: ${(props) => props.$delay || 0}s;
  animation-fill-mode: forwards;
`;
export const Div_Rise = styled.div`
  @keyframes RiseUp {
    from {
      opacity: 0;
      margin-top: 20px;
    }
    to {
      opacity: 1;
      margin-top: 0;
    }
  }
  animation: RiseUp ${(props) => props.$duration || 0.5}s forwards;
`;

// import { Div_Opacity } from "Components";
// const Container = styled(Div_Opacity)``
