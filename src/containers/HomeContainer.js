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
      <>
        {this.props.user ? (
          <Grid padded container style={{height: '100vh'}}>
            <Grid.Row stretched style={{height: '100%'}}>
              <Grid.Column textAlign='center' width={2}>
                <NavBar />
              </Grid.Column>
              <Grid.Column width={14}>
                <Grid.Row stretched style={{height: '3%'}}>
                 <h1 id="welcome">Welcome Home {this.props.user.user.first_name}!</h1>
                </Grid.Row>
                <Grid.Row stretched style={{height: '97%'}}>
                 {this.state.contents.length > 0 ? (
                 <ChannelsList contents={this.state.contents} />
                 ) : (this.fetchContent())}
                </Grid.Row>
              </Grid.Column>
            </Grid.Row>
          </Grid>
          ): (this.getUser())}
      </>
      )
  }
}
