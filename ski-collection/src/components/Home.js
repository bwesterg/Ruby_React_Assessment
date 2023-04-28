import React from 'react'
import SkiForm from './SkiForm'
import SkiContainer from './SkiContainer'

export default function Home(props) {

    return (
        <>
            <SkiForm submitAction={props.submitAction}/>
            
            <div class="skis-container container">
                <SkiContainer updateSki={props.updateSki} deleteSki={props.deleteSki} skis={props.skis} />
            </div>
        </>
    )
}