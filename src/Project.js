import React, { Component } from 'react';
import "./Project.css"

export default class Project extends Component {
    redirect = () =>{
        window.open(this.props.data.page)
    }
    render() {
        return (
            <figure onClick = {this.redirect} className = "projectTile">
                <img className = "projectImg" src = {this.props.src[this.props.data.id]} alt = "/"/>
                <figcaption className = "projectCaption">{this.props.data.description}</figcaption>
            </figure>
        );
    }
}
