import React, { Component } from 'react';
import Tile from "./Tile"
import {TileData} from "./TileData"
import "./TileList.css"

export default class TileList extends Component {
    constructor(props) {
        super(props)
        
        this.tiles = TileData.data.map((item)=>{
            return <Tile key = {item.id} description = {item.description} src = {item.src}/>
        })
    }
    render() {
        return (
            <div className="tileList">
                {this.tiles}
            </div>
        );
    }
}
