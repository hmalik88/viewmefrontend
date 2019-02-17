import React from 'react'
import FavoriteContentList from './FavoriteContentList'

export default class FavoriteContentContainer extends React.Component {

  render() {
    console.log(this.props.user)
    return(
      <div>
      {this.props.user ? (
        <div>
        <h1>Your Favorites</h1>
        <FavoriteContentList favorites={this.props.user.favorites} />
        </div>
        ) : (this.props.getUser())}
      </div>
      )
  }
}
