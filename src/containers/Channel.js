import React from 'react'
import ContentCard from '../components/ContentCard'
import { Card } from 'semantic-ui-react'
export default class Channel extends React.Component {

  constructor(props) {
    super(props)
    let contents = this.props.content.filter(content => content.channel === this.props.channel)
    this.state = {
      contents: contents
    }
  }

  render() {
    let content = this.state.contents.map(content => {
      return <ContentCard key={content.id} content={content} />
  })
    return(
      <div>
        <h2>{this.props.channel}</h2>
        <Card.Group itemsPerRow={3}>
          {content}
        </Card.Group>
        <br/>
      </div>
      )
  }
}
