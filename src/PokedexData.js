import React, { useState} from "react";
import PokemonList from './PokemonList'

function App() {
    const [pokemon, setPokemon] = useState(["bulbasaur", "charmander"])

    return (
        <PokemonList pokemon={pokemon} />
    )
}

export default App;
// import React, { useEffect, useState } from "react";
//
// function PokedexApp() {
//     const [pokemon, setPokemon] = useState("pikachu");
//     const [pokemonData, setPokemonData] = useState([]);
//     const [pokemonType, setPokemonType] = useState("");
//
//   const fetchData = () => {
//     return fetch("https://pokeapi.co/api/v2/pokemon/${pokemon}")
//         .then((response) => response.json())
//         .then((data) => setPokemonData(data));
//   }
//
//   useEffect(() => {
//     fetchData();
//   },[])
//
//   return (
//       <main>
//         <h1>Pokedex Results:</h1>
//         <ul>
//           {/*{pokemon && pokemon.length > 0 && pokemon.map((data, index) => (*/}
//           {/*    <li key={data.sprites}>{data.name}</li>*/}
//           {/*))}*/}
//         </ul>
//       </main>
//   );
// }
//
// export default PokedexApp;
