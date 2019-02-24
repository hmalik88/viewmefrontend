import React from 'react'
import FavoriteContentList from './FavoriteContentList'

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
      <div>
      {this.props.user ? (
        <div>
        <h1>Your Favorites</h1>
        <FavoriteContentList favorites={this.props.user.favorites} />
        </div>
        ) : (this.getUser())}
      </div>
      )
  }
}
