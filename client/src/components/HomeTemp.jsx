import React from "react";
import styled from "styled-components";
import { Container_VH } from "Components";
import {
  Home_MousePointer,
  Home_Initial,
  Home_TravelPine,
  Home_TravelBerry,
  Home_TravelHoney,
  Home_Cake,
} from "./homeTemp/index";

const HomeTemp = ({ page, setPage }) => {
  const checkPage = (pages) => pages.includes(page);

  return (
    <Container height={100}>
      {/* <Home_MousePointer /> */}

      {checkPage(["initial"]) && <Home_Initial setPage={setPage} />}
      {checkPage(["travelPine"]) && <Home_TravelPine setPage={setPage} />}
      {checkPage(["travelBerry"]) && <Home_TravelBerry setPage={setPage} />}
      {checkPage(["travelHoney"]) && <Home_TravelHoney setPage={setPage} />}
      {checkPage(["cakeAndPot", "cakeDetail", "cakeFinal"]) && (
        <Home_Cake page={page} setPage={setPage} />
      )}
    </Container>
  );
};

const Container = styled(Container_VH)`
  width: 100vw;
`;

export default HomeTemp;
