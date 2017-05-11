import React, { Component } from "react";
import PropTypes from "prop-types";

class Todo extends Component {
  constructor(props) {
    super(props);
    console.log("Construct Todo Item", this.props.id, this.props.todo.content);
    this.state = {
      isDone: this.props.todo.isDone
    }
  }
  handleClick = (e) => {
    this.props.toggle(this.props.todo);
  }
  handleDelete = (e) => {
    let todo = this.props.todo;
    this.props.delete(todo);
  }
  shouldComponentUpdate(nextProps, nextState) {
    // 优化 render
    let result = false;
    let isSameModel = this.props.todo === nextProps.todo;
    let isSameState = this.state.isDone === nextProps.todo.isDone;
    if(!isSameModel || !isSameState) {
      this.state.isDone = nextProps.todo.isDone;
      result = true;
    }
    return result;
  }
  render() {
    console.log("Render Todo Item", this.props.id, this.props.todo.content);
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
Todo.propTypes = {
  id: PropTypes.number.isRequired,
  todo: PropTypes.object.isRequired,
  delete: PropTypes.func.isRequired,
  toggle: PropTypes.func.isRequired
}

export default Todo;