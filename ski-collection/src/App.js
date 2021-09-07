import React, { Component } from 'react';
import './App.css';
import SkiContainer from "./components/SkiContainer";
import SkiForm from "./components/SkiForm";
const skisUrl = "http://localhost:3000/skis";

class App extends Component {
  
  state = {
    skis: []
  }

  componentDidMount(){
    this.getSkis()
  }
  
  getSkis = () => {
    fetch(skisUrl)
      .then(response => response.json())
      .then(skis => this.setState({skis}))
  }

  addSki = (newSki) => {
    this.setState({
      skis: [...this.state.skis, newSki]
    })
    fetch(skisUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newSki)
    })
  }

  deleteSki = (id) => {
    let filtered = this.state.skis.filter(ski => ski.id !== id)
    this.setState({
      skis: filtered
    })
    fetch(skisUrl + "/" + id, { method: "DELETE" })
  }

  render() {
    return (
      <div className="App">
        <h1>Ski Collection App</h1>
        <SkiForm addSki={this.addSki}/>
        <SkiContainer deleteSki={this.deleteSki} skis={this.state.skis} />
      </div>
    );
  }
}

export default App;
