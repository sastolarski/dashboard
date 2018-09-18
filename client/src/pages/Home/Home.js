import React, { Component } from "react";
import Container from "../../components/Grid/Container";
import Links from "../../components/links";
import MeBox from "../../components/meBox";
import SmallNote from "../../components/smallNote";
import ItemList from "../../components/itemList";
import { listDisplay } from "../Workspace/display functions";
import Col3 from "../../components/colMd3";
import ColMd7 from "../../components/colMd7";
import Col2 from "../../components/ColMd2";
import Title from "../../components/TitleBar";
import API from "../../utils/API";

class Home extends Component {
    state = {
        blog: [],
        blogTitles: [],
        text: "",
        noteTitles: [],
        notes: [],
        newTextTitle: "",
        text: "",
        toDo: [],
        email: JSON.parse(sessionStorage.getItem('email')),
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

    componentDidMount() {
        this.populateNotes();
        this.populateToDo();
        this.populateBlog();
        console.log("Mounted");
        console.log(this.state.email);
        let userss = sessionStorage.getItem("userName");
        console.log(userss);
        // ('/home/:id', function(request, response){
        //     console.log(request.params.id)
        //       })
    }
    componentDidUpdate() {
        console.log(this.state)
    }
    findNote = (index) => {
        console.log(this.state.notes[index])
        var text = this.state.notes[index];
        this.setState({ text: text });
        console.log(this.state.text);
    };
    findToDo = (index) => {
        console.log(this.state.toDo[index])
        var text = this.state.toDo[index];
        this.setState({ text: text });
        console.log(this.state.text);
    };
    populateNotes = () => {
        var notes = [];
        var noteTitles = [];
        API.getUserData(this.state.email)
            .then(res => {
                if (res.data) {
                    for (var n = 0; n < res.data.notes.length; n++) {
                        noteTitles.push(res.data.notes[n].title);
                        notes.push(res.data.notes[n].body);
                    }
                    this.setState({ noteTitles: noteTitles });
                    this.setState({ notes: notes });

                }
            })

    }
    populateBlog = () => {
        var blog = [];
        var blogTitles = [];
        API.getUserData(this.state.email)
            .then(res => {
                if (res.data) {
                    for (var n = 0; n < res.data.blogs.length; n++) {
                        blogTitles.push(res.data.blogs[n].blogTitle);
                        blog.push(res.data.blogs[n].blogText);
                    }
                    this.setState({ blogTitles: blogTitles });
                    this.setState({ blog: blog });

                }
            })
    }
    findBlog = (index) => {
        console.log(this.state.blog[index])
        var text = this.state.blog[index];
        this.setState({ text: text });
        console.log(this.state.text);
    };
    populateToDo = () => {
        var toDo = [];

        API.getUserData(this.state.email)
            .then(res => {
                if (res.data) {

                    for (var n = 0; n < res.data.toDo.length; n++) {
                        toDo.push(res.data.toDo[n].toDoItem);
                    }
                }
            }
            )
        setTimeout(this.setState({ toDo: toDo }), 1400);
    }
    handleChange = (event) => {
        this.setState({ text: event.target.value });
        console.log(this.state.text);
    }
    render() {
        return (
            <Container fluid>
                <br></br>

                <Col2>
                </Col2>
                <Col3

                    childComponent2={<MeBox
                        name={JSON.parse(sessionStorage.getItem('userName'))}
                    />}
                    childComponent1={<ItemList
                        blog={this.state.blogTitles}
                        toDo={this.state.toDo}
                        findNote={this.findNote}
                        findToDo={this.findToDo}
                        list1Title={"notes"}
                        noteTitles={this.state.noteTitles}
                        findNote={this.findNote}
                        findToDo={this.findToDo}
                        findBlog={this.findBlog}

                        list1={this.state.showList1}
                        list2={this.state.showList2}
                        list3={this.state.showList3}
                        hidden1={this.state.list1class}
                        hidden2={this.state.list2class}
                        hidden3={this.state.list3class}
                        listDisplay={listDisplay.bind(this)}
                        breaks={this.breaks}
                    />}
                    childComponent3={<Links />}
                />

                <ColMd7
                    text={this.state.text}
                    childComponent1={<div><br /> <h4 style={{ textAlign: "bottom" }}>Home Page</h4><hr></hr></div>}
                    childComponent2={<Title></Title>}
                    childComponent3={<SmallNote
                        handleChange={this.handleChange}
                        text={this.state.text}

                    />}
                    childComponent4={<button className="w3-btn w3-round w3-black w3-hover-white">Save Note</button>}
                    childComponent5={<button className="w3-btn w3-round  w3-black w3-hover-white">Save To Do</button>}
                    childComponent6={<button className="w3-btn w3-round w3-black w3-hover-white">Save Blog</button>}

                >


                </ColMd7>



            </Container>
        )
    }
}

export default Home;