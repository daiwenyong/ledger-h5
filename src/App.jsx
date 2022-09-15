// import './App.css'
import React, { useState, useEffect } from 'react';
import { ConfigProvider, Button } from 'zarm';
import zhCN from 'zarm/lib/config-provider/locale/zh_CN';
import 'zarm/dist/zarm.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation
} from 'react-router-dom'

import routes from './router'
import 'lib-flexible'
import NavBar from './components/NavBar';

function App() {
  const location = useLocation()
  const { pathname } = location
  const needs = ['/', '/home']
  const [show, setShow] = useState(false)

  useEffect(() => {
    setShow(needs.includes(pathname))
  },[pathname])
  return (
    <ConfigProvider local={zhCN}>
      <Router>
        <Switch>
          {
            routes.map((route) => {
              return <Route exact key={route.path} path={route.path}>
                <route.component />
              </Route>
            })
          }
        </Switch>
        <NavBar showNav={show}></NavBar>
      </Router>
    </ConfigProvider>
  )
}

export default App  