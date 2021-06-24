import React, { useContext_ } from 'react';
import contextPlanets from '../context/contextPlanets';

function PlanetsTable() {
  const { planets } = useContext(contextPlanets)
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Rotation Period</th>
        <th>Orbital Period</th>
        <th>Diameter</th>
        <th>Climate</th>
        <th>Gravity</th>
        <th>Terrain</th>
        <th>Surface Water</th>
        <th>Population</th>
        <th>Films</th>
        <th>Created</th>
        <th>Edited</th>
        <th>Url</th>
      </tr>
    </thead>
    <tbod>
      <tr>
        {}
      </tr>
    </tbod>
  </table>;
}
