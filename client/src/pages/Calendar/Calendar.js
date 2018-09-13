import React, { Component } from "react";
import Container from "../../components/Grid/Container";
import Calendar from "../../components/calendar";
import moment from 'moment';
import "../../vendor/calendar.css";
import WorkSpace from "../Workspace";
import API from "../../utils/API";

let userNamed;
let userNamed2;
class CalendarPage extends Component {
    state = {
        thisMonth: 2,
        thisYear: 1992,
        monthVariable: '',
        monthStart: moment().startOf('month'),
        thisMonthDays: moment(moment().format("YYYY" + "-" + "MM"), "YYYY-MM").daysInMonth(),
        newMonthDays: 0,
        weekDayCalendar: moment.weekdays(),
        weekDays: moment.weekdays().toString().split(","),
        calendar: [],
        startDay: moment().clone().startOf('month').startOf('week'),
        endDay: moment().clone().endOf('month').endOf('week'),
        days: [],
        emptyarr: [],
        dates: []
    };

    componentDidMount() {
        API.getUsers()
            .then( res =>
                console.log( res.data )
            )
            .catch( err => console.log( err ) );

        // debugger;
        // this.setState( { thisMonth: moment().format( "MM" ) } );
        // this.setState( { thisYear: moment().format( "YYYY" ) } )
        // console.log( this.state.thisMonth )
        // var daysarr = Array.apply( null, Array( this.state.thisMonthDays ) ).map( function ( x, i ) { return i + 1 } );
        // this.setState( {
        //     days: daysarr
        // } )
        // this.setState( { days: daysarr } ) //set the new state
        // console.log( ':::did mount-CALENDAR:::' );
        // console.log( 'thismonth' + this.state.thisMonth );
        // console.log( ( this.state.monthStart.format( 'dddd' ) ) )
        // // console.log( moment( this.state.dates[1] ).format( "dddd" ).toString() )
        // // console.log( "first day" + moment( this.state.dates[1] ).format( "dddd" ).toString() )
        // var pos = this.state.weekDays.indexOf( moment( this.state.dates[1] ).format( "dddd" ).toString() );
        // console.log( "position" + pos );
        // console.log( this.state.weekDays )
        // console.log( "days" + this.state.days );
        this.setInitialStates();
        this.calMaker();
    }
    setInitialStates = () => {
        this.setState( { thisMonth: moment().format( "MM" ) } );
        this.setState( { thisYear: moment().format( "YYYY" ) } )
        var daysarr = Array.apply( null, Array( this.state.thisMonthDays ) ).map( function ( x, i ) { return i + 1 } );
        this.setState( {
            days: daysarr
        } )
        this.setState( { days: daysarr } ) //set the new state
        var pos = this.state.weekDays.indexOf( moment( this.state.dates[1] ).format( "dddd" ).toString() );
        console.log( "position" + pos );
        console.log( this.state.weekDays )
    }
    componentDidUpdate() {
        console.log( this.state )
    }
    // called when you change month
    daySetter = () => {
        var month = this.state.thisMonth.toString();
        var year = this.state.thisYear.toString();
        console.log( month + "/" + year );
        this.setState( { newMonthDays: moment( moment().format( year + "-" + month ), "YYYY-MM" ).daysInMonth() }, () => {
            var daysarr = Array.apply( null, Array( this.state.newMonthDays ) ).map( function ( x, i ) { return i + 1 } );
            console.log( daysarr );
            console.log( this.state.newMonthDays )
            this.setState( {
                days: daysarr
            } )
            console.log( daysarr );

        } );
    }

    calMaker = () => {
        console.log("days" + this.state.days);

        console.log(this.state);

    };

