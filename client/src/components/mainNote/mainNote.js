import React from 'react';
import ColMd7 from "../colMd7";
const MainNote = (props) => (


    <div>
        
            <h4 style={{width:100+"%", textAlign:"center"}}>Work and save Online! or to a document on your computer: </h4> 
            <div style={{width:100+"%", textAlign:"center", borderRadius:20}}>
            <button style={{width:20+"%", alignSelf:"center"}} onClick = {props.edit}>edit</button> 
            </div>  
            <div style={{width:80+"%", textAlign:"center"}}>{props.editMode}</div>

                <textarea className="scroll" readonly ={props.editable} onChange={props.handleChange.bind(this)} id="inputTextToSave" rows="25" value={props.text} style={{whiteSpace:"pre", fontFamily:"helvetica",fontWeight: props.fontWeight ,color:"black",width:100+"%", backgroundColor:props.editorBackground}}>{props.text}</textarea>
                {/* <div id ="readOnlyText" style={{position:"relative",left:15,width:100+"%", display:props.displayText, backgroundColor:"beige"}}></div> */}
                {/* <td>Filename to Save As:</td> */}
{/*             
                <td><input id="inputFileNameToSaveAs"></input></td>
                <td><button onClick={props.saveTextAsFile}>Save Text to File</button></td>

                <td>Select a File to Load:</td>
                <td><input type="file" id="fileToLoad" /></td>
                <td><button onClick={props.loadFileAsText}>Load Selected File</button></td> */}
</div>
)

export default MainNote;