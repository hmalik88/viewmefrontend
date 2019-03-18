import React from 'react'
import VideoPlayer from '../components/VideoPlayer'
import { Grid, Card, Search } from 'semantic-ui-react'
import NavBar from './NavBar'
import ContentCard from '../components/ContentCard'
import '../scss/Search.scss'

export default class VideoContainer extends React.Component {
  constructor(props) {
    super(props)
    window.scrollTo({ top: 0, behavior: 'smooth' });
    let contentID = this.props.props.location.pathname.split('/')[2]
    this.state = {
      contentID: contentID,
      url: '',
      name: '',
      uploader: '',
      favorite: '',
      favoriteID: '',
      user: this.props.user,
      contents: [],
      results: [],
      value: '',
      sideBarContent: []
    }
  }

  checkIfFavorite = (id) => {
    if (this.props.user) {
      let favorite = this.props.user.favorites.filter(favorite => {
        return favorite.content_id === parseInt(id)
      })
      if (favorite.length === 1) {
        return true;
      } else {
        return false;
      }
    }
  }

  fetchContent(id) {
    fetch(`http://localhost:3000/api/v1/content/${id}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(json => {
      if (json.content !== null) {
      this.setState({url: json.content.url, name: json.content.name, uploader: json.content.user.e_mail})
      }
    })
  }

  deleteFavorite = e => {
    let contentID = this.props.props.location.pathname.split('/')[2]
    let favorite = this.props.user.favorites.filter(favorite => {
      return favorite.content_id === parseInt(contentID)
    })[0]
    let data = {
      favorite: {
        favorite_id: favorite.id
      }
    }
    fetch(`http://localhost:3000/api/v1/favorites/${favorite.id}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(json => {
      this.props.getUser()
    })
  }

  addFavorite = e => {
    let data = {
      favorite: {
      content_id: this.state.contentID,
      user_id: this.props.user.user.id,
      name: this.state.name
      }
    }
    fetch('http://localhost:3000/api/v1/favorites', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(json => {
      this.props.getUser()
    })

  }

  fetchSidebarContent = () => {
    fetch('http://localhost:3000/api/v1/content', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(json => {
      let videosToPick = this.randomIntsFromRange(0, json.length-1, json)
      let content = []
      videosToPick.forEach(video => content.push(json[video]))
      this.setState({contents: json})
      this.setState({sideBarContent: content})
      console.log(this.state.sideBarContent)
    })
  }

  randomIntsFromRange = (min, max, json) => {
    let randomInts = []
    let num;
    while (randomInts.length < 6) {
      num = Math.floor(Math.random() * (max-min+1)+min);
      if (!randomInts.includes(num) && json[num].name !== this.state.name) {
        randomInts.push(num)
      }
    }
    return randomInts
  }


  componentDidMount() {
    let contentID = this.props.props.location.pathname.split('/')[2]
    if (this.props.user === null) {
      this.props.getUser()
      .then(this.fetchContent(contentID))
      .then(this.fetchSidebarContent())
    }
  }

  componentDidUpdate(prevProps, prevState) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    let contentID = this.props.props.location.pathname.split('/')[2]
    if (contentID !== prevState.contentID) {
      this.props.getUser()
      .then(this.fetchContent(contentID))
      .then(this.fetchSidebarContent())
      .then(this.setState({contentID: contentID}))
    }
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
    this.props.props.history.push(`/watch/${data.result.id}`)
  }

  render() {
    console.log(this.state.favorite)
    let contentID = this.props.props.location.pathname.split('/')[2]
    let contentArr = [];
    if (this.state.sideBarContent.length > 0) {
      this.state.sideBarContent.forEach(content => {
        contentArr.push(<ContentCard key={content.id} content={content} />)
      })
    } else {
        this.fetchSidebarContent()
    }
    const resRender = ({name, channel, url}) => (
    <span id="name">
      {name} - {channel}
    </span>
    );
    const {value, results } = this.state
    return(
      <Grid padded container style={{height: '100vh', width: '100vw'}}>
        <Grid.Row stretched style={{height: '100%'}}>
          <Grid.Column textAlign='center' width={2}>
            <NavBar />
          </Grid.Column>
          <Grid.Column textAlign='left' width={10}>
            <Grid.Row stretched style={{height: '6%'}}>
              <h1 id='view-me-watch'>View Me</h1>
              <Search
                results={results}
                resultRenderer={resRender}
                searchFullText={true}
                onSearchChange={this.handleSearchChange}
                onResultSelect={this.handleSelect}
                value={value}
                placeholder='Search...'
                className='video-search'
                size='large' />
            </Grid.Row>
            <Grid.Row stretched style={{height: '94%'}}>
              {this.state.url ? (
                <>
                  <VideoPlayer src={this.state.url} />
                  <h2>{this.state.name}</h2>
                  <h4>Uploaded by: {this.state.uploader}</h4>
                  {this.checkIfFavorite(this.props.props.location.pathname.split('/')[2]) ? (<button onClick={this.deleteFavorite}>Unfavorite</button>) : (<button onClick={this.addFavorite}>Favorite</button>) }
                </>) : (
                this.fetchContent(contentID)
              )}
            </Grid.Row>
          </Grid.Column>
          <Grid.Column></Grid.Column>
          <Grid.Column stretched textAlign='left' width={3}>
            <Grid.Row stretched style={{height: '4%'}}>
            </Grid.Row>
            <Grid.Row stretched style={{height: '96%'}}>
              <h3>Next video up:</h3>
              {this.state.sideBarContent.length > 0 ? (
                <Card.Group fluid itemsPerRow={1}>
                  {contentArr}
                </Card.Group>
                ) : (this.fetchSidebarContent())}
            </Grid.Row>
          </Grid.Column>
        </Grid.Row>
      </Grid>

      )
  }
}
