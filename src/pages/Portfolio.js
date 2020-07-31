import React, { Component } from "react";
import StackGrid from "react-stack-grid";
import { Link } from "react-router-dom";
import { data } from "../data/data";

export default class Portfolio extends Component {
  componentDidMount() {
    document.title = "Portfolio";
  }
  _renderListProject = () => {
    return data.map((item, index) => {
      return (
        <Link className="image item" to={`/portfolio/${item.id}`} key={index}>
          <div className="bar">
            <h2>{item.name}</h2>
            <i></i>
          </div>
          <div className="main">
            <img src={item.imgMain} alt="" />
            <div className="tags">
              <div>
                <ul>
                  {item.tags.map((tag, index) => (
                    <li key={index}>{tag}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="imgs"></div>
          </div>
        </Link>
      );
    });
  };
  render() {
    return (
      <section id="portfolio">
        <div className="container">
          <h2 className="sec-ttl">Projects</h2>
          <div className="ttl-bar"></div>
          <StackGrid
            className="grid-list"
            columnWidth={350}
            gutterWidth={30}
            gutterHeight={40}
            easing="fadeDown"
          >
            {this._renderListProject()}
          </StackGrid>
        </div>
      </section>
    );
  }
}
