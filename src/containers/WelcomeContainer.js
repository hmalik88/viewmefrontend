import React from 'react'
import { Link } from 'react-router-dom'
export default class WelcomeContainer extends React.Component {
  render() {
    return(
      <div>
        <p>Welcome to ViewMe! ViewMe is a content streaming service providing video content for users. You can purchase content directly from users and have access to that content.</p>
        <Link to="/login"><button>Login</button></Link>
       <Link to="/signup"><button>Sign Up</button></Link>
      </div>
      )
  }
}
