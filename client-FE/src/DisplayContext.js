import React, { createContext, useState } from "react";

const DisplayContext = createContext(null);

const DisplayProvider = ({ children }) => {
  const [display, setDisplay] = useState({
    welcome: true,
    conjug: false,
    quiz: false,
    chooseVerb: true,
  });

  <DisplayContext.Provider
    value={{
      display,
      setDisplay,
    }}
  >
    {children}
  </DisplayContext.Provider>;
};

export default DisplayProvider;
