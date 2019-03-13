import React from 'react'
import { Link } from 'react-router-dom'
import NavBar from './NavBar'
import { Grid } from 'semantic-ui-react'

export default class DashboardContainer extends React.Component {

  getUser = () => {
    this.props.getUser()
  }

  componentDidMount() {
    if (!this.props.user === null) {
      this.props.getUser()
    }
  }

  render() {
    console.log("DASH", this.props.user )
    return(
      <Grid padded container style={{height: '100vh'}}>
        <Grid.Row stretched style={{height: '100%'}}>
          <Grid.Column textAlign='center' width={2}>
            <NavBar />
          </Grid.Column>
          <Grid.Column width={5}></Grid.Column>
          <Grid.Column textAlign='center' width={4}>
            <Grid.Row style={{height: '25%'}}>
              <h1>Dashboard</h1>
            </Grid.Row>
            <Grid.Row style={{height: '75%'}}>
             <Link to="/favorites"><h3>Favorite Videos</h3></Link><br/>
             <Link to="/dashboard/content"><h3>Your Content</h3></Link>
            </Grid.Row>
          </Grid.Column>
          <Grid.Column width={5}></Grid.Column>
        </Grid.Row>
      </Grid>
      )
  }
}
