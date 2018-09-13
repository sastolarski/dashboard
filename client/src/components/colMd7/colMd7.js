import React from "react";
import MainNote from "../mainNote";

const ColMd7 = (props) => (
    <div class="w3-col m7 ">
        <div class="w3-row-padding">
        <br></br>
            {props.childComponent1}
            {props.childComponent2}
            {props.childComponent3}
            {props.childComponent4}

        </div>
    </div>
)
export default ColMd7;
