import React, { Component } from 'react';
import  '../animations/space.scss';


export default class Space extends Component {
    render(){
        return(
            <div>
                <div id="stars"></div>
                <div id="stars2"></div>
                <div id="stars3"></div>
                <div id="title">
                {/*<span>
                    PURE CSS
                </span>
                <br/>
                <span>
                    PARALLAX PIXEL STARS
                </span>*/}
                </div>
            </div>
        )
    }
}