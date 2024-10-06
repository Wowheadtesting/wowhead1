const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Redirect route
app.get('/', (req, res) => {
  // Replace with your Twitch channel URL
  res.redirect('https://www.twitch.tv/roland78');
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
