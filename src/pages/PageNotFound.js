import React, { Component } from "react";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/themes/theme-c137.css";

export default class PageNotFound extends Component {
  componentDidMount() {
    document.title = "Page Not Found | NKT";
  }
  render() {
    return (
      <section id="not-found">
        <div className="container">
          <div>
            <p className="red">404</p>
            <p>Something went wrong.</p>
            <AwesomeButton className="btn-primary" href="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                version="1.1"
                id="Capa_1"
                x="0px"
                y="0px"
                viewBox="0 0 477.862 477.862"
                style={{ enableBackground: "new 0 0 477.862 477.862" }}
                xmlSpace="preserve"
                className="i-svg"
              >
                <g>
                  <g>
                    <g>
                      <path
                        d="M187.722,102.856V17.062C187.719,7.636,180.076-0.003,170.65,0c-4.834,0.001-9.44,2.053-12.676,5.644L4.375,176.311    c-5.617,6.256-5.842,15.67-0.529,22.187l153.6,187.733c5.968,7.295,16.72,8.371,24.016,2.403c3.952-3.233,6.249-8.066,6.26-13.172    v-85.043c134.827,4.386,218.965,62.02,256.888,175.787c2.326,6.96,8.841,11.653,16.179,11.656c0.92,0.003,1.84-0.072,2.748-0.222    c8.256-1.347,14.319-8.479,14.319-16.845C477.855,259.818,356.87,112.174,187.722,102.856z"
                        data-original="#000000"
                        className="active-path"
                        data-old_color="#000000"
                        fill="#FFFFFF"
                      />
                    </g>
                  </g>
                </g>{" "}
              </svg>
              Back To Home
            </AwesomeButton>
          </div>
        </div>
      </section>
    );
  }
}
