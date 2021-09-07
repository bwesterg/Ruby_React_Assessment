import React from 'react';
import SkiItem from './SkiItem';

export default function SkiContainer({skis}) {
    
    const showSkis = () => {
        return skis.map(ski => <SkiItem key={ski.id} {...ski} />)
    }

    return (
        <ul className="ski-list">
            {showSkis()}
        </ul>
    )
}