import './App.css';
import {Link} from "react-router-dom";
import Nav from './nav';
import PokedexInfo from './PokedexData';

function App() {
    return(
    <div>
        <Nav />
        <h1>Search the PokeDex!</h1>
        <form>
            <label>
                Enter an ID:
                <input type="text" name="name" />
            </label>
            <input type="submit" value="Submit" />
        </form>
        <PokedexInfo  />
    </div>
    );
}

export default App;