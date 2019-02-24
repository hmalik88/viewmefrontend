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
      uploader: '',
      favorite: '',
      favoriteID: '',
      user: this.props.user
    }
  }

  checkIfFavorite = (id) => {
    if (this.props.user) {
      let favorite = this.props.user.favorites.filter(favorite => {
        return favorite.content_id === parseInt(id)
      })
      if (favorite.length > 1) {
        return true;
      } else {
        return false;
      }
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

  deleteFavorite = () => {
    let data = {
      favorite: {
        favorite_id: this.state.favoriteID
      }
    }
    let favID = this.state.favoriteID;
    fetch(`http://localhost:3000/api/v1/favorites/${favID}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(json => {
      this.setState({favorite: false})
    })
  }

  addFavorite = () => {
    let data = {
      favorite: {
      content_id: this.state.contentID,
      user_id: this.props.user.user.id,
      name: this.state.name
      }
    }
    fetch('http://localhost:3000/api/v1/favorites', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(json => {
      this.setState({favorite: true, favID: json.favorite.id})
    })
  }

  componentDidMount() {
    let contentID = this.props.props.location.pathname.split('/')[2]
    if (this.props.user === null) {
      this.props.getUser()
      .then(this.fetchContent(contentID))
    }
  }

  render() {
    console.log("Inside Video Component")
    return(
      <div>
        {this.state.url ? (
          <>
          <VideoPlayer src={this.state.url} />
          <br/>
          <h3>{this.state.name}</h3>
          <h4>Uploaded by: {this.state.uploader}</h4>
          {this.checkIfFavorite(this.props.props.location.pathname.split('/')[2]) ? (<button onClick={this.deleteFavorite}>Unfavorite</button>) : (<button onClick={this.addFavorite}>Favorite</button>) }
          </>) : (
            this.fetchContent(this.state.contentID)
          )}
      </div>
      )
  }
}
