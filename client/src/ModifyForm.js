import React from "react";
import "font-awesome/css/font-awesome.min.css";
import "./App.css";

export default class ModifyForm extends React.Component {
  state = {
    id: "",
    mood: "",
    soundByteURL: "",
    icon: ""
  };

  change = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({
      mood: "",
      soundByteURL: "",
      id: "",
      icon: ""
    });
  };

  render() {
    return (
      <form>
        <h3 className="blue">Modify Your Custom Moods Here</h3>
        <label className="blue">
          Which mood # would you like to modify?
          <input
            name="id"
            type="text"
            placeholder="1"
            value={this.state.id}
            onChange={e => this.change(e)}
          />
        </label>
        <br />
        <br />
        <label className="blue">
          Mood Name:
          <input
            name="mood"
            type="text"
            placeholder="Angry"
            value={this.state.mood}
            onChange={e => this.change(e)}
          />
        </label>
        <br />
        <label className="blue">
          Sound Bite URL:
          <input
            name="soundByteURL"
            type="text"
            placeholder="http://soundbible.com/soundfile.mp3"
            value={this.state.soundByteURL}
            onChange={e => this.change(e)}
          />
        </label>
        <br />
        <br />
        <label>Pick an Icon:</label>
        <br />
        <br />
        <input
          type="radio"
          id="icon1"
          name="icon"
          value="fa fa-hand-peace-o"
          onChange={e => this.change(e)}
        />
        <label for="icon1" className="fa fa-hand-peace-o fa-5x" />
        <input
          type="radio"
          id="icon2"
          name="icon"
          value="fa fa-thumbs-o-up"
          onChange={e => this.change(e)}
        />
        <label for="icon2" className="fa fa-thumbs-o-up fa-5x" />
        <input
          type="radio"
          id="icon3"
          name="icon"
          value="fa fa-thumbs-o-down"
          onChange={e => this.change(e)}
        />
        <label for="icon3" className="fa fa-thumbs-o-down fa-5x" />
        <input
          type="radio"
          id="icon4"
          name="icon"
          value="fa fa-hand-spock-o"
          onChange={e => this.change(e)}
        />
        <label for="icon4" className="fa fa-hand-spock-o fa-5x" />
        <input
          type="radio"
          id="icon5"
          name="icon"
          value="fa fa-handshake-o"
          onChange={e => this.change(e)}
        />
        <label for="icon5" className="fa fa-handshake-o fa-5x" />
        <br />
        <input
          type="radio"
          id="icon6"
          name="icon"
          value="fa fa-smile-o"
          onChange={e => this.change(e)}
        />
        <label for="icon6" className="fa fa-smile-o fa-5x" />
        <input
          type="radio"
          id="icon7"
          name="icon"
          value="fa fa-meh-o"
          onChange={e => this.change(e)}
        />
        <label for="icon7" className="fa fa-meh-o fa-5x" />
        <input
          type="radio"
          id="icon8"
          name="icon"
          value="fa fa-frown-o"
          onChange={e => this.change(e)}
        />
        <label for="icon8" className="fa fa-frown-o fa-5x" />
        <input
          type="radio"
          id="icon9"
          name="icon"
          value="fa fa-heart-o"
          onChange={e => this.change(e)}
        />
        <label for="icon9" className="fa fa-heart-o fa-5x" />
        <input
          type="radio"
          id="icon5"
          name="icon"
          value="fa fa-star-o"
          onChange={e => this.change(e)}
        />
        <label for="icon10" className="fa fa-star-o fa-5x" />
        <br />
        <input
          type="radio"
          id="icon6"
          name="icon"
          value="fa fa-transgender"
          onChange={e => this.change(e)}
        />
        <label for="icon10" className="fa fa-transgender fa-5x" />
        <input
          type="radio"
          id="icon11"
          name="icon"
          value="fa fa-weixin"
          onChange={e => this.change(e)}
        />
        <label for="icon11" className="fa fa-weixin fa-5x" />
        <input
          type="radio"
          id="icon12"
          name="icon"
          value="fa fa-whatsapp"
          onChange={e => this.change(e)}
        />
        <label for="icon12" className="fa fa-whatsapp fa-5x" />
        <input
          type="radio"
          id="icon13"
          name="icon"
          value="fa fa-lightbulb-o"
          onChange={e => this.change(e)}
        />
        <label for="icon13" className="fa fa-lightbulb-o fa-5x" />
        <input
          type="radio"
          id="icon14"
          name="icon"
          value="fa fa-diamond"
          onChange={e => this.change(e)}
        />
        <label for="icon14" className="fa fa-diamond fa-5x" />
        <br />
        <input
          type="radio"
          id="icon15"
          name="icon"
          value="fa fa-money"
          onChange={e => this.change(e)}
        />
        <label for="icon15" className="fa fa-money fa-5x" />
        <input
          type="radio"
          id="icon16"
          name="icon"
          value="fa fa-gift"
          onChange={e => this.change(e)}
        />
        <label for="icon16" className="fa fa-gift fa-5x" />
        <input
          type="radio"
          id="icon17"
          name="icon"
          value="fa fa-coffee"
          onChange={e => this.change(e)}
        />
        <label for="icon17" className="fa fa-coffee fa-5x" />
        <input
          type="radio"
          id="icon18"
          name="icon"
          value="fa fa-snowflake-o"
          onChange={e => this.change(e)}
        />
        <label for="icon18" className="fa fa-snowflake-o fa-5x" />
        <input
          type="radio"
          id="icon19"
          name="icon"
          value="fa fa-bath"
          onChange={e => this.change(e)}
        />
        <label for="icon19" className="fa fa-bath fa-5x" />
        <br />
        <br />
        <button
          className="blueButton"
          type="submit"
          onClick={e => this.onSubmit(e)}
        >
          Modify Mood
        </button>
      </form>
    );
  }
}
