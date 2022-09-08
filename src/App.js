import './App.css';
import {Link} from "react-router-dom";
import Nav from './nav';
import Weather from './weatherApp';

function App() {
    return(
    <div>
        <h1>APP HERE</h1>
        <Nav />
        <Weather />
    </div>
    );
}

export default App;
//function App() {
//  return (
//    <div className="App">
//      <header className="App-header">
//      <h1>Weather App!</h1>
//        <a>
//          Learn React
//        </a>
//      </header>
//    </div>
//  );
//}
//
//export default App;
