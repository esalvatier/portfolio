import React from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Nav from "./components/Nav";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Game from "./pages/Game";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/portfolio" component={Portfolio}/>
          <Route exact path="/contact" component={Contact}/>
          <Route exact path="/game" component={Game}/>
          <Route exact path="/" component={About}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
