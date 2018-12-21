import React from 'react';
import './House.css'

export default function House(props) {
    let {id, name, address, city, state, zip} = props.info
    return (
        <div id='house-card'>
            <p>Property Name: {name}</p>
            <p>Address: {address}</p>
            <p>City: {city}</p>
            <p>State: {state}</p>
            <p>Zip: {zip}</p>
            <button onClick={() => props.deleteFn(id)}>X</button>
        </div>
    )
}