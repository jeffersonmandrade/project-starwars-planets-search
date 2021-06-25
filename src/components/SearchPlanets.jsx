import React, { useContext } from 'react';
import contextPlanets from '../context/contextPlanets';

function SearchPlanets() {
  const { searchPlanetsName } = useContext(contextPlanets);
  const options = ['population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'];

  return (
    <>
      <label htmlFor="idSearchBar">
        <input
          id="idSearchBar"
          type="text"
          onChange={ searchPlanetsName }
          data-testid="name-filter"
        />
      </label>
      <label htmlFor="idSelect">
        <select
          id="idSelect"
          data-testid="column-filter"
        >
          {options.map((element) => (
            <option
              key={ element }
            >
              {element}

            </option>))}
        </select>
      </label>
    </>
  );
}

export default SearchPlanets;
