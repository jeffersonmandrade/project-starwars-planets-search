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
          name="column"
          onChange=""
        >
          {options.map((element) => (
            <option
              key={ element }
            >
              {element}

            </option>))}
        </select>
      </label>
      <label htmlFor="idComparison">
        <select
          data-testid="comparison-filter"
          id="idComparison"
          name="comparison"
        >
          <option>maior que</option>
          <option>menor que</option>
          <option>igual a</option>
        </select>
      </label>
      <label htmlFor="idpinputNumber">
        <input
          type="number"
          testid="value-filter"
          id="idpinputNumber"
          name="value"
        />
      </label>
      <button type="button" data-testid="button-filter">
        Adicionar Filtro
      </button>
    </>
  );
}

export default SearchPlanets;
