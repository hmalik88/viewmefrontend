import React from 'react'

export default class EditContentForm extends React.Component {

  state = {name: '', channel: ''}

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  render() {
    console.log(this.props.content)
    let channel = this.props.content[0].channel
    let name = this.props.content[0].name
    return(
      <div>
      <br/>
        <form onSubmit={e => this.props.handleEdit(e, this.state)}>
          Edit Name: <input onChange={this.handleChange} name="name" id="name" type="text" value={this.state.name} placeholder={name} /><br/>
          Edit Channel: <input onChange={this.handleChange} name="channel" id="channel" type="text" value={this.state.channel} placeholder={channel} /><br/>
          <input type="submit" value="Edit Video" />
        </form>
      </div>
      )
  }
}
