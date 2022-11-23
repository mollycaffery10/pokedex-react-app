import React, { useState } from "react";
import "./App.css";
import axios from "axios";

const App = () => {
    const [pokeData, setPokeData] = useState([]);
    const [pokeType, setPokeType] = useState("");
    const [pokemon, setPokemon] = useState("pikachu");

    var handleChange = (e) => {
        setPokemon(e.target.value.toLowerCase());
    };
    var handleSubmit = (e) => {
        e.preventDefault();
        getPokemon();
    };
    const getPokemon = async () => {
        const toArray = [];
        try {
            const pokeAPIUrl = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
            const res = await axios.get(pokeAPIUrl);
            toArray.push(res.data);
            setPokeType(res.data.types[0].type.name);
            setPokeData(toArray);
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <div className="mainContent">
            <form onSubmit={handleSubmit}>
                <label>
                    <input
                        type="text"
                        className="getTextInput"
                        onChange={handleChange}
                        placeholder="Bulbasaur"
                    />
                    <input
                        className="getResults"
                        type="submit"
                        value="Get Results"
                    />
                </label>
            </form>
            {pokeData.map((data) => {
                return (
                    <div className="container">
                       <h5>Type:</h5>
                        <div className="divTableCell">{pokeType}</div>
                    </div>
                );
            })}
        </div>
    );
};

export default App;

//TO DO: This method commented out below is
// import React, { useEffect, useState } from "react";
//
// function PokedexApp() {
//     const [pokemon, setPokemon] = useState("pikachu");
//     const [pokeData, setPokeData] = useState([]);
//     const [pokeType, setPokeType] = useState("");
//
//   const fetchData = () => {
//     return fetch("https://pokeapi.co/api/v2/pokemon/${pokemon}")
//         .then((response) => response.json())
//         .then((data) => setPokeData(data));
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
