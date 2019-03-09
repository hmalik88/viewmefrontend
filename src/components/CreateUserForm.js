import React from 'react'
import { Form, Button } from 'semantic-ui-react'

export default class CreateUserForm extends React.Component {
  state= {
    first_name: '',
    last_name: '',
    e_mail: '',
    password: '',
    address_line_1: '',
    address_line_2: '',
    unit: '',
    city: '',
    state: '',
    zip_code: ''
  }

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  render() {
    const {
      first_name,
      last_name,
      e_mail,
      password,
      address_line_1,
      address_line_2,
      unit,
      city,
      state,
      zip_code } = this.state
    return(
      <div>
      <Form onSubmit={(e) => this.props.handleLogin(e, this.state)}>
        <Form.Group widths='equal'>
          <Form.Input fluid onChange={this.handleChange} label='First name' id="first_name" placeholder='First name' value={first_name}/>
          <Form.Input fluid onChange={this.handleChange} label='Last name' id="last_name" placeholder='Last name' value={last_name}/>
        </Form.Group>
        <Form.Field>
          <label>E-mail</label>
          <input onChange={this.handleChange} id="e_mail" type="text" value={e_mail} />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input onChange={this.handleChange} id="password" type="password" value={password} />
        </Form.Field>
        <Form.Field>
          <label>Address Line 1</label>
          <input onChange={this.handleChange} id="address_line_1" type="text" value={address_line_1} />
        </Form.Field>
        <Form.Field>
          <label>Address Line 2</label>
          <input onChange={this.handleChange} id="address_line_2" type="text" value={address_line_2} />
        </Form.Field>
        <Form.Group widths='equal'>
          <Form.Input fluid onChange={this.handleChange} label='Unit' id="unit" placeholder='Unit' value={unit}/>
          <Form.Input fluid onChange={this.handleChange} label='City' id="city" placeholder='City' value={city}/>
        </Form.Group>
         <Form.Group widths='equal'>
          <Form.Input fluid onChange={this.handleChange} label='State' id="state" placeholder='State' value={state}/>
          <Form.Input fluid onChange={this.handleChange} label='Zip Code' id="zip_code" placeholder='Zip Code' value={zip_code}/>
        </Form.Group>
        <Button type="submit">Log In</Button>
      </Form>
      </div>
      )
  }

}
