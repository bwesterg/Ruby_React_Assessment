import React, { useState } from 'react';
import SkiForm from './SkiForm';

export default function SkiItem({id, brand, model, description, usage, updateSki, deleteSki}) {
    
    const ski = {id, brand, model, description, usage}
    const [isToggled, setIsToggled] = useState(false)
    const handleClick = (event) => deleteSki(id)
    const handleToggle = (event) => setIsToggled(!isToggled)
    const skiCard = () => (
        <li className="ski-item">
            <div className="item-description">
                <h2>Brand: {brand}</h2>
                <h4>Model: {model}</h4>
                <h4>Description: <i>{description}</i></h4>
                <h4>Usage: <i>{usage}</i></h4>
            </div>
            <button onClick={handleClick} className="delete-button" >Delete</button>
            <button onClick={handleToggle} className="edit-button" >Update</button>

        </li>
    )

    return isToggled 
        ? <SkiForm 
            handleToggle={handleToggle} 
            submitAction={updateSki} 
            ski={ski}/> 
        : skiCard()
}