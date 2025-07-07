// Name: Gavin Li
// Course: WEBD-2013 (271014) Web Development 2
// Assignment 5: React
// Date: 2025-07-07

import React from "react";

function BreedSelector({ breeds = [], onSelect }) {
  return (
    <select onChange={(e) => onSelect(e.target.value)} className="dropdown">
      <option value="">All Breeds</option>
      {breeds.map((breed) => (
        <option key={breed} value={breed}>
          {breed}
        </option>
      ))}
    </select>
  );
}

export default BreedSelector;
