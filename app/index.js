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
import ReactDOM from "react-dom";

const root = document.querySelector("#root");

ReactDOM.render(<div>Hello React</div>,root);