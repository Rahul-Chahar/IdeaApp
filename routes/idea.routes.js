
const idea_controller = require('../controllers/idea.controller');

/**
 * Route for
 * GET 127.0.0.1:3000/ideaApp/api/v1/ideas
 */

module.exports = (app) => {

    app.get("/ideaApp/api/v1/ideas",idea_controller.getAllIdeas)

}