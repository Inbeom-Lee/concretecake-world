import React, { useContext } from "react";
import { useMemoState } from "Hooks";

const HomeContext = React.createContext();

export const useHome = () => useContext(HomeContext);

export const HomeProvider = (props) => {
  const [page, setPage] = useMemoState("initial");
  const [playMusic, setPlayMusic] = useMemoState(false);

  const value = {
    page,
    setPage,
    playMusic,
    setPlayMusic,
  };

  return (
    <HomeContext.Provider value={value}>{props.children}</HomeContext.Provider>
  );
};

export default HomeProvider;
