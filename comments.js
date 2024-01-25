// Create web server

var express = require('express');
var router = express.Router();
var Comment = require('../models/comment');
var User = require('../models/user');
var Post = require('../models/post');
var Promise = require('bluebird');

// GET /comments
// Get all comments
router.get('/', function(req, res) {
    Comment.find({}, function(err, comments) {
        if (err) {
            res.status(500).json({ message: err.message });
        } else {
            res.json({ comments: comments });
        }
    });
});

// POST /comments
// Create a new comment
router.post('/', function(req, res) {
    var newComment = new Comment({
        text: req.body.comment.text,