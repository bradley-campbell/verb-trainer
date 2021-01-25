import React, { createContext, useState } from "react";

const DataContext = createContext(null);

export const DataProvider = ({ children }) => {
  const [data, setData] = useState({
    conjugated: "",
    results: "",
  });

  const [verbTable, setVerbTable] = useState({});

  return (
    <DataContext.Provider // This is quite full, may be a good idea to make a separate context for fetched data
      value={{
        data,
        setData,
        verbTable,
        setVerbTable,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
