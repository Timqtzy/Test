// server.js
const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();
const port = 5000;

app.use(cors()); // Enable CORS

// Serve static files from the 'public' folder
app.use("/public", express.static(path.join(__dirname, "public")));

// API endpoint
app.get("/api/event", (req, res) => {
  res.json({
    title: "Event",
    description: "Join us for the annual Tech Innovators Summit.",
    imageUrl: "/public/images/events/event1.jpg", // Relative URL
    eventTitle: "Tech Innovators Summit 2024",
    eventDescription:
      "The Tech Innovators Summit 2024 is an annual conference bringing together leading minds in technology, innovation, and entrepreneurship. Scheduled to take place from March 10-12, 2024, in San Francisco.",
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
