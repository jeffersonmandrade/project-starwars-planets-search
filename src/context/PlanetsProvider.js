import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import getApi from '../API/index';
import contextPlanets from './contextPlanets';

const INITIAL_FILTER = {
  filterByName: {
    name: '',
  },
};

const INITIAL_FILTER_NUMERIC = {
  column: '',
  comparison: '',
  value: '',
};

const INITIAL_OPTIONS = ['population', 'orbital_period',
  'diameter', 'rotation_period', 'surface_water'];
function PlanetsProvider({ children }) {
  const [data, setData] = useState([]);
  const [filters, setFilter] = useState(INITIAL_FILTER);
  const [filterNumeric, setFilterNumeric] = useState(INITIAL_FILTER_NUMERIC);
  const [options, setOption] = useState(INITIAL_OPTIONS);
  const [noOptions, setNoOptions] = useState([]);
  const getPlanets = () => {
    getApi().then((results) => setData(results));
  };

  useEffect(getPlanets, []);

  const searchPlanetsName = ({ target: { value } }) => {
    setFilter({ ...filters,
      filterByName:
      { name: value } });
  };
  const resetState = () => {
    getPlanets();
    setFilterNumeric(INITIAL_FILTER_NUMERIC);
    setFilter(INITIAL_FILTER);
  };

  const numericFilter = ({ target: { name, value } }) => {
    if (value === 'X') {
      return resetState();
    }
    setFilterNumeric({
      ...filterNumeric,
      [name]: value,
    });
  };
  const numericSearch = () => {
    const arrayFilter = data.filter((element) => {
      const { column, comparison, value } = filterNumeric;
      if (comparison === 'maior que') {
        return element[column] > Number(value);
      }
      if (comparison === 'menor que') {
        return element[column] < Number(value);
      }
      return element[column] === value;
    });
    setData(arrayFilter);
  };

  const context = {
    data,
    filters,
    searchPlanetsName,
    numericFilter,
    numericSearch,
    filterNumeric,
    resetState,
    options,
    setOption,
    noOptions,
    setNoOptions,
  };
  return (
    <contextPlanets.Provider value={ context }>
      {children}
    </contextPlanets.Provider>
  );
}

PlanetsProvider.propTypes = { children: PropTypes.node.isRequired };
export default PlanetsProvider;
