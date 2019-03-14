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
      <>
        {this.props.user ? (
           <Grid padded doubling container style={{height: '100vh'}}>
              <Grid.Row stretched style={{height: '100%'}}>
                <Grid.Column textAlign='center' width={2}>
                  <NavBar />
                </Grid.Column>
                <Grid.Column textAlign='center' width={14}>
                  <Grid.Row style={{height: '2.5%'}}>
                    <h1>Your Content</h1>
                  </Grid.Row>
                  <Grid.Row stretched style={{height: '97.5%'}}>
                    <Link to="/dashboard/content/upload"><h3>Upload Content</h3></Link><br/>
                    <UserContentList contents={this.props.user.contents} user={this.props.user.user.e_mail} />
                  </Grid.Row>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          ) : (this.getUser())}
      </>
      )
  }
}
