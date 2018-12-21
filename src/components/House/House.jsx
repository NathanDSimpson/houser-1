import React from 'react';
import './House.css'

export default function House(props) {
    console.log(props.info)
    let { id, name, address, city, state, zip, img: image, mortgage, rent } = props.info
    return (
        <div id='house-card'>
            <figure>
                <img src={image} alt=''></img>
            </figure>
            <div className='house-info'>
                <p>Property Name: {name}</p>
                <p>Address: {address}</p>
                <p>City: {city}</p>
                <p>State: {state}</p>
                <p>Zip: {zip}</p>
            </div>
            <div>
                <p>Monthly Mortgage: {mortgage}</p>
                <p>Desired Rent: {rent}</p>
            </div>
            <div>
                <button onClick={() => props.deleteFn(id)}>X</button>
            </div>
        </div>
    )
}