import React from 'react';

const FilterForm = () => (
  <div className="filter-form">
    <p>Search by: </p>
    <select>
      <option value="firstname">First Name</option>
      <option value="lastname">Last Name</option>
      <option value="number">Telephone Number</option>
    </select>
    <p>Search for: </p>
    <input type="text" placeholder="Type Here to Search..." />
  </div>
);

export default FilterForm;
