import React from 'react'
import ChannelsList from './ChannelsList'

export default class HomeContainer extends React.Component {
  state = {contents: []}

  componentDidMount() {
    if (this.props.user) {
    this.fetchContent()
    }
  }

  fetchContent = () => {
    fetch('http://localhost:3000/api/v1/content', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(json => this.setState({contents: json.data}))
  }

  render() {
    console.log(this.props.user)
    console.log(this.state.contents)
    return(
      <div>
        {this.props.user ? (
          <div>
          {this.state.contents.length > 0 ? (
            <div>
              <h1>Welcome Home {this.props.user.first_name}!</h1>
              <ChannelsList contents={this.state.contents} />
            </div>
            ) : (this.fetchContent())}
          </div>
          ) : (this.props.getUser()) }
      </div>
      )
  }
}
