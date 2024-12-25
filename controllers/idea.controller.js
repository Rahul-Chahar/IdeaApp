/**
 * Write the logic to create the controller for the idea resource.
 */
const ideas = require('../models/ideas.model');


/**
 * Create the controller for fetching all the ideas.
 * 
 * GET 127.0.0.1:3000/ideaApp/api/v1/ideas
 * 
 * Return the list of all the ideas.
 */
exports.getAllIdeas = (req, res) => {

    // First read all the ideas from the idea model file

    // return all those ideas
    res.status(200).send(ideas);

}

/**
 * Controller that fetches idea based on the id.
 * 
 * GET 127.0.0.1:3000/ideaApp/api/v1/ideas/:id
 */
exports.getIdeaById = (req, res) => {

    // We need to first read the idea id from the request path param
    idea_id = req.params.id;

    // Using id, check if the idea with that id is presend
    if(ideas[idea_id]){
        // If present, return the idea
        res.status(200).send(ideas[idea_id]);
    } else {
        // If not present, return 404
        res.status(404).send({
            message: "Idea not found"
        })
    }
    // If present, return the idea

}