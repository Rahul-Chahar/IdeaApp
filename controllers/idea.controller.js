/**
 * Write the logic to create the controller for the idea resource.
 */
const ideas = require('../models/ideas.model');

let id = 3 // initial count of id

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

/**
 * Controller that creates a new idea.
 */
exports.createIdea = (req, res)=> {
    // I need to read the request body
    idea_object = req.body;
    id++
    idea_object['id'] = id;  // setting the id of the new created idea object
    ideas[id] = idea_object;

    // Add the new object provided in the ideas object

    // Return the response
    res.status(201).send(idea_object) 

}

/**
 * Controller for updating the idea.
 */

exports.updateIdea = (req, res) => {

    // Read the idea id
    idea_id = req.params.id;

    // Check if the idea with that id is present
    if(ideas[idea_id]){
        // If present, read the new idea body
        idea_obj = req.body;
        ideas[idea_id] = idea_obj;  // update the idea object
        res.status(200).send(idea_obj);  // return the updated idea
    } else {
        // If not present, return 404
        res.status(404).send({
            message: "Idea not found"
        })
    }
    // Read the new idea body and replace it

    // Return the updated idea

}