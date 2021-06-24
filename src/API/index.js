const getApi = async () => {
  const response = await (await fetch('https://swapi-trybe.herokuapp.com/api/planets/')).json();
  const result = await response.results;
  return result;
};

export default getApi;
