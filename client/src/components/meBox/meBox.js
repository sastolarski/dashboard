import React from "react";
import moment from 'moment';

const MeBox = ( props ) => (
    <div className="w3-container w3-card w3-white w3-round w3-margin">
        <br />
        <span className="w3-right w3-opacity">{moment().format('MMM Do YYYY')}</span>
        <h4>{props.name}</h4>
        <br />
        <hr className="w3-clear" />
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.
              </p>
        <div className="w3-row-padding" 
        style={{margin:0 -16}}
        >
            <div className="w3-half">
            <br/>
            </div>
            <div className="w3-half">
            <br/>
            </div>
        </div>

        <button type="button" className="w3-button w3-round w3-onhover-black w3-theme-d2 w3-margin-bottom">
            <i className="fa fa-pencil"></i> Edit</button>
    </div>
)
export default MeBox;