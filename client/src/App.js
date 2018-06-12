import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

class App extends Component {
  state = {
    moodBoard: [],
    error: null
  };

  componentDidMount() {
    axios
      .get("/api/moodboard")
      .then(
        resp => this.setState({ moodBoard: resp.data }),
        err => this.setState({ error: String(err) })
      );
  }

  render() {
    const { moodBoard, error } = this.state;

    return (
      <div>
        {error && <span style={{ color: "red" }}> {error}</span>}
        {moodBoard.map(moodBoard => <div>{moodBoard.soundByteURL}</div>)}

        <audio
          controls
          src="http://static1.grsites.com/archive/sounds/cartoon/cartoon001.mp3"
        />
        <audio
          controls
          src="https://www.pond5.com/sound-effect/89141639/heroic-drums.html#"
        />
      </div>
    );
  }
}

export default App;
