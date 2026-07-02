import Home from '../pages/Home'
import About from '../pages/About'
import Skills from '../pages/Skills'
import Portfolio from '../pages/Portfolio'
import Contact from '../pages/Contact'
import Detail from '../pages/Detail'
import PageNotFound from '../pages/PageNotFound'

const routesHome = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/about',
    component: About,
  },
  {
    path: '/skills',
    component: Skills,
  },
  {
    path: '/portfolio',
    component: Portfolio,
  },
  {
    path: '/portfolio/:id',
    component: Detail,
  },
  {
    path: '/contact',
    component: Contact,
  },
  {
    path: '*',
    component: PageNotFound,
  },
]

export { routesHome }
