const handleFetch = async (query, setVerbTable) => {
  const response = await fetch(`/table?verb=${query.verb}`);
  const verbTable = await response.json();
  setVerbTable({ data: verbTable.data });
};

export default handleFetch;
