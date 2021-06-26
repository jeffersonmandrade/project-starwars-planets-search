import React, { useContext } from 'react';
import contextPlanets from '../context/contextPlanets';

function SearchPlanets() {
  const { searchPlanetsName, numericFilter,
    numericSearch, filterNumeric, options = [], setOption, noOptions,
    setNoOptions } = useContext(contextPlanets);

  function handleClick() {
    const newOptions = options.filter((element) => element !== filterNumeric.column);
    setNoOptions([...noOptions, filterNumeric.column]);
    setOption(newOptions);
    console.log(filterNumeric);
    numericSearch();
  }
  function changeNoOptions({ target: { value } }) {
    console.log(value);
    const newNoOptions = noOptions.filter((element) => element !== value);
    setNoOptions(newNoOptions);
    setOption([...options, value]);
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
          {options.map((element) => (
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
      <div data-testid="filter" />
      {noOptions.map((e) => (<button
        key={ e }
        type="button"
        value={ e }
        onClick={ changeNoOptions }
      >
        X

      </button>))}
    </>
  );
}

export default SearchPlanets;
