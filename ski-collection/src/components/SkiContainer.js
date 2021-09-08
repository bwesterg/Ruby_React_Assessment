import React from 'react';
import SkiItem from './SkiItem';

export default function SkiContainer({skis, deleteSki, updateSki}) {
    
    const showSkis = () => {
        return skis.map(ski => <SkiItem key={ski.id} {...ski} updateSki={updateSki} deleteSki={deleteSki} />)
    }

    return (
        <ul className="ski-list">
            {showSkis()}
        </ul>
    )
}