import React from 'react'
import Channel from './Channel'


export default class ChannelsList extends React.Component {

  constructor(props) {
    super(props)
    let channels = []
    this.props.contents.forEach(content => {
      if (!channels.includes(content.channel)) {
        channels.push(content.channel)
      }
    })
    this.state = {
      channels: channels
    }
  }


  render() {
    let channels = this.state.channels.map(channel => {
      return <Channel key={channel} content={this.props.contents} channel={channel} />
  })
    return(
      <div>
        {channels}
      </div>
      )
  }
}
