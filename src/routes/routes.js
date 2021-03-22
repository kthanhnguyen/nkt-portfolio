import Home from "../pages/Home";
import About from "../pages/About";
import Skills from "../pages/Skills";
import Portfolio from "../pages/Portfolio";
import Contact from "../pages/Contact";
import Detail from "../pages/Detail";
import PageNotFound from "../pages/PageNotFound";

const routesHome = [
  {
    path: "/",
    exact: true,
    component: Home,
  },
  {
    path: "/about",
    exact: true,
    component: About,
  },
  {
    path: "/skills",
    exact: true,
    component: Skills,
  },
  {
    path: "/portfolio",
    exact: true,
    component: Portfolio,
  },
  {
    path: "/contact",
    exact: true,
    component: Contact,
  },
  {
    path: "",
    exact: false,
    component: PageNotFound,
  },
];

export { routesHome };
