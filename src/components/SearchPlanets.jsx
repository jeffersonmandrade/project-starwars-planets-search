import React, { useContext, useState } from 'react';

const INITIAL_STATE = {
  filters: {
    filterByName: {
      name: 'Tatoo',
    },
  },
};

function SearchPlanets() {
  const [filterName, setFilterByName] = useState(INITIAL_STATE);
  const handleChache = ({ target: { value } }) => {
    setFilterByName({ ...filters,
      filteByName:
       { name: value } });
  };

  return (
    <label htmlFor="idSearchBar">
      <input id="idSearchBar" type="text" onChance={ () => handleChache() } />
    </label>
  );
}

export default SearchPlanets;
