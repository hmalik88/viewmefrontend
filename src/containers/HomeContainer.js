import React from 'react'
import { Redirect } from 'react-router-dom'

export default class HomeContainer extends React.Component {
  render() {
    return(
      <div>
        {this.props.user ? (<h1>Welcome Home</h1>) : <Redirect to="/login" /> }
      </div>
      )
  }
}
