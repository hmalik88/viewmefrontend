import React from 'react'
import CreateUserForm from '../components/CreateUserForm'
import { Grid } from 'semantic-ui-react'
import NavBar from './NavBar'

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
    return(
     <Grid padded container style={{height: '100vh'}}>
      <Grid.Row stretched style={{height: '100%'}}>
        <Grid.Column textAlign='center' width={2}>
          <NavBar />
        </Grid.Column>
        <Grid.Column width={4}></Grid.Column>
        <Grid.Column textAlign='center' width={6}>
          <Grid.Row style={{height: '10%'}}>
            <h1>Create An Account</h1>
          </Grid.Row>
          <Grid.Row style={{height: '90%'}}>
            <CreateUserForm handleSubmit={this.handleSubmit} />
          </Grid.Row>
        </Grid.Column>
        <Grid.Column width={4}></Grid.Column>
      </Grid.Row>
     </Grid>
      )
  }
}
