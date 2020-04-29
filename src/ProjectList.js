import React, { Component } from 'react';
import Project from "./Project"
import "./ProjectList.css"

export default class ProjectList extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        var content;
        for(let i = 0;i<this.props.projects.length;i++){
            if (i%2==0){
                content += <Project layout = "left"/>
            }
            else{
                content += <Project layout = "right"/>
            }
        }
        return (
            <div className = "projectList">
                {content}
            </div>
        );
    }
}
