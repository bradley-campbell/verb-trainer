import React, { createContext, useState } from "react";

export const DataContext = createContext(null);

const DataProvider = ({ children }) => {
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

export default DataProvider;
