import React from 'react'

export default class ContentCard extends React.Component {
  render() {
    return(
      <div>
        {this.props.content.attributes.name}
      </div>
      )
  }
}
