import React from 'react'
import EditContentForm from '../components/EditContentForm'

export default class EditContentContainer extends React.Component {

  state = {content: null}

  componentDidMount() {
    if (this.props.user) {
    this.fetchUserContent(this.props.user.user.id)
    }
  }

  handleEdit = (e, state) => {
    e.preventDefault()
    let content = {content: state}
    this.updateContent(content)
  }

  updateContent = content => {
    let videoID = this.props.props.location.pathname.split('/')[4]
    let token = localStorage.getItem("token")
    fetch(`http://localhost:3000/api/v1/content/${videoID}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(content.content)
    })
    .then(res => res.json())
    .then(json => console.log(json))
    // .then(json => console.lcsg(json))
  }

 fetchUserContent = (userId) => {
    let videoID = this.props.props.location.pathname.split('/')[4]
    fetch(`http://localhost:3000/api/v1/users/${userId}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(data => {
      let video = data.contents.filter(content => content.id === parseInt(videoID))
      if (!this.state.content) {
        this.setState({content: video})
      }
    })
  }

  render() {
    console.log(this.state.content)
    let EditContent =
      <React.Fragment>
        <EditContentForm handleEdit={this.handleEdit} content={this.state.content} />
      </React.Fragment>

    return(
      <div>
        <br/>
        {this.props.user ? (
          <div>
           {this.state.content ? (<div>{EditContent}</div>) : (this.fetchUserContent(this.props.user.user.id))}
          </div>
          ) : (this.props.getUser())}
      </div>
      )
  }
}
