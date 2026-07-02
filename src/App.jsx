import React, { Fragment } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { routesHome } from './routes/routes'
import HomeLayout from './templates/HomeTemplate'
import PageWrapper from './components/Wrapper'

function App() {
  return (
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Fragment>
        <Routes>
          <Route element={<HomeLayout />}>
            {routesHome.map((item, index) => (
              <Route
                key={index}
                path={item.path}
                element={<PageWrapper component={item.component} />}
              />
            ))}
          </Route>
        </Routes>
      </Fragment>
    </BrowserRouter>
  )
}

export default App
