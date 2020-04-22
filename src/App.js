import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./Home"
import About from "./About"
import logo from "./logo.png"
import Projects from "./Projects"
import "./App.css"

class App extends React.Component {
  render() {
    return (
      <div className="all">
        <div id="header">
          <img src={logo} alt="/" id="logo" />
          <div className = "credentials">Jakub Filipowski</div>
          <div className = "motto">To desing is to create new tomorrow</div>
        </div>

        <div>
          <Router>
            <div className="navbar">
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/projects">Projects</Link>
            </div>
            <div className="content">
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/projects" component={Projects} />
            </div>
          </Router>
        </div>
        <div className="footer">contacts</div>
      </div>
    );
  }
}
export default App;