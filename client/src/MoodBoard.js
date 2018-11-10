import React from "react";
import "./App.css";

export default class MoodBoard extends React.Component {
  render() {
    return (
      <div className="container">
        {this.props.moodBoard.map(moodBoard => (
          <span>
            <div className="tile">
              <div className="mood-name">
                {moodBoard.id + ". "}
                {moodBoard.mood}
              </div>
              <audio controls src={moodBoard.soundByteURL} />
              <i className={moodBoard.icon + " fa-5x"} />
            </div>
          </span>
        ))}
      </div>
    );
  }
}
