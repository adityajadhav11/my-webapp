const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html'); // Serve HTML file
});

app.use(express.static(__dirname + '/public')); // Serve static files (CSS)

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});