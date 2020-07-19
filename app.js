// Require Libraries
const express = require('express');

// App Setup
const app = express();

// Middleware

// Routes
app.get('/', (req, res) => {res.send('hello squirrel');});
// Start Server

app.listen(3000, () => {
  console.log('Gif Search listening on port localhost:3000!');
});