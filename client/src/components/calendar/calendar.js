import React from "react";
import "../../vendor/calendar.css"
import moment from 'moment';


const Calendar = ( props ) => (

        <div>
            <div  style={{ textAlign: "center" , width:100+"%"}}>
            <button onClick={props.prevMonth} style={{ position: "relative", bottom: "10px", left: "10px" }} className="fa fa-chevron-circle-left" ></button>

            <div style={{ textAlign: "center" , display:"inline-block", width:450+"px"}}>
                <span style={{ fontSize: 45}} >{moment( props.thisMonth ).format( "MMMM" )}</span>
            </div>
            <button onClick={props.nextMonth} style={{ position: "relative", bottom: "10px", right: "10px" }} className="fa fa-chevron-circle-right"></button>

            </div>
            <div className="container">

                <script src="https://cdn.jsdelivr.net/momentjs/2.15.0/moment.min.js"></script>
                {props.weekDayCalendar.map( function ( day ) {
                    return ( <div className="day">
                        {day}
                    </div> )
                } )}

                {props.emptyMaker()}


                {props.days.map( function ( day ) {
                    return (
                        <div style={{ color: "#034f84", fontWeight: "bold" }} className="calendarDay">
                            {day}
                            {/* {moment( day ).format( 'D' ).toString()} */}
                            <textarea id={day} className="scroll" style={{ position:"relative",right:0, align: "right", margin: 0, width:9+ "vw", border: 0, height: 95 + "%" }} type="text" name="name" />
                        </div>
                    )
                } )}

            </div>
        </div>

)
export default Calendar;