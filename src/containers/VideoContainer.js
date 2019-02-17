import React from 'react'
import VideoPlayer from '../components/VideoPlayer'

export default class VideoContainer extends React.Component {
  constructor(props) {
    super(props)
    let contentID = this.props.props.location.pathname.split('/')[2]
    this.state = {
      contentID: contentID,
      url: ''
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
      this.setState({url: json.content.url})
      }
    })
  }

  render() {
    return(
      <div>
      {this.props.user ? (<div>
        {this.state.url ? (<div><VideoPlayer src={this.state.url} /></div>) : (this.fetchContent(this.state.contentID))}
        </div>) : (this.props.getUser())}

      <br/>
      <button>Favorite</button>
      </div>
      )
  }

}
