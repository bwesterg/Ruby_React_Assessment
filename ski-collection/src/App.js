import React, { Component } from 'react';
import './App.css';
import SkiContainer from './components/SkiContainer';
const skisUrl = "http://localhost:3000/skis"

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

  render() {
    return (
      <div className="App">
        <h1>Ski Collection App</h1>
        <SkiContainer skis={this.state.skis} />
      </div>
    );
  }
}

export default App;
