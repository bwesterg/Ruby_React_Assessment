import React, { Component } from 'react';
import './App.css';
import SkiContainer from "./components/SkiContainer";
import SkiForm from "./components/SkiForm";
import { patchSki, postSki, deleteSki } from './helpers';
import SignUpForm from './components/SignUpForm';
import {Route, Switch, Redirect, Link} from 'react-router-dom'
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
    if(localStorage.token){
      this.authorize_user()
    }
  }

  authorize_user = () => {
    fetch("http://localhost:3000/profile", {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${localStorage.token}`
      }
    })
    // .then(console.log)
    .then(response => response.json())
    .then(response => {
      this.setState({
        user: response.user,
        skis: response.skis
      })
    })
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
          alerts: ["Successful Login!"],
          skis: response.skis
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
          alerts: ["User successfully added to database"],
          skis: response.skis
        })
      }
    })
  }

  render(){
    return (
      <div className="App">
        <header>
          {this.state.user.username 
            ? (
              <>
                <p>Welcome, {this.state.user.username}</p> 
                <nav>
                  <Link to="/signup">Logout</Link>
                </nav>
              </>
              ) 
          : null}
        </header>
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
