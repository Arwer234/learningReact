import React, { Component } from 'react';

export default class Project extends Component {
    constructor(props){
        super(props)
    }
    render() {
        const layout = this.props.layout
        if(layout == "left"){
            var layer = 
            <div className = "projectLine">
                <div className = "projectPicture">

                </div>
                <div className = "projectDescription">
                    
                </div>
            </div>
        }
        else{
            var layer = 
            <div className = "projectLine">
                <div className = "projectDescription">

                </div>
                <div className = "projectPicture">
                    
                </div>
            </div>
        }
        return (
            {layer}
        );
    }
}
