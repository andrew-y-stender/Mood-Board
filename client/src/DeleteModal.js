import React from "react";
import PropTypes from "prop-types";
import "./App.css";

export default class DeleteModal extends React.Component {
  render() {
    if (!this.props.show) {
      return null;
    }

    return (
      <div className="deleteBackgroundStyle">
        <div className="modalStyle">
          {this.props.children}
          <div className="footer">
            <button className="redButton" onClick={this.props.onClose}>
              Close
            </button>
          </div>
        </div>
      </div>
    );
  }
}

DeleteModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool,
  children: PropTypes.node
};
