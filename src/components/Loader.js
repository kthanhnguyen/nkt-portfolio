import React, { Component } from "react";
import { TweenLite } from "gsap/all";

export default class Loader extends Component {
  constructor(props) {
    super(props);
    this.progressBar = null;
    this.loading = null;
    this.myTween = null;
    this.loadingTween = null;
  }

  componentDidMount() {
    this.preloaderHide();
    setTimeout(() => {
      this.loadingTween = TweenLite.fromTo(
        this.loading,
        0.6,
        {
          immediateRender: false,
          x: "0%",
          ease: "Power4.easeIn",
        },
        {
          x: "100%",
        },
        0
      );
    }, 2000);

    this.myTween = TweenLite.fromTo(
      this.progressBar,
      1,
      { width: 0 },
      { width: "100%", duration: 1 }
    );
  }

  preloaderHide = () => {
    this.loadingTween = TweenLite.fromTo(
      this.loading,
      0.5,
      {
        immediateRender: false,
        x: "-100%",
        display: "none",
        ease: "Power4.easeOut",
      },
      {
        x: "0%",
        display: "block",
      },
      1
    );
  };

  render() {
    return (
      <div className="loading" id="loading" ref={(div) => (this.loading = div)}>
        <div className="inner">
          <div className="loading-logo">
            <img src="/img/logo.png" alt="" />
          </div>
          <p>Loading...</p>
          <div className="progress-bar">
            <div
              className="progress-bar_bg"
              id="progress-bar_bg"
              ref={(div) => (this.progressBar = div)}
            ></div>
          </div>
        </div>
      </div>
    );
  }
}
