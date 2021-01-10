import base64 from "base-64";

const handleFetch = async (query, setData) => {
  const url = `/conjug?verb=${query.verb}&temps=${query.temps}&personne=${query.personne}&mood=${query.mood}`;
  const response = await fetch(url);
  const parsed = await response.json();

  const lexicalaHeaders = {
    headers: new Headers({
      Authorization: `Basic ${base64.encode(
        `${process.env.REACT_APP_LEXICALA_USERNAME}:${process.env.REACT_APP_LEXICALA_PASSWORD}`
      )}`,
    }),
  };

  const definition = await fetch(
    `https://dictapi.lexicala.com/search?text=${query.verb}&language=fr`,
    lexicalaHeaders
  );
  const definitionParsed = await definition.json();
  setData({ conjugated: parsed.data, results: definitionParsed.results[0] });
};

export default handleFetch;
