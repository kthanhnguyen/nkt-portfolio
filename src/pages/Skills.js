import React, { Component } from "react";
import TagCloud from "react-tag-cloud";
import randomColor from "randomcolor";

const styles = {
  large: {
    fontSize: 50,
  },
  normal: {
    fontSize: 30,
  },
  small: {
    opacity: 0.7,
    fontSize: 16,
  },
};

export default class Skills extends Component {
  componentDidMount() {
    document.title = "Skills";

    this.setTime = setInterval(() => {
      this.forceUpdate();
    }, 2500);
  }

  componentWillUnmount() {
    clearInterval(this.setTime);
  }

  render() {
    return (
      <section id="skills">
        <div className="container">
          <h2 className="sec-ttl">Skills</h2>
          <div className="ttl-bar"></div>
          <div className="tag-wrap">
            <div className="app-outer">
              <div className="app-inner">
                <TagCloud
                  className="tag-cloud"
                  style={{
                    fontFamily: "sans-serif",
                    color: () =>
                      randomColor({
                        hue: "white",
                      }),
                    fontSize: 14,
                    padding: 5,
                    width: "100%",
                    height: "100%",
                    flex: 1,
                  }}
                >
                  <div style={styles.large}>HTML 5</div>
                  <div style={styles.large}>CSS</div>
                  <div style={styles.large}>JavaScript</div>
                  <div>TypeScript</div>
                  <div>REST</div>
                  <div>JSON</div>
                  <div style={styles.large}>React</div>
                  <div style={styles.large}>Redux</div>
                  <div>Angular 2+</div>
                  <div style={styles.normal}>Git</div>
                  <div>_lodash</div>
                  <div style={styles.large}>Bootstrap</div>
                  <div style={styles.normal}>SASS</div>
                  <div style={styles.normal}>jQuery</div>
                  <div style={styles.normal}>Gulp</div>
                  <div>npm</div>
                  <div style={styles.normal}>BEM</div>
                  <div>Photoshop</div>
                  <div>Firebase</div>
                </TagCloud>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
