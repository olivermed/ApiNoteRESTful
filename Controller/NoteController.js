// UserController.js
var express     = require('express');
var router      = express.Router();
var bodyParser  = require('body-parser');
var Note        = require('../Model/NoteModel');

router.use(bodyParser.urlencoded({ extended: true }));

router.post('/', function (req, res) {
    Note.create({
        title: req.body.title,
        content: req.body.content
    }, 
    function (err, note) {
        if (err) return res.status(500).send("There was a problem adding the information to the database.");
        res.status(200).end(JSON.stringify(note));
    });

    Note.find({}, function (err, notes) {
        if (err) return res.status(500).send("There was a problem finding the notes.");
        res.end(JSON.stringify(notes));
    });
});

router.delete('/:id', function (req, res) {
    Note.findByIdAndRemove(req.params.id, function (err, note) {
        if (err) return res.status(500).send("There was a problem deleting the note.");
        res.status(200).send("Note " + note.title + " was deleted.");
    });
});

router.put('/:id', function (req, res) {
    Note.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, note) {
        console.log(req.body);
        if (err) return res.status(500).send("There was a problem updating the note.");
        res.status(200).send(note);
    });
});

router.get('/:id', function (req, res) {
    Note.findById(req.params.id, function (err, note) {
        if (err) return res.status(500).send("There was a problem finding the note.");
        res.status(200).send(note);
    });
});

router.get('/', function (req, res) {
    Note.find({}, function (err, notes) {
        if (err) return res.status(500).send("There was a problem finding the notes.");
        res.status(200).send(notes);
    });
});

module.exports = router;
console.log("NoteExported");