import React, { Component } from "react";
import TagCanvas from "../helpers/tagcanvas";
import { Link } from "react-router-dom";

export default class Skills extends Component {
  componentDidMount() {
    document.title = "Skills | NKT";

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
      <section id="skills" className="skills">
        <div className="container">
          <div className="flex row">
            <div className="flex-50 skills__info">
              <h2 className="sec-ttl">Skills</h2>
              <div className="ttl-bar"></div>
              <p>
                The main area of my expertise is front end development (client
                side of the web).
              </p>
              <p>
                Worked on a multitude of web and print based projects for a
                range of clients providing Web Design (Photoshop, Adobe Xd) and
                Development (HTML, CSS, SASS, JS, jQuery, Bootstrap, Responsive
                Layouts, Browser compatibility).
              </p>
              <p>Familiar frameworks like ReactJS, Angular2+.</p>
            </div>
            <div className="flex-50">
              <canvas width="500" height="500" id="myCanvas">
                <p>
                  Anything in here will be replaced on browsers that support the
                  canvas element
                </p>
                <ul>
                  <li>
                    <Link to="https://en.wikipedia.org/wiki/HTML">HTML 5</Link>
                  </li>
                  <li>
                    <Link to="https://en.wikipedia.org/wiki/Cascading_Style_Sheets">
                      CSS
                    </Link>
                  </li>
                  <li>
                    <Link to="https://en.wikipedia.org/wiki/JavaScript">
                      JavaScript
                    </Link>
                  </li>
                  <li>
                    <Link to="https://en.wikipedia.org/wiki/JavaScript">
                      TypeScript
                    </Link>
                  </li>
                  <li>
                    <Link to="https://en.wikipedia.org/wiki/Representational_state_transfer">
                      REST
                    </Link>
                  </li>
                  <li>
                    <Link to="https://en.wikipedia.org/wiki/JSON">JSON</Link>
                  </li>
                  <li>
                    <Link to="https://en.wikipedia.org/wiki/React_(web_framework)">
                      ReactJS
                    </Link>
                  </li>
                  <li>
                    <Link to="https://en.wikipedia.org/wiki/Redux_(JavaScript_library)">
                      Redux
                    </Link>
                  </li>
                  <li>
                    <Link to="https://en.wikipedia.org/wiki/AngularJS">
                      Angular 2+
                    </Link>
                  </li>
                  <li>
                    <Link to="https://en.wikipedia.org/wiki/Node.js">
                      Node JS
                    </Link>
                  </li>
                  <li>
                    <Link to="https://en.wikipedia.org/wiki/Git">Git</Link>
                  </li>
                  <li>
                    <Link to="https://en.wikipedia.org/wiki/Lodash">
                      _lodash
                    </Link>
                  </li>
                  <li>
                    <Link to="https://en.wikipedia.org/wiki/Bootstrap_(front-end_framework)">
                      Bootstrap
                    </Link>
                  </li>
                  <li>
                    <Link to="https://en.wikipedia.org/wiki/Sass_(stylesheet_language)">
                      SASS
                    </Link>
                  </li>
                  <li>
                    <Link to="https://en.wikipedia.org/wiki/JQuery">
                      jQuery
                    </Link>
                  </li>
                  <li>
                    <Link to="http://gulpjs.com/">Gulp</Link>
                  </li>
                  <li>
                    <Link to="https://www.npmjs.com/">npm</Link>
                  </li>
                  <li>
                    <Link to="https://en.wikipedia.org/wiki/BEM">BEM</Link>
                  </li>
                  <li>
                    <Link to="https://en.wikipedia.org/wiki/Adobe_Photoshop">
                      Photoshop
                    </Link>
                  </li>
                  <li>
                    <Link to="https://en.wikipedia.org/wiki/Firebase">
                      Firebase
                    </Link>
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
