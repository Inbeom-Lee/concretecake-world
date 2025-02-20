import React, { useState, useContext } from "react";

const TempContext = React.createContext();
export const useTemp = () => useContext(TempContext);
export const TempContextProvider = (props) => {
  const [tempState, setTempState] = useState();

  const tempValue = { tempState, setTempState };

  return (
    <TempContext.Provider value={tempValue}>
      {props.children}
    </TempContext.Provider>
  );
};

export default TempContextProvider;
