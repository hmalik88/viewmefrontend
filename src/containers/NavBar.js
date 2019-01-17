import React from 'react'
import { Link } from 'react-router-dom'

export default class NavBar extends React.Component {
  render() {
    return(
      <div>
      <Link to="/login">Log In</Link><br/>
      <Link to="/home">Home</Link><br/>
      <Link to="/dashboard">Dashboard</Link><br/>
      <Link to="/"><span onClick={this.props.logOut}>Log Out</span></Link>
      </div>
      )
  }
}
