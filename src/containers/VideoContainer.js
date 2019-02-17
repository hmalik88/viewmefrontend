import React from 'react'
import VideoPlayer from '../components/VideoPlayer'

export default class VideoContainer extends React.Component {
  constructor(props) {
    super(props)
    let contentID = this.props.props.location.pathname.split('/')[2]
    this.state = {
      contentID: contentID,
      url: '',
      name: '',
      uploader: ''
    }
  }

  componentDidMount() {
    if (this.state.contentID) {
      this.fetchContent(this.state.contentID)
    }
  }

  fetchContent(id) {
    fetch(`http://localhost:3000/api/v1/content/${id}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(json => {
      if (json.content !== null) {
      this.setState({url: json.content.url, name: json.content.name, uploader: json.content.user.e_mail})
      }
    })
  }

  addFavorite = () => {
    let data = {
      content_id: this.state.contentID,
      user_id: this.props.user.user.id,
      name: this.state.name
    }
  }

  render() {
    return(
      <div>
      {this.props.user ? (<div>
        {this.state.url ? (
          <>
          <VideoPlayer src={this.state.url} />
          <br/>
          <h3>{this.state.name}</h3>
          <h4>Uploaded by: {this.state.uploader}</h4>
          <button onClick={this.addFavorite}>Favorite</button>
          </>) : (this.fetchContent(this.state.contentID))}
        </div>) : (this.props.getUser())}
      </div>
      )
  }

}
