import './App.css';
import {Link} from "react-router-dom";
import Nav from './nav';
import Weather from './weatherApp';

function App() {
    return(
    <div>
        <h1>Welcome!</h1>
        <Nav />
        <Weather />
    </div>
    );
}

export default App;
