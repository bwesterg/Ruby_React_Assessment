import React from 'react';
import SkiItem from './SkiItem';

export default function SkiContainer({skis, deleteSki, updateSki}) {
    
    const showSkis = () => {
        return skis.map(ski => <SkiItem key={ski.id} {...ski} updateSki={updateSki} deleteSki={deleteSki} />);
    }

    let skiCollectionCount = skis.length;

    return (
        <>
            <div>
                <h2>{skiCollectionCount} ski types in my collection</h2>
            </div>
            <ul className="ski-list">
                {showSkis()}
            </ul>
        </>
    )
}