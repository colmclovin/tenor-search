// Require Libraries
const express = require('express');

const Tenor = require("tenorjs").client({
    "Key": "E8Q6U36USY92", // https://tenor.com/developer/keyregistration
    "Filter": "high", // "off", "low", "medium", "high", not case sensitive
    "Locale": "en_US", // Your locale here, case-sensitivity depends on input
    "MediaFilter": "minimal", // either minimal or basic, not case sensitive
    "DateFormat": "D/MM/YYYY - H:mm:ss A" // Change this accordingly
});
// App Setup
const app = express();

// Middleware kk
const exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


  

  // Routes
  app.get('/', (req, res) => {
    // Handle the home page when we haven't queried yet
    term = ""
    if (req.query.term) {
        term = req.query.term
    }
    // Tenor.search.Query("SEARCH KEYWORD HERE", "LIMIT HERE")
    Tenor.Search.Query(term, "5")
        .then(response => {
            // store the gifs we get back from the search
            const gifs = response;
            // pass the gifs as an object into the home page
            res.render('home', { gifs })
        }).catch(console.error);
  })
// Start Server

app.listen(3000, () => {
  console.log('Gif Search listening on port localhost:3000!');
});