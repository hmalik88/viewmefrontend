import React from 'react'
import { Link } from 'react-router-dom'
import UserContentList from './UserContentList'
import NavBar from './NavBar'
import { Grid } from 'semantic-ui-react'

export default class UserContentContainer extends React.Component {

  getUser = () => {
    this.props.getUser();
  }

  render() {
    console.log(this.props.user)
    return(
      <div>
        {this.props.user ? (
           <Grid padded doubling container style={{height: '100vh'}}>
              <Grid.Row stretched style={{height: '100%'}}>
                <Grid.Column textAlign='center' width={2}>
                  <NavBar />
                </Grid.Column>
                <Grid.Column width={2}></Grid.Column>
                <Grid.Column textAlign='center' width={12}>
                  <Grid.Row style={{height: '10%'}}>
                    <h1>Dashboard</h1>
                  </Grid.Row>
                  <Grid.Row stretched style={{height: '40%'}}>
                    <Link to="/dashboard/content/upload">Upload Content</Link><br/><br/>
                    <UserContentList contents={this.props.user.contents} />
                  </Grid.Row>
                  <Grid.Row stretched style={{height: '50%'}}></Grid.Row>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          ) : (this.getUser())}
      </div>
      )
  }
}
