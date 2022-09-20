import React, { useEffect, useState } from "react"

const WeatherLocations = (props) => {
  const [zones, setZones] = useState([])

  const fetchData = async () => {
    const response = await fetch("https://api.weather.gov/products/locations")
    const data = await response.json()
    setZones(data)
  }

  useEffect(() => {
    fetchData()
  }, []);

  return (
    <div>
      {zones.length > 0 && (
        <ul>
          {zones.map(user => (
            <li>
                 <h3>key={zones.id}</h3>
                 <p>{zones.name}</p>
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

export default WeatherLocations

