import React from 'react'
import { Link } from 'react-router-dom'
import UserContentList from './UserContentList'

export default class UserContentContainer extends React.Component {

  render() {
    console.log(this.props.user)
    return(
      <div>
        <br/>
        {this.props.user ? (
          <div>
           <UserContentList contents={this.props.user.contents} />
           <Link to="/dashboard/content/upload">Upload Content</Link>
          </div>
          ) : (this.props.getUser())}
      </div>
      )
  }
}
