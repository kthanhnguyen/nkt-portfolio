import React, { Fragment } from "react";
import "./App.css";
import { BrowserRouter, Switch } from "react-router-dom";
import { routesHome } from "./routes/routes";
import HomeTemplate from "./templates/HomeTemplate";
import Wrapper from "./components/Wrapper";

const showMenusHome = (routes) => {
  if (routes && routes.length > 0) {
    return routes.map((item, index) => {
      return (
        <HomeTemplate
          key={index}
          path={item.path}
          exact={item.exact}
          Component={Wrapper(item.component)}
        />
      );
    });
  }
};

function App() {
  return (
    <BrowserRouter>
      <Fragment>
        <Switch>{showMenusHome(routesHome)}</Switch>
      </Fragment>
    </BrowserRouter>
  );
}

export default App;
