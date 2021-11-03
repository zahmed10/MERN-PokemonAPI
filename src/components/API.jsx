// import React from 'react'
import React, { useState, useEffect } from 'react';

const API = () => {
    const [pokemon, setPokemon] = useState([]);
    const [buttonPress, setButtonPress] = useState(false);

    // Checking whether or not the button has pressed and changing the value of the buttonPress boolean
    const handleButton = () => {
        if (!buttonPress) {
            setButtonPress(true) 
        } else { setButtonPress(false)}
    }

    
    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon')
        .then(response => response.json())
        .then(response => setPokemon(response.results))
    }, [])

    


    return (
        <div>
            <button onClick={handleButton}>Fetch Pokemon</button>
            {

                buttonPress ? 
                <div>

                {pokemon.length > 0 && pokemon.map((pokemon, index)=>{
                    return (<div key={index}>{pokemon.name}</div>)
                }
                )}
                </div>:<p>Please press the button to the see the pokemon names</p>
            }
            {/* api here */}
            
        </div>
    )
}

export default API
