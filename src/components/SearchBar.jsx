import React from "react";

function SearchBar({ searchInput, setSearchInput, handleSearch }) {
  return (
    <div>
      <label htmlFor="search-input">Search Pokémon by name or ID:</label>
      <div>
        <input
          type="text"
          id="search-input"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          required
        />
        <button onClick={handleSearch}>Search</button>
      </div>
    </div>
  );
}

export default SearchBar;
