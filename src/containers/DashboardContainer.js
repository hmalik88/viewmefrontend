import React from 'react'
import { Link, Redirect } from 'react-router-dom'

export default class DashboardContainer extends React.Component {


  render() {
    console.log("DASH", this.props.user )
    return(
      <div>
        <br/>
        {localStorage.token ? (<div>
            <Link to="/">Favorite Videos</Link><br/>
            <Link to="/dashboard/content">Your Content</Link>
          </div>) : (<Redirect to="/login" />)}

      </div>
      )
  }
}
