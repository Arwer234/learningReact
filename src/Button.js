import React, { Component } from 'react';
import "./Button.css"

export default class Button extends Component {
    render() {
        return (
            <div className = "myButton" onClick = {this.props.onClick}>
                <p>{this.props.text}</p>
            </div>
        );
    }
}
