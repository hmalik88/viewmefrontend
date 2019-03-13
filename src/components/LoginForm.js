import React from 'react'
import { Form, Button } from 'semantic-ui-react'

export default class LoginForm extends React.Component {

  state = {
    e_mail: '',
    password: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    const {e_mail, password} = this.state
    return(
        <Form className='login-form' onSubmit={(e) => this.props.handleLogin(e, this.state)}>
          <Form.Field inline width={16}>
            <label>E-mail &nbsp; &nbsp; &nbsp; &nbsp;</label>
            <input className='login-input' onChange={this.handleChange} name="e_mail" type="text" value={e_mail} placeholder='E-mail'/>
          </Form.Field>
          <Form.Field inline width={16}>
            <label>Password</label>
            <input className='login-input' onChange={this.handleChange} name="password" type="password" value={password} placeholder='Your password'/>
          </Form.Field>
          <Button className='login-button' type="submit">Log In</Button>
        </Form>
      )
  }
}
