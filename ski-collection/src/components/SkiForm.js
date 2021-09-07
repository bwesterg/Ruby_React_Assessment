import React, { Component } from 'react';

const initialState = {
    brand: "",
    model: "",
    description: "",
    usage: ""
}


export default class SkiForm extends Component{

    state = initialState

    handleChange = (event) => {
        let {name, value} = event.target

        this.setState({
            [name]: value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addSki(this.state)
    }

    render(){
        const {brand, model, description, usage} = this.state

        return (
            <form className="ski-form" onSubmit={this.handleSubmit}>
                <h3>Add a new pair of skis</h3>
                <label>Brand</label>
                <input type="text" name="brand" value={brand} onChange={this.handleChange}/>
                <label>Model</label>
                <input type="text" name="model" value={model} onChange={this.handleChange}/>
                <label>Description</label>
                <input type="text" name="description" value={description} onChange={this.handleChange}/>
                <label>Usage</label>
                <input type="text" name="usage" value={usage} onChange={this.handleChange}/>

                <input type="submit" className="submit-button" />
            </form>
        )
    }
}