import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import "font-awesome/css/font-awesome.min.css";
import Modal from "./Modal";
import Form from "./Form";
import MoodBoard from "./MoodBoard";
import ModifyModal from "./ModifyModal";
import ModifyForm from "./ModifyForm";
import DeleteModal from "./DeleteModal";
import DeleteForm from "./DeleteForm";

class App extends Component {
  state = {
    custom: {},
    modifyData: {},
    moodBoard: [],
    error: null,
    isOpen: false,
    modifyIsOpen: false,
    deleteIsOpen: false
  };

  componentDidMount() {
    axios
      .get("/api/moodboard")
      .then(
        resp => this.setState({ moodBoard: resp.data }),
        err => this.setState({ error: String(err) })
      );
  }

  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  toggleModifyModal = () => {
    this.setState({
      modifyIsOpen: !this.state.modifyIsOpen
    });
  };

  toggleDeleteModal = () => {
    this.setState({
      deleteIsOpen: !this.state.deleteIsOpen
    });
  };

  onSubmit = custom => {
    this.setState({ custom }, () => {
      axios({
        method: "post",
        url: "/api/moodboard",
        data: custom,
        config: { headers: { "Content-Type": "multipart/form-data" } }
      })
        .then(function(response) {
          console.log(response);
        })
        .catch(function(response) {
          console.log(response);
        });
    });
  };

  onSubmitModify = modifyData => {
    this.setState({ modifyData }, () => {
      axios({
        method: "put",
        url: "/api/moodboard",
        data: modifyData,
        config: { headers: { "Content-Type": "multipart/form-data" } }
      })
        .then(function(response) {
          console.log(response);
        })
        .catch(function(response) {
          console.log(response);
        });
      console.log("App component got:", this.state.modifyData);
    });
  };

  onDeleteSubmit = deleteId => {
    this.setState({ deleteId }, () => {
      axios({
        method: "delete",
        url: "api/moodboard/" + deleteId
      })
        .then(function(response) {
          console.log(response);
        })
        .catch(function(response) {
          console.log(response);
        });
    });
  };

  render() {
    const { moodBoard, error } = this.state;

    return (
      <div className="App">
        <audio autoPlay loop>
          <source src="https://incompetech.com/music/royalty-free/mp3-royaltyfree/Chill%20Wave.mp3" />
        </audio>
        <h1>
          <img
            src="https://vignette.wikia.nocookie.net/logopedia/images/8/8f/Myspace_icon.svg/revision/latest/scale-to-width-down/200?cb=20121001230050"
            alt="mySpace"
            width="75px"
            height="50px"
          />
          m00dspace.com
        </h1>
        <h3>"Audible emotions for the emotionally inaudible"</h3>

        {error && <span style={{ color: "red" }}> {error}</span>}

        <div className="center">
          <button className="purpleButton" onClick={this.toggleModal}>
            Create A Mood
          </button>
          <button className="blueButton" onClick={this.toggleModifyModal}>
            Modify A Mood
          </button>

          <Modal show={this.state.isOpen} onClose={this.toggleModal}>
            <Form onSubmit={custom => this.onSubmit(custom)} />
          </Modal>

          <ModifyModal
            show={this.state.modifyIsOpen}
            onClose={this.toggleModifyModal}
          >
            <ModifyForm
              onSubmit={modifyData => this.onSubmitModify(modifyData)}
            />
          </ModifyModal>
        </div>

        <MoodBoard moodBoard={this.state.moodBoard} />
        <div className="center">
          <button className="redButton" onClick={this.toggleDeleteModal}>
            Delete a Mood
          </button>
          <DeleteModal
            show={this.state.deleteIsOpen}
            onClose={this.toggleDeleteModal}
          >
            <DeleteForm onSubmit={deleteId => this.onDeleteSubmit(deleteId)} />
          </DeleteModal>
        </div>
      </div>
    );
  }
}

export default App;
