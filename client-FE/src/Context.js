import React, { createContext, useState } from "react";

export const DisplayContext = createContext(null);

export const DisplayProvider = ({ children }) => {
  const [display, setDisplay] = useState({
    welcome: true,
    conjug: false,
    quiz: false,
    chooseVerb: true,
  });

  return (
    <DisplayContext.Provider
      value={{
        display,
        setDisplay,
      }}
    >
      {children}
    </DisplayContext.Provider>
  );
};

//

export const DataContext = createContext(null);

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

//

export const QueryContext = createContext(null);

export const QueryProvider = ({ children }) => {
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

  const [verbTable, setVerbTable] = useState({});

  const options = {
    mood: ["Indicatif", "Conditionnel", "Subjonctif", "Imperatif"],
    tense:
      query.mood === "Subjonctif" // Some moods only use specific tenses, this is to limit the users choices to those that are applicable
        ? ["Présent", "Imparfait"]
        : query.mood === "Conditionnel"
        ? ["Présent"]
        : query.mood === "Imperatif"
        ? ["Présent"]
        : ["Présent", "Imparfait", "PasséSimple", "Futur"], // Had to write Passé Simple without the space to match object key
    person:
      query.mood === "Imperatif" // Imperative mood only uses second person singular (2s), first person plural (1p) and second person plural (2p)
        ? ["2s", "1p", "2p"]
        : ["1s", "2s", "3s", "1p", "2p", "3p"],
  };

  const [userResponse, setUserResponse] = useState({
    s1: "",
    s2: "",
    s3: "",
    p1: "",
    p2: "",
    p3: "",
  });

  return (
    <QueryContext.Provider // This is quite full, may be a good idea to make a separate context for fetched data
      value={{
        data,
        setData,
        query,
        setQuery,
        options,
        userResponse,
        setUserResponse,
        verbTable,
        setVerbTable,
      }}
    >
      {children}
    </QueryContext.Provider>
  );
};
