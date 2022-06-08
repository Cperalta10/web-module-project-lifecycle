import React from "react";

export default class Form extends React.Component {
  render() {
    return (
      <div>
        <form>
          <input
            onChange={this.props.formChange}
            value={this.props.inputText}
            placeholder="Type todo"
            name="todo"
          ></input>
          <button onSubmit={this.props.formSubmit}>Submit</button>
          <button>Show Completed</button>
        </form>
      </div>
    );
  }
}
