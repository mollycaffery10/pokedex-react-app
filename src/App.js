import './App.css';
import {Link} from "react-router-dom";
import Nav from './nav';
import Weather from './WeatherApp';

function App() {
    return(
    <div>
        <h1>Here is the Weather</h1>
        <Nav />
        <Weather />
    </div>
    );
}

export default App;