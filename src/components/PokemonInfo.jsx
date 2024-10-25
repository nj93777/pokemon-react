import React from "react";

function PokemonInfo({ pokemonData }) {
  return (
    <div id="pokemon-info">
      <h2>
        <span id="pokemon-name">{pokemonData.name.toUpperCase()}</span>
        <span id="pokemon-id">#{pokemonData.id}</span>
      </h2>
      <img id="sprite" src={pokemonData.sprites.front_default} alt={pokemonData.name} />
      <p>Weight: {pokemonData.weight} kg</p>
      <p>Height: {pokemonData.height / 10} m</p>
      <div id="types">
        {pokemonData.types.map((type, index) => (
          <span key={index}>{type.type.name.toUpperCase()}</span>
        ))}
      </div>
    </div>
  );
}

export default PokemonInfo;
