import React from 'react'
import FavoriteContentCard from '../components/FavoriteContentCard'

export default class FavoriteContentList extends React.Component {
  render() {
    let favoriteContent = this.props.favorites.map(favorite => {
      return <FavoriteContentCard key={favorite.id} favorite={favorite} />
    });
    return(
      <div>
        {favoriteContent}
      </div>
      )
  }
}
