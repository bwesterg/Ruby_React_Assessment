import React from 'react'
import SkiForm from './SkiForm'
import SkiContainer from './SkiContainer'

export default function Home(props) {

    return (
        <>
            <SkiForm submitAction={props.submitAction}/>
            <h2>Skis in my collection</h2>
            <div class="skis-container container">
                <SkiContainer updateSki={props.updateSki} deleteSki={props.deleteSki} skis={props.skis} />
            </div>

            <footer>
                <div>
                    footer
                </div>
            </footer>
        </>
    )
}