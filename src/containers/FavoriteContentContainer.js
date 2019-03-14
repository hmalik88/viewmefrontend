import React from 'react'
import FavoriteContentList from './FavoriteContentList'
import { Grid } from 'semantic-ui-react'
import NavBar from './NavBar'

export default class FavoriteContentContainer extends React.Component {

  getUser = () => {
    this.props.getUser()
  }

  componentDidMount() {
      this.props.getUser()
  }

  render() {
    console.log(this.props.user)
    return(
      <>
      {this.props.user ? (
        <Grid padded container style={{height: '100vh', width: '12.5vh'}}>
          <Grid.Row stretched style={{height: '100%'}}>
            <Grid.Column textAlign='center' width={2}>
              <NavBar />
            </Grid.Column>
            <Grid.Column width={14}>
              <Grid.Row stretched style={{height: '10%'}}>
             <h1 id="welcome">Your Favorites</h1>
              </Grid.Row>
              <Grid.Row stretched style={{height: '90%'}}>
               <FavoriteContentList favorites={this.props.user.favorites} email={this.props.user.user.e_mail} />
              </Grid.Row>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        ) : (this.getUser())}
      </>
      )
  }
}
