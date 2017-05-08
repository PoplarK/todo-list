import React, { Component } from "react";
import PropTypes from "prop-types";

class Button extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    window.p = this;
    console.log("test", this);
  }
  render() {
    return(
      <button type="button" className={"btn btn-" + this.props.className} onClick={this.handleClick}>
        {this.props.text}
      </button>
    );
  }
}
Button.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string.isRequired
}
Button.defaultProps = {
  className: "default",
  text: "按钮"
}

export default Button;