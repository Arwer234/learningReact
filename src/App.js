import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Button from "./Button"
import TileList from "./TileList"
import "./App.css"
import ProjectList from "./ProjectList"
import { Scrollbars } from 'react-custom-scrollbars';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }
  
  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }
  
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }
  
  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }
  render() {
    return (
      <div className="all">
        <Scrollbars style = {{width:this.state.width,height:this.state.height}}>
        <div className="upper">
          <div className="navbar">
            <div className="logo">
              <a href = "https://github.com/Arwer234">
                <img src="https://github.githubassets.com/images/modules/open_graph/github-mark.png" alt="/" />
                </a>
            </div>
            <div className="navigation">
              <Button text="Contact" />
            </div>
          </div>
          <div className="greetings">
            <div className="is-main-header">Jakub Filipowski</div>
            <div id="subtitleGreetings">React & React Native Developer</div>
          </div>
          <div className="main">
            <img src = "https://miro.medium.com/max/6044/1*SAn3UosXBPpt-1H-3VdLMw.jpeg" alt = "/"/>
          </div>
        </div>
        <div className="mid">
          <div className="description">
            <span className="descriptionHeader">Hi! I'm Kuba. Very pleased!</span>
            <span className="descriptionContent">I started to code around 2 years ago
            in high school, and thanks to wonderful teachers it was easy to begin the
            journey. Through the first little projects, games, like battleship,
            tic tac toe, MP3 player (combined with database), to more complex things
            like hexGame (with threejs), RPG game "Dratewka" and Monopoly. Now my goal is to
            design webApps, that have to be simple and transparent. If you are looking for open-minded designer, I'm in!</span>
          </div>
        </div>
        <div className = "skills">
          <div className = "is-main-header">Skills</div>
          <TileList/>
        </div>
        <div className = "projects">
          <div className = "is-main-header">Projects</div>
          <ProjectList projects = {[]}/>
        </div>
        <div className = "footer">
        © 2020 copyright Jakub Filipowski
        </div>
        </Scrollbars>
      </div>


    );
  }
}
export default App;