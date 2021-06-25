import React, { useContext } from 'react';
import contextPlanets from '../context/contextPlanets';

function SearchPlanets() {
  const { searchPlanetsName } = useContext(contextPlanets);
  console.log(searchPlanetsName);
  return (
    <label htmlFor="idSearchBar">
      <input id="idSearchBar" type="text" onChange={ searchPlanetsName } />
    </label>
  );
}

export default SearchPlanets;
