import React, {Component} from "react";
import Container from "../../components/Grid/Container";
import Links from "../../components/links";
import MeBox from "../../components/meBox";
import SmallNote from "../../components/smallNote";
import ItemList from "../../components/itemList";
import { listDisplay } from "../Workspace/display functions";



class Home extends Component  {
    state={
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
    }
componentDidMount(){
    console.log("Mounted")
    console.log(this.props.match.params.id)
    // ('/home/:id', function(request, response){
    //     console.log(request.params.id)
    //       })
}


render() {
        return (
    <Container fluid>
        <h1>Home Page</h1>
        <MeBox/>
        <Links/>
        <SmallNote/>
{<ItemList
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


    </Container>
        )
}
}

export default Home;