import React from 'react';
import "../../vendor/notes.css";

const Links = ( props ) => (
    <div id="drag3" style={{padding:20}} >

        <div id="box3" className="w3-card w3-round w3-white w3-hide-small">
            <div className="w3-container">

                <p>Interests</p>
                <p>
                    <a href = "http://www.google.com" style={{display: "table-cell"}} target="_blank" className="w3-tag w3-small w3-theme-d5">Google</a>
                    <a href = "http://www.facebook.com" style={{display: "table-cell"}} target="_blank"  className="w3-tag w3-small w3-theme-d4">Facebook</a>
                    <a href = "http://www.instagram.com" style={{display: "table-cell"}} target="_blank"  className="w3-tag w3-small w3-theme-d3">Instagram</a>
                    <span className="w3-tag w3-small w3-theme-d2">Games</span>
                    <span className="w3-tag w3-small w3-theme-d1">Friends</span>
                    <span className="w3-tag w3-small w3-theme">Games</span>
                    <span className="w3-tag w3-small w3-theme-l1">Friends</span>
                    <span className="w3-tag w3-small w3-theme-l2">Food</span>
                    <span className="w3-tag w3-small w3-theme-l3">Design</span>
                    <span className="w3-tag w3-small w3-theme-l4">Art</span>
                    <span className="w3-tag w3-small w3-theme-l5">Photos</span>
                </p>
            </div>
        </div>
    </div>
)
export default Links;