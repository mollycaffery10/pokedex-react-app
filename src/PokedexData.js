import React, { useState} from "react";
import PokemonList from './PokemonList'
import axios from "axios";

function App() {
    const [pokemon, setPokemon] = useState([])

    axios.get("https://pokeapi.co/api/v2/pokemon/").then(res => {
        setPokemon(res.data.results.map(p => p.name))
    })
    return (
        <PokemonList pokemon={pokemon} />
    )
}

export default App;

//TO DO: This method commented out below is
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
