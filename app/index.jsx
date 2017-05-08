// import _ from "lodash";
// import underscore from "underscore";

// function component1() {
//   var element = document.createElement("div");
//   element.innerHTML = _.join(["Hello", "lodash"], ' ');
//   return element;
// }

// function component2() {
//   var element = document.createElement("div");
//   var p = ["hello", "underscore"];
//   var s = "";
//   underscore.each(p, function(str) {
//     s += str + ' ';
//   });
//   element.innerHTML = s;
//   return element;
// }

// document.body.appendChild(component1());
// document.body.appendChild(component2());

import React from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";

class Test extends React.Component {
  // static defaultProps = {
  //   content: "I'm test"
  // }
  constructor(props) {
    super(props);
    // componentWillMount go here
  }
  render() {
    return (
      <h2>{this.props.content}</h2>
    );
  }
}

Test.propTypes = {
  content: PropTypes.string.isRequired
}

Test.defaultProps = { content: "I'm test." }

ReactDOM.render(
  <div>
    <h1>Hello React.</h1>
    <Test/>
    <Test content="I'm new test."/>
  </div>,
  document.getElementById("root")
);