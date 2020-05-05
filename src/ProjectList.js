import React, { Component } from 'react';
import Project from "./Project"
import "./ProjectList.css"
import {ProjectData} from "./ProjectData"
import lego from "./lego.png"
import checkers from "./checkers.png"
import hex from "./hex_1.png"
import clicknslide from "./clicknslide.png"
import statki from "./statki.png"

export default class ProjectList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            imgs:[lego, checkers, hex, clicknslide, statki]
        }
    }
    render() {
        var content = [];
        for(let i = 0;i<ProjectData.data.length;i++){
            if (i%2==0){
                content.push(<Project layout = "left" data = {ProjectData.data[i]} src = {this.state.imgs}/>)
            }
            else{
                content.push(<Project layout = "right" data = {ProjectData.data[i]} src = {this.state.imgs}/>)
            }
            
        }
        
        return (
            <div className = "projectList">
                {content}
            </div>
        );
    }
}
