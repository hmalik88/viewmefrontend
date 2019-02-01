import React from 'react'
import { Link } from 'react-router-dom'
export default class ContentCard extends React.Component {


  render() {
    return(
      <div>
        <Link to={`/watch/${this.props.content.id}`}>
        <video width="160px" height="90px">
          <source src={this.props.content.attributes.url} type="video/mp4" />
        </video>
        </Link>
      </div>
      )
  }
}
