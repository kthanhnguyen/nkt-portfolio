import React, { Component } from "react";
import AwesomeSlider from "react-awesome-slider";
import { AwesomeButton } from "react-awesome-button";

import AwsSliderStyles from "react-awesome-slider/src/core/styles.scss";

export default class ItemProject extends Component {
  componentDidMount() {}
  render() {
    const { itemFound } = this.props;
    return (
      <div className="container">
        <div className="detail__name">{itemFound.name}</div>
        <div className="share">
          <AwesomeButton size="large" href={itemFound.link} target="_blank">
            <svg
              className="i-svg"
              height="50"
              version="1.1"
              width="50"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 50 50"
              space="preserve"
              data-icon="facebook,"
            >
              <path
                d="M36.999,36.998H13V13.089L19,13V7h-12v35.998h35.998V27.999h-6V36.998z M25,7l6,6l-9,9l6,6l8.999-9l6,6V7H25z"
                fill="#ffffff"
              ></path>
            </svg>
            VISITS THIS WEBSITE
          </AwesomeButton>
        </div>
        <div className="slide">
          <AwesomeSlider
            animation="cubeAnimation"
            cssModule={[AwsSliderStyles]}
          >
            {itemFound.listImgs.map((img, index) => (
              <div
                data-src={`/project/${itemFound.id}/${img}.png`}
                key={index}
              ></div>
            ))}
          </AwesomeSlider>
        </div>
        <div className="section_info">
          <h2>About this project</h2>
          <p>{itemFound.about[0]}</p>
          <hr />
          <p>{itemFound.about[1]}</p>
        </div>
        <div className="section_info">
          <h2>Technical Sheet</h2>
          <p>
            <em>
              Code technologies I got involved while working on this project
            </em>
          </p>
          <hr />
          <ul className="keywords">
            {itemFound.technical.map((tech) => (
              <li>{tech}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
