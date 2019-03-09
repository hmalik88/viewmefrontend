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
      <div>
        <Form onSubmit={(e) => this.props.handleLogin(e, this.state)}>
          <Form.Field>
            <label>E-Mail</label>
            <input onChange={this.handleChange} name="e_mail" type="text" value={e_mail} />
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <input onChange={this.handleChange} name="password" type="password" value={password} />
          </Form.Field>
          <Button type="submit">Log In</Button>
        </Form>
      </div>
      )
  }
}
