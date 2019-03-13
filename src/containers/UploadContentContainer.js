import React from 'react'
import UploadForm from '../components/UploadForm'
import NavBar from './NavBar'
import { Grid } from 'semantic-ui-react'
import '../scss/UploadForm.scss'

export default class UploadContentContainer extends React.Component {

  state = {status: ''}

  handleUpload = (e, state)  => {
    e.preventDefault()
    e.persist()
    e.target.classList.add('loading')
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
        console.log(res.json())
        return res.json()

      } else {
        throw new Error('Upload didn\'t go through!')
      }
    })
    .then(json => {
      e.target.classList.remove('loading')
      e.target[3].classList.add('positive')
    })
    .catch(error => e.target[3].classList.add('negative'))
  }

  getUser = () => {
    this.props.getUser()
  }

  render() {
    return(
      <Grid padded container style={{height: '100vh'}}>
        <Grid.Row stretched style={{height: '100%'}}>
          <Grid.Column textAlign='center' width={2}>
            <NavBar />
          </Grid.Column>
          <Grid.Column width={4}></Grid.Column>
          <Grid.Column className='content-column form_column' textAlign='left' width={6}>
            <Grid.Row style={{height: '20%'}}>
              <h1 className="headertxt">Upload Content</h1>
            </Grid.Row>
            <Grid.Row style={{height: '80%'}}>
              {this.props.user ? (<UploadForm handleUpload={this.handleUpload} />) : (this.getUser()) }
              {this.state.status ? (<p>{this.state.status}</p>) : (null)}
            </Grid.Row>
          </Grid.Column>
          <Grid.Column width={4}></Grid.Column>
        </Grid.Row>
      </Grid>
      )
  }
}
