import React from 'react'
import { Form, Icon, Button, Message} from 'semantic-ui-react'
import '../scss/UploadForm.scss'

export default class UploadForm extends React.Component {

  state = {name: '', channel: '', file: null}

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleFileChange = e => {
    this.setState({[e.target.id]: e.target.files[0]})
  }

  render() {
    return(
      <Form className='upload-form' onSubmit={e => this.props.handleUpload(e, this.state)}>
        <Form.Field inline width={16}>
          <label>Name &nbsp; &nbsp; &nbsp;</label>
          <input onChange={this.handleChange} id="name" type="text" name="name" value={this.state.name} className='upload-input'/>
          </Form.Field>
        <Form.Field inline width={16}>
          <label>Channel</label>
          <input className='upload-input' onChange={this.handleChange} id="channel" type="text" name="channel" value={this.state.channel} />
        </Form.Field>
        <Form.Field inline width={16}>
          <label>Video &nbsp; &nbsp; &nbsp;</label>
          <input className='upload-input' onChange={this.handleFileChange} id="file" type="file" name="clip" accept="video/*"/>
        </Form.Field>
        <Message success header='File uploaded' content='Your file has been uploaded successfully' />
        <Message error header='Action Forbidden' content='An error occurred during the upload process' />
        <Button icon size='massive' className='upload-button'>
          <Icon size='large' name='cloud upload'/>  <div className='upload-content'>Upload Content</div>
        </Button>
      </Form>
      )
  }
}
