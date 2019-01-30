import React from 'react'
import { Link } from 'react-router-dom'

export default class NavBar extends React.Component {
  render() {
    return(
      <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
         <a className="navbar-brand" href="/">ViewMe</a>
        </div>
      <ul className="nav navbar-nav">
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
        {localStorage.token !== undefined ? (
        <li><Link to="/"><span onClick={this.props.logOut}>Log Out</span></Link></li>) : (
        <li><Link to="/login">Log In</Link></li>
        )}
     </ul>
      </div>
</nav>
      )
  }
}
