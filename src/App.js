import React, { Component } from 'react';
import './App.css';
import { Route, Switch, Redirect, withRouter} from 'react-router-dom';
import WelcomeContainer from './containers/WelcomeContainer'
import CreateUserContainer from './containers/CreateUserContainer'
import NavBar from './containers/NavBar'
import HomeContainer from './containers/HomeContainer'
import LoginPageContainer from './containers/LoginPageContainer'
import DashboardContainer from './containers/DashboardContainer'
import UserContentContainer from './containers/UserContentContainer'
import UploadContentContainer from './containers/UploadContentContainer'
import EditContentContainer from './containers/EditContentContainer.js'
import VideoContainer from './containers/VideoContainer.js'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {user: null}
  }

  handleLogin = e => {
  e.preventDefault()
  let email = e.target[0].value
  let password = e.target[1].value
  let login = {
    user: {
      "e_mail": email,
      "password": password
    }
  }
  this.setUser(login)
  }

  setUser = login => {
    fetch('http://localhost:3000/api/v1/login', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(login)
    })
    .then(res => res.json())
    .then(res => {
      localStorage.setItem("token", res.jwt)
      this.setState({user: res})
    })
    .then(() => {
      this.props.history.push("/home")
    })

  }

  logOut = () => {
    localStorage.removeItem("token")
    this.setState({user: null})
  }

  componentDidMount() {
    console.log("DID MOUNT")
    this.getUser()
  }


  getUser = () => {
    let token = localStorage.getItem("token")
    if (token !== null ) {
      fetch('http://localhost:3000/api/v1/current_user', {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        Action: "application/json",
        Authorization: `Bearer ${token}`
      }
    })
    .then(res => res.json())
    .then(res => {
      this.setState({user: res})
    })
    } else {
      return <Redirect to="/login" />
    }
  }



  render() {
    console.log(this.state.user)
    return (
      <div>
      <NavBar logOut={this.logOut} />
      <Switch>
        <Route path="/dashboard/content/edit/:videoID" render={() => <EditContentContainer props={this.props} getUser={this.getUser} user={this.state.user} />}  />
        <Route path="/dashboard/content/upload" render={() => <UploadContentContainer getUser={this.getUser} user={this.state.user} />} />
        <Route path="/dashboard/content" render={() => <UserContentContainer getUser={this.getUser} user={this.state.user} />} />
        <Route path="/watch/:videoID" render={() => <VideoContainer props={this.props} user={this.state.user} getUser={this.getUser} />} />
        <Route path="/dashboard" render={() => <DashboardContainer user={this.state.user} getUser={this.getUser} />} />
        <Route path="/signup" render={props => <CreateUserContainer props={props} />} />
        <Route path="/login" render={() => <LoginPageContainer handleLogin={this.handleLogin} />} />
        <Route path="/home" render={() => <HomeContainer user={this.state.user} getUser={this.getUser} />} />
        <Route path="/" component={WelcomeContainer} />
      </Switch>
      </div>
    );
  }
}

export default withRouter(App);
