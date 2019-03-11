import React from 'react'
import { Link } from 'react-router-dom'
import { Button, List } from 'semantic-ui-react'


export default class UserContentCard extends React.Component {

  handleDelete = e => {
    let videoID = this.props.content.id
    let item = document.getElementById(videoID)
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
      item.remove()
    })
  }

  render() {
    let videoID = this.props.content.id
    let newTo = { pathname: `/dashboard/content/edit/${videoID}`}
    return(
      <List.Item id={videoID}>
        <List.Content>
         <List.Header>{this.props.content.name}</List.Header>
         <Link to={newTo} style={{textDecoration: 'none', color: 'black'}}><Button size='tiny'>Edit</Button></Link><Button size='tiny' onClick={this.handleDelete}>Delete</Button>
        </List.Content>
      </List.Item>
      )
  }
}


