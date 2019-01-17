import React from 'react'

export default class UploadForm extends React.Component {

  state = {name: '', channel: '', file: null}

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  render() {
    return(
      <div>
        <br/>
        <form onSubmit={e => this.props.handleUpload(e, this.state)}>
          Name: <input onChange={this.handleChange} id="name" type="text" name="name" value={this.state.name} /><br/>
          Channel: <input onChange={this.handleChange} id="channel" type="text" name="channel" value={this.state.channel} /><br/>
          Video: <input type="file" name="clip" accept="video/*" /><br/>
          <input type="submit" value="upload"/>
        </form>
      </div>
      )
  }
}
