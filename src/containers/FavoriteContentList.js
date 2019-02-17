import React from 'react'
import ContentCard from '../components/ContentCard'

export default class FavoriteContentList extends React.Component {
  render() {
    let favoriteContent = this.props.favorites.map(favorite => {
      return <ContentCard content={favorite} />
    });
    return(
      <div>
        {favoriteContent}
      </div>
      )
  }
}
