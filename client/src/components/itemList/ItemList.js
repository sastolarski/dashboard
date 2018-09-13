import React from "react";
// import "../../vendor/notes.css";
// changed curly braces to parenthesis for stateless, change back when adding stateful values
const ItemList = ( props ) => (
    <div>

        { props.breaks ?  props.breaks(): null}
        <div id="box2" className="w3-card w3-round " style={{boxShadow:"none"}}>
            <div>
                <div className="w3-white" style={{boxShadow: 0}}>
                    <button onClick={() => { props.listDisplay( props.list1, "showList1" ) }} className="w3-button w3-block w3-left-align">
                        <i className="w3-margin-right">{props.list1Title}</i>
                        {/* FIRST ITEM */}
                        {/* FIRST ITEM */}
                        {props.list1}
                    </button>
                    <div id="Demo1" className={props.hidden1 + " w3-container"}>
                        {props.noteTitles.map( function ( i, index ) {
                            return <p style={{textIndent: 3+"%", color:"grey"}} onClick={() => { props.findNote( index ) }}>{i}</p>
                        } )}
                    </div>
                    <button onClick={() => { props.listDisplay( props.list2, "showList2" ) }} className="w3-button w3-block  w3-left-align">
                        <i className="fa fa-calendar-check-o fa-fw w3-margin-right"></i>
                        {/* 2ND ITEM */}
                        {/* 2ND ITEM */}
                        {props.list2}
                    </button>
                    <div id="Demo2" className={props.hidden2 + " w3-container"} >
                        <p>Some other text..</p>
                    </div>
                    <button onClick={() => { props.listDisplay( props.list3, "showList3" ) }} className="w3-button w3-block  w3-left-align">
                        <i className="fa fa-users fa-fw w3-margin-right"></i>
                        {/* 3rd ITEM */}
                        {/* 3rd ITEM */}
                        {props.list3}

                    </button>
                    <div id="Demo3" className={props.hidden3 + " w3-container"} >

                        <div className="w3-row-padding">

                            <div className="w3-half">
                                <img src="/w3images/lights.jpg" style={{ width: 100 }} className="w3-margin-bottom" />
                            </div>
                            <div className="w3-half">
                                <img src="/w3images/nature.jpg" style={{ width: 100 }} className="w3-margin-bottom" />
                            </div>
                            <div className="w3-half">
                                <img src="/w3images/mountains.jpg" style={{ width: 100 }} className="w3-margin-bottom" />
                            </div>
                            <div className="w3-half">
                                <img src="/w3images/forest.jpg" style={{ width: 100 }} className="w3-margin-bottom" />
                            </div>
                            <div className="w3-half">
                                <img src="/w3images/nature.jpg" style={{ width: 100 }} className="w3-margin-bottom" />
                            </div>
                            <div className="w3-half">
                                <img src="/w3images/snow.jpg" style={{ width: 100 }} className="w3-margin-bottom" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)
export default ItemList;