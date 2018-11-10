import React from "react";
import "font-awesome/css/font-awesome.min.css";
import "./App.css";

export default class ModifyForm extends React.Component {
  state = {
    id: ""
  };

  change = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.id);
    this.setState({
      id: ""
    });
  };

  render() {
    return (
      <form>
        <h3 className="red">Are You Sure You Want to Delete a Mood?</h3>
        <label className="red">
          Mood ID To DELETE:
          <input
            name="id"
            type="text"
            placeholder="1"
            value={this.state.id}
            onChange={e => this.change(e)}
          />
        </label>
        <br />

        <button
          className="redButton"
          type="submit"
          onClick={e => this.onSubmit(e)}
        >
          Delete Mood
        </button>
      </form>
    );
  }
}
