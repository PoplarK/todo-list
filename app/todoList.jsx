import React, { Component } from "react";
import _ from "lodash";
import TodoModel from "./model/todo";
import Input from "./components/input.jsx";
import Button from "./components/button.jsx";
import Footer from "./footer.jsx";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    }
  }
  addOne(content) {
    let todo = new TodoModel(content);
    this.state.todos.push(todo);
    this.setState(this.state);
  }
  render() {
    let props = {
      todoCount: this.state.todos.length,
      todoDoneCount: (_.filter(this.state.todos, (todo) => {
        return todo.isDone;
      })).length
    }

    let list = _.map(this.state.todos, (todo) => {
      return <div name={todo.getContent()}>{todo.getContent()}</div>;
    });

    return (
      <div className="tl-main">
        <div className="header">
          <div>
            <Input addOne={this.addOne.bind(this)}></Input>
            <Button></Button>
          </div>
        </div>
        <div className="body">
          {list}
        </div>
        <Footer totalCount={props.todoCount} doneCount={props.todoDoneCount}></Footer>
      </div>
    )
  }
}

export default TodoList;