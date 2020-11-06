import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./components/screens/Landing"


function App() {
  return (
    <Router>
      <Switch>
        <Route exact to="/" component={Landing}/>
      
      </Switch>
    </Router>
     
  )
}

export default App

