import React from "react";
import PropTypes from "prop-types";
import "./App.css";

export default class Modal extends React.Component {
  render() {
    if (!this.props.show) {
      return null;
    }

    return (
      <div className="backgroundStyle">
        <div className="modalStyle">
          {this.props.children}
          <div className="footer">
            <button className="purpleButton" onClick={this.props.onClose}>
              Close
            </button>
          </div>
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool,
  children: PropTypes.node
};
