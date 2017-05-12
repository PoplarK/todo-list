import React, { Component } from "react";
import _ from "lodash";
import TodoModel from "./model/todo";
import Header from "./header.jsx";
import Todo from "./todo.jsx";
import Footer from "./footer.jsx";

class TodoList extends Component {
  constructor(props) {
    console.log("Construct Todo List");
    super(props);
    this.state = {
      todos: [],
      filter: "all"
    }
  }
  addOne = (content) => {
    let todo = new TodoModel(content);
    this.state.todos.push(todo);
    this.setState(this.state);
  }
  toggleOne = (todo) => {
    this.state.todos = this.state.todos.map((item) => {
      if(todo === item) {
        item.toggle();
      }
      return item;
    });
    this.setState(this.state);
  }
  deleteOne = (todo) => {
    this.state.todos = this.state.todos.filter((item) => {
      return item !== todo;
    });
    this.setState(this.state);
  }
  getSubTodos(type) {
    let result;
    switch(type) {
      case "unDone":
        result = this.state.todos.filter(item => {
          return !item.isDone;
        });
        break;
      case "done":
        result = this.state.todos.filter(item => {
          return item.isDone;
        });
        break;
      case "all":
      default:
        result = this.state.todos;
    }
    return result;
  }
  setFilter = (type) => {
    switch(type) {
      case "unDone":
        this.state.filter = "unDone";
        break;
      case "done":
        this.state.filter = "done";
        break;
      case "all":
      default:
        this.state.filter = "all";
    }
    this.setState(this.state);
  }
  clearCompleted = () => {
    this.state.todos = this.state.todos.filter(item => {
      return !item.isDone;
    });
    this.setState(this.state);
  }
  render() {
    console.log("Render Todo List");
    let props = {
      todoCount: this.state.todos.length,
      todoDoneCount: (_.filter(this.state.todos, (todo) => {
        return todo.isDone;
      })).length,
      filter: this.state.filter,
      subTodos: this.getSubTodos(this.state.filter)
    }

    let list = _.map(props.subTodos, (todo, index) => {
      return <Todo key={index} id={index} todo={todo} delete={this.deleteOne} toggle={this.toggleOne}></Todo>;
    });

    return (
      <div className="tl-main">
        <div className="header">
          <Header addOne={this.addOne}></Header>
        </div>
        <div className="body">
          <ul className="todos">
          {list}
          </ul>
        </div>
        <Footer totalCount={props.todoCount} doneCount={props.todoDoneCount}
          filter={props.filter} setFilter={this.setFilter}
          clearCompleted={this.clearCompleted}>
        </Footer>
      </div>
    )
  }
}

export default TodoList;