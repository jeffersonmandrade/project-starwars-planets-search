import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import getApi from '../API/index';
import contextPlanets from './contextPlanets';

function PlanetsProvider({ children }) {
  const [data, setData] = useState([]);

  const getPlanets = () => {
    getApi().then((results) => setData(results));
  };

  useEffect(getPlanets, []);

  const context = {
    data,
  };

  return (
    <contextPlanets.Provider value={ context }>
      {children}
    </contextPlanets.Provider>
  );
}

PlanetsProvider.propTypes = { children: PropTypes.node.isRequired };
export default PlanetsProvider;
