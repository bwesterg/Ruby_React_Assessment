import React, { useState } from 'react';
import SkiForm from './SkiForm';

export default function SkiItem({id, brand, model, description, usage, updateSki, deleteSki}) {
    
    const ski = {id, brand, model, description, usage}
    const [isToggled, setIsToggled] = useState(false)
    const handleClick = (event) => deleteSki(id)
    const handleToggle = (event) => setIsToggled(!isToggled)
    const skiCard = () => (
        <li className="ski-item">
            <h2>{brand}</h2>
            <h3>{model}</h3>
            <h4>{description}</h4>
            <h4>{usage}</h4>
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