import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import {Home,Cart,Diet,Shop,Workout} from './components'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/netfit" exact component={Home} />
          <Route path="/shop" exact component={Shop} />
          <Route path="/diet" exact component={Diet} />
          <Route path="/workout" exact component={Workout} />
          <Route path="/cart" exact component={Cart} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
