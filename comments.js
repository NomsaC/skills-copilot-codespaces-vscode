// Create a webserver
// When a request comes in, read the file comments.json and send the contents back to the client

// Import the express module
const express = require('express');

// Import the file system module
const fs = require('fs');

// Create a new webserver
const app = express();

// When a request comes in, read the file comments.json
app.get('/comments', function(request, response) {
    // Read the comments.json file
    fs.readFile('comments.json', function(error, data) {
        // Send the contents of the file to the client
        response.send(data.toString());
    });
});

// Start the webserver on port 3000
app.listen(3000);
console.log('Server running on port 3000');
