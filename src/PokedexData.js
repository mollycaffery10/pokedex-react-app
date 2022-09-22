import React, { useEffect, useState } from "react"

const PokedexMeta = (props) => {
  const [names, setNames] = useState([])

  const fetchData = async () => {
    const response = await fetch("https://pokeapi.co/api/v2/pokedex/kanto/")
    const data = await response.json()
    setNames(data)
    console.log(data)
  }

  useEffect(() => {
    fetchData()
  }, []);

  return (
    <div>
      {names.length > 0 && (
        <ul>
          {names.map(user => (
            <li>
                 <h3>key={names.id}</h3>
                 <p>{names.name}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
};

// Weather.propTypes = {
//     data: 'object'
// };

export default PokedexMeta

