import React, { Component } from "react";

class Input extends Component {
  constructor(props) {
    super(props);
  }
  handleKeyUp = (event) => {
    if(13 === event.keyCode) {
      let value = event.target.value;
      if(!value) return false;

      event.target.value = "";
      this.props.addOne(value);
    }
  }
  render() {
    return (
      <input type="text" placeholder={this.props.placeholder} onKeyUp={this.handleKeyUp}>
      </input>
    )
  }
}

Input.defaultProps = {
  placeholder: "请输入任务"
}

export default Input