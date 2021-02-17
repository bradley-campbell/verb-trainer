import React, { createContext, useState } from "react";

const QueryContext = createContext(null);

/* cSpell:disable */

interface queryState {
  verb: string;
  mood: string;
  tense: string;
  personne: string;
}

interface options {
  mood: string[];
  tense: string[];
  person: any[];
}

interface userResponse {
  s1: string;
  s2: string;
  s3: string;
  p1: string;
  p2: string;
  p3: string;
}

const queryStateInitial: queryState = {
  verb: "",
  mood: "Indicatif",
  tense: "Présent",
  personne: "1s",
};

const userResponseInitial: userResponse = {
  s1: "",
  s2: "",
  s3: "",
  p1: "",
  p2: "",
  p3: "",
};

export const QueryProvider = ({ children }) => {
  const [query, setQuery] = useState(queryStateInitial);

  const options: options = {
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
        ? [
            { label: "Tu", value: "2s" },
            { label: "Nous", value: "1p" },
            { label: "Vous", value: "2p" },
          ]
        : [
            { label: "Je", value: "1s" },
            { label: "Tu", value: "2s" },
            { label: "Il/Elle/On", value: "3s" },
            { label: "Nous", value: "1p" },
            { label: "Vous", value: "2p" },
            { label: "Ils/Elles", value: "3p" },
          ],
  };

  const [userResponse, setUserResponse] = useState(userResponseInitial);

  return (
    <QueryContext.Provider // This is quite full, may be a good idea to make a separate context for fetched data
      value={{
        query,
        setQuery,
        options,
        userResponse,
        setUserResponse,
      }}
    >
      {children}
    </QueryContext.Provider>
  );
};

export default QueryContext;
