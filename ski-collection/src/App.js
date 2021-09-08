import React, { Component } from 'react';
import './App.css';
import SignUpForm from './components/SignUpForm';
import SkiContainer from "./components/SkiContainer";
import SkiForm from "./components/SkiForm";
import { patchSki, postSki, deleteSki } from './helpers';
const skisUrl = "http://localhost:3000/skis/";

class App extends Component {
  
  state = {
    skis: [],
    user: {},
    alerts: []
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
    postSki(newSki)
  }

  updateSki = (updatedSki) => {
    let skis = this.state.skis.map(ski => ski.id === updatedSki.id ? updatedSki : ski)

    this.setState({ skis })

    patchSki(updatedSki)    
  }

  deleteSki = (id) => {
    let filtered = this.state.skis.filter(ski => ski.id !== id)
    this.setState({
      skis: filtered
    })
    deleteSki(id)
  }

  signUp = (user) => {
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify({user})
    })
    .then(response => response.json())
    .then(response => {
      if(response.errors){
        this.setState({alerts: response.errors})
      }
      else {
        localStorage.setItem('token', response.token)
        this.setState({
          user: response.user,
          alerts: ["User successfully added to database"]
        })
      }
    })
  }

  render(){
    return (
      <div className="App">
        <h1>Ski Collection App</h1>
        <SignUpForm signUp={this.signUp} alerts={this.state.alerts} />
        <SkiForm submitAction={this.addSki}/>
        <SkiContainer updateSki={this.updateSki} deleteSki={this.deleteSki} skis={this.state.skis} />
      </div>
    );
  }
}

export default App;
