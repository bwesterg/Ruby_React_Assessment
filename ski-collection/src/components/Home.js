import React from 'react'
import SkiForm from './SkiForm'
import SkiContainer from './SkiContainer'

export default function Home(props) {

    return (
        <>
            <SkiForm submitAction={props.submitAction}/>
            <SkiContainer updateSki={props.updateSki} deleteSki={props.deleteSki} skis={props.skis} />
        </>
    )
}