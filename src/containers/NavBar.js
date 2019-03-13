import React, { Component } from 'react'
import {Icon, Menu, Container, Sidebar } from 'semantic-ui-react'
import '../scss/NavBar.scss'

export default class NavBar extends Component {
  state = { visible: false }

  handleNavClick = () => this.setState({visible: !this.state.visible})

  handleSidebarHide = () => this.setState({ visible: false })

  logOut = () => {
    localStorage.removeItem("token")
    this.setState({user: null})
  }

  render() {
    const { visible } = this.state

    return (
      <div>
          <div className="icon-box">
          <Icon size='large' name='list' onClick={this.handleNavClick} />
            <strong>v M</strong>
          <br/>
          <br/>
          </div>
        <Sidebar.Pushable as={Container}>
          <Sidebar
            as={Menu}
            animation='overlay'
            icon='labeled'
            inverted
            onHide={this.handleSidebarHide}
            vertical
            visible={visible}
            width='thin'
            className='ui compact menu'
          >
            <Menu.Item href='/home'>
              <Icon name='home' />
              Home
            </Menu.Item>
            <Menu.Item href='/dashboard'>
              <Icon name='hdd outline' />
              Dashboard
            </Menu.Item>
            {localStorage.token !== undefined ? (
              <Menu.Item href='/'>
                <Icon name='sign-out' onClick={this.logOut} />
                Log Out
              </Menu.Item>
              ) : (
              <Menu.Item href='/login'>
                <Icon name='sign-in' />
                Log In
              </Menu.Item>
            )}
          </Sidebar>
        </Sidebar.Pushable>
      </div>
    )
  }
}
