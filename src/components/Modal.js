import React, { Component } from "react";

import { data } from "../data/data";
import { Scrollbars } from "react-custom-scrollbars";
import ItemProject from "../components/ItemProject";

const renderThumb = ({ style, ...props }) => {
  const thumbStyle = {
    borderRadius: 6,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  };
  return <div style={{ ...style, ...thumbStyle }} {...props} />;
};

const CustomScrollbars = (props) => (
  <Scrollbars
    universal
    autoHide
    renderThumbVertical={renderThumb}
    {...props}
    renderThumbHorizontal={(props) => (
      <div
        {...props}
        className="thumb-horizontal"
        style={{ display: "none" }}
      />
    )}
  />
);

export default class Modal extends Component {
  render() {
    const { id, active, closeModal, mOut } = this.props;

    let itemFound = data.find((item) => {
      return item.id === id;
    });

    return (
      <div
        className={`modal ${active ? "active" : ""}${
          mOut && !active ? "out" : ""
        }`}
      >
        <div className="modal-background">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <CustomScrollbars>
              <ItemProject
                itemFound={itemFound}
                index={itemFound.id}
                key={itemFound.id}
              />
            </CustomScrollbars>
          </div>
        </div>
      </div>
    );
  }
}
