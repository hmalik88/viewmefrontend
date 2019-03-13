import React from 'react'
import { Form, Button, Icon, Message} from 'semantic-ui-react'
import '../scss/EditContent.scss'

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
      <Form className='edit-form' onSubmit={e => this.props.handleEdit(e, this.state)}>
        <Form.Field inline width={16}>
          <label>Edit Name &nbsp; &nbsp; &nbsp;</label>
          <input onChange={this.handleChange} id="name" type="text" name="name" value={this.state.name} className='edit-input' placeholder={name} />
        </Form.Field>
        <Form.Field inline width={16}>
          <label>Edit Channel</label>
          <input onChange={this.handleChange} name="channel" id="channel" type="text" value={this.state.channel} placeholder={channel} className='edit-input' />
        </Form.Field>
        <Message success header='File uploaded' content='Your file has been uploaded successfully' />
        <Message error header='Action Forbidden' content='An error occurred during the upload process' />
        <Button icon size='massive' className='edit-button'>
          <Icon size='large' name='edit'/><div className='edit-content'>Edit Content</div>
        </Button>
      </Form>
      )
  }
}
