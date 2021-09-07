import React from 'react';

export default function SkiItem({id, brand, model, description, usage, deleteSki}) {
    
    const handleClick = (event) => deleteSki(id)
    
    return (
        <li className="ski-item">
            <h2>{brand}</h2>
            <h3>{model}</h3>
            <h4>{description}</h4>
            <h4>{usage}</h4>
            <button onClick={handleClick} className="delete-button">Delete</button>
        </li>
    )
}