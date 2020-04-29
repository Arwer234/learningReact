import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Button from "./Button"
import TileList from "./TileList"
import "./App.css"
import Tile from "./Tile";

class App extends React.Component {
  render() {
    return (
      <div className="all">
        <div className="upper">
          <div className="navbar">
            <div className="logo">
              <a href = "https://github.com/Arwer234"><img src="https://github.githubassets.com/images/modules/open_graph/github-mark.png" alt="/" /></a>
            </div>
            <div className="navigation">
              <Button text="Contact" />
            </div>
          </div>
          <div className="greetings">
            <div className="is-main-header">Designer of React & ReactNative Apps</div>
            <div id="subtitleGreetings">Aesthetic look makes your life easier</div>
          </div>
          <div className="main">
            <img src="https://images.pexels.com/photos/169573/pexels-photo-169573.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="/" />
          </div>
        </div>
        <div className="mid">
          <div className="description">
            <span className="descriptionHeader">Hi! I'm Kuba. Very pleased!</span>
            <span className="descriptionContent">I started to code around 2 years ago
            in high school, and thanks to wonderful teachers it was easy to begin the
            journey. Through the first little projects, games, like battleship,
            tic tac toe, MP3 player (combined with database), to more complex things
            like hexGame (with threejs), RPG game "Dratewka" and Monopoly. Now I
            learn and design webApps, that have to be simple and transparent.</span>
          </div>
        </div>
        <div className = "skills">
          <div className = "is-main-header">Skills</div>
          <TileList/>
        </div>
        <div className = "footer">
        © 2020 copyright Jakub Filipowski
        </div>
      </div>


    );
  }
}
export default App;