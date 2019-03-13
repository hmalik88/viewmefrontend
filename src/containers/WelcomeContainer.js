import React from 'react'
import { Link } from 'react-router-dom'
import { Grid, Button } from 'semantic-ui-react'
import '../scss/Welcome.scss'
import NavBar from './NavBar'
export default class WelcomeContainer extends React.Component {
  render() {
    return(
      <Grid padded container style={{height: '100vh'}}>
        <Grid.Row stretched style={{height: '100%'}}>
          <Grid.Column textAlign='center' width={2}>
            <NavBar />
          </Grid.Column>
          <Grid.Column width={4}></Grid.Column>
          <Grid.Column textAlign='center' width={6}>
            <Grid.Row style={{height: '20%'}}>
              <h1>ViewMe</h1>
            </Grid.Row>
            <Grid.Row style={{height: '20%'}}>
              <p>Welcome to ViewMe! ViewMe is a content streaming service providing video content for users. You can upload content directly to the cloud, have access to that content and search for content!
              </p>
            </Grid.Row>
            <Grid.Row style={{height: '60%'}}>
              {localStorage.token !== undefined ? (null) : (<Link to="/login"><Button>Login</Button></Link>)} <Link to="/signup"><Button>Sign Up</Button></Link>
            </Grid.Row>
          </Grid.Column>
          <Grid.Column width={4}></Grid.Column>
        </Grid.Row>
      </Grid>
      )
  }
}
