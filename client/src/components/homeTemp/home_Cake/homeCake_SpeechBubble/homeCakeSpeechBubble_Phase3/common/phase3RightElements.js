import styled from "styled-components";

export const Phase3Right_Container = styled.div`
  position: relative;
  padding: 0 5%;
  width: 53%;
  height: 100%;
`;
export const Phase3Right_Wrapper = styled.div.attrs(({ $fontSize }) => ({
  style: { fontSize: $fontSize + "px" },
}))`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
export const Phase3Right_Icon = styled.img`
  width: 5.84%;
`;

export const Phase3Right_TextWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Phase3Right_Text = styled.p.attrs(({ $fontSize }) => ({
  style: { fontSize: $fontSize + "px" },
}))`
  display: block;
  text-align: justify;
  text-align-last: justify;
`;
