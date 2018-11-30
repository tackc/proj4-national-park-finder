import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Login from './components/Authentication/Login';
import Signup from './components/Authentication/Signup';
import WelcomePage from './components/WelcomePage';
import Parks from './components/Parks/Parks'
import {UserProfile} from './UserProfile';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      token: '',
      user: null,
      error: null,
      lockedResult: ''
    }
    this.checkForLocalToken = this.checkForLocalToken.bind(this)
    this.logout = this.logout.bind(this)
    this.liftTokenToState = this.liftTokenToState.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  liftTokenToState(data) {
    this.setState({
      token: data.token,
      user: data.user
    })
  }

  handleClick(e) {
    e.preventDefault()
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.state.token
    axios.get('/locked/test').then(result => {
      this.setState({
        lockedResult: result.data
      })
    })
  }

  logout() {
    // Remove the token from localStorage
    localStorage.removeItem('mernToken')
    // Remove the user info from the state
    this.setState({
      token: '',
      user: null
    })
  }

  checkForLocalToken() {
    // Look in local storage for the token
    let token = localStorage.getItem('mernToken')
    if (!token || token === 'undefined') {
      // There was no token
      localStorage.removeItem('mernToken')
      this.setState({
        token: '',
        user: null
      })
    } else {
      // We did find a token in localStorage
      // Send it to the back to be verified
      axios.post('/auth/me/from/token', {
        token
      }).then( result => {
        if (result.data.type !== 'success') {
          this.setState({
            error: result.data
          })
        } else {
          // Put the token in localStorage
          localStorage.setItem('mernToken', result.data.token)
          this.setState({
            token: result.data.token,
            user: result.data.user
          })
        }
      })
    }
  }

  componentDidMount() {
    this.checkForLocalToken()
  }

  render() {
    <Router>
      <Switch>
        let user = this.state.user
        if (user) {
          return (
            <div className="App">
              <div className="content-box">
                <UserProfile user={user} logout={this.logout} />
                <p><a onClick={this.handleClick}>Test the protected route. Results below...</a></p>
                <p>{this.state.lockedResult}</p>
              </div>
            </div>
          );
        } else {
          return (
            <div className="App">
              <WelcomePage />
              <Signup liftToken={this.liftTokenToState} />
              <Login liftToken={this.liftTokenToState} />
            </div>
          )
        }
          <Route exact path='/' component={() => <WelcomePage />} />
          <Route exact path='/login' component={() => <Login />} />
          <Route exact path='/signup' component={() => <Signup />} />
          <Route path='/parks/:id' component={(props) => <Parks/>} />
        </Switch>
    </Router>
  }
}

export default App;
