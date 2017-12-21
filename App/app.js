var express     = require('express');
var app         = express();
var cors        = require('cors');

var NoteController = require("../Controller/NoteController");

app.use(cors());
app.use('/notes', NoteController);

module.exports = app;
console.log("App Exported");