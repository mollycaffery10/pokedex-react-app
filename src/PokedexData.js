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
                    <div className="outputContainer">
                       <h5>Type:</h5>
                        <div className="divTableCell">{pokeType.toUpperCase()}</div>
                        <h5>Height and Weight:</h5>
                        <div className="divTableCell">{(data.height * 3.9) + " FT " + (Math.round((data.weight / 4.3) * 100) / 100) + " LB"}</div>
                    </div>
                );
            })}
        </div>
    );
};

export default App;
