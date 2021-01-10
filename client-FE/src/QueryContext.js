import React, { createContext, useState } from "react";

export const QueryContext = createContext(null);

const QueryProvider = ({ children }) => {
  const [data, setData] = useState({
    conjugated: "",
    results: "",
  });
  const [query, setQuery] = useState({
    verb: "",
    mood: "",
    temps: "",
    personne: "",
  });

  const options = {
    mood: ["Indicatif", "Conditionnel", "Subjonctif", "Imperatif"],
    tense: ["Présent", "Imparfait", "Passé Simple", "Futur"],
    person: ["1s", "2s", "3s", "1p", "2p", "3p"],
  };

  return (
    <QueryContext.Provider value={{ data, setData, query, setQuery, options }}>
      {children}
    </QueryContext.Provider>
  );
};

export default QueryProvider;
