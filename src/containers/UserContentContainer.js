import React from 'react'
import { Link } from 'react-router-dom'
import UserContentList from './UserContentList'

export default class UserContentContainer extends React.Component {

  state = {contents: null}

  componentDidMount() {
    console.log("usercontent mounted", this.props.user)
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
    console.log(this.state.contents)
    return(
      <div>
        <br/>
        {localStorage.token ? (
          <div>
            <UserContentList contents={this.state.contents} />
            <Link to="/dashboard/content/upload">Upload Content</Link>
          </div>
          ) : (null)}
      </div>
      )
  }
}
