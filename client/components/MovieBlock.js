import React from 'react'

export default class MovieBlock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      descriptionDisplay: 'none',
      blockBgColor: '#FFF6C7'
    };

    this.toggleDescription = this.toggleDescription.bind(this);
  }

  toggleDescription() {
    if (this.state.descriptionDisplay === 'none') {
      this.setState({
        descriptionDisplay: 'inline',
        blockBgColor: '#FFFAE0'
      });
    }
    else {
      this.setState({
        descriptionDisplay: 'none',
        blockBgColor: '#FFF6C7'
      });
    }
  }

  render() {
    var descriptionStyle = {
      display: this.state.descriptionDisplay
    };

    var movieBlockStyle = {
      background: this.state.blockBgColor
    }

    return (
      <div className="movie-block" style={movieBlockStyle}>
        <img className="movie-thumbnail" src={this.props.movie.image_url} />
        <br />
        <span className="movie-name" onClick={this.toggleDescription}>
          {this.props.movie.movie_name}
        </span>
        <br />
        <div className="movie-rating">
          Rating: {this.props.movie.rating}
        </div>
        <br />
        <span className="movie-description" style={descriptionStyle}>
          {this.props.movie.description}
        </span>
      </div>
    );
  }
}
