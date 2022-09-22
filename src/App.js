import './App.css';
import {Link} from "react-router-dom";
import Nav from './nav';
import PokedexInfo from './PokedexData';

function App() {
    return(
    <div>
        <Nav />
        <h1>Search Pokedex by ID:</h1>
        <PokedexInfo  />
    </div>
    );
}

export default App;