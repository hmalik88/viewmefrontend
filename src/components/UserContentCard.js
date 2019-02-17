import React from 'react'
import { Link } from 'react-router-dom'


export default class UserContentCard extends React.Component {

  handleDelete = e => {
    let li = e.target.parentElement.parentElement.parentElement
    let videoID = this.props.content.id
    let token = localStorage.getItem("token")
    fetch(`http://localhost:3000/api/v1/content/${videoID}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    })
    .then(res => res.json())
    .then(json => {
      li.remove()
    })
  }

  render() {
    let videoID = this.props.content.id
    let newTo = { pathname: `/dashboard/content/edit/${videoID}`}
    return(
      <div>
        <p>{this.props.content.name} <Link to={newTo} style={{textDecoration: 'none', color: 'black'}}><button>Edit</button></Link> <button onClick={this.handleDelete}>Delete</button></p>
      </div>
      )
  }
}


