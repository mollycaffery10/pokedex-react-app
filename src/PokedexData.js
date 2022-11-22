import React, { useState, useEffect } from "react";
import PokemonList from './PokemonList'
import axios from "axios";

function App() {
    const [pokemon, setPokemon] = useState([])
    const [currentPageUrl, setCurrentPageUrl] = useState("https://pokeapi.co/api/v2/pokemon/")

    //Everytime we change current page URL then we re-run the code inside of here.
    useEffect(() => {
        axios.get(currentPageUrl).then(res => {
            setPokemon(res.data.results.map(p => p.name))
        })
        }, [currentPageUrl])

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
