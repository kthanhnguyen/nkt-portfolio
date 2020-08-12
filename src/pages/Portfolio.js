import React, { Component } from "react";
import sizeMe from "react-sizeme";
import { Link } from "react-router-dom";
import { data } from "../data/data";

class Portfolio extends Component {
  componentDidMount() {
    document.title = "Portfolio";
  }
  _renderListProject = () => {
    return data.map((item, index) => {
      return (
        <li key={index}>
          <Link className="image item" to={`/portfolio/${item.id}`}>
            <div className="bar">
              <h2>{item.name}</h2>
              <i></i>
            </div>
            <div className="main">
              <div className="back">
                <img src={item.imgMain} alt="" />
              </div>
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
        </li>
      );
    });
  };
  render() {
    return (
      <section id="portfolio">
        <div className="container">
          <h2 className="sec-ttl">Projects</h2>
          <div className="ttl-bar"></div>
          {/* <StackGrid
            className="grid-list"
            columnWidth={width >= 768 ? "33.33%" : "100%"}
            gutterWidth={30}
            gutterHeight={40}
            easing="fadeDown"
          >
            {this._renderListProject()}
          </StackGrid> */}
          <ul className="list-portfolio grid-list">
            {this._renderListProject()}
          </ul>
        </div>
      </section>
    );
  }
}

export default sizeMe()(Portfolio);
