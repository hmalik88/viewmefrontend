import React from 'react'
import EditContentForm from '../components/EditContentForm'
import NavBar from './NavBar'
import { Grid } from 'semantic-ui-react'
import '../scss/EditContent.scss'

export default class EditContentContainer extends React.Component {

  state = {content: null}

  componentDidMount() {
    if (!this.props.user) {
      this.props.getUser()
    }
    if (this.props.user) {
    this.fetchUserContent(this.props.user.user.id)
    }
  }

  handleEdit = (e, state) => {
    e.preventDefault()
    e.persist()
    let classList = [...e.target[2].classList]
    if (classList.includes('negative')) {
      e.target[2].classList.remove('negative')
    } else if (classList.includes('positive')) {
      e.target[2].classList.remove('positive')
    }
    e.target.classList.add('loading')
    let content = {content: state}
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
    .then(res => {
      if (res.ok) {
        console.log(res.ok)
        return res.json()
      } else {
        throw new Error('Edit didn\'t go through!')
      }
    })
    .then(json => {
      e.target.classList.remove('loading')
      e.target[2].classList.add('positive')
    })
    .catch(error => {
      e.target.classList.remove('loading')
      e.target[2].classList.add('negative')
    })
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

  getUser = () => {
    this.props.getUser();
  }

  render() {
    console.log(this.state.content)
    let EditContent =
      <React.Fragment>
        <EditContentForm handleEdit={this.handleEdit} content={this.state.content} />
      </React.Fragment>

    return(
    <Grid padded container style={{height: '100vh'}}>
      <Grid.Row stretched style={{height: '100%'}}>
        <Grid.Column textAlign='center' width={2}>
          <NavBar />
        </Grid.Column>
        <Grid.Column width={4}></Grid.Column>
        <Grid.Column textAlign='left' width={6}>
          <Grid.Row style={{height: '20%'}}>
            <h1 className="edit-headertxt">Edit Content</h1>
          </Grid.Row>
          <Grid.Row style={{height: '80%'}}>
            {this.props.user ? (
              <div>
                {this.state.content ? (<div className="edit-div">{EditContent}</div>) : (this.fetchUserContent(this.props.user.user.id))}
              </div>
              ) : (this.getUser())}
          </Grid.Row>
        </Grid.Column>
        <Grid.Column width={4}></Grid.Column>
      </Grid.Row>
    </Grid>
      )
  }
}
