import React from 'react'
import LoginForm from '../components/LoginForm'

export default class LoginPageContainer extends React.Component {

  render() {
    return(
      <div>
      <h1>Log In!</h1>
      <LoginForm handleLogin={this.props.handleLogin} />
      </div>
      )
  }
}
