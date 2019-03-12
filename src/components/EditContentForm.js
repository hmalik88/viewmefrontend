import React from 'react'
import { Form, Button, Icon} from 'semantic-ui-react'

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
      <Form className='edit-form' onSubmit={e => this.props.handleUpload(e, this.state)}>
        <Form.Field inline width={16}>
          <label>Edit Name</label>
          <input onChange={this.handleChange} name="name" id="name" type="text" value={this.state.name} placeholder={name} />
        </Form.Field>
        <Form.Field inline width={16}>
          <label>Edit Channel</label>
          <input onChange={this.handleChange} name="channel" id="channel" type="text" value={this.state.channel} placeholder={channel} />
        </Form.Field>
        <Button positive icon size='massive' className='edit-button'>
          <Icon size='large' name='edit'/>
        </Button>
      </Form>
      )
  }
}
