import React, { Component } from 'react';
import "./Project.css"

export default class Project extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const layout = this.props.layout
        var data = this.props.data
        var layer =
            <div className="projectLine">
                <div className="projectPicture">
                    <a href={data.page}><img src={this.props.src[this.props.data.id]} alt="/" /></a>

                </div>
                <div className="projectDescription">
                    <div className="descriptionHeader">{data.name}</div>
                    <div className="descriptionContent">{data.description}</div>
                </div>
            </div>


        return (
            layer
        );
    }
}
