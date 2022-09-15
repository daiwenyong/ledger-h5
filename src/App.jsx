// import './App.css'
import React, { useState, useEffect } from 'react';
import { ConfigProvider, Button } from 'zarm';
import zhCN from 'zarm/lib/config-provider/locale/zh_CN';
import 'zarm/dist/zarm.css';

import {
  Routes , 
  Route ,
  BrowserRouter,
  useLocation
} from 'react-router-dom'

import routes from './router'

import NavBar from './components/NavBar';
import Index from './pages/Index';
import About from './pages/About';
import 'lib-flexible'

function App() {
  const location = useLocation()
  const { pathname } = location
  const needs = ['/', '/about']
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    setVisible(needs.includes(pathname))
  },[pathname])
  return (
    <ConfigProvider local={zhCN}>
      <>
        <Routes>
          {
            routes.map((route) => {
              return <Route exact key={route.path} path={route.path} element={<route.component />}>
              </Route>
            })
          }
        </Routes>
        <NavBar visible={visible}></NavBar>
      </>
    </ConfigProvider>
  )
}

export default App  