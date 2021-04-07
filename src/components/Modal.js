import React, { Component } from "react";
import { data } from "../data/data";
import ItemProject from "../components/ItemProject";
export default class Modal extends Component {
  render() {
    const { id, active, closeModal, mOut, closeMaskModal } = this.props;

    let itemFound = data.find((item) => {
      return item.id === id;
    });

    return (
      <div
        className={`modal ${active ? "active" : ""}${
          mOut && !active ? "out" : ""
        }`}
      >
        <div className="modal-background" onClick={closeMaskModal}></div>
        <div className="modal-wrapper">
            <div className="modal-content">
              <span className="close" onClick={closeModal}>&times;</span>
              <ItemProject
                  itemFound={itemFound}
                  index={itemFound.id}
                />
            </div>
          </div>
      </div>
    );
  }
}
