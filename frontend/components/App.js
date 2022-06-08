import React from "react";
import TodoList from "./TodoList";
import Form from "./Form";
import axios from "axios";

const URL = "http://localhost:9000/api/todos";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todoData: [],
      inputText: "",
    };
  }

  formChange = (e) => {
    this.setState({
      inputText: e.target.value,
    });
  };

  fetchTodo = () => {
    axios
      .get(URL)
      .then((res) => {
        this.setState({ ...this.state, todoData: res.data.data });
      })
      .catch((err) => {
        console.error(err);
      });
  };

  componentDidMount() {
    this.fetchTodo();
  }

  postNewTodo = () => {
    axios
      .post(URL, { name: this.state.inputText })
      .then((res) => {
        this.setState({
          ...this.state,
          todoData: this.state.todoData.concat(res.data.data),
        });
      })
      .catch((err) => {});
  };

  formSubmit = (e) => {
    e.preventDefault();

    // const newTodo = {
    //   completed: false,
    //   id: Date.now(),
    //   name: this.state.inputText,
    // };

    this.postNewTodo();
  };

  render() {
    if (this.state.todoData.length === 0) {
      return <h2>loading...</h2>;
    }
    return (
      <div>
        <TodoList todoData={this.state.todoData} />
        <Form
          formSubmit={this.formSubmit}
          inputText={this.state.inputText}
          formChange={this.formChange}
        />
      </div>
    );
  }
}
