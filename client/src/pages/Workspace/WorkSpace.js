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
import {userName} from "../Calendar/Calendar";

class WorkSpace extends Component {
    state = {
        pizzas: userName._currentValue.username,
        noteTitles: ["note1", "note2", "note3"],
        notes: ['  this is note 1, there are many like it but this one is mine', 'this is note two, less exciting than note 1', 'this is note 3, Nobody likes me'],
        pizza: "yesPlease",
        display: "",
        editTag: "textarea",
        edit: true,
        editorMode: "Edit",
        editorBackground: "#F5F5F5",
        fontWeight: 400,
        text: "",
        showList1: false,
        showList2: false,
        showList3: false,
        list1class: "w3-hide",
        list2class: "w3-hide",
        list3class: "w3-hide",
        list1: "notes"
    };

    //list display functions
    // listDisplay = ( event, item ) => {
    //     console.log( "clicked" );
    //     console.log( "event" + event );
    //     console.log( item );
    //     if ( event === false ) {
    //       if ( item === "showList1" ) {
    //         this.setState( { showList1: true } );
    //         this.setState( { list1class: "w3-show" } );

    //         console.log( this.state.showList1 );
    //       }
    //       if ( item === "showList2" ) {
    //         this.setState( { showList2: true } );
    //         this.setState( { list2class: "w3-show" } );

    //         console.log( this.state.showList2 );
    //       }
    //       if ( item === "showList3" ) {
    //         this.setState( { showList3: true } );
    //         this.setState( { list3class: "w3-show" } );

    //         console.log( this.state.showList3 );
    //       }
    //     }
    //     else {
    //       if ( item === "showList1" ) {
    //         this.setState( { showList1: false } );
    //         this.setState( { list1class: "w3-hide" } );

    //         console.log( this.state.showList1 );
    //       }
    //       if ( item === "showList2" ) {
    //         this.setState( { showList2: false } );
    //         this.setState( { list2class: "w3-hide" } );

    //         console.log( this.state.showList2 );
    //       }
    //       if ( item === "showList3" ) {
    //         this.setState( { showList3: false } );
    //         this.setState( { list3class: "w3-hide" } );

    //         console.log( this.state.showList3 );
    //       }

    //     }
    //   };
    componentDidMount() {
        console.log( listDisplay )
        console.log(this.state.pizzas)
    }
    findNote = ( index ) => {
        console.log( this.state.notes[index] )
        var text = this.state.notes[index];

        this.setState( { text: text } );
        console.log( this.state.text );
    };
    handleChange = ( event ) => {
        this.setState( { text: event.target.value } );
        console.log( this.state.text );

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
            if (window.confirm("are you sure you want to overwrite the existing text?")){
                        var fileToLoad = document.getElementById( "fileToLoad" ).files[0];
            var fileReader = new FileReader();
            fileReader.onload = function ( fileLoadedEvent ) {
                var textFromFileLoaded = fileLoadedEvent.target.result;
                document.getElementById( "inputTextToSave" ).value = textFromFileLoaded;
                document.getElementById( "optionalText" ).innerText="...File loaded";

            };
            fileReader.readAsText( fileToLoad, "UTF-8" );
            }
    
        }
        catch ( err ) {
       
        document.getElementById( "optionalText" ).innerText="...No file selected";
 }

    };
    breaks = () => {
        return <div><br /><br /><br /><br /></div>
    }

    render() {
        return (
            <div>

                <Col2
                    childComponent1={<ItemList
                        list1Title={"notes"}
                        noteTitles={this.state.noteTitles}
                        findNote={this.findNote}
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

                />
                <br />
                <br />
                <br />
                <br></br>
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