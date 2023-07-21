// server.js
const express = require("express");
const bodyParser = require("body-parser");
const playlistRoutes = require("./routes/playlist");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Routes
app.use("/playlists", playlistRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
