import React, { Fragment } from "react";
import { Route } from "react-router-dom";

import Navbar from "../components/Navbar";
import Cursor from "../components/Cursor";

const HomeLayout = (props) => {
  return (
    <Fragment>
      <Navbar />
      <div className="content">{props.children}</div>
    </Fragment>
  );
};

function HomeTemplate({ Component, ...props }) {
  return (
    <Fragment>
      <Route
        {...props}
        render={(propsComponent) => (
          <Fragment>
            <Cursor />
            <HomeLayout>
              <Component {...propsComponent} />
            </HomeLayout>
          </Fragment>
        )}
      />
    </Fragment>
  );
}
export default HomeTemplate;
