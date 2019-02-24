import React from 'react'
import UploadForm from '../components/UploadForm'

export default class UploadContentContainer extends React.Component {

  state = {status: ''}

  handleUpload = (e, state)  => {
    e.preventDefault()
    const data = new FormData();
    let token = localStorage.getItem("token")
    data.append("name", state.name);
    data.append("channel", state.channel);
    data.append("clip", e.target[2].files[0]);
    data.append("user_id", this.props.user.user.id);
     fetch('http://localhost:3000/api/v1/content', {
      headers: {
        Authorization: `Bearer ${token}`
      },
      method: 'POST',
      body: data
    })
    .then(res => {
      if (res.ok) {
        return res.json()
      } else {
        throw new Error('Upload didn\'t go through!')
      }
    })
    .then(json => {
      this.setState({status: json.name + ' was uploaded successfully!'})
    })
    .catch(error => this.setState({status: error[0]}))
  }

  getUser = () => {
    this.props.getUser()
  }

  render() {
    return(
      <div>
        {this.props.user ? (<UploadForm handleUpload={this.handleUpload} />) : (this.getUser()) }
        {this.state.status ? (<p>{this.state.status}</p>) : (null)}
      </div>
      )
  }
}
