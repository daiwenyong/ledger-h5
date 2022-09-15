// import './App.css'
import React, { useState, useEffect } from 'react';
import { ConfigProvider, Button } from 'zarm';
import zhCN from 'zarm/lib/config-provider/locale/zh_CN';
import 'zarm/dist/zarm.css';

import {
  Routes , Route ,
  BrowserRouter,
  useLocation
} from 'react-router-dom'

import routes from './router'

import NavBar from './components/NavBar';
import Index from './pages/Index';
import About from './pages/About';
import 'lib-flexible'

function App() {
  // const location = useLocation()
  // const { pathname } = location
  const needs = ['/', '/home']
  const [show, setShow] = useState(false)

  // useEffect(() => {
  //   //setShow(needs.includes(pathname))
  // },[pathname])
  return (
    <ConfigProvider local={zhCN}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index/>} />
          <Route path="/about" element={<About/>} />

          {
            // routes.map((route) => {
            //   return <Route exact key={route.path} path={route.path}>
            //     <route.component />
            //   </Route>
            // })
          }
        </Routes>
        <NavBar showNav={show}></NavBar>
      </BrowserRouter>
    </ConfigProvider>
  )
}

export default App  