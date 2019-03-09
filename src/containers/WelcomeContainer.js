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
          <Grid.Column textAlign='center' width={4}>
            <Grid.Row style={{height: '25%'}}>
              <h1>ViewMe</h1>
            </Grid.Row>
            <Grid.Row style={{height: '20%'}}>
              <p>Welcome to ViewMe! ViewMe is a content streaming service providing video content for users. You can upload content directly to the cloud, have access to that content and search for content!
              </p>
            </Grid.Row>
            <Grid.Row style={{height: '20%'}}>
              <Grid.Column width={2}>
                {localStorage.token !== undefined ? (null) : (<Link to="/login"><Button>Login</Button></Link>)} <Link to="/signup"><Button>Sign Up</Button></Link>
              </Grid.Column>
              <Grid.Column width={2}>

              </Grid.Column>
            </Grid.Row>
            <Grid.Row style={{height: '35%'}}></Grid.Row>
          </Grid.Column>
          <Grid.Column width={4}></Grid.Column>
          <Grid.Column width={2}></Grid.Column>
        </Grid.Row>
      </Grid>
      )
  }
}
