import React from 'react'
import { Link } from 'react-router-dom'

export default class DashboardContainer extends React.Component {
  render() {
    return(
      <div>
        <br/>
        <Link to="/">Favorite Videos</Link><br/>
        <Link to="/dashboard/content">Your Content</Link>
      </div>
      )
  }
}
