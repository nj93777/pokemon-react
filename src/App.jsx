import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import PokemonInfo from './components/PokemonInfo';
import StatTable from './components/StatTable';
import './App.css';

function App() {
  const [searchInput, setSearchInput] = useState("");
  const [pokemonData, setPokemonData] = useState(null);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    const searchTerm = searchInput.trim().toLowerCase();
    if (!searchTerm) return;

    setPokemonData(null); 
    setError(null);

    const apiUrl = `https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${searchTerm}`;

    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        setError("Pokémon not found");
        return;
      }

      const data = await response.json();
      setPokemonData(data);  
    } catch (error) {
      console.error('Error fetching Pokémon data:', error);
      setError('Error fetching Pokémon data');
    }
  };

  return (
    <>
      <h1>Pokémon Search App</h1>
      <div className="container">
        <SearchBar
          searchInput={searchInput}
          setSearchInput={setSearchInput}
          handleSearch={handleSearch}
        />

      
        <div style={{ height: "250px", display: "flex", justifyContent: "center", alignItems: "center" }}>
          {pokemonData && <PokemonInfo pokemonData={pokemonData} />}
        </div>

        
        <StatTable stats={pokemonData ? pokemonData.stats : null} />

        {error && <p style={{ color: "red" }}>{error}</p>}
      </div>
    </>
  );
}

export default App;
