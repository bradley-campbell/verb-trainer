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
    tense:
      query.mood === "Subjonctif" // Some moods only use specific tenses, this is to limit the users choices to those that are applicable
        ? ["Présent", "Imparfait"]
        : query.mood === "Conditionnel"
        ? ["Présent"]
        : query.mood === "Imperatif"
        ? ["Présent"]
        : ["Présent", "Imparfait", "Passé Simple", "Futur"],
    person:
      query.mood === "Imperatif" // Imperative mood only uses second person singular (2s), first person plural (1p) and second person plural (2p)
        ? ["2s", "1p", "2p"]
        : ["1s", "2s", "3s", "1p", "2p", "3p"],
  };

  return (
    <QueryContext.Provider value={{ data, setData, query, setQuery, options }}>
      {children}
    </QueryContext.Provider>
  );
};

export default QueryProvider;
