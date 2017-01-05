import React from 'react'

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    this.props.onUserInput(
      this.refs.filterTextInput.value
    );
  }

  render() {
    return (
      <div id="search-bar-container">
        <input id="search-bar"
          type="search"
          placeholder="Search Movie Name..."
          value={this.props.filterText}
          ref="filterTextInput"
          onChange={this.handleChange}
        />
      </div>
    );
  }
}
