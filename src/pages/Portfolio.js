import React, { Component, Fragment } from "react";
import sizeMe from "react-sizeme";
import { data } from "../data/data";

import Modal from "../components/Modal";

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = { mShow: false, mId: "01", mOut: false };
  }

  componentDidMount() {
    document.title = "Portfolio | NKT";
  }
  _renderListProject = () => {
    return data.map((item, index) => {
      return (
        <li key={index}>
          <div className="image item" onClick={() => this._openModal(item.id)}>
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
          </div>
        </li>
      );
    });
  };

  _closeModal = () => {
    document.body.className = "";
    this.setState({ mId: "01", mShow: false, mOut: true });
  };

  _openModal = (id) => {
    document.body.className = "dis-scroll";
    this.setState({ mId: id, mShow: true });
  };

  render() {
    const { mShow, mId, mOut } = this.state;
    return (
      <Fragment>
        <section id="portfolio">
          <div className="container">
            <h2 className="sec-ttl">Projects</h2>
            <div className="ttl-bar"></div>
            <ul className="list-portfolio grid-list">
              {this._renderListProject()}
            </ul>
          </div>
        </section>
        <Modal
          id={mId}
          active={mShow}
          mOut={mOut}
          closeModal={this._closeModal}
        />
      </Fragment>
    );
  }
}

export default sizeMe()(Portfolio);
