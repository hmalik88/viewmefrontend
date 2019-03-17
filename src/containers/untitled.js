  <Grid padded doubling container style={{height: '100vh'}}>
    <Grid.Row stretched style={{height: '100%'}}>
      <Grid.Column textAlign='center' width={2}>
        <NavBar />
      </Grid.Column>
      <Grid.Column textAlign='center' width={14}>
        <Grid.Row style={{height: '2.5%'}}></Grid.Row>
        <Grid.Row stretched style={{height: '97.5%'}}>
          {this.state.url ? (
            <>
              <VideoPlayer src={this.state.url} />
              <br/>
              <h3>{this.state.name}</h3>
              <h4>Uploaded by: {this.state.uploader}</h4>
              {this.checkIfFavorite(this.props.props.location.pathname.split('/')[2]) ? (<button onClick={this.deleteFavorite}>Unfavorite</button>) : (<button onClick={this.addFavorite}>Favorite</button>) }
            </>) : (
            this.fetchContent(this.state.contentID)
          )}
        </Grid.Row>
      </Grid.Column>
    </Grid.Row>
  </Grid>
