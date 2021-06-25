import React, { useContext } from 'react';
import contextPlanets from '../context/contextPlanets';

function PlanetsTable() {
  const { data, filters } = useContext(contextPlanets);
  const headers = ['Name', 'Rotation Period', 'Orbital Period', 'Diameter', 'Climate',
    'Gravity', 'Terrain', 'Surface Water', 'Population', 'Films', 'Created', 'Edit',
    'Url'];
  const objectKeys = ['name', 'rotation_period', 'orbital_period', 'diameter',
    'climate', 'gravity', 'terrain', 'surface_water',
    'population', 'films', 'created', 'edited', 'url'];
  return (
    <table>
      <thead>
        <tr>
          {headers.map((header) => (
            <th key={ header }>{header}</th>))}
        </tr>
      </thead>
      <tbody>
        {data.filter((element) => element.name.includes(filters.filterByName.name))
          .map((planet) => (
            <tr key={ planet.name }>
              {objectKeys.map((keys, index) => (
                <td key={ `${keys}-${index}` }>{planet[keys]}</td>))}

            </tr>
          ))}
      </tbody>
    </table>

  );
}
export default PlanetsTable;
