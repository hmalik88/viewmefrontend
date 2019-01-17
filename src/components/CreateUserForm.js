import React from 'react'

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
    return(
      <div>
        <form onSubmit={e => this.props.handleSubmit(e, this.state)}>
        First Name: <input onChange={this.handleChange}type="text" id="first_name" value={this.state.first_name} /><br />
        Last Name:<input onChange={this.handleChange} type="text" id="last_name" value={this.state.last_name} /><br />
        E-mail: <input onChange={this.handleChange} type="text" id="e_mail" value={this.state.e_mail} /><br />
        Password: <input onChange={this.handleChange} type="password" id="password" value={this.state.password} /><br />
        Address line 1: <input onChange={this.handleChange} type="text" id="address_line_1" value={this.state.address_line_1} /><br />
        Address line 2: <input onChange={this.handleChange} type="text" id="address_line_2" value={this.state.address_line_2} /><br />
        Unit: <input onChange={this.handleChange} type="text" id="unit" value={this.state.unit} /><br />
        City: <input onChange={this.handleChange} type="text" id="city" value={this.state.city} /><br />
        State: <input onChange={this.handleChange} type="text" id="state" value={this.state.state} /><br />
        Zip Code: <input onChange={this.handleChange} type="text" id="zip_code" value={this.state.zip_code} /><br />
        <input type="submit" />
        </form>
      </div>
      )
  }

}
