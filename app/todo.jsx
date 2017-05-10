import React, { Component } from "react";

class Todo extends Component {
  constructor(props) {
    super(props);
  }
  handleClick = (e) => {
    let todo = this.props.todo;
    todo.toggle();
  }
  handleDelete = (e) => {
    let todo = this.props.todo;
    this.props.delete(todo);
  }
  shouldComponentUpdate(nextProps, nextState) {
    let result = nextProps.todo !== this.props.todo;
    return result;
  }
  render() {
    let id = this.props.id;
    let todo = this.props.todo;

    return (
      <li className="todo">
        <input id={"todo" + id} type="checkbox" onClick={this.handleClick} checked={todo.isDone}></input>
        <label htmlFor={"todo" + id}>
          {todo.getContent()}
        </label>
        <br/>
        <i className="delete" onClick={this.handleDelete}>delete</i>
      </li>
    );
  }
}

export default Todo;