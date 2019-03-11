import React from 'react'
import UserContentCard from '../components/UserContentCard'
import { List } from 'semantic-ui-react'

export default class UserContentList extends React.Component {
  render() {
    let userContent = this.props.contents.map(content => {
      return <UserContentCard content={content} />
    })
    return(
        <List padded celled horizontal>
          {userContent}
        </List>
      )
    }
}
