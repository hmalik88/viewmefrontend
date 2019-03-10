import React from 'react'
import FavoriteContentCard from '../components/FavoriteContentCard'
import { Card } from 'semantic-ui-react'

export default class FavoriteContentList extends React.Component {
  render() {
    let favoriteContent = this.props.favorites.map(favorite => {
      return <FavoriteContentCard key={favorite.id} favorite={favorite} email={this.props.email} />
    });
    return(
      <div>
        <Card.Group itemsPerRow={3}>
          {favoriteContent}
        </Card.Group>
      </div>
      )
  }
}
