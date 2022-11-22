import React from 'react'

export default function PokemonList({ pokemon }) {

    return (
        <div>
            <h1>Results:</h1>
            {pokemon.map(individualPoke =>(
                <div key={individualPoke}>{individualPoke}</div>
            ))}
        </div>
    )
}