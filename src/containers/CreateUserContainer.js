import React from 'react'
import CreateUserForm from '../components/CreateUserForm'

export default class CreateUserContainer extends React.Component {

  handleSubmit = (e, user) => {
    e.preventDefault()
    let new_user = {
      user: user
    }
    fetch('http://localhost:3000/api/v1/users', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(new_user)
    })
    .then(this.props.props.history.push("/login"))
  }


  render() {
    console.log("CREATE USER MOUNTED")
    return(
      <div>
        <h1>Create Your Account</h1>
        <CreateUserForm handleSubmit={this.handleSubmit} />
      </div>
      )
  }
}
