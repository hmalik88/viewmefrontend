import React from 'react'
import { Link } from 'react-router-dom'

export default class UserContentContainer extends React.Component {
  render() {
    return(
      <div>
        <br/>
        <Link to="/dashboard/content/upload">Upload Content</Link>
      </div>
      )
  }
}
