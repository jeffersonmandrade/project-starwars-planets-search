import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import getApi from '../API/index';
import contextPlanets from './contextPlanets';

const INITIAL_FILTER = {
  filterByName: {
    name: '',
  },
  filterByNumericValues: [],
};

const INITIAL_FILTER_NUMERIC = {
  column: '',
  comparison: '',
  value: '',
};
function PlanetsProvider({ children }) {
  const [data, setData] = useState([]);
  const [filters, setFilter] = useState(INITIAL_FILTER);
  const [filterNumeric, setFilterNumeric] = useState(INITIAL_FILTER_NUMERIC);
  const getPlanets = () => {
    getApi().then((results) => setData(results));
  };

  useEffect(getPlanets, []);

  const searchPlanetsName = ({ target: { value } }) => {
    setFilter({ ...filters,
      filterByName:
      { name: value } });
  };
  const numericFilter = ({ tager: { name, value } }) => {
    setFilterNumeric({
      ...filterNumeric,
      [name]: value,
    });
  };

  const context = {
    data,
    filters,
    searchPlanetsName,
    numericFilter,
  };
  return (
    <contextPlanets.Provider value={ context }>
      {children}
    </contextPlanets.Provider>
  );
}

PlanetsProvider.propTypes = { children: PropTypes.node.isRequired };
export default PlanetsProvider;
