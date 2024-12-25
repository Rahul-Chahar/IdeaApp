/**
 * Write the logic to create the controller for the idea resource.
 */
const ideas = require('../models/ideas.model');


/**
 * Create the controller for fetching all the ideas.
 * 
 * GET 127.0.0.1:8000/ideaApp/api/v1/ideas
 * 
 * Return the list of all the ideas.
 */
exports.getAllIdeas = (req, res) => {

    // First read all the ideas from the idea model file

    // return all those ideas
    res.status(200).send(ideas);

}