import React, { Component } from 'react';
import './App.css';
import SkiContainer from "./components/SkiContainer";
import SkiForm from "./components/SkiForm";
import { patchSki, postSki, deleteSki } from './helpers';
import SignUpForm from './components/SignUpForm';
import {Route, Switch, Redirect} from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute'
import Home from './components/Home';
const skisUrl = "http://localhost:3000/skis/"

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

  login = ({username, password}) => {
    return fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ username, password })
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
          alerts: ["Successful Login!"]
        })
      }
    })
  }

  signUp = (user) => {
    return fetch("http://localhost:3000/users", {
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
        <Switch>
          <PrivateRoute
            exact 
            path="/" 
            component={Home}
            submitAction={this.addSki}
            updateSki={this.updateSki} 
            deleteSki={this.deleteSki} 
            skis={this.state.skis}
            />
          <Route exact path="/signup" render={(routerProps) => {
            return <SignUpForm {...routerProps} login={this.login} signUp={this.signUp} alerts={this.state.alerts}/>} 
          }/>
          <Redirect to="/" />
        </Switch>
      </div>
    );
  }
}

export default App;
