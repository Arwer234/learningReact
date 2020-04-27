import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./Home"
import About from "./About"
import logo from "./logo.png"
import Projects from "./Projects"
import Button from "./Button"
import "./App.css"

class App extends React.Component {
  render() {
    return (
      <div className="all">
        <div className="upper">
          <div className="navbar">
            <div className="logo">
              <img src="https://facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png?w=512&h=512" alt="/" />
            </div>
            <div className="navigation">
              <Button text="Projects" />
              <Button text="Contact" />
            </div>
          </div>
          <div className="greetings">
            <div id="titleGreetings">Designer of React & ReactNative Apps</div>
            <div id="subtitleGreetings">I create simple things, that give tons of satisfaction</div>
          </div>
          <div className="main">
            <img src="https://miro.medium.com/max/6044/1*SAn3UosXBPpt-1H-3VdLMw.jpeg" alt="/" />
          </div>
          <div className="footer"></div>
        </div>
      </div>


    );
  }
}
export default App;