import React from 'react'
import { Link } from 'react-router-dom'
import UserContentList from './UserContentList'

export default class UserContentContainer extends React.Component {

  state = {contents: null}

  componentDidMount() {
    if (this.props.user) {
    this.fetchUserContent(this.props.user.id)
    }
  }

  fetchUserContent = (userId) => {

    fetch(`http://localhost:3000/api/v1/users/${userId}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(data => this.setState({contents: data.contents}))
  }

  render() {
    let UserContent =
            <React.Fragment>
              <UserContentList contents={this.state.contents} />
              <Link to="/dashboard/content/upload">Upload Content</Link>
            </React.Fragment>
    console.log(this.props.user)
    console.log(this.state.contents)
    return(
      <div>
        <br/>
        {this.props.user ? (
          <div>
           {this.state.contents ? (<div>{UserContent}</div>) : (this.fetchUserContent(this.props.user.id))}
          </div>
          ) : (this.props.getUser())}
      </div>
      )
  }
}