    getMonthStart = () => {

        // month in moment is 0 based, so 9 is actually october, subtract 1 to compensate
        // array is 'year', 'month', 'day', etc
        var startDate = moment( [this.state.thisYear, this.state.thisMonth - 1] ).format( "dddd" );
        this.setState( { monthStart: startDate } );
        // Clone the value before .endOf()
        console.log( startDate )
        // just for demonstration:
        // console.log(startDate.toDate());
        // startDate = startDate.format("dddd")
        console.log( startDate )
        // make sure to call toDate() for plain JavaScript date type
        // return { start: startDate, end: endDate };
    }

    // change month button functions
    prevMonth = () => {
        if ( this.state.thisMonth === "1" ) {
            this.setState( { thisMonth: "12" } );
            this.setState( { thisYear: ( Number.parseInt( this.state.thisYear, 10 ) - 1 ).toString() }, () => {
                this.setState( { monthStart: moment().startOf( this.state.thisMonth ) }, () => {
                    this.getMonthStart();
                    this.daySetter();
                } )
            } );
        }
        else {
            this.setState( { thisMonth: ( Number.parseInt( this.state.thisMonth, 10 ) - 1 ).toString() }, () => {
                this.setState( { monthStart: moment().startOf( this.state.thisMonth ) }, () => {
                    this.getMonthStart();
                    this.daySetter();

                } )
            } );
        }
        console.log( this.state.thisYear );
        console.log( this.state.thisMonth );
        // this.daySetter();
    }
    nextMonth = () => {
        if ( this.state.thisMonth === "12" ) {
            this.setState( { thisMonth: "1" } );
            this.setState( { thisYear: ( Number.parseInt( this.state.thisYear, 10 ) + 1 ).toString() }, () => {
                this.setState( { monthStart: moment().startOf( this.state.thisMonth ) }, () => {
                    this.getMonthStart();
                    this.daySetter();
                } )
            } );
            console.log( "newYear: " + this.state.thisYear );
        }
        else {
            // var month = this.state.thisMonth;
            // month = Number.parseInt( month, 10 );
            this.setState( { thisMonth: ( Number.parseInt( this.state.thisMonth, 10 ) + 1 ).toString() }, () => {
                this.setState( { monthStart: moment().startOf( this.state.thisMonth ) }, () => {
                    this.getMonthStart();
                    this.daySetter();
                } )
            } );
            console.log( "newMonth:" + this.state.thisMonth );
        }

        // this.daySetter();
    }

    //map the days of the month 
    mapCal = ( days ) => {
        console.log( this.state.days )
        this.state.days.map( function ( day ) {
            return (
                <div style={{ color: "#034f84", fontWeight: "bold" }} className="calendarDay">
                    {day}
                    {/* {moment( day ).format( 'D' ).toString()} */}
                    <textarea id={day} className="scroll" style={{ alighn: "right", margin: 0, width: "fit-content", border: 0, height: 95 + "%" }} type="text" name="name" />
                </div>
            )
        })
    }

    emptyMaker = () => {
        //adapt monthstart for dynamic changes
        var pos = this.state.weekDays.indexOf( this.state.monthStart );
        var emptyArr = [];
        console.log("emptyMaker" + pos)
        for (var day = 0; day < pos; day++) {
            emptyArr.push(<div className="calendarDay"></div>);
        }

        return emptyArr;

    }
    render() {
        userNamed = "nathan";

        { this.daySetter }
        const { pizza } = this.context
        return (
            <div>
                {pizza}
                <Calendar
                    prevMonth={this.prevMonth}
                    nextMonth={this.nextMonth}
                    thisMonth={this.state.thisMonth}
                    weekDayCalendar={this.state.weekDayCalendar}
                    days={this.state.days}
                    emptyMaker={this.emptyMaker}
                    mapCal={this.mapCal}
                />




            </div>
        )
    };

}
{/* //         <Container fluid>
//             <h1>Calendar Page</h1>
//             <Calendar  */}
{/* //             dates = {this.state.dates}
//             />
//         </Container> */}
//         )
//     }

// }
// export const pizza = {
//     light: {username:CalendarPage.state
//     }
//   };


export const userName = React.createContext(
    { username: userNamed } // default value
);
export default CalendarPage;