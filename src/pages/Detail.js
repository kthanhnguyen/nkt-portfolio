import React, { Component } from "react";

import { data } from "../data/data";
import ItemProject from "../components/ItemProject";

export default class Detail extends Component {
  componentDidMount() {
    let id = this.props.match.params.id;

    let itemFound = data.find((item) => {
      return item.id === id;
    });

    document.title = `${itemFound.name}`;
  }

  render() {
    let id = this.props.match.params.id;

    let itemFound = data.find((item) => {
      return item.id === id;
    });
    console.log(itemFound);
    return (
      <section id="detail" className="detail">
        <ItemProject itemFound={itemFound} />
      </section>
    );
  }
}
