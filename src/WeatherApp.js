//import React, { useEffect, useState } from "react"
//import { BrowserRouter, Routes, Route } from 'react-router-dom';
//
////const UsingFetch = () => {
////
////  const [users, setUsers] = useState([])
//
//function Weather() {
//return (
//	<div>
//	<h1>
//		Weather app that is a WIP.
//	</h1>
//	</div>
//);
//};
//
//export default Weather;
import React, { useEffect, useState } from "react"

const AsyncAwait = () => {
  const [users, setUsers] = useState([])

  const fetchData = async () => {
    const response = await fetch("https://www.weather.gov/documentation/services-web-api#/default/zone_list")
    const data = await response.json()
    setUsers(data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
      {users.length > 0 && (
        <ul>
          {users.map(user => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default AsyncAwait

