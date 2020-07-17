import React, { Component, Fragment } from "react";

export default class About extends Component {
  componentDidMount() {
    document.title = "About";
  }
  render() {
    return (
      <Fragment>
        <section id="about">
          <div className="container">
            <div className="flex row">
              <div className="flex flex-50 about-left">
                <h2 className="sec-ttl">About</h2>
                <div className="ttl-bar"></div>
                <p>
                  Ut tempor et kasd ipsum consetetur dolor ipsum, aliquyam et
                  lorem sit kasd erat nonumy aliquyam rebum, ut vero dolor.
                </p>
                <p>
                  Nevermore of token that me door the purple rapping that, thy
                  by he these beating bird in to, on what my till feather
                  wandering. With then the and explore the, mefilled my mefilled
                  here disaster bird chamber his this, nevermore this of my
                  whispered, window sad his nights ebony raven.
                </p>
                <p>
                  Ut tempor et kasd ipsum consetetur dolor ipsum, aliquyam et
                  lorem sit kasd erat nonumy aliquyam rebum, ut vero dolor.
                </p>
              </div>
              <div className="flex flex-50">
                <div id="pyramid">
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}
