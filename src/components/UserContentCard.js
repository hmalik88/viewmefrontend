import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Card, Icon } from 'semantic-ui-react'
import '../scss/UserContentCard.scss'


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


  handleUpdate = e => {
    let currentTime = e.target.currentTime;
    if (currentTime > 10.0) {
      this.handlePlay(e)
    }
  }

  handlePlay = e => {
      // for when it becomes socially acceptable to suprise people with music =D
      // if (this.props.content.channel === 'Music') {
      //   e.target.muted = false;
      // }
      let icon = e.target.nextElementSibling;
      icon.classList.add("user-content-hide-icon");
      e.target.currentTime = 5.0;
      e.target.play();
  }

  handlePause = e => {
    let icon = e.target.nextElementSibling;
    icon.classList.remove("user-content-hide-icon");
    e.target.currentTime = 5.0
    e.target.pause()
  }

  render() {
    let videoID = this.props.content.id
    let newTo = { pathname: `/dashboard/content/edit/${videoID}`}
    return(
      <Card fluid id={videoID}>
       <Card.Content>
        <video onTimeUpdate={this.handleUpdate} onMouseOver={this.handlePlay} onMouseLeave={this.handlePause} muted width="192px" height="108px">
        <source src={this.props.content.url} type="video/mp4" />
        </video>
        <Icon size='big' style={{opacity: 0.7}} className='user-content-play-icon' name='play' color='red' />
        <Card.Header>{this.props.content.name}</Card.Header>
        <Card.Meta>Uploaded by: {this.props.user}</Card.Meta>
       </Card.Content>
       <Card.Content extra>
        <Button.Group>
          <Link to={newTo} style={{textDecoration: 'none', color: 'black'}}><Button>Edit</Button></Link>
          <Button.Or />
          <Button negative onClick={this.handleDelete}>Delete</Button>
        </Button.Group>
       </Card.Content>
      </Card>
      )
  }
}


