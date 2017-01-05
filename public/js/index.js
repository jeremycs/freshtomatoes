'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MovieBlock = function (_React$Component) {
  _inherits(MovieBlock, _React$Component);

  function MovieBlock(props) {
    _classCallCheck(this, MovieBlock);

    var _this = _possibleConstructorReturn(this, (MovieBlock.__proto__ || Object.getPrototypeOf(MovieBlock)).call(this, props));

    _this.state = {
      descriptionDisplay: 'none',
      blockBgColor: '#FFF6C7'
    };

    _this.toggleDescription = _this.toggleDescription.bind(_this);
    return _this;
  }

  _createClass(MovieBlock, [{
    key: 'toggleDescription',
    value: function toggleDescription() {
      if (this.state.descriptionDisplay === 'none') {
        this.setState({
          descriptionDisplay: 'inline',
          blockBgColor: '#FFFAE0'
        });
      } else {
        this.setState({
          descriptionDisplay: 'none',
          blockBgColor: '#FFF6C7'
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var descriptionStyle = {
        display: this.state.descriptionDisplay
      };

      var movieBlockStyle = {
        background: this.state.blockBgColor
      };

      return React.createElement(
        'div',
        { className: 'movie-block', style: movieBlockStyle },
        React.createElement('img', { className: 'movie-thumbnail', src: this.props.movie.image_url }),
        React.createElement('br', null),
        React.createElement(
          'span',
          { className: 'movie-name', onClick: this.toggleDescription },
          this.props.movie.movie_name
        ),
        React.createElement('br', null),
        React.createElement(
          'div',
          { className: 'movie-rating' },
          'Rating: ',
          this.props.movie.rating
        ),
        React.createElement('br', null),
        React.createElement(
          'span',
          { className: 'movie-description', style: descriptionStyle },
          this.props.movie.description
        )
      );
    }
  }]);

  return MovieBlock;
}(React.Component);

var MovieList = function (_React$Component2) {
  _inherits(MovieList, _React$Component2);

  function MovieList() {
    _classCallCheck(this, MovieList);

    return _possibleConstructorReturn(this, (MovieList.__proto__ || Object.getPrototypeOf(MovieList)).apply(this, arguments));
  }

  _createClass(MovieList, [{
    key: 'render',
    value: function render() {
      var rows = [];
      var filter = this.props.filterText.toLowerCase();
      this.props.movies.forEach(function (movie) {
        var currentName = movie.movie_name.toLowerCase();
        if (currentName.indexOf(filter) === -1) {
          return;
        }
        rows.push(React.createElement(MovieBlock, { movie: movie, key: movie.id }));
      });
      return React.createElement(
        'div',
        { className: 'movie-list' },
        rows
      );
    }
  }]);

  return MovieList;
}(React.Component);

var SearchBar = function (_React$Component3) {
  _inherits(SearchBar, _React$Component3);

  function SearchBar(props) {
    _classCallCheck(this, SearchBar);

    var _this3 = _possibleConstructorReturn(this, (SearchBar.__proto__ || Object.getPrototypeOf(SearchBar)).call(this, props));

    _this3.handleChange = _this3.handleChange.bind(_this3);
    return _this3;
  }

  _createClass(SearchBar, [{
    key: 'handleChange',
    value: function handleChange() {
      this.props.onUserInput(this.refs.filterTextInput.value);
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { id: 'search-bar-container' },
        React.createElement('input', { id: 'search-bar',
          type: 'search',
          placeholder: 'Search Movie Name...',
          value: this.props.filterText,
          ref: 'filterTextInput',
          onChange: this.handleChange
        })
      );
    }
  }]);

  return SearchBar;
}(React.Component);

var SearchableMovieList = function (_React$Component4) {
  _inherits(SearchableMovieList, _React$Component4);

  function SearchableMovieList(props) {
    _classCallCheck(this, SearchableMovieList);

    var _this4 = _possibleConstructorReturn(this, (SearchableMovieList.__proto__ || Object.getPrototypeOf(SearchableMovieList)).call(this, props));

    _this4.state = {
      filterText: '',
      movies: []
    };

    _this4.handleUserInput = _this4.handleUserInput.bind(_this4);
    return _this4;
  }

  _createClass(SearchableMovieList, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this5 = this;

      axios.get('http://localhost:3200/movie').then(function (res) {
        _this5.setState({
          movies: res.data.movies
        });
      });
    }
  }, {
    key: 'handleUserInput',
    value: function handleUserInput(filterText) {
      this.setState({
        filterText: filterText
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(SearchBar, {
          filterText: this.state.filterText,
          onUserInput: this.handleUserInput
        }),
        React.createElement(MovieList, {
          movies: this.state.movies,
          filterText: this.state.filterText
        })
      );
    }
  }]);

  return SearchableMovieList;
}(React.Component);

ReactDOM.render(React.createElement(SearchableMovieList, null), document.getElementById('container'));