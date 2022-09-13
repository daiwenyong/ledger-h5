// import './App.css'

import {
  BrowserRouter as Router,
  Switch,
  Route
 } from 'react-router-dom'

import routes from './router'

function App() {
  return (
    <Router>
      <Switch>
        {
            routes.map((route) => {
              return <Route exact key={route.path} path={route.path}>
                <route.component/>
              </Route>
            })
        }
      </Switch>
    </Router>
  )
}

export default App  