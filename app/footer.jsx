import React, { Component } from "react";

class Footer extends Component {
  constructor(props) {
    console.log("Construct Footer");
    super(props);
  }
  render() {
    console.log("Render Footer");
    let props = this.props;

    let clearElement = props.doneCount > 0 ? (
      <div className="clear-all" onClick={props.clearCompleted}>
        Clear Completed
      </div>
    ): null;

    return (
      <div className="footer">
        {props.totalCount}/{props.doneCount}
        {clearElement}
      </div>
    )
  }
}

export default Footer;