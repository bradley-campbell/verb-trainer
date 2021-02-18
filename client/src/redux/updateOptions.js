const updateOptions = (query) => {
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

  return options;
};

export default updateOptions;
