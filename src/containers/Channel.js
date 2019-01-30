import React from 'react'
import ContentCard from '../components/ContentCard'

export default class Channel extends React.Component {

  constructor(props) {
    super(props)
    let contents = this.props.content.filter(content => content.attributes.channel === this.props.channel)
    this.state = {
      contents: contents
    }
  }

  render() {
    let content = this.state.contents.map(content => <ContentCard key={content.id} content={content} />)
    return(
      <div>
        <h2>{this.props.channel}</h2>
        {content}
      </div>
      )
  }
}
