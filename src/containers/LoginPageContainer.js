import React from 'react'
import LoginForm from '../components/LoginForm'
import { Grid } from 'semantic-ui-react'
import NavBar from './NavBar'

export default class LoginPageContainer extends React.Component {

  render() {
    return(
      <Grid padded container style={{height: '100vh'}}>
        <Grid.Row stretched style={{height: '100%'}}>
          <Grid.Column textAlign='center' width={2}>
            <NavBar />
          </Grid.Column>
          <Grid.Column width={4}></Grid.Column>
          <Grid.Column textAlign='center' width={4}>
            <Grid.Row style={{height: '25%'}}>
              <h1>Log In!</h1>
            </Grid.Row>
            <Grid.Row style={{height: '75%'}}>
             <LoginForm handleLogin={this.props.handleLogin} />
            </Grid.Row>
          </Grid.Column>
          <Grid.Column width={4}></Grid.Column>
          <Grid.Column width={2}></Grid.Column>
        </Grid.Row>
      </Grid>
      )
  }
}
