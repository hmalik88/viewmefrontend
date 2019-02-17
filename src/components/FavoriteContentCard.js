import React from 'react'
import { Link } from 'react-router-dom'

export default class FavoriteContentCard extends React.Component {

 render() {
    return(
      <div>
        <Link to={`/watch/${this.props.favorite.content_id}`}>
        <video width="160px" height="90px">
          <source src={this.props.favorite.url} type="video/mp4" />
        </video>
        </Link>
      </div>
      )
  }
}
