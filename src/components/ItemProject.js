import React, { Component } from "react";
import { AwesomeButton } from "react-awesome-button";
import Slider from "react-slick";

function NextArrow(props) {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <span></span>
    </div>
  );
}

function PrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <span></span>
    </div>
  );
}

export default class ItemProject extends Component {
  componentDidMount() {}
  render() {
    const { itemFound } = this.props;
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
    };

    return (
      <div className="detail">
        <div className="detail__name">{itemFound.name}</div>
        <div className="share">
          {itemFound.link === "#" ? (
            ""
          ) : (
            <AwesomeButton
              size="large"
              href={itemFound.link}
              target="_blank"
              className="btn-visit"
            >
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
          )}
        </div>
        <div className="slide">
          <Slider {...settings}>
            {itemFound.listImgs.map((img, index) => (
              <div key={index}>
                <div
                  className="slide-item"
                  style={{
                    backgroundImage: `url(/project/${itemFound.id}/${img}.png)`,
                  }}
                ></div>
              </div>
            ))}
          </Slider>
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
            {itemFound.technical.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
        </div>
        {/* <div>
          <AwesomeButton
            size="large"
            className="btn-back"
            onClick={this.props.closeModal}
          >
            <svg
              className="i-svg"
              height="50"
              version="1.1"
              width="50"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 477.862 477.862"
              style={{ enableBackground: "new 0 0 477.862 477.862" }}
              xmlSpace="preserve"
            >
              <g>
                <g>
                  <path
                    d="M187.722,102.856V17.062C187.719,7.636,180.076-0.003,170.65,0c-4.834,0.001-9.44,2.053-12.676,5.644L4.375,176.311
			c-5.617,6.256-5.842,15.67-0.529,22.187l153.6,187.733c5.968,7.295,16.72,8.371,24.016,2.403c3.952-3.233,6.249-8.066,6.26-13.172
			v-85.043c134.827,4.386,218.965,62.02,256.888,175.787c2.326,6.96,8.841,11.653,16.179,11.656c0.92,0.003,1.84-0.072,2.748-0.222
			c8.256-1.347,14.319-8.479,14.319-16.845C477.855,259.818,356.87,112.174,187.722,102.856z M170.655,255.995
			c-9.426,0-17.067,7.641-17.067,17.067v54.613L39.532,188.257l114.057-126.72v57.924c0,9.426,7.641,17.067,17.067,17.067
			c134.144,0,234.53,92.826,264.124,234.462C379.841,294.6,291.385,255.995,170.655,255.995z"
                  />
                </g>
              </g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
            </svg>
            BACK
          </AwesomeButton>
        </div> */}
      </div>
    );
  }
}
