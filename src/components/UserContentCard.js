import React from 'react'
import { Link } from 'react-router-dom'

export default class UserContentCard extends React.Component {
  render() {
    return(
      <div>
        <p>{this.props.content.name} <Link to="/"><button>Edit</button></Link> <button>Delete</button></p>
      </div>
      )
  }
}
