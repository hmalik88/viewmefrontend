import React from 'react'

export default class VideoPlayer extends React.Component {

  render() {
    return(
      <div>
        <video width="720" height="480" src={this.props.src} controls controlsList="nodownload" autoPlay>
        </video>
      </div>
      )
  }
}
