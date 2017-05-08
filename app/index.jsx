import React from "react";
import ReactDOM from "react-dom";
import TodoList from "./todoList.jsx";

// <h1>Hello React.</h1><Example/><Example content="I'm new test."/>

ReactDOM.render(
  <div>
    <TodoList></TodoList>
  </div>,
  document.getElementById("root")
);