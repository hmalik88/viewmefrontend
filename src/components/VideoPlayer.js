import React from 'react'

export default class VideoPlayer extends React.Component {
  render() {
    return(
      <div>
        <video width="720" height="480" controls controlsList="nodownload" autoPlay>
          <source src={this.props.src} type="video/mp4" />
          Your browser does not support the video tag
        </video>
      </div>
      )
  }
}
