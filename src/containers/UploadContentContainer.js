import React from 'react'
import UploadForm from '../components/UploadForm'

export default class UploadContentContainer extends React.Component {


  handleUpload = (e, state)  => {
    e.preventDefault()
    let name = state.name
    let channel = state.channel
    let clip = e.target[2].files[0]
    let content = {
      content: {
        name: name,
        channel: channel,
        clip: clip
      }
    }
     fetch('http://localhost:3000/api/v1/content', {
      method: 'POST',
      body: content
    })
    .then(res => res.json())
    .then(console.log)
  }

  render() {
    return(
      <div>
      <UploadForm handleUpload={this.handleUpload} />
      </div>
      )
  }
}
