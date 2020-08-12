import React, { Component } from "react";
import { AwesomeButton } from "react-awesome-button";

export default class Contact extends Component {
  componentDidMount() {
    document.title = "Contact";
  }
  render() {
    return (
      <section id="contact">
        <div className="container">
          <h2 className="sec-ttl">Contact</h2>
          <div className="ttl-bar"></div>
          <h3>Get in touch</h3>
          <p>
            If you wanna get in touch, talk to me about a project collaboration
            or just say hi,
            <br /> fill up the awesome form below or send an email to{" "}
            <a href="mailto:nguyenkimthanh901@gmail.com">
              nguyenkimthanh901@gmail.com
            </a>{" "}
            and ~let's talk.
          </p>

          <form className="formContact">
            <ul>
              <li className="half">
                <input
                  className="input__field input__field--hoshi"
                  placeholder="Name"
                  type="text"
                  name="name"
                  autoComplete="off"
                />
                <label className="input__label input__label--hoshi"></label>
              </li>
              <li className="half">
                <input
                  className="input__field input__field--hoshi"
                  placeholder="Email"
                  type="email"
                  name="email"
                  autoComplete="off"
                />
                <label className="input__label input__label--hoshi"></label>
              </li>
              <li>
                <input
                  className="input__field input__field--hoshi"
                  placeholder="Subject"
                  type="text"
                  name="subject"
                />
                <label className="input__label input__label--hoshi"></label>
              </li>
              <li>
                <textarea
                  className="input__field--hoshi"
                  placeholder="Message"
                  name="msg"
                  defaultValue={""}
                />
                <label className="input__label input__label--hoshi"></label>
              </li>
              <li>
                <input
                  id="submit"
                  type="submit"
                  className="flat-button"
                  defaultValue="SEND"
                />
              </li>
            </ul>
          </form>
          <h3>Let's get social</h3>
          <ul className="list-socical">
            <li>
              <AwesomeButton type="facebook" href="#" target="_blank">
                <svg
                  className="i-svg"
                  height={50}
                  version="1.1"
                  width={50}
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 50 50"
                  space="preserve"
                  data-icon="facebook,"
                >
                  <path
                    d="M27.845,47.469V27.81h8.426l1.404-8.425h-9.83v-4.213c0-2.81,1.406-4.213,4.213-4.213h4.213V2.531 c-1.405,0-4.55,0-7.021,0c-7.021,0-9.83,4.213-9.83,11.234v5.618h-8.425v8.424h8.425v19.661H27.845L27.845,47.469z"
                    fill="#ffffff"
                  />
                </svg>{" "}
                Facebook
              </AwesomeButton>
            </li>
            <li>
              <AwesomeButton
                type="github"
                href="https://github.com/kthanhnguyen"
                target="_blank"
              >
                <svg
                  className="i-svg"
                  height={50}
                  version="1.1"
                  width={50}
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 50 50"
                  space="preserve"
                  data-icon="facebook,"
                >
                  <path
                    d="M24.999,2.48c-12.75,0-23.087,10.338-23.087,23.09c0,10.199,6.613,18.854,15.791,21.907 c1.154,0.211,1.518-0.474,1.518-1.084c0-0.547,0.011-2.082,0-4.01c-6.422,1.398-7.753-3.038-7.753-3.038 c-1.048-2.671-2.562-3.377-2.562-3.377c-2.095-1.433,0.158-1.407,0.158-1.407c2.317,0.163,3.538,2.383,3.538,2.383 c2.059,3.522,5.403,2.505,6.717,1.916c0.21-1.491,0.808-2.51,1.468-3.087C15.66,35.188,10.27,33.211,10.27,24.361 c0-2.521,0.9-4.581,2.376-6.194c-0.239-0.584-1.031-2.932,0.226-6.112c0,0,1.939-0.62,6.349,2.369 c1.841-0.513,3.817-0.768,5.78-0.777c1.962,0.009,3.938,0.264,5.781,0.777c4.409-2.988,6.346-2.369,6.346-2.369 c1.258,3.18,0.466,5.528,0.229,6.112c1.478,1.613,2.373,3.673,2.373,6.194c0,8.872-5.397,10.823-10.543,11.392 c0.828,0.717,1.582,2.101,1.582,4.255c0,2.887,0,5.632,0,6.392c0,0.617,0.372,1.302,1.544,1.076 c9.167-3.059,15.776-11.708,15.776-21.905C48.089,12.818,37.75,2.48,24.999,2.48z"
                    fill="#ffffff"
                  />
                </svg>
                GitHub
              </AwesomeButton>
            </li>
            <li>
              <AwesomeButton type="primary" href="/" target="_blank">
                <svg
                  className="i-svg"
                  height={50}
                  version="1.1"
                  width={50}
                  viewBox="0 0 512 512"
                  style={{ enableBackground: "new 0 0 512 512" }}
                  xmlSpace="preserve"
                >
                  <g>
                    <g>
                      <path
                        d="M414.007,148.75c5.522,0,10-4.477,10-10V30c0-16.542-13.458-30-30-30h-364c-16.542,0-30,13.458-30,30v452
			c0,16.542,13.458,30,30,30h364c16.542,0,30-13.458,30-30v-73.672c0-5.523-4.478-10-10-10c-5.522,0-10,4.477-10,10V482
			c0,5.514-4.486,10-10,10h-364c-5.514,0-10-4.486-10-10V30c0-5.514,4.486-10,10-10h364c5.514,0,10,4.486,10,10v108.75
			C404.007,144.273,408.485,148.75,414.007,148.75z"
                      />
                    </g>
                  </g>
                  <g>
                    <g>
                      <path
                        d="M212.007,54c-50.729,0-92,41.271-92,92c0,26.317,11.11,50.085,28.882,66.869c0.333,0.356,0.687,0.693,1.074,1
			c16.371,14.979,38.158,24.13,62.043,24.13c23.885,0,45.672-9.152,62.043-24.13c0.387-0.307,0.741-0.645,1.074-1
			c17.774-16.784,28.884-40.552,28.884-66.869C304.007,95.271,262.736,54,212.007,54z M212.007,218
			c-16.329,0-31.399-5.472-43.491-14.668c8.789-15.585,25.19-25.332,43.491-25.332c18.301,0,34.702,9.747,43.491,25.332
			C243.405,212.528,228.336,218,212.007,218z M196.007,142v-6.5c0-8.822,7.178-16,16-16s16,7.178,16,16v6.5c0,8.822-7.178,16-16,16
			S196.007,150.822,196.007,142z M269.947,188.683c-7.375-10.938-17.596-19.445-29.463-24.697c4.71-6.087,7.523-13.712,7.523-21.986
			v-6.5c0-19.851-16.149-36-36-36s-36,16.149-36,36v6.5c0,8.274,2.813,15.899,7.523,21.986
			c-11.867,5.252-22.088,13.759-29.463,24.697c-8.829-11.953-14.06-26.716-14.06-42.683c0-39.701,32.299-72,72-72s72,32.299,72,72
			C284.007,161.967,278.776,176.73,269.947,188.683z"
                      />
                    </g>
                  </g>
                  <g>
                    <g>
                      <path d="M266.007,438h-54c-5.522,0-10,4.477-10,10s4.478,10,10,10h54c5.522,0,10-4.477,10-10S271.529,438,266.007,438z" />
                    </g>
                  </g>
                  <g>
                    <g>
                      <path d="M266.007,382h-142c-5.522,0-10,4.477-10,10s4.478,10,10,10h142c5.522,0,10-4.477,10-10S271.529,382,266.007,382z" />
                    </g>
                  </g>
                  <g>
                    <g>
                      <path d="M266.007,326h-142c-5.522,0-10,4.477-10,10s4.478,10,10,10h142c5.522,0,10-4.477,10-10S271.529,326,266.007,326z" />
                    </g>
                  </g>
                  <g>
                    <g>
                      <path
                        d="M88.366,272.93c-1.859-1.86-4.439-2.93-7.079-2.93c-2.631,0-5.211,1.07-7.07,2.93c-1.86,1.86-2.93,4.44-2.93,7.07
			s1.069,5.21,2.93,7.07c1.87,1.86,4.439,2.93,7.07,2.93c2.64,0,5.21-1.07,7.079-2.93c1.86-1.86,2.931-4.44,2.931-7.07
			S90.227,274.79,88.366,272.93z"
                      />
                    </g>
                  </g>
                  <g>
                    <g>
                      <path
                        d="M88.366,328.93c-1.869-1.86-4.439-2.93-7.079-2.93c-2.631,0-5.2,1.07-7.07,2.93c-1.86,1.86-2.93,4.44-2.93,7.07
			s1.069,5.21,2.93,7.07c1.87,1.86,4.439,2.93,7.07,2.93c2.64,0,5.21-1.07,7.079-2.93c1.86-1.86,2.931-4.44,2.931-7.07
			S90.227,330.79,88.366,328.93z"
                      />
                    </g>
                  </g>
                  <g>
                    <g>
                      <path
                        d="M88.366,384.93c-1.869-1.86-4.439-2.93-7.079-2.93c-2.631,0-5.2,1.07-7.07,2.93c-1.86,1.86-2.93,4.44-2.93,7.07
			s1.069,5.21,2.93,7.07c1.859,1.86,4.439,2.93,7.07,2.93c2.64,0,5.22-1.07,7.079-2.93c1.86-1.86,2.931-4.44,2.931-7.07
			S90.227,386.79,88.366,384.93z"
                      />
                    </g>
                  </g>
                  <g>
                    <g>
                      <path d="M266.007,270h-142c-5.522,0-10,4.477-10,10s4.478,10,10,10h142c5.522,0,10-4.477,10-10S271.529,270,266.007,270z" />
                    </g>
                  </g>
                  <g>
                    <g>
                      <path
                        d="M491.002,130.32c-9.715-5.609-21.033-7.099-31.871-4.196c-10.836,2.904-19.894,9.854-25.502,19.569L307.787,363.656
			c-0.689,1.195-1.125,2.52-1.278,3.891l-8.858,79.344c-0.44,3.948,1.498,7.783,4.938,9.77c1.553,0.896,3.278,1.34,4.999,1.34
			c2.092,0,4.176-0.655,5.931-1.948l64.284-47.344c1.111-0.818,2.041-1.857,2.73-3.052l125.841-217.963
			C517.954,167.638,511.058,141.9,491.002,130.32z M320.063,426.394l4.626-41.432l28.942,16.71L320.063,426.394z M368.213,386.996
			l-38.105-22l100.985-174.91l38.105,22L368.213,386.996z M489.054,177.693l-9.857,17.073l-38.105-22l9.857-17.073
			c2.938-5.089,7.682-8.729,13.358-10.25c5.678-1.522,11.606-0.74,16.694,2.198c5.089,2.938,8.729,7.682,10.25,13.358
			C492.772,166.675,491.992,172.604,489.054,177.693z"
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
                </svg>{" "}
                Preview My CV
              </AwesomeButton>
            </li>
          </ul>
        </div>
      </section>
    );
  }
}
