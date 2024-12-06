const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Handle 404 errors
app.use((req, res, next) => {
  res.status(404).send('Sorry, that resource was not found.');
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
//create a public folder and index.html in it