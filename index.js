const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

// Route: /name
app.get("/name", (req, res) => {
  res.send("Samuel Habtamu");
});

// Route: /hobby
app.get("/hobby", (req, res) => {
  res.json({ hobby: "Coding and exploring new technologies" });
});

// Route: /dream
app.get("/dream", (req, res) => {
  res.send(
    "My dream is to become a full-stack developer and make a positive impact in the tech world."
  );
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
