import React from 'react';

const Filters = ({ handleSubmit, handleCheckboxChange, filters }) => (
  <form onSubmit={handleSubmit}>
    <label>
      All
      <input
        type="checkbox"
        name="all"
        checked={filters.all}
        onChange={handleCheckboxChange}
      />
    </label>

    <label>
      Only needed
      <input
        type="checkbox"
        name="onlyNeeded"
        checked={filters.onlyNeeded}
        onChange={handleCheckboxChange}
      />
    </label>

    <label>
      Only owned
      <input
        type="checkbox"
        name="onlyOwned"
        checked={filters.onlyOwned}
        onChange={handleCheckboxChange}
      />
    </label>
    <button type="submit">Filter</button>
  </form>
);

export default Filters;
