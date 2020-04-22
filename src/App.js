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
          <div id = "logo"></div>
          <q className="motto">To desing is to create new tomorrow</q>
          <div className="spacing"></div>
        </div>

        <div className = "main">
          <Router>
            <div className="navbar">
              <Link style={{ color:"black", fontSize:"2em", textDecoration: 'none' }} className = "links" to="/">Home</Link>
              <Link style={{ color:"black", fontSize:"2em", textDecoration: 'none' }} className = "links" to="/about">About</Link>
              <Link style={{ color:"black", fontSize:"2em", textDecoration: 'none' }} to="/projects">Projects</Link>
            </div>
            <div className="content">
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/projects" component={Projects} />
            </div>
          </Router>
        </div>
      </div>
    );
  }
}
export default App;