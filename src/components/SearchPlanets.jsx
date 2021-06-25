import React, { useContext } from 'react';
import contextPlanets from '../context/contextPlanets';

function SearchPlanets() {
  const { searchPlanetsName, numericFilter,
    numericSearch, filterNumeric } = useContext(contextPlanets);
  let options = ['population', 'orbital_period',
    'diameter', 'rotation_period', 'surface_water'];
  const newOpitons = options.filter((elements) => elements !== (filterNumeric.column));

  function handleClick() {
    options = newOpitons;
    numericSearch();
  }
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
        Column:
        <select
          id="idSelect"
          data-testid="column-filter"
          name="column"
          onChange={ numericFilter }
        >
          {newOpitons.map((element) => (
            <option
              key={ element }
            >
              {element}

            </option>))}
        </select>
      </label>
      <label htmlFor="idComparison">
        Comparison:
        <select
          data-testid="comparison-filter"
          id="idComparison"
          name="comparison"
          onChange={ numericFilter }
        >
          <option> </option>
          <option>maior que</option>
          <option>menor que</option>
          <option>igual a</option>
        </select>
      </label>
      <label htmlFor="idpinputNumber">
        Value:
        <input
          type="number"
          data-testid="value-filter"
          id="idpinputNumber"
          name="value"
          onChange={ numericFilter }
        />
      </label>
      <button type="button" data-testid="button-filter" onClick={ handleClick }>
        Adicionar Filtro
      </button>
    </>
  );
}

export default SearchPlanets;
