import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./Home"
import About from "./About"
import Product from "./Product"

class App extends React.Component {
  render() {
    return (
      <div className="all">
        <h1 className="header">My Application</h1>
        <div>
          <Router>
            <div className="navbar">
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/product">Product</Link>
            </div>
            <div className="content">
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/product" component={Product} />
            </div>
          </Router>
        </div>
      </div>
    );
  }
}
export default App;