const organizeData = (jsonData, verb) => {
  return {
    Indicatif: {
      Présent: {
        s1: jsonData[verb].Indicatif.Présent["1s"],
        s2: jsonData[verb].Indicatif.Présent["2s"],
        s3: jsonData[verb].Indicatif.Présent["3s"],
        p1: jsonData[verb].Indicatif.Présent["1p"],
        p2: jsonData[verb].Indicatif.Présent["2p"],
        p3: jsonData[verb].Indicatif.Présent["3p"],
      },
      Imparfait: {
        s1: jsonData[verb].Indicatif.Imparfait["1s"],
        s2: jsonData[verb].Indicatif.Imparfait["2s"],
        s3: jsonData[verb].Indicatif.Imparfait["3s"],
        p1: jsonData[verb].Indicatif.Imparfait["1p"],
        p2: jsonData[verb].Indicatif.Imparfait["2p"],
        p3: jsonData[verb].Indicatif.Imparfait["3p"],
      },
      Futur: {
        s1: jsonData[verb].Indicatif.Futur["1s"],
        s2: jsonData[verb].Indicatif.Futur["2s"],
        s3: jsonData[verb].Indicatif.Futur["3s"],
        p1: jsonData[verb].Indicatif.Futur["1p"],
        p2: jsonData[verb].Indicatif.Futur["2p"],
        p3: jsonData[verb].Indicatif.Futur["3p"],
      },
      PasséSimple: {
        s1: jsonData[verb].Indicatif["Passé Simple"]["1s"],
        s2: jsonData[verb].Indicatif["Passé Simple"]["2s"],
        s3: jsonData[verb].Indicatif["Passé Simple"]["3s"],
        p1: jsonData[verb].Indicatif["Passé Simple"]["1p"],
        p2: jsonData[verb].Indicatif["Passé Simple"]["2p"],
        p3: jsonData[verb].Indicatif["Passé Simple"]["3p"],
      },
    },
    Conditionnel: {
      Présent: {
        s1: jsonData[verb].Conditionnel.Présent["1s"],
        s2: jsonData[verb].Conditionnel.Présent["2s"],
        s3: jsonData[verb].Conditionnel.Présent["3s"],
        p1: jsonData[verb].Conditionnel.Présent["1p"],
        p2: jsonData[verb].Conditionnel.Présent["2p"],
        p3: jsonData[verb].Conditionnel.Présent["3p"],
      },
    },
    Subjonctif: {
      Présent: {
        s1: jsonData[verb].Subjonctif.Présent["1s"],
        s2: jsonData[verb].Subjonctif.Présent["2s"],
        s3: jsonData[verb].Subjonctif.Présent["3s"],
        p1: jsonData[verb].Subjonctif.Présent["1p"],
        p2: jsonData[verb].Subjonctif.Présent["2p"],
        p3: jsonData[verb].Subjonctif.Présent["3p"],
      },
      Imparfait: {
        s1: jsonData[verb].Subjonctif.Imparfait["1s"],
        s2: jsonData[verb].Subjonctif.Imparfait["2s"],
        s3: jsonData[verb].Subjonctif.Imparfait["3s"],
        p1: jsonData[verb].Subjonctif.Imparfait["1p"],
        p2: jsonData[verb].Subjonctif.Imparfait["2p"],
        p3: jsonData[verb].Subjonctif.Imparfait["3p"],
      },
    },
    Imperatif: {
      Présent: {
        s2: jsonData[verb].Imperatif["Imperatif Présent"]["2s"],
        p1: jsonData[verb].Imperatif["Imperatif Présent"]["1p"],
        p2: jsonData[verb].Imperatif["Imperatif Présent"]["2p"],
      },
    },
    Participe: {
      Présent: jsonData[verb].Participe["Participe Présent"],
      Passé: {
        ms: jsonData[verb].Participe["Participe Passé"].ms,
        mp: jsonData[verb].Participe["Participe Passé"].mp,
        fs: jsonData[verb].Participe["Participe Passé"].fs,
        fp: jsonData[verb].Participe["Participe Passé"].fp,
      },
    },
  };
};

module.exports = { organizeData };
