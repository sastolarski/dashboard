import React from "react";

const ButtonBox =(props)=>(
    <div id="box1" style={{textAlign:"center"}} class="w3-card w3-round w3-white">
    <p>Filename to Save As:</p>
    <br/>
            
    <input style={{width:100+"%", boxSizing:"border-box"}} id="inputFileNameToSaveAs"></input>
    <br/>
    <p><button onClick={props.button1} >Save Text to File</button></p>
<hr/>
    <p>Select a File to Load:</p>
    <br/>
    <input type="file" id="fileToLoad" />
    <br/><br/>
    <button onClick={props.button2} >Load Selected File</button>
    <div id="optionalText"></div>
    
    </div>

)
export default ButtonBox;