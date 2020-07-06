import React, { Component } from 'react';
import "./Tile.css"

export default class Tile extends Component {
  clickHandler = () =>{
    console.log(this)
  }
  render() {
    return (
      <div onClick = {this.clickHandler} className="tile is-responsive-tile">
        <img src={this.props.src} alt="/" />
        <div className="tile-description descriptionContent">{this.props.description}</div>
      </div>
    );
  }
}
