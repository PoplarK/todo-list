import React, { Component } from "react";

class Footer extends Component {
  constructor(props) {
    super(props);
    
  }
  render() {
    return (
      <div className="footer">
        {this.props.totalCount}/{this.props.doneCount}
      </div>
    )
  }
}

export default Footer;