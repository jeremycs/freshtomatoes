import React, { Component } from "react";

export default React.createClass({
  render() {
    var childrenWithProps = React.Children.map(this.props.children, (child) => React.cloneElement(child, { props: this.props }));
    return (
      <div>
        { childrenWithProps }
      </div>
    );
  }
});
