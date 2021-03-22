import React, { Component, Fragment } from "react";

import MainVisual from "../components/MainVisual";

export default class Home extends Component {
  componentDidMount() {
    document.title = "Home | NKT";
  }
  render() {
    return (
      <Fragment>
        <MainVisual />
      </Fragment>
    );
  }
}
