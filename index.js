const express = require('express');
const app = express();


// Stitching the routes here
require('./routes/idea.routes')(app);  // This will call the function with app as an argument

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
