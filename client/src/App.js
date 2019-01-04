import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Login from './components/Authentication/Login';
import Signup from './components/Authentication/Signup';
import WelcomePage from './components/WelcomePage';
import Parks from './components/Parks/AllParks';
import ParkDetails from './components/Parks/ParkDetails';
import FavoriteParks from './components/Parks/FavoriteParks';
// import {UserProfile} from './UserProfile';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      token: '',
      user: null,
      error: null,
      lockedResult: '',
      parks: [],
      favoriteParks: [],
      stateCode: null,
      parkDetails: null
    }
    this.checkForLocalToken = this.checkForLocalToken.bind(this)
    this.logout = this.logout.bind(this)
    this.liftTokenToState = this.liftTokenToState.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.liftStateCodeToState = this.liftStateCodeToState.bind(this)
    // this.getFavoriteParks = this.getFavoriteParks.bind(this)
    this.handleStateSelect = this.handleStateSelect.bind(this)
  }
  liftStateCodeToState(stateCode) {
    axios.get(`/api/parks/${stateCode}`)
      .then(result => this.setState({parks: result.data.data}))
      .catch(err => console.log(err))
  }

  getFavoriteParks() {
    console.log("inside getFavoriteParks")
    let currentUser = this.state.user._id
    let obj = {currentUser}
    axios.get('/api/favoriteparks', obj)
    .then(result => {console.log(result.data)})
    .then(result => this.setState(result.data))
    .catch(err => {console.log(err)})
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

  componentDidUpdate() {
    // this.getFavoriteParks()
  }

  componentDidMount() {
    this.checkForLocalToken()
    // this.getFavoriteParks()
  }

  handleStateSelect(stateCode) {
    console.log('firing stateSelect', stateCode)
    this.setState({stateCode})
  }

  render() {
    return (
    <div className="App">
      <Router>          
        <Switch>
          <Route path='/login' render={() => <Login liftToken={this.liftTokenToState} />} />
          <Route path='/signup' render={() => <Signup liftToken={this.liftTokenToState} />} />
          <Route exact path='/parks' render={(props) => <Parks stateCode={this.state.stateCode} parks={this.state.parks} />} />
          <Route path='/parks/:id' render={({match}) => <ParkDetails match={match.params} parks={this.state.parks} handleFavoriteClick={this.handleFavoriteClick} {...this.state} />} />
          <Route path='/favoriteparks' render={() => <FavoriteParks parks={this.state.favoriteParks} /> } />
          <Route exact path='/' render={(props) => <WelcomePage user={this.state.user} parks={this.state.parks} liftStateCodeToState={this.liftStateCodeToState} handleStateSelect={this.handleStateSelect}/>} />
          {/* <Route path */}
        </Switch>
      </Router>
    </div>
    )
  }
}


export default App;
