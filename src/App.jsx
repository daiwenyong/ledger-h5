// import './App.css'
import React from 'react';
import { ConfigProvider, Button } from 'zarm';
import zhCN from 'zarm/lib/config-provider/locale/zh_CN';
import 'zarm/dist/zarm.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import routes from './router'

function App() {
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
      </Router>
    </ConfigProvider>
  )
}

export default App  