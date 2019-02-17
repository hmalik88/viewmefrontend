import React from 'react'
import { Link } from 'react-router-dom'

export default class DashboardContainer extends React.Component {

  render() {
    console.log("DASH", this.props.user )
    let dashboardContent =
            <React.Fragment>
              <Link to="/favorites">Favorite Videos</Link><br/>
              <Link to="/dashboard/content">Your Content</Link>
            </React.Fragment>
    return(
      <div>
        <br/>
        {this.props.user ? (<div>{dashboardContent}</div>) : (this.props.getUser())}
      </div>
      )
  }
}
