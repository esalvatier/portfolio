import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import About from "./pages/About";
// import Portfolio from "./pages/Portfolio";
// import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={About}/>
          {/* <Route exact path="/portfolio" component={Portfolio}/>
          <Route exact path="/contact" component={Contact}/> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
