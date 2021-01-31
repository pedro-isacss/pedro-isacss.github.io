import React, { useState } from "react";

type Initial = {
  headerHidden: boolean;
  setHeaderHidden: Function;
};
// Dispatch<SetStateAction<Initial>>

const initial: Initial = {
  headerHidden: false,
  setHeaderHidden: () => {},
};

const GlobalStates = React.createContext(initial);

interface Props {
  children: React.ReactNode;
}

export function Context(props: Props) {
  const [headerHidden, setHeaderHidden] = useState<Initial>(initial);
  return (
    <GlobalStates.Provider value={{ ...headerHidden, setHeaderHidden }}>
      {props.children}
    </GlobalStates.Provider>
  );
}

export default GlobalStates;
