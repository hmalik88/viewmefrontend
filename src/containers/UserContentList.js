import React from 'react'
import UserContentCard from '../components/UserContentCard'

export default class UserContentList extends React.Component {
  render() {
    let userContent = this.props.contents.map(content => {
      return <li key={content.id}><UserContentCard content={content} /></li>
    })
    return(
      <div>
        <ul>
          {userContent}
        </ul>
      </div>
      )
    }
}
