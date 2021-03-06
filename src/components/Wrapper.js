import React, { Component, Fragment } from "react";
import { withRouter } from "react-router";
import Loader from "../components/Loader";

export default (WrappedComponent) => {
  class Wrapper extends Component {
    constructor(props) {
      super(props);
      this.state = {
        isLoading: true,
      };
    }
    componentDidMount = () => this.setTimer();

    componentDidUpdate = (prevProps) => {
      if (this.props.location !== prevProps.location) {
        this.clearTimer();
        this.setState({ isLoading: true }, () => this.setTimer());
      }
    };

    clearTimer = () => clearTimeout(this.timeout);

    timer = () => this.setState({ isLoading: false }, () => this.clearTimer());

    setTimer = () => (this.timeout = setTimeout(this.timer, 2500));

    componentWillUnmount() {
      this.clearTimer();
    }
    render() {
      return (
        <Fragment>
          {this.state.isLoading ? (
            <Loader />
          ) : (
            <WrappedComponent {...this.props} />
          )}
        </Fragment>
      );
    }
  }

  return withRouter(Wrapper);
};
