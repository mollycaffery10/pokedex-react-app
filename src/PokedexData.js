import React, { useEffect, useState } from "react";

function PokedexApp() {
  const [user, setUser] = useState([]);

  const fetchData = () => {
    return fetch("https://pokeapi.co/api/v2/pokedex/kanto/")
        .then((response) => response.json())
        .then((data) => setUser(data));
  }

  useEffect(() => {
    fetchData();
  },[])

  return (
      <main>
        <h1>Pokedex Results:</h1>
        <ul>
          {user && user.length > 0 && user.map((userObj, index) => (
              <li key={userObj.descriptions}>{userObj.descriptions.name}</li>
          ))}
        </ul>
      </main>
  );
}

export default PokedexApp;

// import React, { useEffect, useState } from "react"
//
// const PokedexMeta = (props) => {
//   const [names, setNames] = useState([])
//
//   const fetchData = async () => {
//     const response = await fetch("https://pokeapi.co/api/v2/pokedex/kanto/")
//     const data = await response.json()
//     setNames(data)
//     console.log(data)
//   }
//
//   useEffect(() => {
//     fetchData()
//   }, []);
//
//   return (
//     <div>
//       {names.length > 0 && (
//         <ul>
//           {names.map(user => (
//             <li>
//                 console.log(names);
//                  <h3>key={names.id}</h3>
//                  <p>{names.names}</p>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   )
// };
//
// export default PokedexMeta
//
