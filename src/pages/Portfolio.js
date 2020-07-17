import React, { Component } from "react";

export default class Portfolio extends Component {
  componentDidMount() {
    document.title = "Portfolio";
  }
  render() {
    return (
      <section id="portfolio">
        <div className="container">
          <h2 className="sec-ttl">Projects</h2>
          <div className="ttl-bar"></div>
        </div>
      </section>
    );
  }
}
