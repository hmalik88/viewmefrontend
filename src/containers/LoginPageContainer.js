import React from 'react'
import LoginForm from '../components/LoginForm'
import { Grid } from 'semantic-ui-react'
import NavBar from './NavBar'
import '../scss/Login.scss'

export default class LoginPageContainer extends React.Component {

  render() {
    return(
      <Grid padded container style={{height: '100vh'}}>
        <Grid.Row stretched style={{height: '100%'}}>
          <Grid.Column textAlign='center' width={2}>
            <NavBar />
          </Grid.Column>
          <Grid.Column width={4}></Grid.Column>
          <Grid.Column textAlign='left' width={6}>
            <Grid.Row style={{height: '20%'}}>
              <h1 className="login-headertxt">Log In</h1>
            </Grid.Row>
            <Grid.Row style={{height: '80%'}}>
              <div><LoginForm handleLogin={this.props.handleLogin} /></div>
            </Grid.Row>
          </Grid.Column>
          <Grid.Column width={4}></Grid.Column>
        </Grid.Row>
      </Grid>
      )
  }
}
