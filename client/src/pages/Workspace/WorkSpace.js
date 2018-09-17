import React, { Component } from "react";
import MainNote from "../../components/mainNote";
import Container from "../../components/Grid/Container";
import ItemList from "../../components/itemList";
import Card from "../../components/Card";
import Col3 from "../../components/colMd3";
import ColMd7 from "../../components/colMd7";
import { listDisplay } from "./display functions";
import ButtonBox from "../../components/ButtonBox";
import Col2 from "../../components/ColMd2";
import Col1 from "../../components/Col1";
import API from "../../utils/API";
class WorkSpace extends Component {
    state = {
        noteTitles: [],
        notes: [],
        newTextTitle: "",
        text: "",
        toDo: [],
        pizza: "yesPlease",
        display: "",
        editTag: "textarea",
        edit: true,
        editorMode: "Edit",
        editorBackground: "#F5F5F5",
        fontWeight: 400,
        showList1: false,
        showList2: false,
        showList3: false,
        list1class: "w3-hide",
        list2class: "w3-hide",
        list3class: "w3-hide",
        list1: "notes"
    };
    componentDidMount() {
        console.log( listDisplay )
        console.log( this.state.pizzas )
        this.populateNotes();
        this.populateToDo();
    }
    componentDidUpdate() {
        console.log( this.state );
    }

    setTextTitle = event => {
        this.setState( { newTextTitle: event.target.value } );
    }
    handleChange = ( event ) => {
        this.setState( { text: event.target.value } );
        console.log( this.state.text );
    }
    findNote = ( index ) => {
        console.log( this.state.notes[index] )
        var text = this.state.notes[index];
        this.setState( { text: text } );
        console.log( this.state.text );
    };
    findToDo = ( index ) => {
        console.log( this.state.toDo[index] )
        var text = this.state.toDo[index];
        this.setState( { text: text } );
        console.log( this.state.text );
    };
    populateNotes = () => {
        var notes = [];
        var noteTitles = [];
        API.getUserData( "nathan.fazzio@g.austincc.edu" )
            .then( res => {
                for ( var n = 0; n < res.data.notes.length; n++ ) {
                    noteTitles.push( res.data.notes[n].title );
                    notes.push( res.data.notes[n].body );
                }
                this.setState( { noteTitles: noteTitles } );
                this.setState( { notes: notes } );

            } )
    }
    populateToDo = () => {
        var toDo = [];
        API.getUserData( "nathan.fazzio@g.austincc.edu" )
            .then( res => {

                for ( var n = 0; n < res.data.toDo.length; n++ ) {
                    toDo.push( res.data.toDo[n].toDoItem );
                }
            }
            )
        setTimeout(this.setState( { toDo: toDo } ), 1400);
    }

    editSwitch = () => {
        console.log( this.state.edit );
        if ( this.state.edit === true ) {
            this.setState( { edit: "false" } )
            this.setState( { editorMode: "ReadOnly" } )
            this.setState( { editorBackground: "#DCDCDC" } )
            this.setState( { fontWeight: 700 } )
        }
        else {
            this.setState( { edit: true } )
            this.setState( { editorMode: "Edit" } )
            this.setState( { editorBackground: "#F5F5F5" } )
            this.setState( { fontWeight: 400 } )
        }
        console.log( this.state.edit )
    }
    saveTextAsFile = () => {
        var textToSave = document.getElementById( "inputTextToSave" ).value;
        var textToSaveAsBlob = new Blob( [textToSave], { type: "text/plain" } );
        var textToSaveAsURL = window.URL.createObjectURL( textToSaveAsBlob );
        var fileNameToSaveAs = document.getElementById( "inputFileNameToSaveAs" ).value;
        var downloadLink = document.createElement( "a" );
        downloadLink.download = fileNameToSaveAs;
        downloadLink.innerHTML = "Download File";
        downloadLink.href = textToSaveAsURL;
        downloadLink.onclick = this.destroyClickedElement;
        downloadLink.style.display = "none";
        document.body.appendChild( downloadLink );
        downloadLink.click();
    }

    destroyClickedElement = ( event ) => {
        document.body.removeChild( event.target );
    };

    loadFileAsText = () => {
        try {
            if ( window.confirm( "are you sure you want to overwrite the existing text?" ) ) {
                var fileToLoad = document.getElementById( "fileToLoad" ).files[0];
                var fileReader = new FileReader();
                fileReader.onload = function ( fileLoadedEvent ) {
                    var textFromFileLoaded = fileLoadedEvent.target.result;
                    document.getElementById( "inputTextToSave" ).value = textFromFileLoaded;
                    document.getElementById( "optionalText" ).innerText = "...File loaded";
                };
                fileReader.readAsText( fileToLoad, "UTF-8" );
            }
        }
        catch ( err ) {
            document.getElementById( "optionalText" ).innerText = "...No file selected";
        }
    };

    saveNote = ( event ) => {
        event.preventDefault();

        var data = {

            email: "nathan.fazzio@g.austincc.edu",
            method: "saveNote",
            noteTitle: this.state.newTextTitle,
            notes: this.state.text
        }
        API.updateChildSchema( data );
        this.populateNotes();

    }
    saveTodo = ( event ) => {
        event.preventDefault();

        var data = {
            email: "nathan.fazzio@g.austincc.edu",
            method: "toDo",
            toDo: this.state.text
        }
        API.updateChildSchema( data );
        this.populateToDo();

    }
    breaks = () => {
        return <div><br /><br /><br /><br /></div>
    }

    render() {
        return (
            <div>
                <Col1></Col1>
                <Col2
                    childComponent1={<ItemList
                        list1Title={"notes"}
                        noteTitles={this.state.noteTitles}
                        toDo={this.state.toDo}
                        findNote={this.findNote}
                        findToDo={this.findToDo}
                        list1={this.state.showList1}
                        list2={this.state.showList2}
                        list3={this.state.showList3}
                        hidden1={this.state.list1class}
                        hidden2={this.state.list2class}
                        hidden3={this.state.list3class}
                        listDisplay={listDisplay.bind( this )}
                        breaks={this.breaks}

                    />}
                >

                </Col2>

                <ColMd7
                    childComponent1={<MainNote
                        setTextTitle={this.setTextTitle}
                        handleChange={this.handleChange}
                        text={this.state.text}
                        fontWeight={this.state.fontWeight}
                        editorBackground={this.state.editorBackground}
                        editable={this.state.edit}
                        editMode={this.state.editorMode}
                        edit={this.editSwitch}
                        display={this.state.display}
                        saveTextAsFile={this.saveTextAsFile}
                        loadFileAsText={this.loadFileAsText}
                        destroyClickedElement={this.destroyClickedElement}
                    />}
                    childComponent4={<button onClick={this.saveNote} className="w3-btn w3-round w3-black w3-hover-white">Save Note</button>}
                    childComponent5={<button onClick={this.saveTodo} className="w3-btn w3-round  w3-black w3-hover-white">Save To Do</button>}
                    childComponent6={<button className="w3-btn w3-round w3-black w3-hover-white">Save Blog</button>}

                />
                <br />
                <br />
                <br />
                <Col1></Col1>
                <Col2
                    childComponent1={<ButtonBox
                        button1={this.saveTextAsFile}
                        button2={this.loadFileAsText}
                    />}


                />
            </div>




        )
    };
}

export default WorkSpace;