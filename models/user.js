var mongoose = require( "mongoose" );
var Schema = mongoose.Schema;

var notes = new Schema ({
title: String,
body: String
});

var MonthNotes = new Schema({
    day: String, 
    dayNote: String
});

var Calendar = new Schema({
    monthYear: String,
    Note: [MonthNotes]
});

var toDoList = new Schema({
    toDoItem: String
});

var userSchema = new Schema({
    user:  String,
    toDo: [toDoList],
    notes: [notes],
    date: { type: Date, default: Date.now },
    calendarData: [Calendar],
    meta: {
      votes: Number,
      favs:  Number
    }
  });
const User = mongoose.model("User", userSchema);
module.exports = User;