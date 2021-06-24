import React, { useState, useEffect } from 'react';
import getApi from '../API/index';
import contextPlanets from './contextPlanets';

function Planets({ children }) {
  const [planets, setPlanets] = useState([]);

  const getPlanets = async () => {
    const planetsApi = await getApi();
    setPlanets(planetsApi);
    console.log(planetsApi);
  };

  useEffect(getPlanets, []);
  return (
    <contextPlanets.Provider value={ planets }>
      {children}
    </contextPlanets.Provider>
  );
}

export default Planets;
