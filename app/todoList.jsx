import React, { Component } from "react";
import _ from "lodash";
import TodoModel from "./model/todo";
import Input from "./components/input.jsx";
import Button from "./components/button.jsx";
import Todo from "./todo.jsx";
import Footer from "./footer.jsx";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    }
  }
  addOne = (content) => {
    let todo = new TodoModel(content);
    this.state.todos.push(todo);
    this.setState(this.state);
  }
  deleteOne = (todo) => {
    this.state.todos = this.state.todos.filter((item)=> {
      return item !== todo;
    });
    this.setState(this.state);
  }
  render() {
    let props = {
      todoCount: this.state.todos.length,
      todoDoneCount: (_.filter(this.state.todos, (todo) => {
        return todo.isDone;
      })).length
    }

    let list = _.map(this.state.todos, (todo, index) => {
      return <Todo key={index} id={index} todo={todo} delete={this.deleteOne}></Todo>;
    });

    return (
      <div className="tl-main">
        <div className="header">
          <div>
            <Input addOne={this.addOne}></Input>
            <Button></Button>
          </div>
        </div>
        <div className="body">
          <ul className="todos">
          {list}
          </ul>
        </div>
        <Footer totalCount={props.todoCount} doneCount={props.todoDoneCount}></Footer>
      </div>
    )
  }
}

export default TodoList;