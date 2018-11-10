import React from "react";
import PropTypes from "prop-types";
import "./App.css";

export default class ModifyModal extends React.Component {
  render() {
    if (!this.props.show) {
      return null;
    }

    return (
      <div className="modifyBackgroundStyle">
        <div className="modalStyle">
          {this.props.children}
          <div className="footer">
            <button className="blueButton" onClick={this.props.onClose}>
              Close
            </button>
          </div>
        </div>
      </div>
    );
  }
}

ModifyModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool,
  children: PropTypes.node
};
