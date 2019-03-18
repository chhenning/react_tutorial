import React, { Component } from "react";

// Imput: boolean
// Output: onClick

class Liked extends Component {
  render() {
    const { liked, onLiked } = this.props;

    let classes = "fa fa-heart";
    if (liked === false) {
      classes += "-o";
    }

    return (
      <i onClick={onLiked} style={{ cursor: "pointer" }} className={classes} />
    );
  }
}

export default Liked;
