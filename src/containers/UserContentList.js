import React from 'react'
import UserContentCard from '../components/UserContentCard'
import { Card } from 'semantic-ui-react'

export default class UserContentList extends React.Component {
  render() {
    let userContent = this.props.contents.map(content => {
      return <UserContentCard key={content.id} content={content} user={this.props.user} />
    })
    return(
        <Card.Group itemsPerRow={3}>
          {userContent}
        </Card.Group>
      )
    }
}
