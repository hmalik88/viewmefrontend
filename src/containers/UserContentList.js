import React from 'react'
import UserContentCard from '../components/UserContentCard'
import { List } from 'semantic-ui-react'

export default class UserContentList extends React.Component {
  render() {
    let userContent = this.props.contents.map(content => {
      return <UserContentCard key={content.id} content={content} />
    })
    return(
        <List padded='true' celled horizontal>
          {userContent}
        </List>
      )
    }
}
