import React from 'react';

const Search = ({search}) => {
  return (
    <div className="filter">
      <input
        onChange={(e) => search(e.target.value)}
        id="search-bar"
        type="text"
        placeholder="Search Notes"
      />
    </div>
  );
}

export default Search;
