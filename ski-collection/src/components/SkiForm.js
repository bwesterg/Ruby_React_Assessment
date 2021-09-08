import React, { Component } from 'react';

const initialState = {
    brand: "",
    model: "",
    description: "",
    usage: ""
}


export default class SkiForm extends Component{

    state = initialState

    componentDidMount(){
        const {ski} = this.props
        if(this.props.ski){
            const {id, brand, model, description, usage} = ski
            this.setState({
                id,
                brand,
                model,
                description,
                usage
            })
        }
    }

    handleChange = (event) => {
        let {name, value} = event.target

        this.setState({
            [name]: value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.submitAction(this.state)
        if(this.props.handleToggle){
            this.props.handleToggle()
        }
    }

    showCloseButton = () => {
        return this.props.ski
            ? <button className="close-button" onClick={this.props.handleToggle}>Close edit form</button>
            : null
    }

    render(){
        const {brand, model, description, usage} = this.state

        return (
            <form className="ski-form" onSubmit={this.handleSubmit}>
                {this.props.ski ? <h3>Edit Ski</h3> : <h3>Add a new pair of skis</h3>}
                <label>Brand</label>
                <input type="text" name="brand" value={brand} onChange={this.handleChange}/>
                <label>Model</label>
                <input type="text" name="model" value={model} onChange={this.handleChange}/>
                <label>Description</label>
                <input type="text" name="description" value={description} onChange={this.handleChange}/>
                <label>Usage</label>
                <input type="text" name="usage" value={usage} onChange={this.handleChange}/>
                <input type="submit" className="submit-button" />
                {this.showCloseButton()}
            </form>
        )
    }
}