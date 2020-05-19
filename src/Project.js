import React, { Component } from 'react';
import "./Project.css"

export default class Project extends Component {
    constructor(props){
        super(props)
    }
    render() {
        
        return (
            <figure className = "projectTile">
                <img className = "projectImg"src = {this.props.src[this.props.data.id]} alt = "/"/>
        <figcaption className = "projectCaption">{this.props.data.description}</figcaption>
            </figure>
        );
    }
}
