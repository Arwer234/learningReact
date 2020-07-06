import React, { Component } from 'react';
import Project from "./Project"
import "./ProjectList.css"
import {ProjectData} from "./ProjectData"
import lego from "./lego.png"
import checkers from "./checkers.png"
import hex from "./hex_1.png"
import clicknslide from "./clicknslide.png"
import statki from "./statki.png"
import mp3 from "./mp3.png"
import dratewka from "./dratewka.png"

export default class ProjectList extends Component {
    constructor(props) {
        super(props)
        var content = [];
        var imgs = [lego, checkers, hex, clicknslide, statki, mp3, dratewka]
        for(let i = 0;i<ProjectData.data.length;i++){
            content.push(<Project data = {ProjectData.data[i]} src = {imgs} key = {i}/>)
        }
        this.state = {
            content:content
        }
        
    }
    render() {
        
        
        return (
            <div className = "projectList">
                {this.state.content}
            </div>
        );
    }
}
