import React from 'react'

export default class LoginForm extends React.Component {

  state = {
    e_mail: '',
    password: ''
  }

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={e => this.props.handleLogin(e, this.state)}>
          E-mail: <input onChange={this.handleChange} id="e_mail" type="text" value={this.state.e_mail} /><br/>
          Password: <input onChange={this.handleChange} id="password" type="password" value={this.state.password} /><br/>
          <input type="submit" value="Log In" />
        </form>
      </div>
      )
  }
}
