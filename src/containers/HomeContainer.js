import React from 'react'
import ChannelsList from './ChannelsList'
import { Grid, Search } from 'semantic-ui-react'
import NavBar from './NavBar'
import '../scss/Search.scss'

export default class HomeContainer extends React.Component {
  state = {contents: [], value: '', results: []}

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

  handleSearchChange = (e, {value}) => {
    this.setState({value: value})
    let results = this.state.contents.filter(content => {
      return content.name.split(' ').includes(value) || content.channel === value
    })
    this.setState({results: results})
  }

  handleSelect = (e, data) => {
    this.setState({value: ''})
    this.props.history.push(`/watch/${data.result.id}`)
  }

  render() {
    console.log(this.props.user)
    console.log(this.state.contents)
    const resRender = ({name, channel, url}) => (
      <span id="name">
        {name} - {channel}
      </span>
      );
    const { contents, value, results } = this.state
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
                 <Search
                  results={results}
                  resultRenderer={resRender}
                  searchFullText={true}
                  onSearchChange={this.handleSearchChange}
                  onResultSelect={this.handleSelect}
                  value={value}
                  placeholder='Search...'
                  size='large'
                  className='video-search-home' />
                </Grid.Row>
                <Grid.Row stretched style={{height: '97%'}}>
                 {contents.length > 0 ? (
                 <ChannelsList contents={contents} />
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
