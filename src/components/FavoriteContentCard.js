import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Icon } from 'semantic-ui-react'
import '../scss/FavoriteContentCard.scss'

export default class FavoriteContentCard extends React.Component {

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
    icon.classList.add("hide-icon");
    e.target.currentTime = 5.0;
    e.target.play();
  }

  handlePause = e => {
    let icon = e.target.nextElementSibling;
    icon.classList.remove("hide-icon");
    e.target.currentTime = 5.0
    e.target.pause()
  }

 render() {
    return(
      <Card fluid>
        <Card.Content>
        <Link to={`/watch/${this.props.favorite.content_id}`}>
        <video onTimeUpdate={this.handleUpdate} onMouseOver={this.handlePlay} onMouseLeave={this.handlePause} muted width="192px" height="108px">
          <source src={this.props.favorite.url} type="video/mp4" />
        </video>
        <Icon size='big' style={{opacity: 0.7}} className='play-icon' name='play' color='red' />
        </Link>
        <Card.Header>{this.props.favorite.name}</Card.Header>
        <Card.Meta>Uploaded by: {this.props.email}</Card.Meta>
        </Card.Content>
      </Card>
      )
  }
}
