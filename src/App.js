import React from 'react';
import './App.css';
import PlanetsProvider from './context/PlanetsProvider';
import PlanetsTable from './components/PlanetsTable';
import SearchPlanets from './components/SearchPlanets';

function App() {
  return (
    <PlanetsProvider>
      <SearchPlanets />
      <PlanetsTable />
    </PlanetsProvider>
  );
}

export default App;
