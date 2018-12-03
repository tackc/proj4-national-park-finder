import React, {Component} from 'react';
import axios from 'axios';
import ErrorPanel from './ErrorPanel';
import './Signup.css';

class Signup extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      password: '',
      // location: '',
      error: null
    }
    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleEmailChange = this.handleEmailChange.bind(this)
    // this.handleLocationChange = this.handleLocationChange.bind(this)
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleNameChange(e) {
    this.setState({
      name: e.target.value
    })
  }
  handleEmailChange(e) {
    this.setState({
      email: e.target.value
    })
  }
  // handleLocationChange(e) {
  //   this.setState({
  //     location: e.target.value
  //   })
  // }
  handlePasswordChange(e) {

    this.setState({
      password: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    if (this.state.password.length < 8 || this.state.password > 99) {
      // Password does not meet length requirements
      this.setState({
        error: {
          type: 'auth_error',
          status: 401,
          message: 'Password must be between 8 and 128 characters.'
        },
        password: '',
        // location: '',
      })
    } else if (!(this.state.passHasCap && this.state.passHasLow && this.state.passHasDig && this.state.passHasPunc)) {
      // Password does not meet complexity requirements
      this.setState({
        error: {
          type: 'auth_error',
          status: 401,
          message: 'Password not strong enough. Please meet requirements below.'
        },
        password: '',
        // location: '',
      })
    } else {
      axios.post('/auth/signup', {
        name: this.state.name,
        email: this.state.email,
        password: this.state.password
      }).then( result => {
        if (result.data.type.includes('error')) {
          this.setState({
            error: result.data,
            email: '',
            password: '',
            // location: '',
          })
        } else {
          localStorage.setItem('mernToken', result.data.token)
          this.props.liftToken(result.data)
        }
      }).catch(err => {
        // This block catches the rate limit errors
        this.setState({
          error: {
            type: 'rate_error',
            status: 429,
            message: 'Maximum accounts exceeded. Please try again later.'
          }
        })
      })
    }
  }

  render() {
    let errorPanel = (this.state.error) ? <ErrorPanel error={this.state.error} /> : ''
    return (
      <div className="Signup">
        <h3>Create a new account:</h3>
        {errorPanel}
        <form onSubmit={this.handleSubmit}>
          <div className="input-box">
            <div className="left-col">
              <label htmlFor="s-name">Name:</label>
            </div>
            <div className="right-col">
              <input name="s-name" type='text' value={this.state.name} onChange={this.handleNameChange} />
            </div>
          </div>
          <div className="input-box">
            <div className="left-col">
              <label htmlFor="s-email">Email:</label>
            </div>
            <div className="right-col">
              <input name="s-email" type='email' value={this.state.email} onChange={this.handleEmailChange} />
            </div>
          </div>
          <div className="input-box">
            <div className="left-col">
              <label htmlFor="s-password">Password:</label>
            </div>
            <div className="right-col">
              <input name="s-password" type='password' value={this.state.password} onChange={this.handlePasswordChange} />
            </div>
          </div>
          {/* <div className="input-box">
            <div className="left-col">
              <label htmlFor="s-location">State:</label>
            </div>
            <div className="right-col">
              <input name="s-location" type='location' value={this.state.location} onChange={this.handleLocationChange} />
            </div>
          </div> */}
          <input type='submit' value='Sign Up!' />
        </form>
      </div>
    )
  }
}

export default Signup;
