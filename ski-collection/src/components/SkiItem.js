import React from 'react';

export default function SkiItem({brand, model, description, usage}) {
    return (
        <li className="ski-item">
            <h2>{brand}</h2>
            <h3>{model}</h3>
            <h4>{description}</h4>
            <h4>{usage}</h4>
        </li>
    )
}