import React, { Component } from "react";
import TagCanvas from "../helpers/examples";
import { Link } from "react-router-dom";

export default class Skills extends Component {
  componentDidMount() {
    document.title = "Skills";

    this.setTime = setInterval(() => {
      this.forceUpdate();
    }, 2500);

    TagCanvas.textColour = "#ffffff";
    TagCanvas.outlineThickness = 0.5;
    TagCanvas.outlineColour = "#FE0853";
    TagCanvas.maxSpeed = 0.06;
    TagCanvas.freezeActive = true;
    TagCanvas.shuffleTags = true;
    TagCanvas.shape = "sphere";
    TagCanvas.zoom = 0.9;
    TagCanvas.noSelect = true;
    TagCanvas.textFont = null;
    TagCanvas.pinchZoom = true;
    TagCanvas.freezeDecel = true;
    TagCanvas.fadeIn = 3000;
    TagCanvas.initial = [0.3, -0.1];
    TagCanvas.depth = 1.4;
    TagCanvas.Start("myCanvas");
  }

  componentWillUnmount() {
    clearInterval(this.setTime);
  }

  render() {
    return (
      <section id="skills">
        <div className="container">
          <div className="flex row">
            <div className="flex flex-50">
              <h2 className="sec-ttl">Skills</h2>
              <div className="ttl-bar"></div>
            </div>
            <div className="flex flex-50">
              <canvas width="500" height="500" id="myCanvas">
                <p>
                  Anything in here will be replaced on browsers that support the
                  canvas element
                </p>
                <ul>
                  <li>
                    <Link to="/">HTML 5</Link>
                  </li>
                  <li>
                    <Link to="/">CSS</Link>
                  </li>
                  <li>
                    <Link to="/">JavaScript</Link>
                  </li>
                  <li>
                    <Link to="/">TypeScript</Link>
                  </li>
                  <li>
                    <Link to="/">REST</Link>
                  </li>
                  <li>
                    <Link to="/">JSON</Link>
                  </li>
                  <li>
                    <Link to="/">React</Link>
                  </li>
                  <li>
                    <Link to="/">Redux</Link>
                  </li>
                  <li>
                    <Link to="/">Angular 2+</Link>
                  </li>
                  <li>
                    <Link to="/">Git</Link>
                  </li>
                  <li>
                    <Link to="/">_lodash</Link>
                  </li>
                  <li>
                    <Link to="/">Bootstrap</Link>
                  </li>
                  <li>
                    <Link to="/">SASS</Link>
                  </li>
                  <li>
                    <Link to="/">jQuery</Link>
                  </li>
                  <li>
                    <Link to="/">Gulp</Link>
                  </li>
                  <li>
                    <Link to="/">npm</Link>
                  </li>
                  <li>
                    <Link to="/">BEM</Link>
                  </li>
                  <li>
                    <Link to="/">Photoshop</Link>
                  </li>
                  <li>
                    <Link to="/">Firebase</Link>
                  </li>
                </ul>
              </canvas>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
