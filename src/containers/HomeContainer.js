import React from 'react'
import ChannelsList from './ChannelsList'
import { Grid } from 'semantic-ui-react'
import NavBar from './NavBar'

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
    .then(json => {
      this.setState({contents: json})
  })
  }

  getUser = () => {
    this.props.getUser()
  }

  render() {
    console.log(this.props.user)
    console.log(this.state.contents)
    return(
      <div>
        {this.props.user ? (
          <div>
          {this.state.contents.length > 0 ? (
            <>
            <Grid padded container style={{height: '100vh', width: '12.5vh'}}>
              <Grid.Row stretched style={{height: '100%'}}>
                <Grid.Column textAlign='center' width={2}>
                  <NavBar />
                </Grid.Column>
                <Grid.Column width={14}>
                 <h1 id="welcome">Welcome Home {this.props.user.user.first_name}!</h1>
                 <ChannelsList contents={this.state.contents} />
                </Grid.Column>
              </Grid.Row>
            </Grid>
              </>
            ) : (this.fetchContent())}
          </div>
          ): (this.getUser())}
      </div>
      )
  }
}
